(function () {
  // Shared local wiki reader runtime. Per-wiki shells configure this through
  // window.WIKI_READER_CONFIG; this file stays provider-neutral and repo-local.
  const DEFAULT_CONTRACT = Object.freeze({
    routeParam: 'page',
    fallbackSlug: 'home',
    manifests: {
      pageIndex: 'data/page-index.json',
      graph: 'data/graph.json',
      fitLinkCandidates: '',
      fitLinkReview: '',
      productGraphReadNext: '',
      waveAbsorptionReadNext: '',
      northstarProductFamilies: '#',
      routeGuards: '',
    },
    defaultContentRoot: '',
    httpServeHint: '',
    siteTitle: '',
    canonicalBase: '',
    selectors: {
      search: 'page-search',
      pageList: 'page-list',
      articleTopic: 'article-topic',
      articleTitle: 'article-title',
      articleSummary: 'article-summary',
      articleNavigation: 'article-navigation',
      articleActions: 'article-actions',
      articleBody: 'article-body',
      sourceList: 'source-list',
      relatedList: 'related-list',
      routeGuardList: 'route-guard-list',
      fitCandidateList: 'fit-candidate-list',
      graphJsonReadNextList: 'graph-json-read-next-list',
      pageCompanionRouteList: 'page-companion-route-list',
      productGraphReadNextList: 'product-graph-read-next-list',
      waveAbsorptionReadNextList: 'wave-absorption-read-next-list',
      northstarClusterList: 'northstar-cluster-list',
      tagList: 'tag-list',
      xrRoom: 'xr-room',
      xrDeck: 'xr-deck',
      indexedPagesCount: 'indexed-pages-count',
      fitLinkCounts: 'fit-link-counts',
    },
    features: {
      deepLink: true,
      relatedLinks: true,
      markdownLinks: true,
      markdownImages: true,
      search: true,
      missingPageFallback: true,
      fileMode: true,
      httpMode: true,
      wikilinks: true,
      internalRouting: true,
      publicShell: false,
      unindexedWikilinks: 'missing',
    },
    crossWiki: {
      currentWiki: 'san',
      allowedOutboundWikis: [],
      readerMap: {},
    },
  });

  const WIKI_ALIASES = Object.freeze({
    agent: 'agent-wiki',
    agentwiki: 'agent-wiki',
    'agent-wiki': 'agent-wiki',
    comparison: 'comparisons',
    comparisons: 'comparisons',
    impossible: 'impossible',
    nervegear: 'nervegear',
    ng: 'nervegear',
    riemann: 'riemann',
    'riemann-conjecture': 'riemann',
    rgc: 'riemann',
    san: 'san',
    'self-aware-networks': 'san',
    svgn: 'svgn',
    theology: 'theology',
    v5ma: 'v5ma',
  });

  function isPlainObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  function mergeDeep(base, override) {
    const merged = { ...base };
    Object.keys(override || {}).forEach((key) => {
      if (isPlainObject(base[key]) && isPlainObject(override[key])) {
        merged[key] = mergeDeep(base[key], override[key]);
      } else {
        merged[key] = override[key];
      }
    });
    return merged;
  }

  function configuredReaderContract() {
    if (typeof window === 'undefined' || !window.WIKI_READER_CONFIG) {
      return DEFAULT_CONTRACT;
    }
    return mergeDeep(DEFAULT_CONTRACT, window.WIKI_READER_CONFIG);
  }

  const CONTRACT = configuredReaderContract();

  const state = {
    pages: [],
    pagesBySlug: new Map(),
    graph: {},
    fitLinkCandidates: {},
    fitLinkReview: {},
    productGraphReadNext: {},
    waveAbsorptionReadNext: {},
    northstarProductFamilies: {},
    routeGuards: [],
    currentPage: null,
    searchTerm: '',
  };

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function slugify(value) {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/%20/g, ' ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'home';
  }

  function normalizeWikiId(value) {
    const normalized = slugify(value);
    return WIKI_ALIASES[normalized] || normalized;
  }

  function safeDecode(value) {
    try {
      return decodeURIComponent(String(value || ''));
    } catch (_error) {
      return String(value || '');
    }
  }

  function stripRouteNoise(value) {
    return safeDecode(value)
      .replace(/\\/g, '/')
      .split('?')[0]
      .split('#')[0]
      .replace(/^\.?\//, '')
      .replace(/\.(md|markdown|html)$/i, '')
      .trim();
  }

  function slugifyRouteValue(value) {
    const cleaned = stripRouteNoise(value);
    if (!cleaned) return CONTRACT.fallbackSlug || 'home';
    if (!cleaned.includes('/')) return slugify(cleaned);
    const parts = cleaned.split('/').filter((part) => part && part !== '.' && part !== '..');
    return slugify(parts.join('-'));
  }

  function routeCandidates(value) {
    const cleaned = stripRouteNoise(value);
    const candidates = [];
    const add = (candidate) => {
      const slug = slugify(candidate);
      if (slug && !candidates.includes(slug)) candidates.push(slug);
    };
    add(value);
    add(cleaned);
    const parts = cleaned.split('/').filter((part) => part && part !== '.' && part !== '..');
    if (parts.length) {
      add(parts.join('-'));
      add(parts[parts.length - 1]);
      if (parts[0] === 'content' || parts[0] === 'pages' || parts[0] === 'wiki') {
        add(parts.slice(1).join('-'));
      }
    }
    return candidates;
  }

  function findPageByRoute(value) {
    for (const candidate of routeCandidates(value)) {
      if (state.pagesBySlug.has(candidate)) return state.pagesBySlug.get(candidate);
    }
    return null;
  }

  function isExternalHref(href) {
    return /^(https?:|mailto:|tel:|data:|#)/i.test(String(href || ''));
  }

  function cleanMarkdownHref(href) {
    const raw = String(href || '').trim();
    const angle = raw.match(/^<([^>]+)>/);
    if (angle) return angle[1].trim();
    const titled = raw.match(/^(\S+)\s+["'][\s\S]*["']$/);
    return (titled ? titled[1] : raw).trim();
  }

  function dirname(path) {
    const normalized = String(path || '').replace(/\\/g, '/');
    const index = normalized.lastIndexOf('/');
    return index >= 0 ? normalized.slice(0, index + 1) : '';
  }

  function normalizeUrlPath(path) {
    const absolute = String(path || '').startsWith('/');
    const parts = String(path || '').split('/');
    const output = [];
    parts.forEach((part) => {
      if (!part || part === '.') return;
      if (part === '..') {
        output.pop();
        return;
      }
      output.push(part);
    });
    return (absolute ? '/' : '') + output.join('/');
  }

  function joinUrlPath(base, relative) {
    if (!relative) return base || '';
    if (isExternalHref(relative) || String(relative).startsWith('/')) return relative;
    return normalizeUrlPath(String(base || '') + String(relative || ''));
  }

  function resolveAssetHref(href, page) {
    const raw = String(href || '').trim();
    if (raw.startsWith('/v5ma.github.io/wiki/assets/') &&
        CONTRACT.features && CONTRACT.features.publicShell &&
        typeof window !== 'undefined' &&
        !window.location.pathname.startsWith('/v5ma.github.io/')) {
      return '/wiki/assets/' + raw.slice('/v5ma.github.io/wiki/assets/'.length);
    }
    if (!raw || isExternalHref(raw) || raw.startsWith('/')) return raw;
    if (raw.startsWith('assets/') && /\/content\/?$/.test(String(CONTRACT.defaultContentRoot || ''))) {
      return joinUrlPath(String(CONTRACT.defaultContentRoot).replace(/content\/?$/, ''), raw);
    }
    let base = page && page.path ? dirname(page.path) : CONTRACT.defaultContentRoot;
    if (base.startsWith('/v5ma.github.io/wiki/') &&
        CONTRACT.features && CONTRACT.features.publicShell &&
        typeof window !== 'undefined' &&
        !window.location.pathname.startsWith('/v5ma.github.io/')) {
      base = base.slice('/v5ma.github.io'.length);
    }
    return joinUrlPath(base, raw);
  }

  function localPageHref(slug) {
    const normalized = slugifyRouteValue(slug);
    return '?' + encodeURIComponent(CONTRACT.routeParam) + '=' + encodeURIComponent(normalized);
  }

  function readerHrefFor(page) {
    const href = localPageHref(page && page.slug ? page.slug : CONTRACT.fallbackSlug);
    if (typeof window !== 'undefined' && window.location) {
      return window.location.pathname + href;
    }
    return (CONTRACT.httpServeHint || '') + href;
  }

  function pageCompanionRouterHref(page) {
    const wiki = currentReaderId();
    const slug = slugifyRouteValue(page && page.slug ? page.slug : CONTRACT.fallbackSlug);
    const params = new URLSearchParams();
    if (wiki) params.set('wiki', wiki);
    params.set('slug', slug);
    return '#?' + params.toString();
  }

  function graphRouterCommandHref(page) {
    const query = page && (page.title || page.slug || page.path)
      ? String(page.title || page.slug || page.path)
      : String(CONTRACT.fallbackSlug || '');
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    return '#' + (params.toString() ? '?' + params.toString() : '');
  }

  function graphRouterLauncherHref() {
    return '#';
  }

  function productHubHref() {
    return '#';
  }

  function graphRepairCommandCenterHref(page) {
    const wiki = currentReaderId();
    const query = page && (page.title || page.slug || page.path)
      ? String(page.title || page.slug || page.path)
      : String(CONTRACT.fallbackSlug || '');
    const params = new URLSearchParams();
    if (wiki) params.set('wiki', wiki);
    if (query) params.set('q', query);
    return '#' +
      (params.toString() ? '?' + params.toString() : '');
  }

  function productCodePlanningBoardHref(page) {
    const query = page && (page.title || page.slug || page.path)
      ? String(page.title || page.slug || page.path)
      : '';
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    return '#' +
      (params.toString() ? '?' + params.toString() : '');
  }

  function splitWikilinkTarget(raw) {
    const value = String(raw || '').trim();
    const pipeIndex = value.indexOf('|');
    const target = pipeIndex >= 0 ? value.slice(0, pipeIndex).trim() : value;
    const label = pipeIndex >= 0 ? value.slice(pipeIndex + 1).trim() : target;
    return { target, label: label || target };
  }

  function splitCrossWikiTarget(target) {
    const value = String(target || '').trim();
    if (!value.includes(':')) return null;
    const parts = value.split(':');
    const namespace = normalizeWikiId(parts.shift());
    const slug = parts.join(':').trim();
    return { wiki: namespace, slug };
  }

  function isAllowedCrossWikiTarget(wiki) {
    const currentWiki = normalizeWikiId(CONTRACT.crossWiki.currentWiki);
    if (wiki === currentWiki) return true;
    return (CONTRACT.crossWiki.allowedOutboundWikis || []).map(normalizeWikiId).includes(wiki);
  }

  function resolveCrossWikiHref(wiki, slug) {
    const readerMap = CONTRACT.crossWiki.readerMap || {};
    const template = readerMap[wiki] || readerMap[normalizeWikiId(wiki)];
    if (!template) return '';
    const normalizedSlug = slugifyRouteValue(slug || CONTRACT.fallbackSlug);
    if (template.includes('{slug}')) {
      return template.replace('{slug}', encodeURIComponent(normalizedSlug));
    }
    const separator = template.includes('?') ? '&' : '?';
    return template + separator + encodeURIComponent(CONTRACT.routeParam) + '=' + encodeURIComponent(normalizedSlug);
  }

  function renderWikilink(rawTarget) {
    const { target, label } = splitWikilinkTarget(rawTarget);
    const crossTarget = splitCrossWikiTarget(target);
    if (crossTarget) {
      const currentWiki = normalizeWikiId(CONTRACT.crossWiki.currentWiki);
      if (crossTarget.wiki === currentWiki) {
        return renderLocalWikilink(crossTarget.slug, label);
      }
      if (!isAllowedCrossWikiTarget(crossTarget.wiki)) {
        return '<span class="wiki-link wiki-missing" title="Cross-wiki link blocked by this reader policy">' +
          escapeHtml(label) +
          '</span>';
      }
      const href = resolveCrossWikiHref(crossTarget.wiki, crossTarget.slug);
      if (!href) {
        return '<span class="wiki-link wiki-missing">' + escapeHtml(label) + '</span>';
      }
      return '<a class="wiki-link wiki-crosslink" href="' + escapeHtml(href) + '">' + escapeHtml(label) + '</a>';
    }
    return renderLocalWikilink(target, label);
  }

  function renderLocalWikilink(target, label) {
    const page = findPageByRoute(target);
    if (!page) {
      if (CONTRACT.features.unindexedWikilinks === 'text') {
        return '<span class="wiki-unavailable" title="This concept is not yet included in the public edition">' + escapeHtml(label) + '</span>';
      }
      return '<span class="wiki-link wiki-missing" title="Missing local page">' + escapeHtml(label) + '</span>';
    }
    return '<a class="wiki-link" href="' + escapeHtml(localPageHref(page.slug)) + '">' + escapeHtml(label) + '</a>';
  }

  function rewriteMarkdownHref(href, label, page) {
    const raw = cleanMarkdownHref(href);
    if (!raw) return '#';
    try {
      const protocol = new URL(raw, 'https://san.invalid/').protocol.toLowerCase();
      if (!['http:', 'https:', 'mailto:', 'tel:', 'ftp:', 'ftps:'].includes(protocol)) return '#unsafe-link';
    } catch (_) {
      return '#unsafe-link';
    }
    const localPagePrefixes = [
      '/wiki/content/',
      '/v5ma.github.io/wiki/content/',
      '/wiki/pages/',
      '/v5ma.github.io/wiki/pages/'
    ];
    if (localPagePrefixes.some((prefix) => raw.startsWith(prefix))) {
      const targetPage = findPageByRoute(raw);
      if (targetPage) return localPageHref(targetPage.slug);
    }
    if (raw.startsWith('/v5ma.github.io/wiki/assets/')) return resolveAssetHref(raw, page);
    if (isExternalHref(raw) || raw.startsWith('/')) return raw;
    if (/\.(md|markdown|html)(?:[#?].*)?$/i.test(raw)) {
      const targetPage = findPageByRoute(raw);
      if (targetPage) return localPageHref(targetPage.slug);
      if (/\.(md|markdown)(?:[#?].*)?$/i.test(raw)) {
        return '#missing-' + slugifyRouteValue(raw);
      }
      return resolveAssetHref(raw, page);
    }
    return raw;
  }

  function autolinkBareUrls(html) {
    const protectedBlocks = [];
    const source = String(html || '');
    let tokenPrefix = 'WIKIPROTECTED';
    while (source.includes(tokenPrefix)) tokenPrefix += 'X';
    const tokenFor = index => '<' + tokenPrefix + index + 'END>';
    let output = source.replace(/<(a|code)\b[^>]*>[\s\S]*?<\/\1>/gi, (block) => {
      const token = tokenFor(protectedBlocks.length);
      protectedBlocks.push(block);
      return token;
    });

    output = output.replace(/(^|[\s(>])((?:https?:\/\/)[^\s<]+)/gi, (_match, prefix, rawUrl) => {
      let url = rawUrl;
      let trailing = '';
      while (/[.,;:!?]$/.test(url)) {
        trailing = url.slice(-1) + trailing;
        url = url.slice(0, -1);
      }
      while (url.endsWith(')') && (url.match(/\(/g) || []).length < (url.match(/\)/g) || []).length) {
        trailing = ')' + trailing;
        url = url.slice(0, -1);
      }
      return prefix + '<a href="' + url + '">' + url + '</a>' + trailing;
    });

    protectedBlocks.forEach((block, index) => {
      output = output.split(tokenFor(index)).join(block);
    });
    return output;
  }

  function replaceMarkdownLinkSyntax(value, imageMode, render) {
    const source = String(value || '');
    const marker = imageMode ? '![' : '[';
    let output = '';
    let cursor = 0;
    while (cursor < source.length) {
      const open = source.indexOf(marker, cursor);
      if (open < 0) {
        output += source.slice(cursor);
        break;
      }
      if (!imageMode && open > 0 && source[open - 1] === '!') {
        output += source.slice(cursor, open + 1);
        cursor = open + 1;
        continue;
      }
      const codeOpen = source.lastIndexOf('<code', open);
      const codeClose = source.lastIndexOf('</code>', open);
      if (codeOpen > codeClose) {
        const endCode = source.indexOf('</code>', open);
        if (endCode < 0) { output += source.slice(cursor); break; }
        output += source.slice(cursor, endCode + 7);
        cursor = endCode + 7;
        continue;
      }
      const labelStart = open + marker.length;
      let bracketDepth = 1;
      let destinationStart = -1;
      for (let index = labelStart; index < source.length; index += 1) {
        const character = source[index];
        if (character === '\\') { index += 1; continue; }
        if (character === '[') bracketDepth += 1;
        if (character === ']') {
          bracketDepth -= 1;
          if (bracketDepth === 0) {
            if (source[index + 1] === '(') destinationStart = index;
            break;
          }
        }
      }
      if (destinationStart < 0) {
        output += source.slice(cursor, open + marker.length);
        cursor = open + marker.length;
        continue;
      }
      let depth = 1;
      let close = -1;
      for (let index = destinationStart + 2; index < source.length; index += 1) {
        const character = source[index];
        if (character === '\\') {
          index += 1;
          continue;
        }
        if (character === '(') depth += 1;
        if (character === ')') {
          depth -= 1;
          if (depth === 0) {
            close = index;
            break;
          }
        }
      }
      if (close < 0) {
        output += source.slice(cursor, open + marker.length);
        cursor = open + marker.length;
        continue;
      }
      const label = source.slice(labelStart, destinationStart);
      const href = source.slice(destinationStart + 2, close);
      output += source.slice(cursor, open) + render(label, href);
      cursor = close + 1;
    }
    return output;
  }

  function decodeMarkdownEscapes(value) {
    return String(value || '')
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')
      .replaceAll('&quot;', '"')
      .replaceAll('&#39;', "'")
      .replaceAll('&amp;', '&');
  }

  function parseStandaloneImage(line) {
    let image = null;
    let count = 0;
    const marker = '@@WIKI_STANDALONE_IMAGE@@';
    const output = replaceMarkdownLinkSyntax(String(line || '').trim(), true, (alt, href) => {
      count += 1;
      if (count === 1) image = { alt, href };
      return marker;
    });
    return count === 1 && output === marker ? image : null;
  }

  function isUnsafeImageHref(href) {
    const clean = cleanMarkdownHref(href);
    if (!clean) return true;
    try {
      const protocol = new URL(clean, 'https://san.invalid/').protocol.toLowerCase();
      return protocol !== 'http:' && protocol !== 'https:';
    } catch (_) {
      return true;
    }
  }

  function markHistoricalInlineImage(image, alt, page) {
    if (!page || !String(page.slug || '').startsWith('gh-')) return image;
    const label = 'Historical source image, not a current SAN scientific diagram.' + (alt ? ' ' + alt : '');
    return '<span class="wiki-historical-source-image" title="Historical source image, not a current SAN scientific diagram." aria-label="' +
      escapeHtml(label) + '">' + image + '</span>';
  }

  function renderInline(text, page) {
    let html = escapeHtml(text);
    const codeSpans = [];
    let codePrefix = 'SANINLINECODETOKEN';
    while (html.includes(codePrefix)) codePrefix += 'X';
    const holdCode = value => {
      const token = codePrefix + codeSpans.length + 'END';
      codeSpans.push([token, value]);
      return token;
    };
    html = html.replace(/`([^`]+)`/g, (_match, code) => {
      const href = String(code || '').replace(/&amp;/g, '&');
      if (/^https?:\/\//i.test(href)) {
        return holdCode('<a class="code-link" href="' + escapeHtml(href) + '"><code>' + code + '</code></a>');
      }
      return holdCode('<code>' + code + '</code>');
    });
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    for (const [token, value] of codeSpans) html = html.split(token).join(value);
    html = html.replace(/\[\[([^\]]+)\]\]/g, (_match, target) => renderWikilink(target));
    html = replaceMarkdownLinkSyntax(html, true, (alt, href) => {
      const decodedAlt = decodeMarkdownEscapes(alt);
      const decodedHref = decodeMarkdownEscapes(href);
      if (!cleanMarkdownHref(decodedHref) || isUnsafeImageHref(decodedHref)) return escapeHtml(decodedAlt);
      const image = '<img src="' + escapeHtml(resolveAssetHref(cleanMarkdownHref(decodedHref), page)) + '" alt="' + escapeHtml(decodedAlt) + '">';
      return markHistoricalInlineImage(image, decodedAlt, page);
    });
    html = replaceMarkdownLinkSyntax(html, false, (label, href) => {
      const resolved = rewriteMarkdownHref(cleanMarkdownHref(decodeMarkdownEscapes(href)), label, page);
      if (resolved === '#unsafe-link') return '<span class="wiki-link wiki-missing">' + label + '</span>';
      const missing = resolved.startsWith('#missing-') ? ' class="wiki-link wiki-missing"' : '';
      return '<a' + missing + ' href="' + escapeHtml(resolved) + '">' + label + '</a>';
    });
    return autolinkBareUrls(html);
  }

  function stripLooseFrontmatter(text) {
    const lines = String(text || '').split('\n');
    const metadataKey = /^(title|slug|tags|aliases|status|last_verified|sources|superseded_by|supersedes|summary|description|privacy|recovery_status|created|updated|type|topic)\s*:/i;
    let sawMetadata = false;
    let currentKey = '';
    let index = 0;

    while (index < lines.length && index < 90) {
      const trimmed = lines[index].trim();
      if (!trimmed) {
        if (!sawMetadata) break;
        index += 1;
        continue;
      }
      const keyMatch = trimmed.match(metadataKey);
      if (keyMatch) {
        sawMetadata = true;
        currentKey = keyMatch[1].toLowerCase();
        index += 1;
        continue;
      }
      if (sawMetadata && (trimmed.startsWith('- ') || currentKey === 'sources')) {
        index += 1;
        continue;
      }
      break;
    }

    return sawMetadata && index > 0 ? lines.slice(index).join('\n').replace(/^\s+/, '') : text;
  }

  function stripFrontmatter(markdown) {
    const text = String(markdown || '').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    if (text.startsWith('---\n')) {
      const end = text.indexOf('\n---', 4);
      if (end >= 0) {
        return text.slice(end + 4).replace(/^\s+/, '');
      }
    }
    return stripLooseFrontmatter(text);
  }

  function stripInternalRouteBlocks(markdown) {
    let output = String(markdown || '');
    const prefix = '<!-- NINE-WIKI-';
    let searchFrom = 0;
    while (searchFrom < output.length) {
      const start = output.indexOf(prefix, searchFrom);
      if (start < 0) break;
      const nameEnd = output.indexOf(':START', start + prefix.length);
      if (nameEnd < 0) break;
      const blockName = output.slice(start + prefix.length, nameEnd);
      if (!blockName) {
        searchFrom = nameEnd + 6;
        continue;
      }
      const endMarker = `<!-- NINE-WIKI-${blockName}:END -->`;
      const end = output.indexOf(endMarker, nameEnd + 6);
      if (end < 0) {
        searchFrom = nameEnd + 6;
        continue;
      }
      output = output.slice(0, start) + output.slice(end + endMarker.length);
      searchFrom = start;
    }

    return output;
  }

  function stripHtmlComments(markdown) {
    let inCode = false;
    let inComment = false;

    return String(markdown || '').split('\n').map((sourceLine) => {
      if (!inComment && /^\s*```/.test(sourceLine)) {
        inCode = !inCode;
        return sourceLine;
      }
      if (inCode) return sourceLine;

      let line = sourceLine;
      let output = '';
      while (line) {
        if (inComment) {
          const end = line.indexOf('-->');
          if (end < 0) return output;
          line = line.slice(end + 3);
          inComment = false;
          continue;
        }

        const start = line.indexOf('<!--');
        if (start < 0) {
          output += line;
          break;
        }
        output += line.slice(0, start);
        line = line.slice(start + 4);
        inComment = true;
      }
      return output;
    }).join('\n');
  }

  function normalizeForLeadCompare(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[`*_~()[\]"']/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\s+([,.;:!?])/g, '$1')
      .trim();
  }

  function stripDuplicateLead(markdown, page) {
    let lines = String(markdown || '').replace(/^\s+/, '').split('\n');
    const title = normalizeForLeadCompare(page && page.title);
    const summary = normalizeForLeadCompare(page && page.summary);

    while (lines.length && !lines[0].trim()) lines.shift();

    if (title && lines.length) {
      const heading = lines[0].match(/^#{1,6}\s+(.+)$/);
      if (heading && normalizeForLeadCompare(heading[1]) === title) {
        lines.shift();
        while (lines.length && !lines[0].trim()) lines.shift();
      }
    }

    if (summary && summary.length >= 48) {
      const text = lines.join('\n').replace(/^\s+/, '');
      const chunks = text.split(/\n\s*\n/);
      const first = chunks[0] || '';
      const firstTrimmed = first.trim();
      const firstNorm = normalizeForLeadCompare(firstTrimmed);
      const looksLikeBodyLead = firstTrimmed &&
        !firstTrimmed.startsWith('#') &&
        !firstTrimmed.startsWith('|') &&
        !firstTrimmed.startsWith('```') &&
        !firstTrimmed.startsWith('- ') &&
        !firstTrimmed.startsWith('* ') &&
        !firstTrimmed.startsWith('>');
      if (looksLikeBodyLead && firstNorm && firstNorm === summary) {
        return chunks.slice(1).join('\n\n').replace(/^\s+/, '');
      }
    }

    return lines.join('\n');
  }

  function displaySummaryExcerpt(value) {
    const text = String(value || '').replace(/\s+/g, ' ').trim();
    if (!text || /[.!?](?:["')\]]+)?$/.test(text) || text.length < 220) return text;

    const endings = Array.from(text.matchAll(/[.!?](?:["')\]]+)?(?=\s|$)/g));
    if (endings.length) {
      const ending = endings[endings.length - 1];
      return text.slice(0, ending.index + ending[0].length).trim();
    }

    const shortened = text.slice(0, 220).replace(/\s+\S*$/, '').trim();
    return shortened ? shortened + '...' : text;
  }

  function plainTextFromMarkdown(value) {
    return String(value || '')
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
      .replace(/\[\[([^\]]+)\]\]/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*_~]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function completeLeadSentence(markdown, page) {
    const cleaned = stripHtmlComments(stripInternalRouteBlocks(stripFrontmatter(markdown)));
    const body = stripDuplicateLead(cleaned, { ...page, summary: '' });
    const paragraphs = body.split(/\n\s*\n/);

    for (const paragraph of paragraphs) {
      const candidate = paragraph.trim();
      if (!candidate || /^(#{1,6}\s|!\[|```|\||[-*]\s|\d+\.\s|>)/.test(candidate)) continue;
      const plain = plainTextFromMarkdown(candidate.replace(/\n/g, ' '));
      const sentence = plain.match(/^(.{30,}?[.!?](?:["')\]]+)?)(?=\s|$)/);
      if (sentence) return sentence[1].trim();
    }

    return displaySummaryExcerpt(page && page.summary);
  }

  function isPipeTableRow(line) {
    const trimmed = String(line || '').trim();
    return trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.indexOf('|', 1) >= 1;
  }

  function isPipeTableSeparator(line) {
    if (!isPipeTableRow(line)) return false;
    return String(line || '').trim().replace(/\|/g, '').split(/\s+/).join('').split(':').join('').split('-').join('') === '';
  }

  function splitTableRow(line) {
    const value = String(line || '').trim().replace(/^\|/, '').replace(/\|$/, '');
    const cells = [];
    let cell = '';
    let inCode = false;
    let wikilinkDepth = 0;

    for (let index = 0; index < value.length; index += 1) {
      const char = value[index];
      const next = value[index + 1];

      if (char === '\\' && next === '|') {
        cell += '|';
        index += 1;
        continue;
      }
      if (char === '`') {
        inCode = !inCode;
        cell += char;
        continue;
      }
      if (!inCode && char === '[' && next === '[') {
        wikilinkDepth += 1;
        cell += '[[';
        index += 1;
        continue;
      }
      if (!inCode && wikilinkDepth > 0 && char === ']' && next === ']') {
        wikilinkDepth -= 1;
        cell += ']]';
        index += 1;
        continue;
      }
      if (!inCode && wikilinkDepth === 0 && char === '|') {
        cells.push(cell.trim());
        cell = '';
        continue;
      }
      cell += char;
    }

    cells.push(cell.trim());
    return cells;
  }

  function renderTable(tableRows, page) {
    const headers = splitTableRow(tableRows[0] || '');
    const bodyRows = tableRows.slice(2).map(splitTableRow).filter((row) => row.length);
    const headerHtml = headers.map((cell) => '<th scope="col">' + renderInline(cell, page) + '</th>').join('');
    const bodyHtml = bodyRows.map((row) => {
      const cells = headers.map((header, index) => {
        const label = escapeHtml(plainTextFromMarkdown(header));
        return '<td data-label="' + label + '">' + renderInline(row[index] || '', page) + '</td>';
      }).join('');
      return '<tr>' + cells + '</tr>';
    }).join('');
    return '<div class="article-table-wrap"><table><thead><tr>' + headerHtml + '</tr></thead><tbody>' + bodyHtml + '</tbody></table></div>';
  }

  const CALLOUT_BODY_MARKER = '@@WIKI_CALLOUT_BODY@@';

  function joinWrappedBlockquotes(sourceLines) {
    const lines = [];
    for (const sourceLine of sourceLines) {
      const trimmed = sourceLine.trim();
      if (trimmed === '>') {
        lines.push('');
        continue;
      }
      const previous = lines.length ? lines[lines.length - 1] : '';
      if (
        trimmed.startsWith('>') &&
        previous.trim().startsWith('>')
      ) {
        const separator = previous.trim().startsWith('> [!') && !previous.includes(CALLOUT_BODY_MARKER)
          ? ` ${CALLOUT_BODY_MARKER} `
          : ' ';
        lines[lines.length - 1] = previous.trimEnd() + separator + trimmed.slice(1).trimStart();
        continue;
      }
      lines.push(sourceLine);
    }
    return lines;
  }

  function renderBlockquote(line, page) {
    const content = line.trim().slice(1).trimStart();
    if (!content.startsWith('[!') || content.startsWith('[![')) {
      return '<blockquote>' + renderInline(content, page) + '</blockquote>';
    }

    const typeEnd = content.indexOf(']');
    if (typeEnd < 3) {
      return '<blockquote>' + renderInline(content, page) + '</blockquote>';
    }

    const allowedTypes = new Set(['important', 'note', 'tip', 'warning', 'caution']);
    const requestedType = content.slice(2, typeEnd).trim().toLowerCase();
    const type = allowedTypes.has(requestedType) ? requestedType : 'note';
    const callout = content.slice(typeEnd + 1).trim();
    const bodyAt = callout.indexOf(CALLOUT_BODY_MARKER);
    const title = (bodyAt >= 0 ? callout.slice(0, bodyAt) : callout).trim();
    const body = bodyAt >= 0 ? callout.slice(bodyAt + CALLOUT_BODY_MARKER.length).trim() : '';

    return '<blockquote class="wiki-callout wiki-callout-' + type + '">' +
      (title ? '<strong class="wiki-callout-title">' + renderInline(title, page) + '</strong>' : '') +
      (body ? '<span class="wiki-callout-body">' + renderInline(body, page) + '</span>' : '') +
      '</blockquote>';
  }

  function renderImageFigure(line, page) {
    const match = parseStandaloneImage(line);
    if (!match) return '';
    const alt = decodeMarkdownEscapes(match.alt || '');
    if (!cleanMarkdownHref(decodeMarkdownEscapes(match.href)) || isUnsafeImageHref(decodeMarkdownEscapes(match.href))) return '';
    const compactMarker = '#compact';
    const compactHtmlMarker = '#compact-html';
    const source = cleanMarkdownHref(decodeMarkdownEscapes(match.href));
    const opensHtml = source.endsWith(compactHtmlMarker);
    const compact = opensHtml || source.endsWith(compactMarker);
    const markerLength = opensHtml ? compactHtmlMarker.length : (compact ? compactMarker.length : 0);
    const href = resolveAssetHref(markerLength ? source.slice(0, -markerLength) : source, page);
    const extensionAt = href.lastIndexOf('.');
    const expandHref = opensHtml && extensionAt >= 0 ? href.slice(0, extensionAt) + '.html' : href;
    const image = '<img src="' + escapeHtml(href) + '" alt="' + escapeHtml(alt) + '">';
    const historical = page && String(page.slug || '').startsWith('gh-');
    const caption = (historical ? 'Historical source image, not a current SAN scientific diagram. ' : '') + alt;
    let canExpand = false;
    try {
      const protocol = new URL(expandHref, 'https://san.invalid/').protocol;
      canExpand = protocol === 'https:' || protocol === 'http:';
    } catch (_) {}
    const media = canExpand ? '<a class="article-figure-expand" href="' + escapeHtml(expandHref) +
        '" target="_blank" rel="noopener noreferrer" title="Open readable full infographic" aria-label="Open readable full infographic: ' +
        escapeHtml(alt || 'infographic') + '">' + image + '</a>' : image;
    return '<figure class="article-figure wiki-visual-asset' + (compact ? ' article-figure--compact' : '') + '">' + media +
      (caption ? '<figcaption>' + escapeHtml(caption) + '</figcaption>' : '') +
      '</figure>';
  }

  function renderMarkdown(markdown, page) {
    const body = stripDuplicateLead(stripHtmlComments(stripInternalRouteBlocks(stripFrontmatter(markdown))), page);
    const lines = joinWrappedBlockquotes(body.replace(/\r/g, '').split('\n'));
    const parts = [];
    let inList = false;
    let inOrderedList = false;
    let inCode = false;
    let paragraph = [];

    function flushParagraph() {
      if (!paragraph.length) return;
      parts.push('<p>' + renderInline(paragraph.join(' '), page) + '</p>');
      paragraph = [];
    }

    function closeLists() {
      if (inList) {
        parts.push('</ul>');
        inList = false;
      }
      if (inOrderedList) {
        parts.push('</ol>');
        inOrderedList = false;
      }
    }

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      const rawLine = lines[lineIndex];
      const line = rawLine.trimEnd();

      if (line.startsWith('```')) {
        flushParagraph();
        closeLists();
        if (inCode) {
          parts.push('</code></pre>');
          inCode = false;
        } else {
          parts.push('<pre><code>');
          inCode = true;
        }
        continue;
      }

      if (inCode) {
        parts.push(escapeHtml(rawLine) + '\n');
        continue;
      }

      if (!line.trim()) {
        flushParagraph();
        closeLists();
        continue;
      }

      const imageFigure = renderImageFigure(line.trim(), page);
      if (imageFigure) {
        flushParagraph();
        closeLists();
        parts.push(imageFigure);
        continue;
      }

      if (isPipeTableRow(line) && lineIndex + 1 < lines.length && isPipeTableSeparator(lines[lineIndex + 1])) {
        flushParagraph();
        closeLists();
        const tableRows = [line, lines[lineIndex + 1].trimEnd()];
        lineIndex += 2;
        while (lineIndex < lines.length && isPipeTableRow(lines[lineIndex])) {
          tableRows.push(lines[lineIndex].trimEnd());
          lineIndex += 1;
        }
        lineIndex -= 1;
        parts.push(renderTable(tableRows, page));
        continue;
      }

      const heading = line.match(/^(#{1,4})\s+(.+)$/);
      if (heading) {
        flushParagraph();
        closeLists();
        const level = Math.min(heading[1].length + 1, 5);
        parts.push('<h' + level + '>' + renderInline(heading[2], page) + '</h' + level + '>');
        continue;
      }

      const unordered = line.match(/^\s*[-*]\s+(.+)$/);
      if (unordered) {
        flushParagraph();
        if (inOrderedList) {
          parts.push('</ol>');
          inOrderedList = false;
        }
        if (!inList) {
          parts.push('<ul>');
          inList = true;
        }
        parts.push('<li>' + renderInline(unordered[1], page) + '</li>');
        continue;
      }

      const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
      if (ordered) {
        flushParagraph();
        if (inList) {
          parts.push('</ul>');
          inList = false;
        }
        if (!inOrderedList) {
          parts.push('<ol>');
          inOrderedList = true;
        }
        parts.push('<li>' + renderInline(ordered[1], page) + '</li>');
        continue;
      }

      if (line.startsWith('>')) {
        flushParagraph();
        closeLists();
        parts.push(renderBlockquote(line, page));
        continue;
      }

      paragraph.push(line.trim());
    }

    flushParagraph();
    closeLists();
    if (inCode) parts.push('</code></pre>');
    return parts.join('\n');
  }

  function getElements() {
    if (typeof document === 'undefined') return {};
    const ids = CONTRACT.selectors || {};
    const result = {};
    Object.keys(ids).forEach((key) => {
      result[key] = document.getElementById(ids[key]);
    });
    return result;
  }

  const elements = getElements();

  function isFileMode() {
    return typeof window !== 'undefined' && window.location && window.location.protocol === 'file:';
  }

  function currentRouteSlug() {
    if (typeof window === 'undefined') return CONTRACT.fallbackSlug;
    const params = new URLSearchParams(window.location.search || '');
    const explicit = params.get(CONTRACT.routeParam);
    if (explicit) return slugifyRouteValue(explicit);
    if (window.location.hash) return slugifyRouteValue(window.location.hash.slice(1));
    return CONTRACT.fallbackSlug || 'home';
  }

  function setText(element, value) {
    if (element) element.textContent = value || '';
  }

  function updateDocumentMetadata(page, summaryOverride) {
    if (typeof document === 'undefined' || !page) return;
    const siteTitle = String(CONTRACT.siteTitle || '').trim();
    const pageTitle = String(page.title || page.slug || '').trim();
    if (siteTitle && pageTitle) document.title = pageTitle + ' | ' + siteTitle;

    const description = plainTextFromMarkdown(summaryOverride || page.summary || '').trim();
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description.slice(0, 220));
    }

    const canonicalBase = String(CONTRACT.canonicalBase || '').trim();
    if (!canonicalBase) return;
    const canonical = new URL(canonicalBase);
    canonical.searchParams.set(CONTRACT.routeParam, page.slug);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical.toString());
  }

  function setReaderModeClass(page) {
    if (typeof document === 'undefined' || !document.body || !page) return;
    const isHome = page.slug === slugifyRouteValue(CONTRACT.fallbackSlug || 'home');
    document.body.classList.toggle('wiki-reader-home', isHome);
    document.body.classList.toggle('wiki-reader-page', !isHome);
  }

  function publicReviewStatusHtml(page) {
    if (!CONTRACT.features.publicShell || !page) return '';
    if (page.collectionRole === 'provenance-corpus') {
      return '<aside class="page-review-status page-review-status-provenance"><strong>Public provenance page</strong>' +
        '<span>This source-preserved page is searchable for chronology and context, but it has not yet entered the maintained scientific and medical review collection.</span></aside>';
    }
    if (page.collectionRole === 'maintained-entry') {
      return '<aside class="page-review-status page-review-status-maintained"><strong>Maintained encyclopedia entry</strong>' +
        '<span>This page belongs to the curated public collection. Its scientific status is stated by the evidence labels and references within the page.</span></aside>';
    }
    return '';
  }

  async function fetchJson(path, fallback) {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to load ' + path + ': ' + response.status);
    return response.json();
  }

  async function fetchText(path) {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to load ' + path + ': ' + response.status);
    const buffer = await response.arrayBuffer();
    return new TextDecoder('utf-8').decode(buffer);
  }

  function normalizeGraph(rawGraph) {
    if (!rawGraph) return {};
    if (rawGraph.related && isPlainObject(rawGraph.related)) return rawGraph.related;
    if (rawGraph.graph && isPlainObject(rawGraph.graph)) return rawGraph.graph;
    return rawGraph;
  }

  function registerPageAliases(page) {
    const frontmatterAliases = Array.isArray(page.aliases)
      ? page.aliases
      : typeof page.aliases === 'string'
        ? page.aliases.split(',')
        : [];
    const sourceFiles = Array.isArray(page.sourceFiles) ? page.sourceFiles : [];
    const sourceAliases = [];
    [page.slug, page.path, ...sourceFiles].forEach((value) => {
      const basename = String(value || '').replace(/\\/g, '/').split('/').pop() || '';
      const stem = basename.replace(/\.(md|markdown|html)$/i, '');
      if (stem.startsWith('gh-') && stem.length > 3) sourceAliases.push(stem.slice(3));
    });
    const aliases = [
      page.slug,
      slugifyRouteValue(page.slug),
      page.title,
      page.path,
      page.path ? page.path.split(/[\\/]/).pop() : '',
      ...frontmatterAliases,
      ...sourceAliases,
    ];
    aliases.forEach((alias) => {
      routeCandidates(alias).forEach((candidate) => {
        if (!state.pagesBySlug.has(candidate)) state.pagesBySlug.set(candidate, page);
      });
    });
  }

  function extractIndexedPages(rawPages) {
    if (Array.isArray(rawPages)) {
      return rawPages.flatMap((entry) => {
        if (entry && Array.isArray(entry.value)) return entry.value;
        if (entry && Array.isArray(entry.articles)) return entry.articles;
        return [entry];
      });
    }
    if (Array.isArray(rawPages.articles)) return rawPages.articles;
    if (Array.isArray(rawPages.value)) return rawPages.value;
    return [];
  }

  function hydratePages(rawPages) {
    const pages = extractIndexedPages(rawPages);
    state.pages = pages
      .filter((page) => page && page.slug && (!CONTRACT.features.publicShell || page.publicHidden !== true))
      .map((page) => ({
        ...page,
        slug: slugifyRouteValue(page.slug),
        title: page.title || page.slug,
        summary: displaySummaryExcerpt(stripHtmlComments(stripInternalRouteBlocks(page.summary || ''))),
        tags: Array.isArray(page.tags) ? page.tags : [],
        related: Array.isArray(page.related) ? page.related : [],
        thumbnail: typeof page.thumbnail === 'string' ? page.thumbnail : '',
        thumbnailAlt: typeof page.thumbnailAlt === 'string' ? page.thumbnailAlt : '',
        imageCount: Number.isFinite(Number(page.imageCount)) ? Number(page.imageCount) : 0,
      }));
    state.pagesBySlug = new Map();
    state.pages.forEach((page) => {
      routeCandidates(page.slug).forEach((candidate) => {
        state.pagesBySlug.set(candidate, page);
      });
    });
    state.pages.forEach(registerPageAliases);
  }

  function pageMatches(page, term) {
    if (!term) return true;
    const haystack = [
      page.title,
      page.slug,
      page.topic,
      page.summary,
      ...(page.tags || []),
    ].join(' ').toLowerCase();
    return haystack.includes(term.toLowerCase());
  }

  function pageRouteGuardHaystack(page) {
    return [
      page.slug,
      page.title,
      page.topic,
      page.summary,
      page.path,
      ...(Array.isArray(page.tags) ? page.tags : []),
      ...(Array.isArray(page.sourceFiles) ? page.sourceFiles : []),
      ...(Array.isArray(page.aliases) ? page.aliases : []),
    ].join(' ').toLowerCase();
  }

  function routeGuardMatches(page, guard) {
    if (!page || !guard) return false;
    const slug = page.slug || '';
    const exactSlugs = Array.isArray(guard.matchSlugs) ? guard.matchSlugs : [];
    if (exactSlugs.some((value) => routeCandidates(value).includes(slug))) return true;
    const haystack = pageRouteGuardHaystack(page);
    const topics = Array.isArray(guard.matchTopics) ? guard.matchTopics : [];
    if (topics.some((value) => slugify(value) === slugify(page.topic || ''))) return true;
    const tags = Array.isArray(guard.matchTags) ? guard.matchTags : [];
    const pageTags = new Set((page.tags || []).map((tag) => slugify(tag)));
    if (tags.some((tag) => pageTags.has(slugify(tag)))) return true;
    const keywords = Array.isArray(guard.matchKeywords) ? guard.matchKeywords : [];
    return keywords.some((keyword) => haystack.includes(String(keyword || '').toLowerCase()));
  }

  function routeGuardsFor(page) {
    const guards = Array.isArray(state.routeGuards) ? state.routeGuards : [];
    return guards
      .filter((guard) => routeGuardMatches(page, guard))
      .sort((a, b) => Number(b.priority || 0) - Number(a.priority || 0))
      .slice(0, 4);
  }

  function renderPageList() {
    if (!elements.pageList) return;
    const navigation = CONTRACT.navigation || {};
    const collectionLabel = String(navigation.collectionLabel || 'SAN').trim() || 'SAN';
    const navigationGroups = Array.isArray(navigation.groups)
      ? navigation.groups.filter((group) => group && Array.isArray(group.slugs) && group.slugs.length)
      : [];
    const searchTerm = String(state.searchTerm || '').trim();
    const filtered = state.pages.filter((page) => pageMatches(page, searchTerm));
    let visible = filtered;
    let statusText = '';

    if (!searchTerm && navigationGroups.length) {
      const ordered = [];
      const seen = new Set();
      let currentOutsideFeatured = false;
      for (const group of navigationGroups) {
        for (const slug of group.slugs) {
          const page = findPageByRoute(slug);
          if (!page || seen.has(page.slug)) continue;
          seen.add(page.slug);
          ordered.push(page);
        }
      }
      if (state.currentPage && !seen.has(state.currentPage.slug)) {
        ordered.unshift(state.currentPage);
        currentOutsideFeatured = true;
      }
      visible = ordered;
      const catalogSuffix = state.pages.length > visible.length
        ? ' · search ' + state.pages.length.toLocaleString() + ' total'
        : '';
      const featuredCount = visible.length - (currentOutsideFeatured ? 1 : 0);
      statusText = (currentOutsideFeatured ? 'Current page + ' : '') + featuredCount +
        ' featured ' + collectionLabel + ' pages' + catalogSuffix;
    } else if (!searchTerm && Array.isArray(navigation.featuredSlugs) && navigation.featuredSlugs.length) {
      const featured = navigation.featuredSlugs
        .map((slug) => findPageByRoute(slug))
        .filter(Boolean);
      const deduped = new Map(featured.map((page) => [page.slug, page]));
      if (state.currentPage && !deduped.has(state.currentPage.slug)) {
        visible = [state.currentPage, ...deduped.values()];
        statusText = 'Current page plus ' + deduped.size + ' core ' + collectionLabel + ' pages';
      } else {
        visible = Array.from(deduped.values());
        statusText = visible.length + ' core ' + collectionLabel + ' pages';
      }
    } else {
      const requestedLimit = searchTerm ? navigation.searchLimit : navigation.defaultLimit;
      const limit = Number.isFinite(Number(requestedLimit)) && Number(requestedLimit) > 0
        ? Number(requestedLimit)
        : visible.length;
      visible = visible.slice(0, limit);
      statusText = searchTerm
        ? visible.length + ' of ' + filtered.length + ' matching pages'
        : visible.length + ' pages';
    }

    const status = typeof document !== 'undefined' ? document.getElementById('page-list-status') : null;
    if (status) status.textContent = statusText;

    const renderPageItem = (page) => {
      const active = state.currentPage && state.currentPage.slug === page.slug ? ' active' : '';
      const current = active ? ' aria-current="page"' : '';
      const thumbnail = page.thumbnail ? resolveAssetHref(page.thumbnail, page) : '';
      const pageMeta = searchTerm && navigation.searchShowSummary && page.summary
        ? plainTextFromMarkdown(page.summary)
        : page.topic || page.slug;
      const imageClass = thumbnail ? ' page-has-thumbnail' : ' page-no-thumbnail';
      const thumbHtml = thumbnail
        ? '<span class="page-thumb"><img src="' + escapeHtml(thumbnail) + '" alt="" loading="lazy" decoding="async"></span>'
        : navigation.hideEmptyThumbnails
          ? ''
          : '<span class="page-thumb page-thumb-empty" aria-hidden="true"></span>';
      return '<li><a class="page-link' + active + imageClass + '" href="' + escapeHtml(localPageHref(page.slug)) + '"' + current + ' data-page="' +
        escapeHtml(page.slug) + '">' + thumbHtml + '<span class="page-link-text"><span class="page-title">' +
        escapeHtml(page.title) + '</span><small class="page-meta">' + escapeHtml(pageMeta) +
        '</small></span></a></li>';
    };

    if (!searchTerm && navigationGroups.length) {
      const visibleBySlug = new Map(visible.map((page) => [page.slug, page]));
      const rendered = new Set();
      const parts = [];
      for (const group of navigationGroups) {
        const groupPages = group.slugs
          .map((slug) => findPageByRoute(slug))
          .filter((page) => page && visibleBySlug.has(page.slug) && !rendered.has(page.slug));
        if (!groupPages.length) continue;
        if (navigation.collapsibleGroups) {
          const containsCurrent = groupPages.some((page) => state.currentPage && page.slug === state.currentPage.slug);
          const open = containsCurrent || group.open === true ? ' open' : '';
          parts.push('<li class="page-list-group"><details name="wiki-navigation-groups"' + open + '><summary><span>' +
            escapeHtml(group.label || 'Pages') + '</span><span class="page-list-group-count" aria-label="' +
            groupPages.length + ' pages">' + groupPages.length + '</span></summary><ul class="page-list-group-items">');
          for (const page of groupPages) {
            rendered.add(page.slug);
            parts.push(renderPageItem(page));
          }
          parts.push('</ul></details></li>');
        } else {
          parts.push('<li class="page-list-heading">' + escapeHtml(group.label || 'Pages') + '</li>');
          for (const page of groupPages) {
            rendered.add(page.slug);
            parts.push(renderPageItem(page));
          }
        }
      }
      const remaining = visible.filter((page) => !rendered.has(page.slug));
      if (remaining.length) {
        parts.unshift(...remaining.map(renderPageItem));
      }
      elements.pageList.innerHTML = parts.join('');
    } else {
      elements.pageList.innerHTML = visible.map(renderPageItem).join('');
    }
  }

  function navigationSequence() {
    const navigation = CONTRACT.navigation || {};
    const groups = Array.isArray(navigation.groups) ? navigation.groups : [];
    const collectionLabel = String(navigation.collectionLabel || 'SAN').trim() || 'SAN';
    const entries = [];
    const seen = new Set();
    for (const group of groups) {
      for (const slug of Array.isArray(group.slugs) ? group.slugs : []) {
        const page = findPageByRoute(slug);
        if (!page || seen.has(page.slug)) continue;
        seen.add(page.slug);
        entries.push({ page, groupLabel: group.label || 'Pages' });
      }
    }
    for (const page of state.pages) {
      if (seen.has(page.slug)) continue;
      seen.add(page.slug);
      entries.push({ page, groupLabel: page.topic || 'More ' + collectionLabel + ' pages' });
    }
    return entries;
  }

  function renderArticleNavigation(page) {
    if (!elements.articleNavigation) return;
    const entries = navigationSequence();
    const index = entries.findIndex((entry) => entry.page.slug === page.slug);
    if (index < 0) {
      elements.articleNavigation.hidden = true;
      elements.articleNavigation.innerHTML = '';
      return;
    }
    const previous = index > 0 ? entries[index - 1].page : null;
    const next = index < entries.length - 1 ? entries[index + 1].page : null;
    const link = (target, direction, label) => target
      ? '<a class="article-navigation-link article-navigation-' + direction + '" href="' +
        escapeHtml(localPageHref(target.slug)) + '" data-page="' + escapeHtml(target.slug) + '">' +
        '<span class="article-navigation-direction">' + label + '</span><strong>' +
        escapeHtml(target.title || target.slug) + '</strong></a>'
      : '<span class="article-navigation-link article-navigation-' + direction + ' is-disabled" aria-hidden="true"></span>';
    elements.articleNavigation.hidden = false;
    elements.articleNavigation.innerHTML = '<div class="article-navigation-context"><span>' +
      escapeHtml(entries[index].groupLabel) + '</span><span>' + (index + 1) + ' of ' + entries.length +
      '</span></div><div class="article-navigation-links">' + link(previous, 'previous', '&larr; Previous') +
      link(next, 'next', 'Next &rarr;') + '</div>';
  }

  function renderTags(page) {
    if (!elements.tagList) return;
    const tags = page.tags || [];
    elements.tagList.innerHTML = tags.map((tag) => '<span class="tag">' + escapeHtml(tag) + '</span>').join('');
  }

  function renderSources(page) {
    if (!elements.sourceList) return;
    const sources = page.sourceFiles || (page.path ? [page.path] : []);
    const readerLink = '<li><a href="' + escapeHtml(readerHrefFor(page)) + '">Current page</a></li>';
    const sourceLinks = CONTRACT.features.publicShell
      ? ''
      : sources.map((source) => {
        const href = source.startsWith('/') || isExternalHref(source) ? source : resolveAssetHref(source, page);
        return '<li><a href="' + escapeHtml(href) + '">Markdown source</a><br><small>' + escapeHtml(source) + '</small></li>';
      }).join('');
    elements.sourceList.innerHTML = readerLink + sourceLinks;
  }

  const PUBLIC_READER_ROUTE_ALIASES = Object.freeze({
    '/wiki/sanwiki.html': '/wiki/public/sanwiki.html',
    '/wiki/svgn-wiki.html': '/wiki/public/svgn-wiki.html',
    '/wiki/comparisons-reader.html': '/wiki/public/comparisons-reader.html',
  });

  function normalizedPublicPath(pathname) {
    return String(pathname || '').replace(/^\/v5ma\.github\.io(?=\/)/i, '');
  }

  function publicReaderRouteFor(url) {
    const route = PUBLIC_READER_ROUTE_ALIASES[normalizedPublicPath(url.pathname)];
    if (!route) return '';
    const localPrefix = typeof window !== 'undefined' && /^\/v5ma\.github\.io\//i.test(window.location.pathname)
      ? '/v5ma.github.io'
      : '';
    return localPrefix + route + url.search + url.hash;
  }

  function isBlockedPublicRoute(url) {
    const host = String(url.hostname || '').toLowerCase();
    const pathname = normalizedPublicPath(url.pathname);
    const localPreviewHost = host === '127.0.0.1' || host === 'localhost' || host === '::1';
    if (localPreviewHost && (pathname === '/wiki/' || pathname === '/wiki/index.html')) return false;
    if (localPreviewHost && /^\/wiki\/public\/(?:sanwiki|svgn-wiki|comparisons-reader)\.html$/i.test(pathname)) return false;
    if (localPreviewHost && pathname.includes('/wiki/assets/')) return false;
    if (localPreviewHost) return true;
    const samePublicSite = !host || host === 'v5ma.github.io' || (typeof window !== 'undefined' && host === window.location.hostname);
    if (!samePublicSite) return false;
    return pathname === '/agent-wiki.html' ||
      pathname.startsWith('/production-canon/') ||
      /^\/v5ma2026\/.*wiki/i.test(pathname) ||
      /^\/wiki\/(?:theology-wiki|riemann-conjecture-wiki)\.html$/i.test(pathname) ||
      /^\/wiki\/(?:nine-wiki-|graph-router|graph-repair|federated-graph|northstar63-|c06-)/i.test(pathname);
  }

  function applyPublicLinkPolicy(container) {
    if (!CONTRACT.features.publicShell || !container || typeof document === 'undefined') return;
    container.querySelectorAll('a[href]').forEach((anchor) => {
      const rawHref = anchor.getAttribute('href') || '';
      let url;
      try {
        url = new URL(rawHref, window.location.href);
      } catch (_error) {
        return;
      }
      const publicRoute = publicReaderRouteFor(url);
      if (publicRoute) {
        anchor.setAttribute('href', publicRoute);
        return;
      }
      if (!isBlockedPublicRoute(url)) return;
      const item = anchor.closest('li');
      const itemText = item ? item.textContent.trim() : '';
      if (item && (item.querySelectorAll('a').length === 1 || /^(?:local route|repair surface|cluster-discovery source|next action board)\b/i.test(itemText))) {
        item.remove();
        return;
      }
      const replacement = document.createElement('span');
      replacement.textContent = anchor.textContent;
      anchor.replaceWith(replacement);
    });
    container.querySelectorAll('p, li').forEach((element) => {
      if (/(?:https?:\/\/)?(?:127\.0\.0\.1|localhost)(?::\d+)?\//i.test(element.textContent || '')) {
        element.remove();
      }
    });
  }

  function pageSourceHref(page) {
    const source = page && page.path ? page.path : '';
    if (!source) return '';
    const legacyWikiPrefix = '/v5ma.github.io/wiki/';
    const servedWithoutWorkspacePrefix = typeof window !== 'undefined' &&
      window.location &&
      !window.location.pathname.startsWith('/v5ma.github.io/');
    if (CONTRACT.features.publicShell && servedWithoutWorkspacePrefix && source.startsWith(legacyWikiPrefix)) {
      const contentRoot = String(CONTRACT.defaultContentRoot || '').replaceAll('\\', '/');
      const contentDirectory = 'content/';
      const wikiRoot = contentRoot.endsWith(contentDirectory)
        ? contentRoot.slice(0, -contentDirectory.length)
        : contentRoot;
      return joinUrlPath(wikiRoot, source.slice(legacyWikiPrefix.length));
    }
    if (source.startsWith('/') || isExternalHref(source)) return source;
    return joinUrlPath(CONTRACT.defaultContentRoot, source);
  }

  function renderSourceArchive(page) {
    const source = pageSourceHref(page);
    return '<section class="source-archive-notice">' +
      '<p class="source-archive-label">Preserved source archive</p>' +
      '<h2>Raw working material, retained without article rendering</h2>' +
      '<p>This historical source contains mixed notes, tool output, and embedded markup. The file remains preserved, but the Wiki does not execute or interpret that material as a finished article.</p>' +
      (source ? '<p><a href="' + escapeHtml(source) + '">Open the preserved source text</a></p>' : '') +
      '</section>';
  }

  function renderArticleActions(page) {
    if (!elements.articleActions || !page) return;
    if (CONTRACT.features.publicShell) {
      elements.articleActions.innerHTML = '';
      return;
    }
    const htmlRoute = readerHrefFor(page);
    const source = pageSourceHref(page);
    const links = [
      { label: 'Reader route', href: htmlRoute, primary: true },
      { label: 'Graph companion', href: pageCompanionRouterHref(page) },
      { label: 'Graph router', href: graphRouterCommandHref(page) },
      { label: 'C01-C63 launcher', href: graphRouterLauncherHref() },
      { label: 'Product hub', href: productHubHref() },
      { label: 'Repair center', href: graphRepairCommandCenterHref(page) },
      { label: 'Build board', href: productCodePlanningBoardHref(page) },
      { label: 'Markdown source', href: source },
      { label: 'Outline', href: localPageHref(CONTRACT.fallbackSlug), local: true },
    ].filter((item) => item.href);
    elements.articleActions.innerHTML = links.map((item) => {
      const dataPage = item.local ? ' data-page="' + escapeHtml(CONTRACT.fallbackSlug) + '"' : '';
      return '<a class="' + (item.primary ? 'primary' : '') + '" href="' + escapeHtml(item.href) + '"' + dataPage + '>' +
        escapeHtml(item.label) + '</a>';
    }).join('');
  }

  function routeKeysForPage(page) {
    const keys = new Set();
    const values = [
      page.slug,
      page.title,
      page.path,
      ...(Array.isArray(page.sourceFiles) ? page.sourceFiles : []),
      ...(Array.isArray(page.aliases) ? page.aliases : []),
    ];
    values.forEach((value) => routeCandidates(value).forEach((candidate) => keys.add(candidate)));
    return Array.from(keys);
  }

  function graphLookupKeysForPage(page) {
    const keys = routeKeysForPage(page);
    const wiki = currentReaderId();
    if (!wiki) return keys;
    return [...keys.map((key) => wiki + ':' + key), ...keys];
  }

  function relatedPagesFor(page) {
    const related = new Map();
    const add = (value) => {
      const target = findPageByRoute(value);
      if (target && target.slug !== page.slug) related.set(target.slug, target);
    };
    (page.related || []).forEach(add);
    routeKeysForPage(page).forEach((key) => {
      (state.graph[key] || []).forEach(add);
    });
    return Array.from(related.values());
  }

  function graphJsonReadNextFor(page) {
    const related = new Map();
    if (!page) return [];
    const add = (value) => {
      const target = findPageByRoute(value);
      if (target && target.slug !== page.slug) related.set(target.slug, target);
    };
    graphLookupKeysForPage(page).forEach((key) => {
      (state.graph[key] || []).forEach(add);
    });
    return Array.from(related.values()).slice(0, 12);
  }

  function ensureGraphJsonReadNextList() {
    if (elements.graphJsonReadNextList) return elements.graphJsonReadNextList;
    const anchor = elements.relatedList || elements.fitCandidateList || elements.sourceList;
    if (!anchor || !anchor.parentNode || typeof document === 'undefined') return null;
    const label = document.createElement('span');
    label.className = 'panel-label';
    label.textContent = 'Graph JSON Read Next';
    const list = document.createElement('ul');
    list.id = CONTRACT.selectors.graphJsonReadNextList;
    list.className = 'meta-list graph-json-read-next-list';
    anchor.parentNode.insertBefore(label, anchor.nextSibling);
    anchor.parentNode.insertBefore(list, label.nextSibling);
    elements.graphJsonReadNextList = list;
    return list;
  }

  function renderGraphJsonReadNextList(page) {
    const list = ensureGraphJsonReadNextList();
    if (!list) return;
    const items = graphJsonReadNextFor(page);
    if (!items.length) {
      list.innerHTML = '<li>No graph.json read-next edges indexed for this page yet.</li>';
      return;
    }
    list.innerHTML = items.map((item) => {
      return '<li><a href="' + escapeHtml(localPageHref(item.slug)) + '" data-page="' + escapeHtml(item.slug) + '">' +
        escapeHtml(item.title || item.slug) + '</a><br><small>graph.json / local related</small></li>';
    }).join('');
  }

  function ensurePageCompanionRouteList() {
    if (elements.pageCompanionRouteList) return elements.pageCompanionRouteList;
    const anchor = elements.relatedList || elements.graphJsonReadNextList || elements.productGraphReadNextList || elements.sourceList;
    if (!anchor || !anchor.parentNode || typeof document === 'undefined') return null;
    const label = document.createElement('span');
    label.className = 'panel-label';
    label.textContent = 'Page Companion';
    const list = document.createElement('ul');
    list.id = CONTRACT.selectors.pageCompanionRouteList;
    list.className = 'meta-list page-companion-route-list';
    anchor.parentNode.insertBefore(label, anchor.nextSibling);
    anchor.parentNode.insertBefore(list, label.nextSibling);
    elements.pageCompanionRouteList = list;
    return list;
  }

  function renderPageCompanionRouteList(page) {
    const list = ensurePageCompanionRouteList();
    if (!list || !page) return;
    const href = pageCompanionRouterHref(page);
    list.innerHTML = '<li><a href="' + escapeHtml(href) + '">Open page companion graph</a>' +
      '<br><small>Fit/Jigsaw, NorthStar, graph-neighbor, and read-next routing for this page.</small></li>';
  }

  function fitCandidateEdgesFor(page) {
    const bySource = state.fitLinkCandidates && state.fitLinkCandidates.candidatesBySource;
    if (!bySource || !page) return [];
    const edges = [];
    graphLookupKeysForPage(page).forEach((key) => {
      (bySource[key] || []).forEach((edge) => {
        const target = findPageByRoute(edge.target);
        const targetSlug = target ? target.slug : slugifyRouteValue(edge.target || edge.targetSlug || edge.targetTitle);
        if (!edges.some((candidate) => candidate.targetSlug === targetSlug)) {
          edges.push({ ...edge, targetSlug, targetTitle: target ? target.title || target.slug : edge.targetTitle || edge.target });
        }
      });
    });
    return edges
      .sort((a, b) => Number(b.fitScore || 0) - Number(a.fitScore || 0))
      .slice(0, 8);
  }

  function renderFitCandidateList(page) {
    if (!elements.fitCandidateList) return;
    const items = fitCandidateEdgesFor(page);
    if (!items.length) {
      elements.fitCandidateList.innerHTML = '<li>No Fit/Jigsaw read-next candidates indexed for this page yet.</li>';
      return;
    }
    elements.fitCandidateList.innerHTML = items.map((edge) => {
      const target = findPageByRoute(edge.targetSlug || edge.target);
      const slug = target ? target.slug : edge.targetSlug || edge.target;
      const title = target ? target.title || target.slug : edge.targetTitle || slug;
      const relation = edge.relation || 'candidate';
      const score = typeof edge.fitScore === 'number' ? edge.fitScore.toFixed(1) : edge.fitScore || '';
      const href = target ? localPageHref(target.slug) : (edge.targetRoute || localPageHref(slug));
      return '<li><a href="' + escapeHtml(href) + '"' + (target ? ' data-page="' + escapeHtml(target.slug) + '"' : '') + '>' +
        escapeHtml(title) + '</a><br><small>' + escapeHtml(relation) + (score ? ' / ' + escapeHtml(score) : '') + '</small></li>';
    }).join('');
  }

  function productGraphReadNextFor(page) {
    const bySource = state.productGraphReadNext && state.productGraphReadNext.bySource;
    if (!bySource || !page) return [];
    const rows = [];
    graphLookupKeysForPage(page).forEach((key) => {
      (bySource[key] || []).forEach((edge) => {
        const targetKey = edge.targetSlug || edge.targetId || edge.targetTitle;
        if (!targetKey || rows.some((row) => (row.targetSlug || row.targetId || row.targetTitle) === targetKey)) return;
        rows.push(edge);
      });
    });
    return rows
      .sort((a, b) => {
        const acceptedA = String(a.status || '').startsWith('accepted') ? 0 : 1;
        const acceptedB = String(b.status || '').startsWith('accepted') ? 0 : 1;
        if (acceptedA !== acceptedB) return acceptedA - acceptedB;
        const rankA = Number.isFinite(Number(a.rank)) ? Number(a.rank) : 999;
        const rankB = Number.isFinite(Number(b.rank)) ? Number(b.rank) : 999;
        if (rankA !== rankB) return rankA - rankB;
        return Number(b.confidence || 0) - Number(a.confidence || 0);
      })
      .slice(0, 10);
  }

  function renderProductGraphEdge(edge) {
    const target = edge.targetSlug ? findPageByRoute(edge.targetSlug) : null;
    const slug = target ? target.slug : edge.targetSlug;
    const title = target ? target.title || target.slug : edge.targetTitle || edge.targetId || 'Graph node';
    const relation = edge.relation || 'read-next';
    const status = edge.status || 'candidate';
    const confidence = Number.isFinite(Number(edge.confidence)) ? Number(edge.confidence).toFixed(2) : '';
    const detail = [relation, status, confidence ? 'confidence ' + confidence : '', edge.evidenceFamily || '']
      .filter(Boolean)
      .join(' / ');
    if (target) {
      return '<li><a href="' + escapeHtml(localPageHref(target.slug)) + '" data-page="' + escapeHtml(target.slug) + '">' +
        escapeHtml(title) + '</a><br><small>' + escapeHtml(detail) + '</small></li>';
    }
    if (edge.targetRoute) {
      return '<li><a href="' + escapeHtml(edge.targetRoute) + '">' +
        escapeHtml(title) + '</a><br><small>' + escapeHtml(detail) + '</small></li>';
    }
    return '<li><span>' + escapeHtml(title) + '</span><br><small>' + escapeHtml(detail) + '</small></li>';
  }

  function renderProductGraphReadNextList(page) {
    if (!elements.productGraphReadNextList) return;
    const items = productGraphReadNextFor(page);
    if (!items.length) {
      elements.productGraphReadNextList.innerHTML = '<li>No Product Graph read-next rows exported for this page yet.</li>';
      return;
    }
    elements.productGraphReadNextList.innerHTML = items.map(renderProductGraphEdge).join('');
  }

  function waveAbsorptionRowsFor(page) {
    const payload = state.waveAbsorptionReadNext || {};
    const sourceRows = Array.isArray(payload.sourceRows) ? payload.sourceRows : [];
    const cautionRows = Array.isArray(payload.cautionRows) ? payload.cautionRows : [];
    if (!sourceRows.length && !cautionRows.length) return [];
    const pageKeys = new Set(routeKeysForPage(page));
    const readerId = currentReaderId();
    const rows = [];
    const seen = new Set();
    const add = (row, matchRole) => {
      const key = [matchRole, row.absorptionId, row.sourcePath, row.hubSlug, row.status].join('|');
      if (seen.has(key)) return;
      seen.add(key);
      rows.push({ ...row, matchRole });
    };
    const pageMatchesValue = (value) => routeCandidates(value).some((key) => pageKeys.has(key));
    sourceRows.forEach((row) => {
      if (readerId && row.wiki && normalizeWikiId(row.wiki) !== readerId) return;
      const sourceMatch = pageMatchesValue(row.sourcePath);
      const hubMatch = pageMatchesValue(row.hubSlug);
      if (sourceMatch) add(row, 'source-routes-to-hub');
      if (hubMatch) add(row, 'hub-receives-source');
    });
    cautionRows.forEach((row) => {
      if (readerId && row.wiki && normalizeWikiId(row.wiki) !== readerId) return;
      if (pageMatchesValue(row.hubSlug) || pageMatchesValue(row.absorptionId)) add(row, 'caution-row');
    });
    return rows
      .sort((a, b) => {
        const roleRank = { 'source-routes-to-hub': 0, 'hub-receives-source': 1, 'caution-row': 2 };
        const roleA = roleRank[a.matchRole] ?? 9;
        const roleB = roleRank[b.matchRole] ?? 9;
        if (roleA !== roleB) return roleA - roleB;
        const acceptedA = String(a.status || '').startsWith('accepted') ? 0 : 1;
        const acceptedB = String(b.status || '').startsWith('accepted') ? 0 : 1;
        if (acceptedA !== acceptedB) return acceptedA - acceptedB;
        return String(a.hubSlug || '').localeCompare(String(b.hubSlug || ''));
      })
      .slice(0, 12);
  }

  function waveAbsorptionHref(row) {
    if (row.matchRole === 'hub-receives-source' && row.sourcePath) {
      const sourcePage = findPageByRoute(row.sourcePath);
      if (sourcePage) return localPageHref(sourcePage.slug);
    }
    if (row.hubSlug) {
      const hubPage = findPageByRoute(row.hubSlug);
      if (hubPage) return localPageHref(hubPage.slug);
      if (row.hubRoute) return row.hubRoute;
      return resolveCrossWikiHref(normalizeWikiId(row.wiki), row.hubSlug);
    }
    return '#';
  }

  function renderWaveAbsorptionRow(row) {
    const href = waveAbsorptionHref(row);
    const sourcePage = row.sourcePath ? findPageByRoute(row.sourcePath) : null;
    const title = row.matchRole === 'hub-receives-source'
      ? (sourcePage ? sourcePage.title || sourcePage.slug : row.sourcePath || row.absorptionId)
      : (row.hubSlug || row.absorptionId || 'Nine-Wiki read-next row');
    const detail = [
      row.matchRole || 'read-next',
      row.status || 'candidate-routing',
      row.absorptionId || '',
    ].filter(Boolean).join(' / ');
    return '<li><a href="' + escapeHtml(href || '#') + '">' +
      escapeHtml(title) + '</a><br><small>' + escapeHtml(detail) + '</small></li>';
  }

  function ensureWaveAbsorptionReadNextList() {
    if (elements.waveAbsorptionReadNextList) return elements.waveAbsorptionReadNextList;
    const anchor = elements.productGraphReadNextList || elements.relatedList || elements.sourceList;
    if (!anchor || !anchor.parentElement || typeof document === 'undefined') return null;
    const label = document.createElement('span');
    label.className = 'panel-label';
    label.textContent = 'Nine-Wiki Read Next';
    const list = document.createElement('ul');
    list.id = CONTRACT.selectors.waveAbsorptionReadNextList;
    list.className = 'meta-list';
    anchor.parentElement.insertBefore(list, anchor.nextSibling);
    anchor.parentElement.insertBefore(label, list);
    elements.waveAbsorptionReadNextList = list;
    return list;
  }

  function renderWaveAbsorptionReadNextList(page) {
    const list = ensureWaveAbsorptionReadNextList();
    if (!list) return;
    const rows = waveAbsorptionRowsFor(page);
    if (!rows.length) {
      const lookup = '#';
      list.innerHTML = '<li>No Nine-Wiki absorption rows matched this page. <a href="' + lookup + '">Open lookup</a>.</li>';
      return;
    }
    const lookup = '#?q=' + encodeURIComponent(page.slug || '');
    list.innerHTML = rows.map(renderWaveAbsorptionRow).join('') +
      '<li><a href="' + escapeHtml(lookup) + '">Open lookup for this page</a><br><small>Candidate routing only; not proof or product truth.</small></li>';
  }

  function currentReaderId() {
    return normalizeWikiId(CONTRACT.crossWiki && CONTRACT.crossWiki.currentWiki ? CONTRACT.crossWiki.currentWiki : '');
  }

  function pageSearchText(page) {
    const values = [
      page && page.slug,
      page && page.title,
      page && page.summary,
      page && page.topic,
      page && page.path,
      ...(page && Array.isArray(page.tags) ? page.tags : []),
      ...(page && Array.isArray(page.aliases) ? page.aliases : []),
      ...(page && Array.isArray(page.sourceFiles) ? page.sourceFiles : []),
    ];
    return values.filter(Boolean).join(' ').toLowerCase();
  }

  function northstarRowsFor(page) {
    const payload = state.northstarProductFamilies || {};
    const readers = payload.readers || {};
    const reader = readers[currentReaderId()] || {};
    const clusters = Array.isArray(reader.clusters) ? reader.clusters : [];
    const terms = pageSearchText(page);
    return clusters
      .map((cluster) => {
        const searchText = String(cluster.searchText || cluster.title || '').toLowerCase();
        let score = Math.max(0, 4 - Number(cluster.priorityBand || 3)) * 4;
        if (cluster.previousBlindState === 'missing-or-underanchored') score += 2;
        routeKeysForPage(page).forEach((key) => {
          if (key && searchText.includes(key)) score += 8;
        });
        String(cluster.title || '').toLowerCase().split(/[^a-z0-9]+/).forEach((token) => {
          if (token.length > 4 && terms.includes(token)) score += 1;
        });
        return { ...cluster, score };
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (Number(a.priorityBand || 9) !== Number(b.priorityBand || 9)) {
          return Number(a.priorityBand || 9) - Number(b.priorityBand || 9);
        }
        return Number(a.number || 999) - Number(b.number || 999);
      })
      .slice(0, 8);
  }

  function ensureNorthstarClusterList() {
    if (elements.northstarClusterList) return elements.northstarClusterList;
    const anchor = elements.productGraphReadNextList || elements.relatedList || elements.sourceList;
    if (!anchor || !anchor.parentElement || typeof document === 'undefined') return null;
    const label = document.createElement('span');
    label.className = 'panel-label';
    label.textContent = 'NorthStar Product Clusters';
    const list = document.createElement('ul');
    list.id = CONTRACT.selectors.northstarClusterList;
    list.className = 'meta-list';
    anchor.parentElement.insertBefore(list, anchor.nextSibling);
    anchor.parentElement.insertBefore(label, list);
    elements.northstarClusterList = list;
    return list;
  }

  function renderNorthstarClusterRow(cluster) {
    const title = cluster.northstarId + ' ' + (cluster.title || 'NorthStar cluster');
    const detail = [
      cluster.ownerSurface || '',
      cluster.previousBlindState ? 'blind: ' + cluster.previousBlindState : '',
      cluster.firstProductAction || '',
    ].filter(Boolean).join(' / ');
    const anchor = cluster.primaryAnchorRoute || cluster.planningBoardRoute || '#';
    const atlas = cluster.atlasRoute || ('#?search=' + encodeURIComponent(cluster.northstarId || ''));
    const dossier = cluster.dossierRoute || ('#?cluster=' + encodeURIComponent(cluster.northstarId || ''));
    const action = cluster.actionRoute || ('#?cluster=' + encodeURIComponent(cluster.northstarId || ''));
    const board = cluster.planningBoardRoute || anchor;
    return '<li><a href="' + escapeHtml(anchor) + '">' + escapeHtml(title) + '</a>' +
      '<br><small><a href="' + escapeHtml(atlas) + '">atlas</a> / ' +
      '<a href="' + escapeHtml(dossier) + '">dossier</a> / ' +
      '<a href="' + escapeHtml(action) + '">action</a> / ' +
      '<a href="' + escapeHtml(board) + '">build</a></small>' +
      '<br><small>' + escapeHtml(detail) + '</small></li>';
  }

  function renderNorthstarClusterList(page) {
    const list = ensureNorthstarClusterList();
    if (!list) return;
    const items = northstarRowsFor(page);
    if (!items.length) {
      list.innerHTML = '<li>No NorthStar product-family rows mapped for this reader yet.</li>';
      return;
    }
    list.innerHTML = items.map(renderNorthstarClusterRow).join('');
  }

  function fitLinkCountsText() {
    const candidateCount = state.fitLinkCandidates && state.fitLinkCandidates.counts
      ? state.fitLinkCandidates.counts.candidateEdges
      : null;
    const reviewedCount = state.fitLinkReview && state.fitLinkReview.counts
      ? state.fitLinkReview.counts.acceptedEdges
      : null;
    const candidateText = Number.isFinite(Number(candidateCount)) ? String(candidateCount) : '0';
    const reviewedText = Number.isFinite(Number(reviewedCount)) ? String(reviewedCount) : '0';
    return `${candidateText} candidates / ${reviewedText} reviewed`;
  }

  function renderRelated(page) {
    if (!elements.relatedList) return;
    const items = relatedPagesFor(page).slice(0, 12);
    if (!items.length) {
      elements.relatedList.innerHTML = '<li>No local related pages indexed yet.</li>';
      return;
    }
    elements.relatedList.innerHTML = items.map((item) => {
      return '<li><a href="' + escapeHtml(localPageHref(item.slug)) + '" data-page="' + escapeHtml(item.slug) + '">' +
        escapeHtml(item.title || item.slug) + '</a></li>';
    }).join('');
  }

  function renderRouteGuards(page) {
    if (!elements.routeGuardList) return;
    const guards = routeGuardsFor(page);
    if (!guards.length) {
      elements.routeGuardList.innerHTML = '<li>No read-first route guard matched this page.</li>';
      return;
    }
    elements.routeGuardList.innerHTML = guards.map((guard) => {
      const target = findPageByRoute(guard.targetSlug);
      const slug = target ? target.slug : guard.targetSlug;
      const title = guard.title || (target ? target.title : slug);
      const reason = guard.reason || guard.relation || 'read-first guard';
      return '<li><a href="' + escapeHtml(localPageHref(slug)) + '" data-page="' + escapeHtml(slug) + '">' +
        escapeHtml(title) + '</a><br><small>' + escapeHtml(reason) + '</small></li>';
    }).join('');
  }

  function pageDirectory(page) {
    const source = page && page.path ? String(page.path).replace(/\\/g, '/') : '';
    const index = source.lastIndexOf('/');
    return index >= 0 ? source.slice(0, index + 1) : '';
  }

  function siblingPagesFor(page) {
    const directory = pageDirectory(page);
    if (!directory) return [];
    return state.pages
      .filter((candidate) => candidate.slug !== page.slug && pageDirectory(candidate) === directory)
      .slice(0, 10);
  }

  function renderPageRouteCard(page) {
    const htmlRoute = readerHrefFor(page);
    const companionRoute = pageCompanionRouterHref(page);
    const graphRouterRoute = graphRouterCommandHref(page);
    const source = page.path && (page.path.startsWith('/') || isExternalHref(page.path))
      ? page.path
      : joinUrlPath(CONTRACT.defaultContentRoot, page.path || '');
    const related = relatedPagesFor(page).slice(0, 8);
    const graphJsonReadNext = graphJsonReadNextFor(page).slice(0, 8);
    const siblings = siblingPagesFor(page);
    const fitCandidates = fitCandidateEdgesFor(page);
    const productGraphReadNext = productGraphReadNextFor(page);
    const waveAbsorptionReadNext = waveAbsorptionRowsFor(page);
    const northstarClusters = northstarRowsFor(page);
    const relatedHtml = related.length
      ? related.map((item) => '<li><a href="' + escapeHtml(localPageHref(item.slug)) + '" data-page="' + escapeHtml(item.slug) + '">' + escapeHtml(item.title || item.slug) + '</a></li>').join('')
      : '<li>No local related pages indexed yet.</li>';
    const graphJsonHtml = graphJsonReadNext.length
      ? graphJsonReadNext.map((item) => '<li><a href="' + escapeHtml(localPageHref(item.slug)) + '" data-page="' + escapeHtml(item.slug) + '">' + escapeHtml(item.title || item.slug) + '</a><br><small>graph.json / local related</small></li>').join('')
      : '<li>No graph.json read-next edges indexed for this page yet.</li>';
    const siblingHtml = siblings.length
      ? siblings.map((item) => '<li><a href="' + escapeHtml(localPageHref(item.slug)) + '" data-page="' + escapeHtml(item.slug) + '">' + escapeHtml(item.title || item.slug) + '</a></li>').join('')
      : '<li>No sibling pages indexed for this folder yet.</li>';
    const fitHtml = fitCandidates.length
      ? fitCandidates.map((edge) => {
        const target = findPageByRoute(edge.target);
        const title = target ? target.title || target.slug : edge.targetTitle || edge.target;
        const href = target ? localPageHref(target.slug) : (edge.targetRoute || localPageHref(edge.target));
        const relation = edge.relation || 'candidate';
        const score = typeof edge.fitScore === 'number' ? edge.fitScore.toFixed(1) : edge.fitScore;
        return '<li><a href="' + escapeHtml(href) + '"' + (target ? ' data-page="' + escapeHtml(target.slug) + '"' : '') + '>' +
          escapeHtml(title) + '</a><br><small>' + escapeHtml(relation) + ' / score ' + escapeHtml(score || '') + '</small></li>';
      }).join('')
      : '<li>No Fit/Jigsaw candidate links generated for this page yet.</li>';
    const productGraphHtml = productGraphReadNext.length
      ? productGraphReadNext.map(renderProductGraphEdge).join('')
      : '<li>No Product Graph read-next rows exported for this page yet.</li>';
    const waveAbsorptionHtml = waveAbsorptionReadNext.length
      ? waveAbsorptionReadNext.map(renderWaveAbsorptionRow).join('')
      : '<li>No Nine-Wiki absorption rows matched this page yet.</li>';
    const northstarHtml = northstarClusters.length
      ? northstarClusters.map(renderNorthstarClusterRow).join('')
      : '<li>No NorthStar product-family rows mapped for this reader yet.</li>';
    return '<details class="reader-route-card" data-reader-route-card="true">' +
      '<summary>Reader route, source, and graph links</summary>' +
      '<div class="reader-route-links">' +
      '<a href="' + escapeHtml(htmlRoute) + '">Open HTML route</a>' +
      '<a href="' + escapeHtml(companionRoute) + '">Open page companion graph</a>' +
      '<a href="' + escapeHtml(graphRouterRoute) + '">Open graph router</a>' +
      '<a href="' + escapeHtml(source) + '">Open Markdown source</a>' +
      '<a href="' + escapeHtml(localPageHref(CONTRACT.fallbackSlug)) + '" data-page="' + escapeHtml(CONTRACT.fallbackSlug) + '">Open Agent Wiki outline</a>' +
      '</div>' +
      '<p><code>' + escapeHtml(htmlRoute) + '</code></p>' +
      '<div class="reader-route-grid">' +
      '<div><h4>Related pages</h4><ul>' + relatedHtml + '</ul></div>' +
      '<div><h4>Page companion graph</h4><ul><li><a href="' + escapeHtml(companionRoute) + '">Open companion router for this page</a><br><small>Direct clusters, neighbor clusters, product-action rows, backlinks, and read-next candidates.</small></li></ul></div>' +
      '<div><h4>Graph router</h4><ul><li><a href="' + escapeHtml(graphRouterRoute) + '">Open router chooser for this page</a><br><small>Routes this page title into the graph command index.</small></li></ul></div>' +
      '<div><h4>Graph JSON read-next</h4><ul>' + graphJsonHtml + '</ul></div>' +
      '<div><h4>Folder outline</h4><ul>' + siblingHtml + '</ul></div>' +
      '<div><h4>Fit/Jigsaw candidate read-next</h4><ul>' + fitHtml + '</ul></div>' +
      '<div><h4>Product Graph read-next</h4><ul>' + productGraphHtml + '</ul></div>' +
      '<div><h4>Nine-Wiki absorption read-next</h4><ul>' + waveAbsorptionHtml + '</ul></div>' +
      '<div><h4>NorthStar product clusters</h4><ul>' + northstarHtml + '</ul></div>' +
      '</div>' +
      '<p class="reader-route-card__note">Fit/Jigsaw, Product Graph, and Nine-Wiki absorption links are routing evidence only until reviewed and promoted by the owning surface.</p>' +
      '</details>';
  }

  async function renderArticle(page) {
    state.currentPage = page;
    setReaderModeClass(page);
    updateDocumentMetadata(page);
    setText(elements.articleTopic, page.topic || page.slug);
    setText(elements.articleTitle, page.title || page.slug);
    setText(elements.articleSummary, page.summary || '');
    if (CONTRACT.features.internalRouting) renderArticleActions(page);
    setText(elements.xrRoom, page.xrRoomId || '');
    setText(elements.xrDeck, page.xrDeckId || '');
    renderTags(page);
    renderSources(page);
    renderRelated(page);
    renderArticleNavigation(page);
    if (CONTRACT.features.internalRouting) {
      renderRouteGuards(page);
      renderGraphJsonReadNextList(page);
      renderPageCompanionRouteList(page);
      renderFitCandidateList(page);
      renderProductGraphReadNextList(page);
      renderWaveAbsorptionReadNextList(page);
      renderNorthstarClusterList(page);
    }
    renderPageList();

    if (!elements.articleBody) return;
    elements.articleBody.innerHTML = '<p>Loading source page...</p>';
    try {
      const path = pageSourceHref(page);
      const markdown = await fetchText(path);
      const leadSummary = page.renderMode === 'source-archive'
        ? displaySummaryExcerpt(page.summary)
        : completeLeadSentence(markdown, page);
      setText(elements.articleSummary, leadSummary);
      updateDocumentMetadata(page, leadSummary);
      elements.articleBody.innerHTML = publicReviewStatusHtml(page) + (page.renderMode === 'source-archive'
        ? renderSourceArchive(page)
        : renderMarkdown(markdown, { ...page, summary: leadSummary }));
      applyPublicLinkPolicy(elements.articleBody);
    } catch (error) {
      elements.articleBody.innerHTML = '<p class="wiki-error">Could not load source markdown: ' +
        escapeHtml(error.message) + '</p>';
    }
  }

  function showMissingPage(slug) {
    state.currentPage = null;
    setText(elements.articleTopic, 'Missing page');
    setText(elements.articleTitle, slug);
    setText(elements.articleSummary, 'This route was requested, but it is not present in the current page index.');
    if (elements.articleNavigation) {
      elements.articleNavigation.hidden = true;
      elements.articleNavigation.innerHTML = '';
    }
    if (elements.articleBody) {
      elements.articleBody.innerHTML = '<p class="wiki-error">The page index does not contain <code>' +
        escapeHtml(slug) + '</code>. Regenerate this reader if the source file was restored later.</p>';
    }
    renderPageList();
  }

  function navigateToPage(slug, pushState) {
    const page = findPageByRoute(slug);
    const normalized = page ? page.slug : slugifyRouteValue(slug);
    if (pushState && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search || '');
      params.set(CONTRACT.routeParam, normalized);
      window.history.pushState({}, '', window.location.pathname + '?' + params.toString());
    }
    if (!page) {
      showMissingPage(normalized);
      return;
    }
    renderArticle(page);
  }

  function bindEvents() {
    if (elements.search) {
      elements.search.addEventListener('input', () => {
        state.searchTerm = elements.search.value || '';
        renderPageList();
      });
    }
    if (typeof document !== 'undefined') {
      document.addEventListener('click', (event) => {
        const link = event.target.closest && event.target.closest('a[data-page], a.page-link, a.wiki-link');
        if (!link) return;
        const href = link.getAttribute('href') || '';
        if (!href.startsWith('?')) return;
        const params = new URLSearchParams(href.slice(1));
        const slug = params.get(CONTRACT.routeParam);
        if (!slug) return;
        event.preventDefault();
        navigateToPage(slug, true);
      });
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => navigateToPage(currentRouteSlug(), false));
    }
  }

  function showFileModeNotice() {
    if (!elements.articleBody) return;
    const hint = CONTRACT.httpServeHint || 'http://127.0.0.1:8732/';
    elements.articleBody.innerHTML = '<p class="wiki-error">This reader needs a local HTTP server so it can load JSON and Markdown. Open it through <code>' +
      escapeHtml(hint) + '</code>.</p>';
  }

  async function init() {
    if (typeof document === 'undefined') return;
    if (isFileMode()) {
      showFileModeNotice();
      return;
    }
    try {
      const [pageIndex, graph, fitCandidates, fitReview, productGraphReadNext, waveAbsorptionReadNext, northstarProductFamilies, routeGuards] = await Promise.all([
        fetchJson(CONTRACT.manifests.pageIndex, []),
        fetchJson(CONTRACT.manifests.graph, {}).catch(() => ({})),
        CONTRACT.manifests.fitLinkCandidates
          ? fetchJson(CONTRACT.manifests.fitLinkCandidates, {}).catch(() => ({}))
          : Promise.resolve({}),
        CONTRACT.manifests.fitLinkReview
          ? fetchJson(CONTRACT.manifests.fitLinkReview, {}).catch(() => ({}))
          : Promise.resolve({}),
        CONTRACT.manifests.productGraphReadNext
          ? fetchJson(CONTRACT.manifests.productGraphReadNext, {}).catch(() => ({}))
          : Promise.resolve({}),
        CONTRACT.manifests.waveAbsorptionReadNext
          ? fetchJson(CONTRACT.manifests.waveAbsorptionReadNext, {}).catch(() => ({}))
          : Promise.resolve({}),
        CONTRACT.manifests.northstarProductFamilies
          ? fetchJson(CONTRACT.manifests.northstarProductFamilies, {}).catch(() => ({}))
          : Promise.resolve({}),
        CONTRACT.manifests.routeGuards
          ? fetchJson(CONTRACT.manifests.routeGuards, {}).catch(() => ({}))
          : Promise.resolve({}),
      ]);
      hydratePages(pageIndex);
      state.graph = normalizeGraph(graph);
      state.fitLinkCandidates = fitCandidates || {};
      state.fitLinkReview = fitReview || {};
      state.productGraphReadNext = productGraphReadNext || {};
      state.waveAbsorptionReadNext = waveAbsorptionReadNext || {};
      state.northstarProductFamilies = northstarProductFamilies || {};
      state.routeGuards = Array.isArray(routeGuards) ? routeGuards : (routeGuards.guards || []);
      setText(elements.indexedPagesCount, String(state.pages.length));
      setText(elements.fitLinkCounts, fitLinkCountsText());
      bindEvents();
      renderPageList();
      const requested = currentRouteSlug();
      const page = findPageByRoute(requested) || findPageByRoute(CONTRACT.fallbackSlug) || state.pages[0];
      if (page) {
        navigateToPage(page.slug, false);
      } else {
        showMissingPage(requested);
      }
    } catch (error) {
      if (elements.articleBody) {
        elements.articleBody.innerHTML = '<p class="wiki-error">Reader boot failed: ' +
          escapeHtml(error.message) + '</p>';
      }
    }
  }

  init();
})();

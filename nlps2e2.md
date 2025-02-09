Neural Lace Podcast S2 E2: Jules Urbach on RTX & VR, Capture & XR, AI & Rendering, and Self Aware AI. 

original: https://youtu.be/wgMKMn7srHM

Audio Transcription by OpenAI's Whisper

Hello, hello, everyone. This is Micah with Silicon Valley Global News and also with the

Neuro Lace Podcast. And I'm here talking to Jules Erbach. He is the CEO of Otoy.

The inspiration for the call was we recently had some epic news from Siggraph and even

following Siggraph on, you know, NVIDIA's RTX and also Otoy. So now Octane is integrated into

the two top game engines, Unreal Engine 4 and Unity. One of the talks that Jules was interviewed by

NVIDIA at Siggraph, and he was really sort of startled and surprised by the fact that we now

have real-time ray tracing on a single GPU. Is that correct? Was that they interpret that correctly?

Yeah, it was a great interview and it was one of those cases where, you know, I've been championing

the cause of ray tracing hardware for a while. I mean, I was first exposed to that possibility

10 years ago at SeaGraph when I was on a panel with a company called Caustic Labs, which was

later acquired by Imagination Technologies. And they had really early ray tracing hardware and

it looked promising, but it wasn't powerful enough to really move the needle or do anything.

And when they got acquired by Imagination Technologies, which was the company that ended

up powering the iPhones GPUs really up until last year, and unfortunately they went out of,

well, they got bought basically, but Apple basically stopped using their GPUs and that

cratered the company. I was concerned that ray tracing hardware was like the electric car or the

car that runs on water, you know, it was just wither on the vine. But we had tested the Imagination

ray tracing hardware two years ago and the SeaGraph announced that, hey, we're going to shift octane

on this thing because it's a game changer. It's 10 times faster than the compute cores for ray

tracing and therefore path tracing, which is what we use in high-quality visual effects for rendering.

And I think that a video who was keeping this really quiet, they'd been working on this thing

for almost a decade. And we got lighted onto that, under the secret of that once the hardware was

almost to the point where it was about a year away from shipping. And we got good development

hardware. We rebuilt as much as we could of octane as everyone on the experimental RTX hardware.

And we had basically one implementation, the stuff that we built on Vulkan, which is an API

for computer graphics that was able to fully leverage those ray tracing cores. And we were

seeing eight times the performance of exactly the same generation card from the Pascal

NVIDIA generation. And that's, it's very rare to see a 10 times improvement in speed and overnight

in one, you know, in one instance. And there's still work to be done. I mean, it's so new and

talk that even with your advanced work that we did, we still have probably another six months

before we can start shipping products that absolutely tap into the full power of this ray

tracing cores. But, you know, the other part of that energy that I gave to NVIDIA was that,

you know, there's no doubt in my mind that the next decade of computer graphics, if not the next

20 years, is going to be defined by ray tracing hardware at the foundational layer, the same way

that GPUs have just basically made 3D graphics, you know, commodity, even on our phones. And we

can play Fortnite on our phones. So there's been a lot of people, like, you know, I've shared a

couple articles on this topic. And I really wanted to point out the fact that ray tracing is going

to make a huge difference in how we experience virtual reality. And it's coming with this generation

of cards, the 20 series RTX cards. It's going to change virtual reality. We're going to have,

people are going to be able to figure out, and this is what I'm telling people, but we're,

you know, people, I'm telling people, we're going to be able to understand a scene. We're going to

be more immersed in a scene because the things like the reflections and, you know, the shadows,

they will give you a sense of realism and a sense of immersion that we haven't had in VR before.

But I tell people this, and I get this skepticism back, and they say, well, there's, you know,

there's no way that we can, you know, VR has to run at 90 frames per second. And you have to render

the entire scene in real-time ray tracing. You can't, like, maybe, I'm trying to argue you can

use it as an effect. So I wanted to, you know, doll back from the hype a little bit and get a

sense of the realism from you of what is, how is this real-time ray tracing going to actually

affect our VR experiences? And do you expect to see new headsets coming this year or next year?

What do you think the reality is in terms of the industry for VR and AR?

So I think, yeah, I mean, I'm a game-believer. I don't, you know, I just answered a core

post, like, yesterday, about this very question is, you know, is ray tracing,

real-time ray tracing, or even our cancer gimmick? And it's not. I mean, it's so, there's two parts

of the rendering platform that are fundamentally transformed by having this kind of hardware and

consumer cards, you know, shipping pretty much everywhere. I mean, the low end, the high end,

everything's going to have ray tracing async that's, you know, even on the lower end, 20 series

and video cards. First thing that you could do with that in VR is you can trace primary rays.

And we were showing at the cigarette booth, we could do 4K 120. So I mean, you know, that's,

that's already, you know, and, you know, and that's easily doing 4K 120 with path tracing,

with shading and everything. We were just doing primary rays. And we just wanted to

essentially do coagulated rendering, do all these tricks, you know, you don't have to use,

you don't have to work and render the things twice. So we can do all that stuff with,

without using traditional rasterization on these RTX cards. And even on one of those things,

you could drive any existing VR headset and just switch from rasterization to path, you know,

to ray tracing. I think that that's, it's a big week for a lot of game engines. I mean,

one of the reasons why we've integrated an octane, integrated octane inside of Unreal

Immunity is that, you know, those engines have been built for a very long time by rasterization.

And we have a great relationship with both companies. I was talking to Tim Sweeney about,

you know, Unreal and Brigade and octane, all these things. Like, well, you know, the first step

is clearly for us, like hybrid, where we use traditional rasterization the way it is now,

nothing changes, but the reflections in the shading are improved by ray tracing harder,

because that's low hanging fruit. So all of the RTX demos that Jensen was showing

for games typically, you know, have that improvement in quality, you know, from that. But

that's really, that's almost nothing. That's really known as missing the true value of this,

which is that if you go one step further, which I think we'll be able to deliver to Unity and

Unreal Engine users right off the bat, is you can switch to complete ray tracing of the scene.

So, you know, immediately seen complexity, like forest to be rendered and everything,

anything that octane can render, even without the shading, for any film, like feature films,

like we did for Ant-Man and Lost and the like, can be dropped into VR and one or two of these

RTX cards can power that. And even headsets that have, you know, frankly, even 4K, by 4K per

eye, if you ever were to go that further, you can imagine things sort of progressing to that

level, you know, the RTX hardware can keep up with that. And you can start to skip a lot of the hacks

and a lot of the problems that one held back scenes and complexity and visual fidelity, which

because, you know, you have to render everything with triangles, not, you know, can, you know,

raises of ray tracing, you know, light and also things like anti-aliasing are solved,

that's the field gets solved. A lot of effects ray tracing just solves correctly without having

to hack it. And that's double the case in VR, where you can just render those rays, you know,

instead of doing two renders and doing a low res one and using phobia to render to mix those,

you just use ray tracing to basically do a heat map and just send more rays to the parts of the

viewport that are looked at by the eye. And that's something you can't do in traditional

rasterization and it would be very expensive to do with that RTX. The second thing, sorry, I'll

let you finish. Yeah, the second sort of boost from this whole RTX GPU ecosystem is not just the

ray tracing harder, but also the tensor cores and the FK16 floating point operations on there. So

we have our own AI denoiser, but frankly, the stuff that they're showing us for real-time is

really good. And so being able to do real-time denoisers that are AI based or machine learning

based that can clean up, you know, shading noise that we have when you're doing really high quality

ray tracing or path tracing, that also becomes a lot cheaper and a lot faster on this generation of

GPUs. You combine those together, you end up really getting very close to solving, you know,

basically the rendering equation. In other words, all the laws of light and physics you need to drive

VR in real-time. And I think that it's going to take, you know, it's going to take new content

to drive that. I mean, just converting your Unreal Engine raster game with better reflections with

RTX is easy and it can look great. I mean, look at that Star Wars demo that they did, but there's

a deeper and more, you know, frankly, much higher quality option that is just going to probably take

six months to, you know, maybe nine months to really, you know, get in the hands of game

developers. And we're trying to do our part in that by providing, I mean, Unity and Optane

are free together and we're going to make Optane and Brigade inside of Unreal also very inexpensive.

So we want people to develop content and we're working on a real-time ray tracing system that,

you know, while it obviously will be able to go to the distance with RTX hardware, it also,

you know, if you go under a cigarette, cigarette, if you see it's running on an iPhone and we can

do real-time ray tracing on that device and on intelligent graphics. So we've decided we were

going to solve this problem for everyone and everywhere we can, but there's no denying that,

like, when you're going beyond just doing it at 1080p, if you want to go to 4k or you want to do this

for VR headset or even, you know, AR, that ray tracing hardware is a game changer. And so the

idea is that we will bring, you know, through just the two integrations we have in these game

engines, we'll bring the entire cinematic pipeline that the film studios use for rendering movies

and we'll bring that to real-time and we'll bring that to VR. And then it's up to the VR

headsets then to come up with higher resolution, higher frame rates. So that's actually something

that a lot of people are really astonished by, that the real-time ray tracing is revolutionizing

the movie industry in addition to the game industry and you're promising that we're going to be able

to hit 90 frames per second at 4k resolution with some of the, with titles that look as good as

existing VR titles today. Yeah, I mean, hopefully better. I mean, that's the point. Hopefully when

ray tracing you do something better, and there's, I mean, just like ray tracing, you can do it the

hard way. You can brute force unbiased rendering, which is what Octane does, but there's also the

same tricks that you have in games. If you want a pre-compute part of the scene that's told to

ray tracing, it'll still look really, really good. And in fact, many movies use that very same technique.

Not all movies are done in Octane, which Octane is like, is the laws of physics, you know, computed.

It's like you can still do, you know, shader tricks and stuff like caustics and stuff and

renders like Arnold, which are used in many films. You know, Arnold also is moving through the GP,

which is great. And I think that the quality will definitely go up. And the things that you can do

in, with ray tracing hardware, not necessarily super obvious right at day one with, with a

launch of these cards, I mean, that's why I think maybe people aren't getting how big of the deal

this is. But, you know, I think it'll be pretty clear for both on the cinematic, you know, film

side of things where you can really do the real time and have that film quality and also, of

course, remerces, you know, a chance to use in life. So will developers have to, you know, shift

away from using polygons and maybe start to, in order to really maximize the use of these,

of these new cards, will they need to start, you know, modeling in Voxels or Lightfields or

what does the developer have to do? No, no, no. No, it's on the constant side. On the art side,

nothing really changes. I mean, you know, the only thing that we, in Optane, there's really

almost two paths. And the, and RTX only accelerates, by the way, one of those, which is,

which is polygons. Like it's still, the only thing that the ray tracing hardware really does

accelerate is the rendering of triangle meshes. And the thing that we can do in Optane for films

is you can take something that is like a hair primitive, things that aren't necessarily easily

turned into trimesh, and you can still turn them into trimeshes. And that's what you can do in

any game engine. You can turn everything into a triangle soup, and you can send that to the

ray tracing hardware, and it'll, it'll be much faster. From the art pipeline, if anything, it's,

it's simpler because artists have to go, sometimes they start in the much higher quality version of

what they would do for a cut scene or film. And then they, and then they have to figure out how

to reduce that quality to get it into a, you know, a game engine. And our work, I mean, really, half

of the work we're doing with, with integrations into these game engines is not just the render,

but also the art pipeline. You can take something that you created in Cinema 4D or Maya, or right

at, right for a Marvel movie, which is, they use Cinema 4D and Optane, like, and, you know, for

Elastic, which is a company that did the, the titles for Ant and the Lost. And you can just drop

that into an Orbex package, which is the interchange format we, we open sourced for Optane. And you

can drop it into Unity and Unreal. And you can then, with RTX hardware, you can now render that

quality and basically in real time. And, you know, that's not making it easier. You don't have to

basically come up with two platforms and stick to one and start with the highest quality version.

So I went back and I watched a talk that you did at Seagraph in 2015, part of a

light field talk with a bunch of other light field talks. It was a really great series of talks.

And I'll link them with the article that's going to accompany this. But I, I really wanted to

sort of like go back to light field capture, which is how I, you know, first heard of, of your

work. And it looks like, you know, at Seagraph, that Google has basically reinvented the wheel

with their, with their light field capture. They basically redid what you did back in 2014.

I mean, I should, I, yeah, I should, I should point out that the, you know, employee that worked,

you know, Paul Kavevic, who's now doing that project at Google, you know, worked with Otoane,

who was one of the co-creators of Lightstage and worked with us for eight years. So he was a friend

of the company and he actually was part of that project that we did in our office. So he basically

rebuilt that, you're right. He basically rebuilt that at Google and they've, they've been experimented

with it. And it's super cool. But that is basically, you know, that, that's the exact

treatment. It's the same thing that we would have been doing in, with the spinning camera. They,

you know, the improvements with having 16 GoPros in an office is probably makes it faster,

which is great. But that's, it is exactly the same thing.

Well, the astonishing thing was they went from 16 GoPros back down to the spinning camera rig

that you had. So they actually, they went up to the 16 GoPros and then they reduced it back down to

the, the, the two camera sort of thing, except, except your, you only had one camera that was

active and they had two cameras that were active. So, but it was interesting to see that sort of

big circle, but talking about life field then, you know, so that, so from trying to fill in the

gaps, you know, in the life field is where, where, is that where the concept of AID noising came from

that then became the concept that came the technology that enabled real-time ray tracing?

So they're all sort of separate pieces. For me, light fields, I mean, you know,

when you look at, at, at really where light fields end up, it's not even so much the capture,

because for me, the real value of, and even the work that Paul did, and we did together,

when we were building light stage, I mean, all this came out of our light stage work. And light

stage is more than a light field capturing. This is what we do for high-end films. Like when we

scan in, you know, all the actors for an Avengers movie or, you know, one of these big

temporal films, and we do this every week, every day, like we just, all the DCP shows or

light stage captures, we don't just capture a mesh and we don't capture lights and we capture

something more than that called a reflective field, which gives you all of the ways that light

bounces off that surface. So you essentially don't have to, you know, artist and write shaders for

skin. You have the poor level details. You have the way light bounces, and that's really important

for mixed reality as well as for films. So one of the reasons why we didn't go deeper into light

field capture and, and push further even on that experimental thing that Paul ended up doing at

Google was because really we want to get into, we want to be able to capture what we capture on a

light stage in, you know, basically in real time and make that something that is consumable inside

of Octane or inside of the R pipeline. Because that's, if you're just capturing a light field,

you're actually, well, it is better than RGB in depth or maybe stereo or pano. It's really still

bringing, you know, a very small subset of the data that you want. What you want is you want a CG

recreation that can be dropped into a renderer and treated like a CG object that matches the real

world. And for that, you need to capture materials. And there is a lot of work that we're doing where

we're looking at, you know, we have a light stage to capture ground truth. Our AID noise can work

all the eyes that we're doing is mostly speed up rendering to make it so that, you know, the

rendering that you would get out of a ray tracer, path tracer can be done in the 10th of time. The

AI can just finish the work. You don't need to finish the simulation. The AI can figure out the

pieces heuristically. And capture is very similar to that. So our work at light stages, we have the

absolutely, and we have 800 lights, we can capture perfect holographic representations of people,

but you have to bring them into a big stage. What we've been trying to work out of what we've shown

almost every year, not to suggest that GDC and others, is we can take 120 frames per second

stereo camera, which is going into phones these days, and we can pretty much use a little bit

of machine learning, plus, you know, some simple lighting patterns that are much less than what

we do on a light stage, we can start to get this absolute perfect live, you know, captured reality.

And that's really our goal. And AI will play a role in that. There's no doubt that capturing AI is

super important. And we have to get that to work in real time, because otherwise,

AR and mixed reality will never look right. And that's something that I discovered, frankly,

when I was looking at the Magically device, you know, which I got a test, what struck me was

that nothing was really being relit, you know, because I think your app on the Magically platform

has to request being able to capture the world around you. But things like that are really

important. So what we're showing at SIGGRAPH on the phone, basically, is able to reconstruct the

scene from the phone camera. And then we're doing, like, we have a little mini version of octane,

called octane light, that is designed to basically do the minimum amount of ray tracing so you can

have objects that are mixed in reality live on your phone, and, you know, cast shadows and have

reflections and just look great. And in order to do that, not only do you have to render and denoise,

you add denoising to get that to be the highest possible quality, but you also have to do some

sort of scenery construction and do that live and do it, frankly, without depth sensors, which is

what the, you know, Magically has that and some other devices like Tango have that. But, you know,

the iPhones just have two cameras, and they use basically pretty good computer vision algorithm,

including after mission learning tricks to get, you know, to get that sort of information into

AR kit. But all these pieces, I mean, I can't even imagine VR, frankly, you know, existing in the

future without pass-through cameras that allow you to switch to AR mode trivially, in which case,

you're back to the same problem, which is whether you're seeing the real world to your eyes and

there's an overlay like Magically, or, you know, it's something like, I think, what, you know,

what Akos was talking about in the problem, who knows when it'll be, when it'll be out. But things

that basically have camera pass-through where you actually are recording from two cameras, you know,

what's in the field of view, and you could do AR, you could blend that with VR. That kind of stuff is

super interesting, and I feel like that's, that requires everything to just be, you know, up in

terms of this quality and its setting. So AI is important for scenery construction, it's important

for object signification, it's important for physics, it's important for making high-quality

rendering work in real time. Ray-tracing hardware is a big boost, and I think that, you know, the other

the other crazy technology that I'm seeing where RTX is like really important is kind of where,

you know, as we're referring to light fields, it's like being sort of a, it's more of a visual,

like, description of light. Like, it's basically saying all the rays of light that make up both

your left and right view for depth, but also things like depth of field that you see in cameras,

all that stuff is essentially something you could emit from a holographic display if you had

something like 4000 DPI, and, you know, and you have like a, you know, some sort of filter on

top of it to guide the rays of light, and even Paul, and even us, as like, you know, everyone

wants to build a structure, call it, and get to that point, and it's possible. Like, we basically

probably, displays are kind of getting there, you know, 4000 DPI displays are not impossible,

there's companies that, you know, they're working on it, and from our perspective, like, we actually

are looking ahead of VR and AR, because I think that, you know, if you can have a glasses-free

experience emitted from a table or a wall, and that becomes sort of the fabric of buildings and

surfaces and furniture and offices and homes, you know, and sidewalks going forward, I mean, that,

that is, that is going to be a lot easier to consume than wearing, putting on a pair of glasses,

and I've tried some of the smallest and lightest with glasses, and I think that that's, that's,

that's the thing where ray tracing at Harvard is, like, absolutely critical to make the holographic

display panel at that resolution run in real time, like, there would be, it'd be very difficult to

do that without, without ray tracing at Harvard making that 10 times faster, and because it's 10 times

faster, we can now drive holographic displays probably in the next six months with this kind of,

this kind of speed in real time. So I want, I want to just sort of jump off the deep end

in terms of science. I was, I was at this, at a talk last night about, they were talking about,

you know, so Mary Lou Jepsen has this company, she's creating a new device, it does, I guess

that, it's called Functional Near Infrared Spectroscopy. One of the technologies behind it

is photoacoustic microscopy and photoacoustic tomography, and these are basically, and there's,

there's some other technologies like ultrasound and coated optical tomography, but basically these,

these are new kinds of medical imaging technologies that, that can be combined with things like

electrical impedance tomography, and what, what that means is we're combining light and electricity

and sound to image the brain in new ways, and we're basically creating a light field of,

you know, what used to be an X, well, you know, we still use X-rays, but we'll create,

this is new, there's X-rays, new X-ray tomography technologies too, but basically all these

technologies can be combined to create, you know, a light field of, of a person's brain, we can do

a whole amount of brain, we don't know the full depth of what we can get, so I'm kind of like

interested in like, you know, there's all these people having these conversations and I go to

these really great conferences, but there's not, there's not a huge amount of talk about using,

using the sort of AI denoising or really using deep learning at all. It's, it's almost like

there's, there's a huge opportunity to, to figure out if, you know, real-time ray tracing,

we're predicting what should be there, can be medically accurate, you know, in terms of,

you know, helping to model the brain, helping to model brain activity, ionic, you know,

ionic flows of, of activity, you know, the flow of ions and the, the electromagnetic field of

the brain. That would be very interesting if we could begin to, to, to accelerate that research

in medical imaging by, you know, basically, you know, combining the, the light field that we're

trying to render with some of this AI denoising technology or real-time ray tracing AI and I

wonder what are the key differences between the AI that's involved in real-time ray tracing and the

AI that's involved in denoising and if it would be useful and, and maybe you can speculate as to

whether, you know, this kind of AI, how accurate this AI can be, whether it could be medically useful.

Yeah, so I should, I should probably provide almost like a breakdown of how AI is used,

even in octane and because there's different AI libraries, just like you have different filters

in Photoshop and not all of them could be used. AI assisted rendering, I mean, there's, you know,

we went through all the different things that are slow in rendering, we applied AI to fix them.

So the first thing is when you do rendering correctly, it's noisy, it's just like when you

take low exposure, there's a lot of noise, you need light to gather and you need to finish

rendering to get a properly clean image if you're doing really high quality

photorealistic rendering. So AI denoising just finishes the render and you're

essentially trading compute for guesswork but the AI is so good that it's, it's looked at

enough finished renders to know how to finish any arbitrary view and we built that ourselves and

Vinny's built that in optics and that's absolutely fundamental to rendering, like it's an AI layer

you add to rendering. We also added something called, well, it's pretty straightforward,

it's just AI upscaling, which takes a lower rise of invention, scales it up in a way that you

can't do with a normal like bi-cubic filter or anything like that, it does recreate the edges

and you have spatial resolution or even temporal resolution added, which is why you can easily

go to 120 or 240 from 30 frames a second, and Vinny actually showed a great version of that

working. And then there's other stuff where it's like you can start to figure out like what is the,

if you have a piece of an object or a scene, can you finish the actual scene layout? Can you

figure out from a photo what the actual geometry of the forest is and actually create the scattering

of leaves and trees and all that stuff. And that's deeper, that's further out, but it's still

something that is really interesting. And I think that that is kind of where AI and rendering really

do have a lot of vocation. And then there's stuff that's really more for humans to be creative of.

I mean, having AI that essentially takes a simple stroke of your hand and then creates

all this stuff that's augmented based on your history of how you paint or how you do stuff like

coil or medium or tilt brush or something like that, those things are really key tools

for the future for sure. And I also wanted to talk a little bit about light fields rendering

and baking. So three light fields are a shortcut. We don't have all the time in the world to use

AIV Noising and rendering with ray tracing. Light fields were a way to render something

into a light field as you're just basically generating a digital hologram. And then the

hologram could be looked at from any angle and you're done. And it's so cheap and inexpensive

that you basically, at least you can run this on low end hardware like a phone. You can also use

the compute cost and ray tracing power you do save on other things. So that's where I see light

fields rendering and being super useful for games in real time without oversaturating the

even the hardware that we do have, even a 10x of speed up in ray tracing hardware is

something you can easily use up if you're doing really complex light transport. What you're

describing though with sort of this imaging of the brain is light field or volumetric asset is

super interesting. And I think I was reading one of your posts where I think somebody was maybe

it was you that was looking at the rendering of that in the VR headset and that feedback

move where you're seeing what your brain is doing is probably some sort of kernel of an

interface of the future that I've been thinking about for a long time. So I think this area of

research and that committee is super interesting. I mean, there's a lot of thoughts about having

thought powered, you know, experiences or input and the like. And of course, you know, if you can

see what your brain is doing, you know, there's there's a lot of there's a lot of research

being done about biofeedback moves to have it to be open up an online office or things. But

I think that the fact that you can actually visualize that in VR and AR and frankly, yes,

ray traces, which is way better than, you know, you can take volumetric data sets and you can

ray trace those. That's what ray tracing is really, you know, great at versus doing it in

triangles. That is your earlier question. That's the one thing that you can bring in fire and

volumetrics perfectly into ray tracing. And that'll, that'll look great. Unfortunately,

RTX hardware doesn't do volumetrics. I mean, you can still add it in there. It'll be fast,

but you still use the compute course to render that. But when you're seeing your own brain and

you're, you're thinking stuff and you're seeing your brain do things, there's, I spent years

thinking about what that can mean. And I've been waiting for the foundational pieces of what we're

building on the rendering side, on the ecosystem and platform side. And what's fascinating is that,

you know, there's, there's a lot of work that you can imagine being done with AI, looking at what

that, you know, even at that feedback loop and filling in some holes and details to create things,

they practically probably don't have great, you know, vernacular words to describe how they

work. I mean, we know that they're important tools for potentially for input or for content

creation or who knows more stuff. But I think that's your strategy of the key of something,

you know, surface is something really, really, really fundamentally important for the future.

I know it. And I think that's why you're on that too. That's great.

So, so, so, so one thing, so I'm, I'm leading a meetup every week. It's called Neurotech SF.

And we have successfully connected an ED device to a WebVR to an Oculus Go. So that was kind of

cool. Yeah. You know, but so now, and so because, I think perhaps because of that, I'm, I'm, one of

my friends or connections is going to enable me to have access to an electrical impedance

tomography machine. So the second phase of the goal is to we, I'm also acquiring some,

another friend is donating some or sponsoring me to give me some, some depth cameras. We're

going to get a few elusive cameras. And these cameras are going to enable us to create a

volumetric video. And we're going to be collecting volumetric data of a person's mind with our

electrical impedance tomography, tomography machine. And I want to do, I'm going to use this,

I'm looking at this, I wrote about this crosshair convolutional 3d crosshair convolutional neural

networks so that I could, I want to try to do object segmentation on the volumes of data that

we're getting from our electrical impedance tomography and on the volume of data that we're

collecting with the 3d cameras. So I can begin to correlate

so that we can have the AI begin to look for correlations between persons, the brain activity,

the volume changes and the volumes that they're seeing in the world around them. And this is,

you know, just a big experiment we don't have like, you know, we have, we have four Titan 5

graphics cards in the cloud, but we have to somehow stream that data up into those,

into that cloud and then back in real time. And so person's going to, and then we're also

going to be running this through VR so people can see their medical imaging so we can correlate that.

So with VR is very useful as you can correlate whatever the user is looking at,

or whatever their head is pointed at with their EEG. Actually that's probably our next step is

we're going to correlate what they're looking at with EEG, but eventually we're going to be

correlating the EIT with what they're looking at with the volumes of data that we're going to be

representing in VR. And then VR also allows us to isolate, basically isolate other, you know,

random signals that from the environment. So we're isolating a person from, you know,

so that we can begin to look for how a person's brain changes in response to that specific content.

And the other idea is you can also look at how two people have different, how their brains

are responding differently to the same piece of content that they're immersed in. So the point,

where the point where I was going to was getting at was going back to doing object segmentation on

3D volumes of data. It seems like, you know, because we're talking about light fields and

we're talking about volumetric capture and we're talking about, like, so I haven't really seen,

I think another area where this technology that you've been working on could be really useful

comes to self-driving cars. All the self-driving car companies that I know of are to my knowledge

and I don't know, obviously I don't know what's going on inside these companies. But on the outside,

it looks like they're all using, you know, basically two-dimensional slices of data streams,

you know, you get a LiDAR stream, you get these two-dimensional camera streams and you're running

two-dimensional convolutional neural networks on them. And I wonder at some point if it would be

useful to start actually creating, you know, a volume of data first and doing semantic segmentation

on this volume and doing, you know, upscaling this, you know, so you could, I'm just like, I'm

trying to think of, you know, how, you know, because I'm trying to think of how rendering

can really help solve the problem of self-driving cars. Because one of the issues I guess is,

so I said, you know, self-driving cars, you know, do they need to become

self-war networks? Do they need to become aware, does the car need to become aware of itself?

Does it need to have, the reason, the reason, the thinking here is that there's this book by

Peter C. where he talks about how the, that his theory of what the consciousness is for,

it's a higher level information pipeline that is, that exists to help us solve problems that are

too big for the unconscious mind to solve. And so that's really, he sees it as sort of like,

as an additional point, like when you get a computer that's powerful enough to solve

those logistical problems, it would be a conscious computer. So that's why I'm like,

I'm like, well, well, is that where we have to go with self-driving cars to really get to like the

level five car? And do we need to have a light field render that we can, because I asked the,

I asked the CEO of NVIDIA if we are going to need a self-driving, self-aware self-driving car,

and he said that he didn't want to build a black box. He wanted to have every component

basically, you know, understood separately so they could understand what was going on

in the car if something wasn't working. But I think you could visualize, you could render

what a neural network is doing. And so that's my thinking. I don't know if you have any thoughts

on that topic, but. Well, I definitely would defer to Jensen on self-driving cars. And he's

obviously, NVIDIA is doing some crazy stuff in that field. And Tesla, until recently,

was using NVIDIA GPUs all over the place in Tesla's. But I don't know if the car needs to

be conscious. I mean, I think, frankly, people can drive and almost be unconscious and still,

almost by road, do the right thing, have sort of like, no, seriously, it's sad to say, but I mean,

you know, you have almost like the reflexes and everything can almost be trained, like muscles,

even for things like driving. And it doesn't necessarily require you to have, you know,

you know, the same consciousness that we do. So I don't know if you need consciousness for the,

or so. I mean, if you have existential philosophical decisions, you know, which sometimes you have

with cars, do I run over the, you know, the school children, or do I save the driver? I mean,

even there, you know, it's clear that you can program what you want the outcome to be in those

scenarios into this, into the system and get that. I mean, that, that is basically predecided.

But, you know, the, the, the issue with rendering is that it's not really everything,

even for OATWA, like we're not just a rendering company, we have capture, and we have dreaming,

and we have some other higher level things, which is basically the, you know, the entire feedback

between those things is basically what you really do need to solve for any system to become,

I'd probably want it to be. I mean, if we're going to, let's say, recreate a, you know,

purpurization reality, or if we're talking about, you know, bring machine interfaces, I mean,

it's like, you have to capture the world, you have to render it, or edit it, or understand it,

and then feed that back into a way that, that the, you know, the interface, probably with a human

in the middle of it, hopefully, to do something with. And, and that's why the company is divided

into these three parts. Sometimes the parts are hidden, and people look at just the rendering,

but the capture and the rendering, and even the streaming, whether it's, you know, as you're

pointing out, if you have, I can use in the cloud, you've got a VR headset that's, you know,

not on the cloud, you have to, you know, combine those two. And a lot of the technology that we

built this just does that, it solves that problem for you. And that's kind of where, you know,

we see ourselves fitting into this ecosystem, is we build these tools that, you know,

solve some of the harder problems. But in terms of, you know, what's interesting,

the rather important point, which is just rendering, what does rendering really do for AI? And there's,

you know, if you look at some of these things where they simulate like the evolution of like,

you know, jellyfish, or multi-solid organisms, and they, you can see them basically be pushed

on the land, and then they grow limbs, and all this stuff. I mean, take that to launch

a revolution, which is right all the way up to the simulation theory, which is if you basically

simulate everything in the physical world to the point where, well, you know, we don't know,

it's so granular, the entities in it are covered, you can imagine basically creating life that,

that evolves and grows and learns in an environment that's basically the same as ours,

but can be accelerated and you can have shortcuts, you know, all sorts of things. And so that's why,

you know, this, the simulation theory, I guess, you know, I guess Geelong was one of the people

who made it popular where, you know, if you just imagine a video game where we are getting the

point where, even if it's slow or goggles, but it just looks absolutely real and your eyes are

fooled, you know, then you figure out touch and other stuff. I mean, you come up to the

scenario of are we AI running in a simulation, and how do we prove that we're not? Or how do we,

you know, figure out what that even is and isn't? And it's, it's a fascinating problem. But

we're probably going to, you know, we still have work to do before we actually can get to the point

where reality itself is digitized so convincingly that one, you know, cars can, can understand it

the way we do, you know, naturally versus, you know, with rough approximations. But yeah,

I like something you could render in a simulation. The data itself is actually less,

you know, less interesting without the, you know, the source that generated it or how it was captured.

Going back to 2015, at that, at Seagraph, the first of the four talks on Lightfield,

one of them was, I believe, the gentleman you mentioned earlier, who is now at Google,

and he was saying that basically, you know, our eyes are capturing a Lightfield. We have two

points or two, I mean, your eyes have lots of different, you know, cells, you know, lots of

different that are responding to light. That's right. So the idea is, you know,

what I've seen is that it is, so that going back, research going back into the 1980s on,

you know, neural networks that can be used as signal processors, it seems very plausible that,

you know, and looking at Jack Lawn's work, that he, you know, he basically created a movie that

was with MRI. He had someone watching the movie, and he had the machine watching their blood flow

and the movie, and they trained it like that, and the machine just watched the blood flow,

and then it pulled the movie. It recreated a movie from just the blood flow. And so that,

so the idea is, you know, that basically what we're seeing is video. What we're seeing is a

Lightfield that our brains are constructing. And this was an idea that I saw. And so if we're

creating a video, but then we're, it seems like we're, it seems like we're creating a video,

but we have that, you know, the ability to learn from this video, but we're also

rendering it. And I'm thinking about Google's Deep Dream and the, you know, that there's new,

there was a huge story, I see graph about the deep fakes or deep, you know, they're created,

they're able to like recreate an actor or recreate a person, and you can make that person.

And so the idea is that, so for me, like, what does AI bring to, what does rendering bring

to AI? It seems like those are, you know, if we're going to talk about creating an artificial,

you know, sentient mind, you know, it seems like that, you know, our minds have their own

networks, but we're rendering. And the rendering is then being processed, like it's in a feedback

loop with the AI, where it's rendering, it's crunching what was rendered, and it's rendering

on top of that again. And those are the feedback loops of the mind, I think. And so at some point,

I think that your technology leads towards, you know, you're already combining AI and rendering,

and that seems to be like you put that in a feedback loop, and you eventually have a mind.

Yeah, and it's funny because I mean, yeah, and AI is, I mean, you know, it's one of these things

where as a product, I mean, you have to be, you know, I want to release AI that's useful, like

right now, this year, but it's the stuff you were talking about, where you could recreate a movie,

or you can, I mean, you know, I was reading, you know, about another, I think it was in Japan,

or something like that, maybe, I'm not sure it's the same researcher, where you could basically

figure out the letters that you're thinking about, by again, sort of scanning the back of your head,

and then you can almost get like a 16 by 16 black and white pixel representation of what your brain

is seeing, or visualizing, I mean, you take that to its logical conclusion, that is going to be,

essentially, I mean, the stuff with neural arrays, you know, on top of that, I mean, the bandwidth

back and forth to the brain is not going to necessarily be through goggles on the eyes,

there's some deeper stuff going on, and I think that you're right, also, that's, you know,

consciousness, and how we experience things, and how an AI might experience things,

we don't render the same way that a computer does, I mean, we don't even see the world the

same way a camera does, I mean, we'd be, our eyes like move around, and we basically build an image

by, you know, our eyeballs scanning very quickly, and then coming up with a, you know,

sort of a complete picture in our brains, and what our brains see, even with,

even if we see a light field, like, even if a light field is being, like, you know,

which is how you see convergence, and depth of field, and all that stuff in your eyeballs,

even if that goes into these receptors, and where our brains are trained to figure out what that means,

it's still, when we're seeing it inside our mind, it's still something that is, you know,

we have no idea if people see this blue the same way, you know, there's even tests where,

you know, they, you know, people didn't have a word for the color blue, and like certain continents,

you know, ever hundreds of years ago, and they don't see that color the same way we do,

don't see the sky and plants as being different shades of, different colors, they see it as

different shades of green, like, your brain gets trained, and because of that training,

it's to absolutely process the same physical cues very differently, and so what we're rendering in

our brains, even, even as visually, it may not be, you know, it may have identical sources from

the role, but it may, it may just feel different to different people, and maybe, you know,

segment, you know, should talk about object limitation, how we process it and analyze it,

kind of becomes different. What's interesting with an AI is that you don't have necessarily

those limitations, and you can, you can basically just keep rebuilding AI's, but think and look at

the world in different ways, and even a modicum, even if it's not, even if it's a philosophical

zombie and it's not true AI, the ability for it to process and do stuff and kind of act the way

that humans would with that information and just more with it is fascinating, and I think we're

going to get to the point where, you know, and Google stuff this year with, you know, those

digital assistants that were on the phone that sounded real, like you're going to, you're going

to get to a simulated person in AI, but even one that they can make decisions that look human,

long before you get to the true, like, consciousness of the machine, which is still

something like we don't even fully understand our own consciousness perfectly, I think, you know,

and so it's just, you know, we're for some fascinating years ahead, but AI and rendering

are inextricably linked together because truly AI needs to render. If it's going to simulate

anything the way we do, it's still, the ability for it to do that is really powerful, and we can,

we can do it in a way that the human brain almost can't, like the human brain can't render

perfectly like a photograph does or a CGI render does, you know, with the precision that we have,

and therefore details and things that an AI could do visually or pick up on and stuff queues

that are there, which is what AI is already good at. It could be augmented in ways we can't even

begin to imagine, and that's why the next 10 or 15 years is so, it's just, it's just exciting,

you know, from an, you know, artist and creative perspective and philosophical perspective as well.

Awesome. This is going to be a lot of great food for thought for folks when we,

when they listen, they have a listen, so thank you very much.

Thank you so much. Always a pleasure.
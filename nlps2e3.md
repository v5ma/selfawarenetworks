Neural Lace Podcast Season 2 Episode 3

Optical imaging with Kyle E. Mathewson ~ The Neural Lace Podcast. Corona virus COVID-19 Special!

May 12, 2020

https://youtu.be/xEUrcnUu498

Audio Transcription by OpenAI's Whisper

All right. So here we are. This is a new way to do the Neuralase podcast. I'm here with

Kyle Elliott Matheson and we're going to talk about a little bit about FNIRs, just a little

bit, but the topic is about optical imaging. And so let's just dive right in. Kyle, do

you want to share your computer? Well, usually I like to start with maybe a short introduction

about yourself, just the example. Go ahead. Anything you want to talk about?

Yeah. Well, I'm doing it. Maybe you can enable screen sharing because I'm...

Oh, yeah, yeah. Hi, yeah. I'm an associate professor at the University of Alberta,

up in Northern Canada. I got my PhD and did a postdoc at the University of Illinois.

In Champaign, Illinois, at the Beckman Institute for Advanced Science, where I

learned how to record from human brains in a number of ways, including electrically,

but also by shining light into the brain and measuring the resulting light coming out the

other side. And I run a lab here at the University of Alberta called the Attention, Perception,

and Performance Lab. And we study humans out in their natural habitat and how their brains

give rise to the behaviors that we do every day.

And I guess I could probably share my screen now. Yeah, there we go. Awesome.

Okay. So, Annie, you'd imagine it's still recording this, too, probably, right?

I hope so. We can test this, but... Yeah, I think it would. Okay.

Okay, but you can see this that I'm sharing. Yes, I can see what you're sharing.

Okay. Do you have any other questions before I start?

No, go ahead and start, but would it be all right if I do talk?

Yeah, please. Let's have more of a conversation if we can.

Okay, go ahead. Oh, well, yeah. So there's many ways to try to measure the activity of the brain.

And one of the oldest, of course, is electricity. So you can measure the changes in electrical

potential that neurons create as they depolarize and hyperpolarize, either adjacent to them or

on them or in them or nearby. But it happens to be... And you can also measure changes in blood

flow in different ways, maybe with magnetic resonance imaging or with ultrasound.

And because it turns out that as neurons are active, they recruit blood to an area. So even

though it happens a couple of seconds after a neural activity, you can use localized blood

flow in the brain to estimate which areas were active in a given situation.

And how detailed can you get? Can you get down to the single neuron in terms of...

Right. So with fMRI, which is sticking someone in a big three and a half Tesla magnet

and measuring the... And adding a little bit of electrical energy to shake the protons out

of alignment and measuring how long it takes them to be realigned, you can kind of get down to the

millimeter or a couple millimeter level, which still has probably an each square or a cubic

millimeter of the brain is 10,000 or more neurons. So you're measuring the human brain at quite a

coarse scale using these techniques. Right. So is that the same for FNIRs? You're talking about fMRI.

Yeah. So with FNIRs, you'll see today, I guess, that at the limit, as we get more and more light

sources and detectors, you can approach that kind of resolution in noninvasively in a human.

Okay. That's interesting. So we're talking about like when a single neuron fires, it expands and...

Oh, sorry. Yeah. I don't mean you can't get down to the resolution of a neuron. You can get down

to the resolution of about a square or cubic millimeter. So a group of 10,000 neurons.

Okay. So we're not yet at the single neuron stage with FNIRs.

Right. At least noninvasively. So you could try by exposing the cortex of an animal or a human in a

surgery. You could use some other techniques to do a little better. But the noninvasively or

something that could be imagined in the consumer realm were kind of at this level of groups of

neurons. So that being said, 10,000 neurons is a very small subset of like the 10 billion neurons

that there are. So these are localized groups that generally are doing the same thing.

Well, you're deep into this niche of optical imaging. And so I'm sure you've heard of all

the other optical imaging projects out there, the big names and stuff that brought the promise

to do a billion times improvement resolution and actually capture. Do you have like innate

skepticism about some of the promises of some of these more plot or headline grabbing?

Say that there's likely some physicists that understand the limits of some of these technologies.

And I wouldn't be surprised if they can be improved on further and especially with new

technologies and expanding on the current technologies. And so I'll talk a little bit about

like different types of light that you can shine into the head and what this new time of flight,

it's not new, but what the time of flight optical imaging that kernel is using,

how that differs from the techniques that I use in my lab or the F nears techniques that are more

common and consumer devices right now. Let's do that now. So yeah, like the,

well, let's at least go one slide further. So as I said, when neurons receive messages from

other neurons nearby, they receive those messages by neurotransmitter chemicals binding to the

synapses and channels or gates opening up and ions rushing into the post synaptic cell. And

when those ions rush in, two things happen that we can measure with light. One we've already

mentioned is that the neuron uses energy to create some of those gradients over which those ions

flow. And so to recuperate from that use of energy, it needs to recruit more ingredients from the

blood glucose and oxygen to make more ATP to power the pumps and gates that let things in and out.

And so there's signaling cascades that happen when a local area is active that ultimately

lead astrocytes to open up blood vessels in an area and attract through kind of plumbing forces,

more blood to that part of the brain. And that blood absorbs light. And so at the very

course of scale, you could think of it like a little localized shadow. And so parts of your

brain that are more active are absorbing more light even from the lights in the room and the

sun around you. And then a little bit less light is coming back out your head. And then it turns

out something else interesting happens when those ions rush into the cell. Water flows in with them

because of osmosis and the membrane of the cell expands and gets stretched out. And it becomes

less wrinkly and it apparently becomes more transparent and therefore it interacts with

light differently. And so then in theory, you can use light to measure both of these things,

how much light is traveling through tissue and how fast the light travels through tissue.

So the basic idea, well, the first couple studies that were actually done were done

in exposed cortex of an animal. So you could actually just open up an image of the brain,

a little window into the brain and take images of that exposed cortex. And you could see it change

in color as people use that part of the brain more or less. And I believe there's even reports

from Wilder Penfield in Montreal in the 30s of observing change in redness of exposed cortex

in the same way. So I wanted, I was interested to, there's this doctor who's been talking about

you've heard of the Medcram doctor, the guy on YouTube? No. He's been talking about, well,

so he's a surgeon and he's been treating patients with the coronavirus and he's been talking about

the end, how the coronavirus attacks the, it's sort of, it's sort of, it targets the ACE2

inhibitors, which are, there's a lot of them on the endothelium. And that is, that's causing

basically the damage to the endothelium and the von Neumann's factor is cause, is coming out and

that's creating blood clots and it's, it's causing vascular constriction because usually the ACE2

protectors through the angiotensin 2 and angiotensin 1,7 pathway would be inhibiting the vasoconstriction

actually doing vasodilation if you have, if you have more ACE2 compared to ACE. And so he's been

exploring this and one of the things I've been doing for coronavirus patients is saying, well,

hey, we are sending out the, we're actually recommending that people have an oxygen detector.

And so I was thinking, well, if someone was like a pioneering, you know,

neurohacker that they could build an oxygen detector from F-nears.

Um, yeah, let me grab mine right now.

Yeah, so this is a common technology at the hospital, a pulse oximeter.

And it uses the same technique in that maybe we can't even see it, it's hidden in here so well.

It has little light sources inside this cavity that shine through your finger and then it has

light detectors on the other end of here. So this is actually called transmission optical imaging.

So the light's transmitting through my tissue as opposed to going in and coming out,

which is diffusive optical imaging. But yes, so you can, if you have two wavelengths of light

and you're shining them into anywhere into a human body and they are the right wavelengths

by knowing how much light you're shining in and measuring the amount of result light coming out,

you can estimate the oxygenation of the blood because hemoglobin has four spots for oxygen to

bind to it. And oxygen coming from your lungs is all four spots are taken and then your,

your body uses one or two of the oxygen. So you end up with three or two left on the hemoglobin.

And the oxygenated versus deoxygenated hemoglobin absorbs light differentially.

Let's see if I have that chart here. Yeah. So tissue with the all four oxygens in the hemoglobin

versus with just two or three has a different absorption spectra. So here's wavelength of

light and absorption. And if you zoom in right around 800 nanometer light near infrared light,

you see that there's this crossing over of the two absorption spectra. And so the basic technique

of near infrared or sorry of pulse oximetry or oximetry of human tissue is to use one wavelength

of light over here and one wavelength of light over here. I don't know if you can see my mouse.

Yeah, I can see your mouse. And to estimate how much of the light that you put in is absorbed

of those two wavelengths. And then you use an equation like this, which is called the

beer Lambert equation. Okay. And you have to,

you have to know these absorption coefficients. So there are some of the parameters of this

equation is the points of your light on this graph. And then what you get out is the change

in the oxygenated and deoxygenated blood. Okay. And really cool. So yeah, now there's work.

So in theory, then you can measure that over the whole head so that yes, as we get the coronavirus,

for instance, we might have more trouble getting oxygen into our bodies, but localized across the

head, some regions of the brain are using more oxygen than others. And you can estimate those

changes over time. So would you be able to detect blood clots? Because that's one of the things with

the good. Um, no, no, keep asking. So one of the things they were saying with the, the Medcram

folks. So if you look, if you go on YouTube and just type in MED, C-R-A-M, the MD who presents

it, his name is Roger Schult. And his lectures are really worth watching for, like, what is the

best research I can find on the coronavirus right now. But he's, so one of the things he's saying is

that the, let's see if I can fast forward, maybe I can get the chart up for myself real quick.

But one of the, one of the things he's saying is that the, if I, well, let me just go by memory,

then, is, is that, um, the, oops, I lost my monitor. What happened? Oh, wow. Uh-oh. All the

monitors are resetting. There was a power, I guess there was a power outage in the building.

Nope, it's back. It's the power, as we call it, a brownout or something real quick. Let me see if

I can go and just say, okay, so what happened was he was saying that the, um, the, there's, there's,

so going back to the, the ACE2 receptors are basically, um, you know, they have, they have.

Hey, now I can hear you. So apparently, like my whole electricity over here got reset, but

yeah, so. That was a great thing to happen in the middle of a podcast.

We're still recording somehow. Yeah, I think it's pretty, it's, um,

um, that was kind of the goal of Zoom was to make it robust. Yeah. Um, so, um, I don't, I don't

know how long was I gone for? I can just continue from, um, the last thing I heard you say was the

doctors, the leading doctor, and he had this proposal that. Oh yeah. So the, so, um, his name

is Dr. Schult, um, Medcram, and he's saying that basically, um, what it comes down to is, um,

that if you do not have enough ACE2 receptors, then your body is going to produce too much, uh,

oxidation or superoxide. Um, and, and, um, I mean, another, another, uh, that's coupled with,

you know, you know, inflammation or hyper inflammation. Um, and, um, so one of the,

so one of the ideas was, well, I've looked, there, there are certain things you can get

which, um, claim to help reduce inflammation, like on the consumer side of things. You know,

there's, there's, there's a supplement called D ribose. Um, a lot of people try to say that,

um, you know, what is, what is this, these, uh, magnesium salts, uh, that, that you soak your

feet in that reduces your inflammation and reduces your, um, so if you could take, you know, people

say, well take your vitamin C and your vitamin D and your vitamin E and that will help your body

to reduce its inflammation. And some people, you know, there's, there's obviously, um, there's ARBs

or, um, you know, there's statins, there's, there's different drugs that are meant for people who

have heart attacks or strokes that reduce inflammation and reduce, um, they actually, um, increase the

amount of, of, uh, of ACE2 receptor action. This is outlined in the, in the recent MedCram talks

that he does it, he does a better outline, much better outline than I'm, than I'm doing. But the

idea was, is if, um, if somehow, you know, D ribose as a fundamental building block of cells is

actually, you know, it helps, it, it helps your cells to reduce more ATP. If you have this, this,

there, the same, the same idea was with the, um, you know, taking the vitamin B12, uh, supplement,

which help your body make more D ribose, which would help your body make more ATP. And so there

was this whole energy drink sort of, uh, craze where people were taking high doses of vitamin B12.

And, um, so the idea is that if any of these supplements are causing a, um, an effect where

they're reducing your inflammation, uh, there's, I mean, there's a point that you could measure,

or I'm going, I'm coming back to, you know, AFNIR is an optical imaging. Uh, there's a point where

you could measure, um, I guess you were saying that if someone is having a blood clot that is going to

create a different sort of signal that you're going to pick up on. Um, but if someone is receiving

a treatment of say D ribose and it's reducing their oxidation and it's allowing their, um,

whatever their blood is able to transport in terms of, because your blood, the purpose of your blood

bringing oxygen is so that you can make ATP, correct? And if, if you're not able to get oxygen

because your, um, you know, because your ACE2 receptors have been whacked out, but you're

receiving D ribose, uh, and you're able to make ATP through other pathways than the dependence on

oxygen. But what I'm curious is that, is that at some point in this chain, would we be able to

measure someone getting their, their ATP from, uh, an injection of D ribose or it's not a, you know.

Yeah. So there's two, two cool things. One is, um, that you could measure, well, you could imagine

that we're like in the hospital, they're measuring these effects systemically throughout the whole

body, but then some of the effects might be more localized to one brain region or another.

And so having kind of like distributed sensors around the body might change things. Um,

I like your idea though about measuring kind of effects of treatment. There's one cool thing you

can do, um, recently shown with optical imaging is you can measure, you can estimate the pulse wave

velocity. So how fast the pulses of blood are moving through the body. And that is an estimate of

your vascular elasticity or how kind of hardened your arteries are. And it turns out you can measure

that across the head. So you can measure in localized regions of someone's head as some of their

vasculature, um, more healthy than others. And so that's one maybe kind of thing that could change

with some of these treatments is that your vascular system is working more effectively.

But there's a really cool, um, kind of rabbit hole that you reminded me of. And that's that, um,

have you ever seen some of these therapies? Maybe if you hurt your knee, were they shining near

infrared light into your knee? Um, no. Well, it's, um, maybe I can just use the internet instead

of my slides. Yeah, totally. Let's try like a near infrared therapy because there's pretty funny

helmets and stuff. Yeah. So this, um, you could get like a belt or something to wear around your

waist or put on your knee. And the one idea would be that the heat helps your body. But it turns

out that there is, um, in the pathway that creates ATP, there is the, um, there's the CREB cycle.

And then there's another four stage process that's name is escaping me right now.

Um, the electron transport chain. And one of the steps of that electron transport chain is,

um, uses a molecule cytochromoxidase. And it actually absorbs, I think it's,

that it, there, something about that step, the near infrared light can make it work more

effectively. So in theory, near infrared light can boost the production of ATP locally in the

brain area or in a body area. Huh. And so not, I think there's also, um, helmets that you can get

that do this kind of thing. Yeah, this lady. Hey, so you can, you're, this guy is treating

Parkinson's disease with a bucket that's full of near infrared lights, which doesn't look like a

real product in Silicon Valley right now. But I'm sure there's some that are being made like that

one or this one. Um, and it's the same idea that you could boost the vascular activity,

you could boost the production of energy for the same input molecules. And so maybe your idea that

maybe if your oxygen input to the body is diminished, maybe you could acutely improve the

activity of those people's body so that it's making use of, um, less oxygen to do what it

needs to do. That's kind of cool. Um, I know I think I just closed my slides, but yeah, so

I think that that, and that's really cool for me. And we've been testing a couple of things with

this. So we, we've been testing if you could locally enhance one side of the head and not the

other. So you shine near infrared light in one hemisphere and not the other hemisphere. And

can you look for changes in cognition that might result from that? All right. Okay, where were we?

Why are we shining this light in and how are we shining it? So this is a gentleman named

Britton Chance, who was the first to use near infrared, to use kind of non-invasive optical

imaging in humans here on himself, had a single light source and a single detector. And he was

measuring the amount of light that goes through this path between the source and the detector.

And, um, when you use two wavelengths of light, as I mentioned, you can estimate the

oxygenation of the tissue underneath. And then to kind of test the technique, some studies were

done to look for known distributions in the brain, what you would expect to happen, say if you

illuminate the whole right side of visual space, you'd expect there to be activity in the left

visual hemisphere. And so you see that in this kind of test of that technique. So you see this

boost of activity in the left visual cortex when you stimulate the right visual field and vice

versa. So you can use it as a way to map brain activity, which it's been used for a while.

And this is pretty old. So this is maybe 10 or 12 years old, some miniaturizations of the technology.

And you can tell how recently I put together some of these slides, because in that time,

since there's technologies like this on the horizon that are built into the glasses,

this is a company in Toronto that's just in the up and coming stages and is trying to put some

of these techniques into eyewear. Yeah, I've got one of those devices here in my office.

Yeah, not the glasses, just the near infrared part. I got one of the developer kits.

Right. And? It's cool. It works with my phone, and I'm working on developing a WebXR

biofeedback application with it. Nice. How do you affix it to your head? Or you put it under

your hat? It comes with a headband, and then you put it right on your temple. It's where they

recommend you put it. And yeah, I mean, obviously, you don't want hair in the way, but I mean...

Yeah, hair is an issue. And that's an issue. If you look at the kernel

Hello Humanity post, the kind of the first thing I looked at was the thing I think of the most is

like the interface between the human and the machine. And it looks like this is what they're

imagining. These are little kind of plastic fiber optics at the end of an optode. Looks

like a detector and six sources that are about two, one centimeter away from each other. And I'd

say that, yeah, this is how we'll have an issue getting in and around hair. So maybe they're

imagining it will be on a part of the body with less hair. Or they'll just, you know, ask their

participants to shave their heads or something like that. I'll show you some examples of that too,

if we have time. Yeah, we've got time. While you're doing that, I'm going to look to see if I can

find my F-nails. Cool. So the basic idea of kind of delivering light into a tissue and measuring

the light coming out, you could imagine how these miniaturized electronics could do that job. You

have small LED sources and you have kind of miniaturized sensors that you could embed or kind

of attach to circuitry and power quite easily. So this is one of the original developer kits

that actually became those glasses. And so you can see that it just attaches to be a headband.

Yeah. And then you, I guess you put it on backwards like this and then it just sits on your

temple right there. So that's great. And does it give you heart rate as well?

I believe it does. It's been a while since I've plugged it in, but I don't remember

I don't remember seeing heart rate, but it does give you,

it says right there in the dialogue gives you heart rate. Let me have to check the latest

application. Yeah, well maybe the heart rate's a good example of how the technique's working,

because it was something that took me maybe a year to think about when we talk about blood

arriving at the brain, when you use a particular brain area, what we actually mean is pulses

of blood every time the heart beats. And it's in those pulses that a little more blood comes

to an area, but it's not like the tide rising in an area, it's that bigger waves of blood arrive

at that area. And so the inherently in the signal that you get from light over time that goes

through our tissue, there's always a heartbeat embedded in it, because every single time our

heart beats it absorbs a little bit more light, that tissue. What I do like about these devices

is that they talk to your phone, I've got an Android phone here to talk to it, and

it outputs from your phone, it outputs as a, what is it called, a web socket. So that's good.

The VR application that I helped develop in 2018 at Noisebridge, we brought EEG into WebVR,

we used a brain EEG device, and what happened was we created a local server, we used Python,

and later we upgraded it to a server that we created in Go that had some extra features,

we added the four-year transform, and what we did was we created a web socket, and we sent the data

out via the web socket, and then we brought it into the web page with a web socket. And at that

point we could just use our JavaScript and our 3JS and our A-frame and our WebXR to take the

incoming stream of numbers divided up into our delta beta, our right channel betas, left channel

betas, the whole EEG spectrum, and we could define what our alpha was exactly, which was nice,

but then we could, at the point that it's in the web page, you can say, well, I want these

objects, these planes, or these spheres, or these squares, or these cubes, to go up and down,

and the height is based upon the incoming number that's being received at one interval of time,

and so the blocks go up and down, and we had them in an array, I have a video of this,

we had them in an array so that they would go up and down in a time series, one for each of the

four year transform channels, and then they would change colors they went up and down too.

So you can add any sort of JavaScript animation at that point, because you're just making the

numbers more reflective, but that's a far cry from making this basically, that's a kind of

biofeedback application, and if you can get the noise out as much as possible and have a real

signal there, then people might find that to be useful, but when you're in VR, you move around

so much, and so I thought, well, the next biofeedback application, maybe we'll get a better

signal to noise ratio with this F-narratives versus the EEG, but then I'm listening to,

I was organizing the Neurotek SF for two years, and I'm so glad that my friend Morgan,

the amazing neuroscientist, Morgan Huff, is not doing that organization because it's a lot of work,

but when I saw, you're talking about doing optical imaging, medical imaging with F-narratives,

that's a different kind of computer program, that we get the signal, and instead of just

applying JavaScript variables to each incoming number, how would I create a program that actually

begins to maybe map out an image, and I don't know how to describe that 3D image,

is it like photogrammetry, is it like an object file, is it like a community?

Yeah, because that's what kind of drew me to this optical imaging, that I had already been

recording the electrical activity of the brain, and the skull smears the electrical activity,

so a good analogy, I think that one of your last guests gave maybe was that it's like recording,

or it was you that gave the recording on the outside of a sports stadium trying to figure out

what's going on inside the stadium, and so that's like what EEG is, and so the idea that instead

you could get at least a fuzzy image of what's going on actually inside the brain is appealing,

and especially from like a feedback perspective as well, that it gives people not just like a

state over time, but kind of an object to imagine. One thing you could try, I guess,

with the blueberry as an easy first pass would be to allow people to visualize their heart beating.

Okay. Maybe with the kind of how dark their setting is or something, because that's a

really strong signal as you'll see probably in this slides of from the head when you shine light

into it. I mean there's so there's this with EEG, you probably you know a ton about EEG

because you were doing that first, right? So you know about all about source localization and that's

something that I've heard Morgan talk a lot about. One of my questions to Morgan was why can't we

you know use you use basically you know if you have a cap to 256 electrodes on it and you're

doing source localization so that you know you know basically you can predict where that

brainwave may have come from within the 3d volume of the human brain. Then you know what's what's

why can't you at that point build like you know sort of like accurate 3d models of brain activity?

You can do okay, but I think that the problem is ill constrained. There's not enough data

from the outside of the head to differentiate from two or many possible sources of activity inside

but the best people in the area now are making really which is the same thing we do for optical

imaging is they're using the subject specific anatomy from an MRI scan and they're delineating

different structures in that object and how those different structures would transmit electrical

signal and so they're using like really complicated models of the electrical conduction of the head

to try to estimate sources and it takes two different modalities it takes the structural MRI and the EEG.

So have you been have you been because I've also been talking to Morgan a lot about

doing the structural imaging with electrical impedance tomography it's something that he's

excited about he mentioned it is is helping to solve the skull problem or the I guess the

the way I think of that is like the how you know a different different people have different

skull shapes and the way that the ions travel through the different parts of the skull is going

to be you know different from patient to patient it's also going to be different if the patient's

lying down because their brain sits in the skull differently and so go ahead on the topic of EIT

if you want and other options for yeah I haven't looked in too much to this EIT thing that I hear

that Morgan is excited about I had there was one thing I remembered of using kind of light near

infrared light to get a rough estimate of the structure of the brain as well because of different

absorption or scattering properties in different areas um yeah I guess the electrical activity

you can measure from the brain the advantage of it is that it's almost instantaneous in time

you're measuring things as they happen because of the speed with which the electricity conducts

so at least for my research we try to design experiments that are answering like a when

question instead of a where question because the that's what the modality is best suited to answer

like how much earlier did it happen in this condition than that condition um and that but

I think that um optical imaging can allow you to kind of merge those questions if you also want

more ideas about where in the brain some signals are coming from because it does have better spatial

resolution all right let's keep going on optical imaging because that was sort of like that oh

yeah whatever we can but the um I guess I was here and we were talking about how simple it is now

and why there's a bunch of companies moving into the space because if all you have to do is shine

a light or a laser into tissue and measure the light coming out then you know I could take my

camera from my phone here the flashlight from my phone and turn it on and I could put it up

to the webcam here and if I just then recorded my webcam over time or your viewers can pull this video

and they can pull my heartbeat from how red my finger is over time interesting and so you could

put that on your ear in your head um and so it's any continuous illumination and any

light detector and so that's why um blueberry is able to do what they're doing here and we were

even thinking of making kind of um epidermal electronics that adhere directly to the skin

because the the technology's advanced that you can make tiny little flexible leds and tiny

little flexible photo detectors uh in these kind of circuits so we are testing out some things like

this um and so I think that the I think one of the limitations and I I think that the companies

in the space know is the rigid form of consumer electronics we're moving farther and farther

away from rigid electronics um but nonetheless there's always a circuit board or um plastic

um involved that usually make things um not adhere perfectly to the skin so one of the areas where

I collaborate with people in material sciences and kind of imagining what the next form factors of

these interfaces between our body and electronics are going to look like I wonder if you could if

you could measure specifically vascular dilation or a single vein or map or a map or a map of

blood veins yeah there are so here's an example I've seen some other evidence that was like this

so this is like we put four of these lights on a forehead let me see if I have a picture yeah so

we stuck four of these on a forehead and then using a camera from a phone sorry my slides are kind of

going haywire um using a camera from a phone we just take the frames of that video and pull out

the average value of red or green in the frames and just from the frames of that video you can get

these um heart rate out just as I showed you with that little demonstration on my finger

but usually and you can see in some images online you can see shadows and bright spots from veins

as well in the hospital they have um what is it there's yeah there is this technology that nurses

use to find veins when you said phone you you provoked an interesting thought for me because

one of the the basically I was watching a lot of a lot of videos about the open water

technology that Mary Lou Jepsen is working on and and I came to the conclusion that that she's

that it seems like the major contribution being promised is a new CMOS chip or new a new phone

imaging chip where so it's kind of like you brought up well if you just use a phone you

could do some basic you know you know medical imaging but if you had a really good camera chip

like better than the best camera chips available yeah with that yeah let me um we're getting close

to that you're right because it's gonna be we're gonna move past just measuring how much light

and we're gonna start talking about how fast the light moves through the tissue and then better

cameras are gonna be good because you could measure with at a higher frame rate

so yeah let me so yeah we were you're right trying to also see like how high of a resolution of

camera can we use to try to reconstruct underlying tissue we were thinking about um brass tumors

or tumors as well and maybe your idea about blood clots is related to that that if you're now moving

almost to non-contact physiology sensing if you can shine lights in from across a room and have

cameras nearby it's not far off from having kind of like a wireless imaging thing that shines lasers

at your face and measures a couple things about your physiology and I um there's non-contact

temperature sensing already happening all over the world today and there's for sure non-contact

heart rate sensing as well and you've probably seen some demonstrations from Chinese CCTV of

them doing that out on the street I've seen a picture of a policeman with one built into his helmet

because all you would need to do is pull out the color of someone's face over time

and and then pull out the heart rate from that and then estimate the frequency of that rhythm

nice and if you had a good enough camera maybe you could get to the point where you're doing

you know holography uh you know high frame rate cut in different uh of different color changes

yes and if you even if the the source of light is non-apparent to the person across the room

maybe you have like an infrared source of light that's coming out of your helmet and just like

my neighbors security cameras have or our security cameras have the um then you don't need to have

anything attached to the participant and you might be able to estimate some local changes in their

blood oxygenation in different parts of their body and and then perhaps you could detect if if

they're suffering from vasoconstriction and estimate their chances of having the coronavirus

remotely yes that yeah that I think the idea of doing heart rate is to do that but you're right

that um yeah maybe you can put this blood oxygenation let's check mine right now um

seems to be something that before negative symptoms are occurring that there's changes

in blood oxygenation so I have a 98 blood oxygenation right now you did that with your

afner's device yeah this little finger finger one oh yeah okay um so I think there's a big promise

and you can see there's people in the space like blueberry of using continuous light to measure

from human physiology whether it's brains or we already have it in our watches

um so on the back of many of your watches there's going to be a little light source

and a detector that shines through your wrist and measures your heart rate not far off from

measuring your um blood oxygenation as well and it should probably also be able soon to

measure your blood pressure that's apparently a holy grail in these wearable wrist devices as

blood pressure monitoring yeah well I mean if you can if you can detect vasoconstriction

or vasodilation that's the same yep exactly so I think that the probably what's stopping apple

right now is just a database of of known blood pressure values that they can use to train some

models that sounds like just um some lab work it doesn't sound like it yeah just waiting for enough

people to fill in the survey on their phones or something yeah so um I yeah so even in this we

were able to measure changes in people's cognitive effort or at least what looked like changes in

cognitive effort when they're doing math versus just calm and meditating there's less light coming

through their head to our phone and so you could imagine maybe even being able to estimate that

regionally across the forehead and it's hard to know even what product to develop is if you can

do that without with just a phone from across the room with the laser um but maybe something at

airports or shopping malls um so as I mentioned there's another change in the tissue that happens

when neurons become active and that's that the group of neurons swell up with fluid and become

more transparent to light and so you have a group of neurons that's sitting there and they're not

relatively very active and then they become hyperpolarized and they fire a lot of action

potentials and throughout this time uh water's rushing into their membranes and swelling them

up like grapes and so the photons of light which in this diagram are not oscillating but it could

imagine that they're they're vibrating through the air here go into the tissue and they bounce

randomly off things and scatter through this tissue so our brain is like um the same scattering

coefficient as skim milk so it's like very cloudy that's why I can't see your brain this part this

part in your presentation has really caught caught my eye the the last time I saw it was

was that this is it seems like if you had a CMOS sensor powerful enough to to this is how you

would detect you know that a neuron had fired because with with this type of tech with with

light is it's not you're not measuring the action potential you're measuring the the the in in rush

of of water and and what there was a calcium ions yeah so it's um it's you're measuring the change

in the transparency of the membrane that's because of the inrush of water and the filling up of the

interior space of the cell and you're right that as you see an action potential in that cell you can

see a change in the transparency of the the membrane either in a single cell um or this is the axon

of a squid or in like a slice of hippocampus in a dish so these are classic papers you can see from

the the previous millennium um showing changes coincident in time with the electrical activity

uh that you can measure with light and so the basic engineering problem is that you need to

measure how fast it takes are you basically you need to measure how much further on average the

light goes into the tissue or you can measure um how long it takes to get back to a detector because

it travels at the same speed so if it goes a little bit of an extra distance then it's going to take

a little bit of an extra time to get back to that detector so the very simplest thing of course you

could do is like put in a single photon and then measure at the detector for that photon and pick

up the photon and then time it and it's going to take some crazy fast amount of time because it goes

three or four or five centimeters through the tissue and it travels at whatever it is 300,000

kilometers an hour and what you find is in tissue that's active versus inactive there's a delay in

active tissue of like uh three or four trillions of a second in the time it takes light to get

through that tissue so that's the engineering problem is how do you measure changes in the speed

of light that are at the order of trillions of a second and the other problem from like a data

perspective is is that signal big enough compared to the noise that you would get in that system that

you build that it's meaningful for your your goals okay fair enough so I've shown one way that people

have done this or I talked about briefly but here's an example of it this is called intrinsic optical

imaging and it's done in animal models where you open up a window into the brain and you measure with

a very high frame rate camera changes in the light that come from an illumination source into the

brain and then kind of bounce off the surface and back to your camera and the the really cool images

that that you come out of this research showing for instance on this top right these are alternating

columns of the cortex that respond to the left and the right eye and so you cover one eye and you

show the animal something cover the other eye and show something and then you just subtract two pictures

of their brain and this is the picture you get in that subtraction so it's a little darker in some

stripes and a little lighter and other straight okay that's from the blood flow but you can also measure

those changes in the time in the time sorry you can measure changes in scattering as well with these

techniques of changes in the transparency of the tissue and there's work also kind of looking at

whisker specific stimulation so you can see really specific changes in transparency of tissue when

you tickle a one whisker versus another whisker versus another whisker mouse that are coincident in

time with changes in electrical activity in that same part of the mouse's somatosensory cortex

so if you need to measure um how fast the light's moving through tissue there's two ways you can do it

so we've already talked back here about what we call continuous wave continuous optical imaging so

you have a continuous source of light that isn't going up and down in intensity you shine it in and

you shine it in and just measure how much comes out the other side but if you want to measure how

fast light moves through tissue you can do two things you can use a time of flight device okay

which is what they're talking about at kernel which means that you put in a pulse of photons

and you wait at the detector and you measure at the detector how long but you don't just measure

how long you measure the entire distribution of photons as they arrive at that detector so because

you shine in like 10 or 1000 or a million photons and a little fraction of a second you get a

distribution of activation at the detector and do you think that they're using a lot of a lot of

these distributions of active activations from different detectors to sort of you know combine

all this into a 3d spatial tomography yeah so that's what they're alluding to and and that makes sense

because um let's go back to this picture here I think that's a good one so um their idea the idea

of these time of flight techniques is that instead of just measuring the average time that it takes

a photon so the mean of the distribution of the time of photons okay if you're shining a million

photons from here some of them bounce off and go off into space some of them go deep into the brain

and get absorbed as heat um some of them take the path of least resistance the shortest path right

and some end up taking the longest path and so the time that it takes a photon to get the detector

really like a tag of how deep that photon went into the tissue okay and so with the technique that I use

in my lab we don't get that measure we're just measuring the mean of the distribution so we

end up knowing like on average this is how long it took a photon to get from here to here and so

we can only assign the measurements that we get at our detector we can assign them to this whole

space and maybe we might assign them weighted by probability so like we know that they're most

likely to have gone through here and less likely to have gone down here um but what they can do

with a time of flight technique I hope you can start to see now is they can have kind of really

fast channels that go through the surface cortex so maybe the first quarter of the distribution

and they can estimate the median of that time and then they can have these really long

photons and they can assign the signal that they measure maybe that's intensity or the speed at

which those photons got through the tissue they can assign to different sections of the depth of

the brain so they have to they have to improve the kinds of receivers light receivers that they

have in order to do time of flight on each different portion of the receiver is that what's

what's happening or yeah so I forget I know that this is um

it's the it comes down to the receiver camera like what is the resolution

of the camera in your receiver that's going to enable you to do really precise time of flight

and other good yeah so this is what is going to be expensive and this is going to be the hard part

and it's what like so the system that we get in my lab um does a different engineering trick to

measure the speed and it's maybe a half a million or a quarter million system um at the scale that

that company would want to produce it um and the current available techniques I think of doing time

of flight measurements are also quite expensive so because you would need to be sampling at a very

high resolution so I think there was some really cool videos high resolution and a high frame rate

I mean that's right that's it's like one of those cameras it's like we're we're it's not just uh

it's not just um an eight megapixel uh camera it does you know like every frame is as good as a

photograph oh yeah so the um no I don't think so because actually these the detectors in these

systems are single pixels so they're they would usually be a single part of the head that transmits

with an optical fiber to a single detector and pulls all the light from that detector so I think

they have zero they have resolution in space of one okay and then they they spend all their

energy trying to record really quickly um but you're right that they're those demonstrations

from MIT which I think we're showing trillions of a second camera um watching light there's

like a video of yeah here it is so this is a video of someone introducing an experiment um

come on show us the real thing yeah here so they're recording frames of this video

at resolutions of the trillions of a second so they're able to slow it down and observe

the photons of light moving through this bottle wow when I showed you um our iPhone experiment

where we record light going into someone's head and record how much comes out if you wanted to

measure the time of flight like the scattering of the tissue you would need a camera like this

that can measure at that very very high frame rate okay so that's probably one of the advances

in these time of flight systems is that they have very fancy cameras

nice what else do you have in in your uh in your deck what other things you

are you talking about let me let me show you what we do with what our system does so our system

instead of um shooting a pulse of lasers it is a frequency domain system so it's kind of the middle

ground and in cost and the middle ground and in benefit so what it does is it modulates

the light going into the head at a megahertz frequency so it's going up and down in intensity

as it goes into the head at say 110 megahertz and that same frequency that's modulating the

light is driving a photo detector and the photo detector therefore is kind of expecting light

at that frequency but you also add in a slight different frequency called a heterodyne frequency

which is in the kilohertz range okay and then your photo detector can measure at kind of a

relatively shorter um interval measure the signal and it can pull out this oscillation

caused by the difference between the detectors and the light sources modulation frequency

and if you have multiple um if you have a helmet of ethners then you're going to have to

oscillate between the different transmissions and receivers so you're not

ruining it ruining the image of go ahead right yeah so um

any detector can only know light it doesn't know where the light's coming from or what frequency

it is so you have to kind of like turn each light on like Christmas lights or tag them in a certain

way such that the detector can separate okay and um yeah so oh so just to show you this these

frequency domain and the time of flight domain techniques they can measure slow changes in

blood and tissue but they can also measure these faster changes that happen at fractions of a second

in the scattering of tissue okay um let me move ahead a little bit here the

the right so the out the signal that gets measured is um you end up with an oscillation

because you're measuring the the frequency that the light was modulated at and therefore you can

measure the how how big that oscillation is and that's this estimate of intensity or how

much light went through the tissue but you can also measure the shift in phase of the oscillation

and that's what we use to estimate scattering because um the photons went into the tissue

at one phase of the oscillation and when they come out nearby they're at a little bit later phase

and the ones that came through more active tissue will come at a little slightly bit later phase

which translates to these trillions of a second delay in the photons moving through the tissue

so we can then use that to make these kind of maps like this of neural activity over time

and there's a bunch of boring kind of preprocessing that i've been working on this week of

pulling out heartbeats from the signals and filtering them in all sorts of ways

and then also averaging repeated presentations and stimuli to get rid of some of the inherent

noise in these signals the other thing you alluded to was mapping of different spatial areas

yep and this is where the consumer electronics are also going to probably start small and scale up

towards these kind of research grade um techniques where you can record from 30 or 60

light sources that are shined into the brain and maybe 20 or 30 detectors is the biggest

systems out there right now and so you end up with like 800 or 1000 different paths of light

between sources and detectors and if all the sources come on at once then all the detectors

get flooded with light you get a big image of the brain and you have no idea where anything's

coming from so you end up kind of like Christmas lights turning different parts of the head on

different times or modulating light at different frequencies that the detectors can separate after

so are they're showing yellow and red to indicate the approximate distance between you know turning

lights on from some sensors transmitters to others because there's a certain range that it's

you know you you put it in and so that means you could turn on you know looks like a good

section of the brain that as long as the sensors are spaced out far enough yeah so the um when

light goes into the brain because of how the brain's like milk right if you shine your flashlight

into a jug of milk um you'll only see like a bright spot maybe three or four centimeters away from

that light source because the scattering just just like a foggy day it makes all these photons

dissipate randomly in all directions and so um any light you shine in only goes about um

I guess it's like six centimeters to detectors about six centimeters away at the furthest

and so you if you shine a light on the left side and you have a detector there and you also have a

detector over here only that one nearby will measure any recognizable photons from that source

so that helps also to measure more areas more quickly is that you can separate out

um but you can have four lights come on at once on different sides of the head

so I one of the things I've been looking for on the side here while listening to you was it was a

question I asked a neuroscientist a while back and she never got back to me with the answer but

what I asked was um regarding chemo dynamism in the brain can you is sodium ion movement in

neurons attracting blood flow that was my question but I think you kind of answered that a little bit

yeah so the they're kind of two two echoes of yeah I wouldn't say so sodium transport is a mechanism

mechanism the brain uses to communicate and the when sodium gets transported it's because usually

a channel opens up through which sodium can pass across an energy gradient that was built up

and once it passes through that gradient now energy needs to be used by the cell to pump it back out

to recreate that gradient because in like 100 milliseconds it needs to do it all over again

and um in order to run those pumps you need ATP and in order to get ATP you need oxygen

yeah delivered from the blood and the other thing was sweat yeah and that one's a really

really weird and it's more recent that they discovered that like um when the neuron starts

to pull glucose and oxygen to replenish its ATP it through astrocytes it signals to the local

capillaries in the blood vessels to like let up a little bit and they they get bigger and they allow

more blood to flow to that area so it's like a pump then it's it expands and that and that sucks

in the blood is that yeah yeah okay yeah so it's not like a vacuum that's like pulling in blood

that the astrocyte makes but it just like your garden hose it lacks a little more area in that

space and that allows more blood to flow to that area okay um yeah no because I was wondering if

there was some sort of if the you know I don't fully understand how the electron electron

transport uh works but I was wondering if there's something else that was moving the blood around

in the brain if it's just you know an area opens up oh I see yeah no it is pretty passive that was

something I remember learning as well that it's not um yeah it's not like an active process

but it's passive change in the plumbing that that allows more blood to flow to one area versus another

okay um oh so here you can see we also would use structural images of the people um

or some atlas to try to recreate exactly which brain areas the light traveled through

and well one of that I'm sorry to interrupt you it started going off in a tangent so one of the

ideas that that people a lot of different people are talking about and I like to talk about this

is the idea that that your your your dendrites can uniquely your dendrites are little computers

and they can uniquely store you know uh memory information perhaps in the way they store ions

and the they they they might look it a dendrite might look like a a tree and it's in its branch

like structure and and it might it might have little hairs on these branches that that store

ions and different arrangements and and that might uh that might have enough sophistication to

to store unique memory patterns and and then those would be represented in in how you're

in sort of like the configuration of how your cell is holding uh how your nerve cell is holding um

an electron charge of some some gradient of some of some meaning that's not decoded but

but maybe that's where part of the memory is at and right and that's um it's kind of in between

the way we were thinking about how memory might be stored by like real connections between this

neuron and that neuron it's a little more fragile than that and then it's kind of the arrangement

of the trees of the of the dendrites yeah um yeah that's that it is is interesting the

the one good thing to think about is the the signal I'm just going back to this fun picture

of the swelling up cell um this is showing the cell body swelling up but in theory the around

the cell body is a huge dendritic tree here maybe this is an intern neuron but if this

was a pyramidal so there would be this huge arborization of of membrane that's the dendrites

and there's much more surface area in those dendrites than there is in the cell body

so I show these all as the cell body giving rise to the signal but it's really the dendritic tree

that would change its scattering properties and would be measured by this kind of technique

for whatever it's worth interesting yeah um

there must be some more cool stuff here yeah you can see that these contraptions in the lab

are pretty homemade still and they're still kind of honing in on the right form factors

of helmet to hold the sensors against the head they're uncomfortable because they use glass fibers

um to transmit the light effectively um and they're they need to be held against the head

so that the photons going in uh don't bounce across the surface of the skin uh hair is an

important consideration and that's another reason to use glass fibers because they can

kind of go in and around the hair um but you can see that um for this to become kind of a

product one might have in their house there these fibers are going to need to get kind of hidden

behind some contraptions or eliminated altogether um and so some of the head gear development

looks like this that we're using this kind of stuff in the lab now which is a flexible

kind of craft material in two layers that um is strung together with elastics so it's rigid

against the head but still kind of conform to different people's heads right yeah i remember

we saw i believe in and there's there's yeah there's a lot of new technology coming out in terms of

head gear so that's uh that's one of them yeah yeah the and and um there's really cool new stuff

of 3d printing specific shapes for people's heads and building the electronics or the optics into

those and i think that's where we're gonna head in the lab because then you can get really good

estimation of where you are with respect to their head nice um this is a boring story that took me

a year or two of my phd but in order to turn in those lights yeah maybe this is relevant but the

if you have four different lights coming on on different parts of the head and you don't want

detectors to confuse them you need to have them come on far apart from one another such that

no detector gets light from two of them yeah and this is a problem that you can get at computers

to solve and um that works okay so you can kind of assign sources and detectors in certain

arrangements so that you don't get crosstalked between them and the final step which is kind

of what you alluded to i guess is uh one of the one of the exciting things about optical imaging

is that you could in theory recreate an image out of it and so instead of just getting a signal over

time from a part of the head you could in theory recreate the depth of different layers of brain

activity or different areas with different sensors nearby one another yeah you can get better and

better spatial resolution because the path of light from each of these source detector pairs

are non-overlapping so every source detector pair has a slightly different part of the brain than

it goes through and the more sources and detectors that you have in an area the smaller and smaller

intersections of them you'll get and you can estimate better and better localized signal

in those tinier and tinier areas

um and so this there's a couple techniques you can use you can kind of estimate on average

what the path that the light takes through the tissue is just assume it's like a banana

between the source and the detector and then assign the data to any brain area in that banana

um but then the more complicated techniques would involve kind of modeling the dynamics of photons

through tissue of estimating the optical properties of the skin and the scalp and the

pia and the cerebral spinal fluid and also um kind of estimating the differential time that

photons that travel deep versus superficially would take and this is where these new techniques

that kernel is proposing to be developing will be really beneficial because instead of just this

green medium you could have a gradient in that space and the fast photons would be assigned to the

higher more superficial areas and the slow photons to the deeper areas so do you have to

complete all of this scanning because it sounds like a lot of extra work you got to scan a little

bit here and a little bit here and a little bit here and you have to complete all of this

within a short time window because those your your lymph lymph nodes and your blood vessels

and all your you know your brain is everything moves around right so you have to I would guess

there's a time limit what do you mean you're like uh you mean over the course of an hour the tissue

is going to move around oh I see like when you get the structural scan versus when you try to recreate

what's there yeah yeah that's funny because I have a an MRI of myself from 10 years ago that we were

I was just gonna use that for now but you're right that surely my brain has deteriorated

or grown or grown yeah in some places and and not always the um yeah that's really important

those are different parts of our university they're like totally different buildings

that you go get the structural scan um so there's actually one process where you take like a 3d

representation of where all the sources and detectors were in space on a head and you take a

3d object of a head and you co-register them together on top of one another because you

collected them at different times and so you use fiducial landmarks on the nose and the ears that

you can identify in both 3d models to co-localize them and then you use like the shape of the scalp

to try to fit the shape of those sensors so that you minimize some error so the output of the

sensors so what are you are you getting like a point cloud are you you're estimating the depth

of the points is it i'm just trying to picture the 3d data does it look like what we're looking at

in terms of yeah so that both of the two 3d datas are in this plot one of them is the point cloud

of red and orange and yellow dots and the other one is the gray scale 3d surface and so you have

a point cloud with three landmarks which are shown i think they're in green on the ears and you have

a oh yeah and there's a landmark on the nasium on the nose here too and you also have the structural

image and in that structural image you can identify the nasium and those two points here so

so yeah you have a point cloud and a 3d surface and you need to overlay them but the day so the

data you're getting from the sensors is that green data right not even know that there's actually no

data in this image the green is the um the estimated path that the light took when it got to the

dot to the detector and then you kind of go through is there a good example of that sure maybe here so

the data you get is just numbers over time it looks like e g data or or weather or stock market data

because anyone detector just measures how much the phase of light was delayed over the whole

course of the experiment every four milliseconds or 20 milliseconds so at this at this point you've

got depth data but you're not producing a 3d model you just have a bunch of 2d models yeah so for the

most part the the depth reconstruction is the least developed aspect of these technologies okay and

for the most part we would then project our data up to the surface because as you can see

the the techniques can't image that deep into the brain they can only measure in kind of the

surface area of the cortex anyway so projecting it up to the surface doesn't isn't that um have you

heard of of the some open water theory where you could use it ultrasound to extend the length of

your imaging is i might be wrong what do you mean well they so what i heard and maybe i maybe i

misunderstood maybe i misunderstood was that they were able to to extend the the the reach of their

imaging by by um shining the light through an ultrasound frequency um cool and they're able

to get twice as much depth there i i'm sure it's a video that that's was public maybe it's a long

now video i'll send it to you sure please yeah that's really cool yeah the the reason that this

depth occurs is because the white matter scatters like our axons and our brain um have fat around

them and they scatter the light the most they're the most like milk and so once the light hits

that white matter it just kind of bounces really randomly and very little of it arrives back at

the detector um so what's really cool about these frequency domain and time of flight optical

imaging techniques is you can actually measure like things that are happening at the speed that

the brain is working so one thing you can do is um that the brain picks up on rhythmic frequencies

out in the world okay and so you can flash uh one frequency on the screen like four or six hertz this

is the way some bci's are are used now that they'll flash different parts of a an interactive display

at different frequencies and you can attend or look to some of them so this is showing how

these time of flight techniques could be used for that kind of bci i guess that it can pick out

the peak frequencies of the things that you're attending to um in the display

um and then you can also record multimodal imaging so you can have eeg sensors built in

and around the optical imaging sensors which i think the the kernel white paper was proposing as well

and so you can use for instance like the alpha from the eeg as a regressor on the optical imaging

data which is a little more noisy or you could try to look for um um areas that correlate with like

larger slower changes in eeg activity and and there at the current i was talking about uh

MEG as well yeah so there there are other imaging technique is using these um

opm MEG devices which are really new right now and instead of having this large rigid MEG structure

that sits in a room in a hospital you can have a helmet with kind of uh MEG sensors that come out of

it and a Faraday cage to wrap around yeah and it still needs to be in a magnetically shielded area

so yeah there's they're talking about helmets that are Faraday cage helmets um

that's a way this is a way to combine the eeg and optical um we're working on kind of new

software and thinking about this depth reconstruction and how it maps on to existing

techniques for visualizing fmri activity and um yeah and since this i've just been working with the

emony python crews who are working in the same space trying to make tools for fneers as well

well do they have an emony javascript because i am let me i'll look it up

anyway keep going that was it that was my last slide so i have i can keep talking yeah you can keep

talking um emony javascript uh well we we were able to just um you know export anything going on

in python into a web socket and bring that into into the web page and then apply javascript

yeah so that's what i have this um educational website egedu.com that we made this last um

break christmas break and um one of its functionalities is it can take these streams of eeg data

and output them over a socket to other software or people have used it to control a drone um or a

robotic vehicle yeah and the sockets are really cool yeah because you can um we're finding that

you can combine sockets so you can pull in i'll even stop sharing all together here um you can

we can start to pull in multiple sockets from multiple users into one place

yeah well i mean there i mean there was um what was it there was the uh software from

if you can what is what is the guy's name uh his uh tim molan uh he has this entheon

a company called entheon and they make this uh open narrow pipe software um and um i think that

what it does is it it takes all of your any kind of data signal whether that's you know heart rate

signal or you know eeg um and it puts it on a single sheet a single page and it's able to

synchronize your signals with with your um you know it takes your uh what is it your your time

interval um and it uses the time interval to synchronize different kinds of signals so you

could have um basically um you know it's not a relational database it's the um it's the the

kind that that allows you to have you know raw signals that don't match up and synchronize them

by time and then you then you can make correlations between you know weird heartbeat patterns and weird

eeg patterns and weird eye tracking patterns and and and then you then you can you know maybe you

could use at some point you have all this this uh synchronous measuring of incoming sensor data

you know now we're now we're playing with with with optical imaging and maybe three three uh

uh 3d modeling with optical imaging and all these really advanced things but if we if then you can

correlate that to uh things that you're looking for maybe we're right now we're looking for our

is this patients it do they have blood oxygen problems do they have uh are they going to

is their vaughn von neumann's factor um you know acting up and causing them to get blood clots

is are they be seeing vasoconstriction where in a healthy patient who who shouldn't be having

vasoconstriction and are these treatments working can are these drugs working what's the impact of

these drugs in the vascular system and these are things that that you know fnears uh could be

part of an answer too but you know you get this you at some point you have uh we're going to see

like the low-cost augmented reality device would be like the oculus quest it'll be four hundred

dollars maybe it'll have eye tracking um maybe you'll be able to just clip on you know uh you know

your your afnears device and it'll do blood oxygen and maybe that's something people will

really want in this new post um coronavirus if you rather know what your stats were or people

that you're looking at um there is definitely room for you know that so there's the the the

doctors who've um have been talking for a long time about the the digital human being the virtual

human being that represents all your vitals that lets you know about a problem before you before

you get to the hospital there's a lot of value in that because that's you know potentially saving

your life um so you know I think that yeah for me to to have a digital double for me to have like

a bevy of sensors um for for my own personal use it's protected by HIPAA it's protected by you

know you're you know you're doing data collection but it's behind encryption you know home you know

homomorphic encryption or whatever and you so I've um I collect a lot of data myself and my

heartbeat and steps and exercise and I found that my physicians don't have time to consider all my

data like they there's a there's too much data that I can collect that my physiotherapist or

my family doctor is like that's way too much for me to consider right now I don't want to see your

your heart rate three times a day for the last year right um but when you have too much data I'm

looking to see if I get my hand in the picture when you have too much data I was like where's my hand

where's my hand the the thing to do with a lot of data is to apply neural networks because that's

where neural networks thrive is when you have a lot of data and if you could get the neural network

to basically take a huge amount of data but summarize that the the semantic meaning of that

data to something simple that a doctor can glance at and then make a decision to either

confirm the the prediction or estimate of the of the AI and turn it into a diagnosis because the AI

will present the most relevant facts after pouring through the mass amount of data and that's the

goal that I want to get to is not just having my data collected and presented as a virtual human

but having AI crunch it to its its most salient uh uh a point because right now they've put the

onus on the user to be like here's your heart rate every moment for the last year but what do

you yeah like I've graphed it it changes but I don't know what to do next you don't have a semantic

meaning estimate of what that data means and that's my family doctor and the healthcare system doesn't

yet either like they they haven't learned what they should keep track of and there's so much of

medicine I think is based on like you know this context we ask you so many questions to determine

if these numbers are relevant to your context and that's just really messy in terms of you

know how medicine works but we could maybe get better answers if we not only collect this data

but have you know do a lot of hard work to get to figure out how to apply neural networks to

crunch this down into semantic meaning that's relevant to your life and that's a huge like for

me that's that's that's a test somebody could be doing right now and who owns the data like then

it's a shared data sharing agreement and the user gets the data and the companies like who how do

we motivate that middle between the data and the knowledge um you know there are companies that that

are working on answers you know like Verily versus the Google company they're working on well how do

we do data sharing how do we how do we profit somehow um or how do we you know make it so that

like you know I've heard people you know what why does blockchain come up in the in this context

but the idea was well you know we want people to be able to share encrypted data we want that

encrypted data to be validated but still like only people you you own it in a sense that you

choose which doctors can see it it may be out there on the internet on everyone's server

but then only special people have the special glasses that can see what's in that file until

then it's like this really expensive public well you know blockchain data is a lot more

expensive than destroying it so I guess my my concern would be that the way things are going

that the the knowledge from that data isn't shared the value from the knowledge from the data

isn't shared with the producers of the data that's the concern that if I if there's some value in my

data um it should be to kind of and I and you want to motivate me to collect it it should be beneficial

for me it should give me feedback about my physiology or when I should see a doctor what I

should be eating or what I should be exercising it shouldn't just be used to make kind of higher

level decisions about the healthcare system um but yeah so how do you you have to sell the user

on the benefit to them and and users are not gonna you know there's there's too many stories of

companies and and just regular people discriminating against people oh this person has a coronavirus

let's let's go mob their house and oh let's like deny them insurance and oh they can't they can't

have insurance now because they have a freaking pre-existing condition and all this stuff you

don't you don't want uh uh your your medical data to to be known uh in in theory because of all the

all the weird irrational ways that people could attempt to discriminate against you and there's

like lots of examples of that so so yeah I don't know I think you really want to be able to control

your data and decide what hospitals get it but also to control it because hospitals go out of

business and then what happens to those records they're lost it's hospitals are going out of

business right now and that's it that's a real problem facing people if their data is not on a

some some uh server that they can transfer to another hospital um so and they gotta do all the

tests again but um I think we should wrap it up there this is a great call thank you we learned

a lot about optical imaging and 3d imaging or the 3d optical imaging but there's a lot more

there's a lot more to learn I sense and so there will be more talks in the future to dive deeper

into into everything that everybody cares about with with uh mathematical imaging there's so much

more to discover and talk uh about and thank you very much Kyle yeah thanks for having me

hopefully I'll go ahead and test the video now see if it recorded properly and we didn't just have

a nice chat it was good at least it wasn't I sometimes record lectures for my class and it

doesn't record at all and I've literally just talked to no one for now at least I was talking to you

okay all right talk talk to you later see you Michael
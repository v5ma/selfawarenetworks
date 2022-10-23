Neural Lace Podcast 1 

Apr 12, 2017

Original Audio here https://youtu.be/h2OLBUIQouI

Audio Transcription by OpenAI's Whisper

So, welcome to the NeuroLace podcast.

The NeuroLace podcast is all about neurophysics, which is the science and technology behind

NeuroLace.

Neurophysics is an umbrella topic that includes spatial computing, which is the technology

behind virtual reality, augmented reality, and mixed reality.

It's also an umbrella topic that includes deep learning artificial intelligence.

Some of the topics that come up in this podcast will be about computer vision specifically,

about applying deep learning to medical imaging.

It's the first podcast that will attempt to unite the topics of WebVR with NeuroLace

and quantum mechanics.

It's the podcast that dares ask how information in the networks of the brain are organized

and how we might query that information in any region of the brain with a brain port

that understands the transmission protocol of the brain.

I'm going to propose that transmission protocol on this podcast.

And we also talk about hacking into the brain's VR system to add things to your reality that

are not really there.

And I actually attempt to explain how we could do that in this first episode.

And then we also chat about, in the course of this podcast, talking about the kinds of

things we can download, information from the brain, like holograms of your experiences,

as if your eyes became camera, so we can capture what you saw and what you heard, and you can

share those experiences with others.

You could share those experiences in court.

We also talk about defending our brains against remote hacks, and we dare to boldly go where

no one has gone before.

So welcome very much to the NeuroLace podcast.

Your host is Micah Bloomberg.

The podcast is edited by Adam Alonzi.

And today's guest on the episode one, democratizing NeuroLace, is Shannon Aral, who is an AR-VR

enthusiast.

Shannon is also part of the Chronos group, developing OpenXR, and I wanted to talk to

Shannon in part because he's connected to WebVR and WebGL, but also because I'm interested

in creating an open standard for NeuroLace so the world can have it.

And that's why I'm giving it away on this podcast.

In future episodes of this podcast, we'll be talking to neuroscientists, and we'll be

talking to computer scientists, and we'll be talking to executives at major tech companies,

that are making EEG products, or AI products, or new kinds of web browsers, or just new

kinds of technology period, people who are working on converging technologies like applying

deep learning to all sorts of imaging, not just medical imaging.

And so there's so much technology that's converging, and it's going to result in amazing

forward progress in terms of technology and science and the social good that can be achieved.

So welcome to the NeuroLace podcast, I hope you enjoy it.

So let's go ahead and get started.

So Shannon, let's explain to people maybe what NeuroLace is, and at the root of it,

you could say, let's describe that it's an advanced form of just brain-computer interface.

Hey, thanks for having me.

All right, so yeah, my name is Shannon Norell, and I'm a passionate, I guess VR, AR, evangelist

type person, kind of been here for the ride for the last five years or so, and bringing

it to the next evolutionary step, which is past AR, which is going to be NeuroLace.

And well, you could almost say NeuroLace is going to become factored into VR and AR as

we know it, NeuroLace being a brain-to-computer interface.

So we are talking about, we have, there's a lot of great ideas on how to achieve NeuroLace,

and a lot of people want to keep their ideas a secret.

And so we were talking about that in terms of, if we give away how to make NeuroLace

on this podcast, what is our objective then, and should NeuroLace be democratized so every

company can know how to do it?

And my thought there is that we should democratize NeuroLace because we really want this technology

to exist in the world, and we do not necessarily know, because it's a very complex thing to

try to solve.

And so we want to encourage as many people to get on board with helping us to create

NeuroLace as possible so that we can have NeuroLace in our lifetimes.

I absolutely agree, and everyone in the space, so far as I've seen it, are very protective

of their algorithms, their techniques, I mean, talking about it openly, it seems to be like,

you know, protecting their IP, they're squatting on domains already.

You know, it's kind of ridiculous, because it is a difficult problem, it's a problem

that when solved will affect all of humanity, so why shouldn't we all share it?

And I think having an open source will be useful and required really to make it happen,

because we have secret algorithms that are operating, we don't know how, what's going

on in the background, it's going to slow the adoption rate of NeuroLace.

People will be suspicious of it, things like that.

So I think if we create some kind of an open source standard or groups that will work together

to make this thing happen, I think it's a good move.

So someone remarked to me recently that in order to achieve the kind of NeuroLace we're

talking about, or brain-to-computer interface we're talking about, you'd have to have a

number of, like, Nobel Prize-winning discoveries that would happen pretty much simultaneously.

So one of the positive outcomes of NeuroLace is we'll be able to do, it's on the way to

discovering it, we're going to have to revolutionize medical neuroscience, and that means, for

example, we're going to have to figure out the transmission, let's say that the brain

is organized like, the brain in the number system is organized like the internet, for

example, as many neuroscientists believe.

We're going to have to figure out what the transmission protocol of the brain is.

And if we do that, you know, from neuron to neuron, if we do that, it's going to enable

the kinds of products like artificial limbs that can connect to your nervous system or

reconnecting the spine.

It's not necessarily as glamorous as the science fiction concept of NeuroLace, but there's

a lot of practical medical applications to being able to connect a limb or reconnect

the spine, an artificial limb to your nervous system, so you can really even create new

kinds of limbs.

So these are really positive outcomes that can come from pursuing a direction of research

towards NeuroLace.

Well, let me just back up and say kind of some points I wanted to cover.

So solving quote NeuroLace, brain-computer interface, it is a difficult task, but yes,

it's something that needs to not be overthought too much.

There are certain baby steps we can take along the way that are low-hanging fruit that are

easily solvable now, okay?

The first path, so I'm sitting here, I'm looking at an emotive headset.

If you guys aren't familiar with that, it has, I think it has six EEGs on it.

They have one model that has six, another one has 14.

And what that does is it pulls in brain waves from different regions of your brain, okay?

Now there's a section called the homunculus.

It's kind of an idealized section of the brain.

It's not really a specific region, but it's an idealized version, a region of the brain

that will indicate things like facial expression.

It'll indicate like eye blinks.

It'll indicate, I think, body posture, hand position, if we are able to accurately read

these areas of the brain.

So these emotive devices are really quite primitive now, I mean, they're the six sensor

one, two, three, four, five, six sensor one effectively reads skin tension and small motors

up in the forehead and can infer things like eye blink, stuff like that.

So my first, sort of my first baby step I want to accomplish is to use an EEG headset,

NeuroLace Alpha 0.1 to solve the problem of not having a face in VR.

So when you're in virtual reality, you don't really have, your eyes are covered, you can't,

when you're looking at someone else in another virtual world, you can't tell if their eyes

are blinking, you can't see if their mouth is moving.

I think that these, that particular problem is solvable in the short run, okay?

So sort of reading facial expressions, I'd like to solve that first.

The next step would be to get more involved and get actual body position and arm position,

finger position by reading these sections of the brain.

Now how do we read these sections of the brain when, you know, everyone's brain is different

and the placement of the EEGs may be different each time.

So these are definitely problems we have to solve.

We have to solve.

So at present, what we have, and I've seen this in action, is a way of sort of recording

brain wave states and inferring meaning from that.

So for instance, let's say you put on a headset, you're in a blank, completely blank room,

and I put an apple in the middle of the floor, so all you can see is an apple.

And then I record your brain wave state as you focus on this apple, okay?

Okay, next, stop record.

So we have this capture of data of what an apple is to you.

Say I give the headset to Micah, he puts it on, looks at the same apple, we record his

brain wave state, okay?

So they should in theory be quite similar.

We don't know for sure at this point if they are, but presumably there will be an amount

of machine learning and pattern recognition that we can feed these data sets into to arrive

at what is the perception of an apple.

It's kind of, I kind of liken it to the old days of Dragon Naturally Speaking, remember

that app where you had to like train the, you had to train the interface to recognize

your voice.

Yeah, Dragon Naturally Speaking led to Siri.

Yeah, it's now Siri.

Now you can pick up any phone and talk to it and it knows your voice, you don't have

to train it, it's not a thing anymore.

Like I say, the sort of the first step is gathering up these patterns, building up a

large database of brain wave patterns, applying it to genetic algorithms, other machine learning

techniques that will in effect, be able to record what our perception is of certain objects.

So that you could put it on another person and they can think apple and you will know

that it's apple.

It's kind of like this, this read only extracting of data from the brain.

So step one is to do the facial recognition stuff.

Step two is to do the pattern recognition for known objects.

Step three of kind of a larger overriding step that we can be working on simultaneously

is how do we do a right into the brain.

So we're working on read.

Right is another thing that's really far out on the horizon, but for now I just be happy

with read.

But you know, presumably if we know exactly what the pattern, the brain wave pattern is

of you viewing an apple looks like, and we knew how to transmit that wave brain wave

pattern into your brain, you would visualize an apple without there being an actual apple

there.

It's long and short of neural ways, I think.

It's fascinating.

There's a lot of different people with a lot of different ideas about new ways to send

data into the brain.

For example, David Eagleman talks about there are strips that you can put like on your tongue

or on your back that the strip is a grid of electrodes and it's connected to a camera

and the camera is watching the world and takes that image and converts it into the electrical

grid of signals on your back or on your tongue.

And eventually your brain figures out how to see an image from that.

That is a way of inputting data back into the brain.

In fact, just using your regular eyes is actually putting data back into your brain.

So that's another input channel to think about.

Really fascinated with all the different ways, what Shannon shared is one way of tackling

the problem of solving neural lace, but there are people who are setting medical imaging

with MRI machines besides EEG.

So Shannon was like, let's go to the EEG approach and there are people who are putting

chips inside, they're cutting into the brain and putting chips inside the patients who

have epilepsy who need their brains opened up anyways.

And then so this has been sort of like a long dream of scientists who study the brain.

What kinds of sensors can we attach?

And once we have the sensor data, how can we analyze that data?

With new techniques like deep learning, with computer vision, we can create different kinds

of biosensors.

We can apply deep learning to these sets of data in new ways and potentially revolutionize

medical neuroscience by combining state-of-the-art AI with medical imaging of all kinds, not

just EEG, so that's my thought there.

We can totally start with some EEG products and come up with, and the results of that

action will certainly yield some really awesome new neural lace products, but it's not necessarily

the only direction the industry can go.

So it's definitely a broad topic and I hope we can cover a lot of those different ways

in this podcast.

Yeah, I mean, certainly a wet interface is more efficient.

I mean, drill a hole in the back of someone's skull, mount an electrode, it's in a known

location, you can calibrate it and train it to, you know, based on the exact brain and

it never shifts, it never moves, you know, but will society adopt that?

I don't know, jury's out on that one, I think not, but, you know, I'd probably be willing

to try it, but I don't know that other people would.

So I just wanted to say that I'm really interested in creating a sort of installed wet wear sensor

for the purpose of just research, but I was at CES 2017 and I saw this really awesome

new wireless EEG system.

So that's one of the things that companies are talking about right now is, you know,

we actually could do sort of a non-invasive neural ace that gets at the core of our brain

by using a variety of tools such as, you know, like they use ultrasonic sound for surgery

now.

So there are ways to stimulate the brain and read the brain like really deep without actually

cutting into the brain.

And so that's definitely an interesting topic.

Well, I mean, it's certainly possible to embed an electrode under the skin.

So let's say you have a tiny incision behind the scalp and you just insert the electrode

under this.

So it's directly on the skull.

So that's, you know, quote unquote wet wear, but it's not exactly as invasive as, you

know, punching a hole in your skull.

I don't know how pleasant that would be.

I think that at least my goal for a manifestation of version one of neural ace using EEG is

it's going to look like a baseball cap.

It's a baseball cap you pop on and it's got all the EEGs sensors in there.

Yes, there's going to be a ton of noise that comes out of those readings.

Yes, it's going to be difficult to sort of sift out the meaning from all that data.

But I think we've been making a lot of improvements and advances in computer vision lately with

the autonomous driving vehicles and whatnot.

And the LiDAR data that comes out of that is just so full of noise.

It's incredible how much noise is in that data.

But you know, our guys with doctorates and things have been working out great algorithms

to sift through that data and pull out the meaning.

So I think some of that learning, some of those learnings can be applied to EEG neural

ways.

And definitely, you know, if you look at the supercomputer that NVIDIA is doing for self

driving cars, that's a really mean and serious machine.

And they're still figuring out how to do it.

So basically, their computer has all these sensors, LiDAR, like was just mentioned, eight

cameras besides that, and a whole bunch of other things.

And it's figuring out not only the spaces around the car, but also it's figuring out

what the objects are.

Like there is a, it's saying, well, this is a cat and this is a dog and this is a car

door and this car door is going to open or this car door is going to close.

And there's a car across the street that's moving at such a speed and it's going to intersect

the path in front of you.

These are things that they're having that require a supercomputer that's going to be

installed in the trunk of your car for driving.

But if we could take, for one minute, if we could take those self driving cars and apply

them to the task of neuroscience, we could probably create a revolution in neuroscience.

So those are the kinds of things that keep me up late.

Yeah, I've seen samples, I was at a talk recently at Stanford, and it was on LiDAR, a single

photon LiDAR stuff.

And an image that it pulls out was just literally a cloud of, looked like a cloud of dust.

It was just like smeared, you couldn't make anything out of it.

And then they did a single pass filter of it using their advanced algorithms.

And voila, embedded in that was, you know, a picture of a dog or whatever it was.

I forget what the three, but a three dimensional picture of this thing.

But on the first pass of it, it just looked like garbage.

That's what I anticipate the version one of alpha of neural lace using EG will just have

this cloud of garbage that comes out that we need to sift through to have, you know,

true meaning of.

So it's doable.

I think it's doable.

I think we just don't want to overthink it too much.

So some final thoughts in terms of, you know, recently in the news, we had Elon Musk announced

that he has a new neural link initiative.

And so suddenly neural lace is a popular topic again.

So but big companies that are thinking about jumping into the neural lace game, what are

some things that that they might need to think about in terms of, you know, making products

that have that can scale and have broad commercial value.

And do you have some thoughts on that?

Well, well, at this, at this phase, we're such early days, I mean, we're just thinking

about figuring out how to do it, you know, and if it can be done, then we have to worry

about, you know, ethics and, and, you know, appealing to a broad range of people, not

offending people, not letting them think we're using their, their thoughts to market, things

like that.

I mean, so, so ultimately, there will need to come into play some kind of standards.

I'm actually involved with the Kronos group, doing some stuff with open XR happens to do

with VR and AR.

And also the IEEE, there's some standards dealing with virtual reality, augmented reality.

So in particular, with augmented reality, let's say you have eye tracking, and you can

see where people are looking, you can see if they look at the Coke can versus the Pepsi

can.

Now, do we allow that data to be transmitted to marketers with personally identifiable

information so that we know, you know, to always put a Coke ad in front of Shannon,

you know, probably not.

So we will need to develop standards having to do with brain to computer interface.

So do we, do we let personally identifiable information be sent with thought patterns

to servers to be processed?

No, definitely not.

So we'll need to implement standards.
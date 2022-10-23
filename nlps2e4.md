The Neural Lace Podcast Season 2 Episode 4

Listen to the podcast https://youtu.be/DlfAOM4dx90

About the podcast https://medium.com/silicon-valley-global-news/fnirs-functional-near-infrared-spectroscopy-the-neural-lace-podcast-season-2-episode-4-8acbacf53af9

Audio Transcription by OpenAI's Whisper

Hi, this is Micah Blumberg with the Neuro Lace Podcast, and I have a special guest here with

me today who's going to talk about functional f-nirs, or Functional Near Infrared Spectroscopy.

His name is Jonathan Toomim, and Jonathan, you have family history with f-nirs.

Did you want to?

I got grandfathered into this project. Back in around 1992, my grandfather got really

excited about f-nirs as a potential tool for biofeedback, so he built a device and

tested it out, and he found that it does actually work, that you can control your brain blood

oxygenation. So f-nirs, just for the people who aren't aware, f-nirs is a tool for measuring

cerebral blood oxygenation using light. It takes advantage of the fact that blood changes

color based on oxygenation, and that the human body is relatively translucent. It doesn't

absorb that much light, it mostly just scatters it around. So by shining light through a person's

forehead, through a person's skull, into the brain, and seeing how much of that light gets

absorbed in different wavelengths, we can measure what the oxygenation of the blood

in a person's brain is.

So f-nirs sort of came to my attention because of a talk by Mary Lou Jepsen. She was talking

about combining the near-infrared sensor technology with ultrasound. Have you done any research

into her technique? I'm just curious off the top. This sort of conversation is obviously

not going to be about her, I just was curious.

Yeah, I've done some research into it, and she is not revealing her secret sauce. Consequently,

I have no idea whether or not her secret sauce is real or if it's fiction like there

in us. So it might work, it might not, I can't say.

So what can neuro-attack enthusiasts and neuroscientists do with f-nirs today? What are some of the

things that are being done?

So something that can be done with f-nirs is biofeedback. Another thing that you can

do with it is pure measurement. So f-nirs is sort of like the poor man's fMRI machine.

It gives you the same type of signal, qualitatively the same signal that an fMRI will give you

if you are doing some experiment to try to measure what part of the brain's activate

in some task. But instead of costing $3 million like an MRI machine does, the f-nirs machine

can cost hundreds of dollars or thousands of dollars. So that's one application. That's

not what my device is optimized for. For that application, you want a lot of different voxels.

You want to have like a 2D map of activation and you don't need that much temporal resolution.

You also don't need that much precision or sensitivity to small changes. My device is

optimized for the biofeedback application, which is, biofeedback is where you're measuring

something about a person's body and giving them real-time feedback about that measurement

and encouraging them to use that information to learn how to control that part of their

body. And biofeedback has been shown since the 60s and a little bit earlier than that

to be effective for controlling all sorts of weird things like your finger temperature

or your heart rate or the amplitude of your heart rate or your skin conductance like

how sweaty your hands are. But it can also be used to guide people in order to change

their mental state.

Okay, so the question was, what can fMRI be used for? And it can be used for basically

two different types of things. One application is just for measurement. You can do science

with it. You can identify what parts of the brain are activated for any given task or

see how heavily they're activated. Basically, fMRI is a poor man's fMRI machine. So it

measures the same type of signal that fMRI does, but it does so with much lower resolution

and also much lower cost. Instead of costing a few million dollars, you can make one of

these or build one of these or buy them for a few hundred dollars to a few thousand dollars.

Although the high-end research ones are usually around a hundred thousand dollars or so. The

other application is what I've designed my device for, which is biofeedback. So biofeedback

is what happens when you take some measurement of a person's body and give them real-time

feedback on that measurement, real-time feedback on that aspect of their body. And using that

feedback, you can teach people how to control that aspect of their body. So in the 1960s,

people started doing biofeedback with measurements like finger temperature. By getting feedback,

you can learn how to make your finger warmer if you want to or colder, which is kind of

weird. And it seems like it wouldn't be very useful, but it turns out it is actually useful

because finger temperature is a metric that tells you something about your autonomic nervous

system state. It tells you about how much of a fight-or-flight response you're in or

how much of a rest-and-relax kind of state. So by learning how to control your finger

temperature, you can learn how to control your anxiety levels and learn how to manage

your mood and mental state. And this is something that has surprised FNIR's research, which

is that you actually can control what your finger temperature is doing or what your blood

vessels are reading in terms of scanning something on your forehead.

Yeah, yeah. So you can do this with your finger. You can also do this with blood flow in your

cerebral nervous system, sorry, central nervous system. You can control your brain blood flow.

And that seems like it might be useful. Like, hey, you know, if I could get more blood flow

into my brain, maybe that would make me be able to think better and concentrate better.

Something like that. You might think. It's a reasonable hypothesis.

So I have a question. So they did this experiment, which is making the news for the past couple

of weeks, where they were measuring the audio cortex and they were having the audio cortex

manipulate something in a computer program. And then the neural network was analyzing

the computer program that was being manipulated by the audio cortex and decoding words. Do

you think that if your brain is manipulating your blood flow that you could somehow communicate

with that, that that could be translated? Yes. And that has been done.

Oh, really? Yeah. So it is hard to do that in a useful way. So in the fMRI literature

or the FNERS literature, there's this thing called the hemodynamic response function.

So if there's a very short burst of neural activity, neural metabolism in an area, you'll

see a response to that in terms of blood oxygenation and blood flow. But that response

lasts for about 15 seconds. And that response is delayed by about two seconds. There's actually

a very small dip in oxygenation followed by a very large increase in oxygenation that

starts between two to 15 seconds afterwards. And so trying to deconvolve that hemodynamic

response function and get the basic neural activity with high resolution is very difficult

and nearly impossible. So to try to read somebody's brain and try to get useful brain-machine

interface type information out of a person's brain and control like a mouse cursor or something

like that, it's possible, but you end up getting a low bit, excuse me, a very low bit rate

with the FNERS approach or with fMRI. But if you do something like implant electrodes

on a person's brain, you can get pretty good signal and then you can actually start to

do something useful. Okay. So also in January out of Sweden and Germany, there was a study

about EEG and you could get good spatial data if you do like 256 electrode cap. What kind

of, how does that, I wonder, I don't know if you've looked into that, but I wonder how

does that compare to the kind of spatial data you could get with FNERS if you had a sort

of cap around the full head? Yeah, I would expect that the FNERS approach would give

you better spatial resolution if there was as much engineering effort that had been invested

in FNERS as has been invested into EEG. The reason for this, there's actually a few reasons

for this. So one reason is that the signal versus, the signal strength versus distance

for an electrical signal falls off more slowly than it does for the light signals. It's basically

a roughly inverse relationship, one over X relationship versus distance for the electrodes,

whereas for the light signals, it's E to the negative X. So you have a much better fundamental

ability to get spatial resolution just because of that. With EEG, you end up getting like

if you have an electrode on the vertex on like the absolute top of your head and another

electrode on your ear. That's going to pick up neurons that are on your forehead, on the

back of your head, it's going to pick up neurons from all over and it'll give you a slightly

different contribution from each neuron or from each group of neurons, but it's going

to not be spatially specific to either of them. And so those 256 electrode arrays have

to do a bunch of subtraction and analysis, linear algebra analysis in order to try to

tease out the different signal contributions from different locations and it's a hard task

to do. It's also very complicated because the orientation of each neuron matters and

synchrony of the neurons that are firing together matters and so forth. So yeah, solving

that problem is very difficult for EEG and it's taken 30 years of work in order to be

able to get to where we are now, but we're making small incremental steps. And with Heffner's,

yeah, if you just put enough optos, put enough LEDs or laser diodes and photodiodes, you can

get an inherently spatially rich signal instead of trying to extract spatial information from

an inherently noisy and messy signal. So I wanted to get your sort of expert opinion

on, so okay, so Jean Rintol talks a lot about the electrical impedance demography, but she

also talks about combining approaches with, like, Heffner's and EEG. What do you think

about the, how daunting is that task of combining maybe the spatial EEG program with the electrical

impedance demography with Heffner's? Is that a huge task?

Yeah, I think-

I mean, because we're talking about completely different types of measurements, unstructured

data.

Yeah. So it's already very difficult to solve what's called the inverse problem. It's very

difficult to figure out what the physical object is producing any given signal if you

understand how to go from how to model, like, the effects on a signal from a physical model.

So if we had multiple inverse problems that we have to solve simultaneously, like, that's

just a mathematically far more complicated thing to do. It does give us a lot of leverage.

There's, you know, some new tools that could be developed in order to combine that data,

but figuring out how to do that is going to require a lot of math and a lot of public

experimentation and deduction.

So for example, the model that I led a team that we brought EEG into WebVR, and I just

noticed that we just kept- it seemed like we just kept abstracting away useful or the

actual data over and over again in order to make our 3D representation. And it seems like

at that point, if you're taking the end model, you've cut away so much of the original data

that you might be introducing- you are introducing lots of artifacts.

Yeah. Yeah. So what often is useful in neuroscience and frequently done is co-registration of data.

So you might have a structural MRI image that you take of a person's brain, and then you

do your source localization for EEG, and you overlay that on top of the structural MRI.

You can also take a structural MRI and use that to enhance your model of how electrical

signals would propagate within the brain. And instead of using a generic brain, like-

yeah, instead of using a generic atlas model brain that's based on averaging a bunch of

different people's brains together, you can use the actual person's brain and model the

electrical connectivity inside that. And that can give you a more advanced or more accurate

representation. But trying to take multiple noisy and difficult data sources together

and try to create something that's better than all of them, that's difficult. That has

been done. That problem has been solved for time series signals with Kalman filters or

other kinds of one-dimensional signals, where you have a few different one-dimensional measurements

and you're trying to figure out what the true value is given that you have several noisy

measurements. So for example, you might have a drone that's flying and you're getting acceleration

data from an accelerometer. You're getting GPS data, which has absolute accuracy, but

some error. You might also be getting a gyro. You might be getting an optical measurement

from a base station to an LED that's on it. And each one of those measurements has some

error and some uncertainty associated with it. And the Kalman filter is engineered in

order to take all those uncertainties into account and to provide an estimate of the

true position and velocity of the object that is more accurate than any of the one measurements.

And so the idea that I think Jean has is to develop something kind of like a Kalman

filter for brain imaging to take the uncertainties in each of the different measurement methodologies

and to try to reduce them by mixing and matching properties it can observe elsewhere.

I thought that we might take the unstructured data and try to represent it in 3D and maybe

create a time series for each, like a time stamp for each stage of the data being collected

from the sensors and run a neural network and try to look for correlations with the

neural network. Yeah, you can always just run a neural network on it and see what it

comes out with, but then you don't know what it's doing.

See, I would want the neural network to predict reoccurring patterns and to help point out

patterns and then you'd need to associate those patterns with. In my mind, I would want

to do something that we're associating it with user activity, what someone is doing

or you're associating with environmental, like maybe evoked potentials in the environment

or maybe if you could look for the evoked potential of a tree if someone is seeing that

in VR or something. Yeah, getting the evoked potential of a tree is going to be like trying

to distinguish a tree from a person is going to be very difficult just because, well actually

maybe a tree from a person might be easy but like tree from, I don't know, a wall or shrub

or balustrade or skateboard. It might be really hard. Yeah, because most of those objects

are encoded in very nearby areas, basically the same module of the brain but in different

subnets of that. So you're talking a millimeter of level resolution in order to be able to

get that kind of discrimination ability out of it. But if you're comparing a tool versus

an inanimate object, those are actually represented in different parts of the brain. So you might

be able to tell if a person is looking at a tool versus an inanimate object versus an

animal or human. You see big regional differences in brain. Yeah, that's going to be more like

a centimeter resolution that you need for that, which is in the range of what you can

get with Hefner's. So do you subscribe to like the semantic map outlined at Jacqueline's

labs, like how he's sort of like that research? I don't know how it works exactly across individuals

or semantic maps drastically different between people and like in terms of what areas of

the brain are. I'm not sure exactly what you're referring to. Jacqueline's lab was like he

did the fMRI imaging and he said, okay, well, you have, you may have like a dog and a cat

and they may be closely associated spatially and a house and a motorcycle would be closely

associated with each other spatially. But the dog and the cat would be far away from

the house and the motorcycle because the semantic meaning has a spatial sort of distribution.

Yes, I'm not sure what you mean by the semantic map stuff, but the observation that different

types of objects are represented or encoded in different parts of the brain is a fairly

old one and it's been replicated a few times. There are, for example, people who have had

lesions who have lost their ability to visually parse all tools, but they have other types

of objects intact and their ability to visually parse them.

So I looked you up online and you were doing something with trying to make blockchain transactions

or Bitcoin cash transactions a lot faster with BitTorrent and BlockTorrent. And use your

datagram protocol. That seems like very innovative thinking. You're like, well, how can we break

this problem down and make the transactions more efficient? I'd sort of like to hear a

little bit about that, but also I'd like to hear like, if the brain is like a network,

what is the transmission protocol like between different bunches of neurons? Is it more like

use your datagram protocol or more like TCP?

I would say that it's more like a factory with an assembly line. And you've got a bunch

of different workers. Each worker is doing one specific task. And so they might be drilling

a hole in a component at a certain position in order to make room for a screw. And so

each time somebody gives them a part, they look for the right places, drill that hole

and they drill it and then they hand it on to the next person. So like the information

that is present in an action potential that arrives at a neuron is that the previous neuron

observed some feature or thinks that a certain action should be taking place. And then the

next neuron will integrate that information with other neurons that are providing other

components like for example the screw and assembling it into a new signal. And these

signals are all just present or absent or degree of presence. They're very limited

signals. But each one does a small step and then passes it on. So yeah, I wouldn't say

that it's so much like UDP because UDP gives you 1,500 bytes per packet or per datagram.

Actually up to 64K but whatever. Gives you a lot of data per packet whereas neurons are

just giving you a simple present or not present or variations of their kind of signal.

Okay. So I mean do you think in the transmission of neural activity, do you think it's just

on or off? It's either active or it's not? Or do you think that there's some communication

in the amplitude of the signal that's being sent?

So if you're talking about axons, then yes, it's just a digital binary signal. It is a

little bit more complicated than that because A, timing matters. B, phase matters. Sorry,

by a timing I meant frequency. Like how often the action potentials come. That matters and

also the phase matters. There's a really interesting circuit in the auditory processing pathway

really early on in the brainstem that has a bunch of different parallel neural fibers

each of which is firing at the same time. And you have two sets of these fibers. One

is firing based on sounds that came from the left ear. The other one is firing based on

sounds that come from the right ear. And these parallel fibers are of slightly different

lengths. And by having slightly different lengths of two different sets of fibers from

each ear, you get either the signals from the two independent parallel fibers arriving

at the same time or at different times. And when they arrive at the same time, because

the lengths of those axons is just right, that triggers the next neuron in this circuit

to fire. And this serves as a phase detector. You can tell what the phase difference is

in this auditory signal between these two ears by looking at this timing information,

by looking at these parallel fiber circuits. And that's a really cool way of doing it.

And it just shows you that the brain likes to encode information by increasing the number

of parallel signals and having each signal be as specific and unique as possible.

So if a neuron is connected to 10,000 or 200,000 other neurons after it fires, how does the

brain sort of guide the signal from the neuron that's firing to the subsequent neuron? Like,

what I'm saying is a neural circuit is a pattern of neurons that fire in a cycle. But how

do they fire in a consecutive manner? Yeah. So I think that something that has happened

a lot recently in humans is that we've gotten really good at filtering out people who disagree

with us. Social media has allowed us to form these bubbles that are self-reinforcing. When

people are saying things that we agree with, we like them, we subscribe to them, when they're

saying things we disagree with, we just prune away those connections from our social network.

And this is actually very similar to the way that brains work. Brains have, well, there's

this principle called heavy in learning. Neurons that fire together, wire together. So when

a pre-synaptic neuron fires an action potential that pushes the post-synaptic neuron over its

activation threshold and causes it to fire, that post-synaptic neuron goes through some

biochemical changes involving calcium and second messenger pathways, crab, et cetera.

And those cause that post-synaptic neuron to strengthen that synapse. It makes that neuron

click like on Facebook and say, I want to listen to you more often. I like what you're

saying. So that just increases the odds that it's going to be the neuron that receives

a signal from the neuron that fires? So not only does it increase the odds, but it also

causes these sort of social media bubbles that you see or the neural equivalent. It

causes local circuits that respond strongly to very specific types of stimuli and that

filter out stimuli that don't match the specific set of criteria. So you might have a set of

neurons that respond very strongly after this heavy in learning. They might respond very strongly

to checkerboard patterns that are composed of red and black. And eventually, this later on in

that pathway might respond to chessboards than it might, yeah. Okay. So I have this hypothesis

that maybe if a neuron has a low enough electrical potential, like a very negative electrical potential,

that it might be the next neuron to receive a signal from a down neuron. So like there's

some sort of electromagnetism happening where the action potential is an electrical event

that's rebalancing the electrical activity of that neuron. And it's sending the signal,

I think, potentially to the neuron downstream that has the lowest negative or the highest

positive or something like that. So just an idea. Yeah. No. What tends to happen is that

neurons will do analog summation in their dendrites. Like when they're receiving the

signals, they allow the excitation to some in a very analog fashion. And then if it gets

above the threshold, it triggers the cell body and the axon to go into an action potential,

which is the digital signal. And once that happens, once the action potential is triggered,

all of the downstream neurons will get the same signal. There's no filtering of signals. It just

delivers it to everything. And then you go through another step of this analog summation.

Not all of the downstream neurons will have enough excitation from other sources to trigger

them to go into action potentials and continue on the process. You usually need around 10 or 50 or

so simultaneous action potentials from different neurons in order to trigger a single neuron

to fire. It's usually around 3 millivolts per EPSP, per excitatory postsynaptic potential,

at exactly the location where the synapse is forming. And then that decays spatially,

so you get a much weaker signal by the time they're actually integrating.

Do you buy into the predictive coding theory of the idea that your memories are becoming

your predictions of what's there? I don't know if you know Jeff Hawking's work.

He talks about, recently he's been talking about how neural columns are acting like grid cells,

but they're representing the objects in space and their features and how those features are

correlated. And if you pick up something and move it around in your hand, it's helping to track

the orientation of that object and what your fingers are touching it and putting it together.

And then maybe your workspace of everything, your environment and the orientation of every

object in your environment and every leaf on the tree is being tracked by different

columns in your brain. Would you buy that? Yeah, I think there's a lot of

truth to that. A person who is imagining something activates the same parts of the

brain as a person who is seeing the same thing. There are differences in intensity of activation,

but that visualization or that expectation primes those neurons and makes it more likely that you're

going to see that thing. There's some fun experiments that have been done where people have written down

ambiguous words, like a word that might have a letter that looks something in between an R and

an N, for example. And depending on the context, you can either push people towards interpreting

that as an R or push them towards interpreting it as an N. You can construct a sentence or you can

use a word previously in 15 minutes earlier in a conversation, and that will influence

how people parse that letter. For example, bar versus band, you can have as the question. So,

yeah, these expectations of what kinds of stimuli you're going to get affect how your

low-level systems process sensory data. There's actually more feedback in the brain,

in the visual system, than there is feed forward. There's more information coming from your higher

perception areas and your abstract association areas down to your basic visual system than there

is information coming from a visual system to those abstract areas. Is something like 10 times more?

I don't know the exact ratio. I heard it was more like twice or like 60 percent more. I don't

think it's quite 10 times. I don't think it's quite 10 to 1. But yeah, it's large, significant,

and it's how we see, it's how we do everything. And it's also, interestingly, something that's

completely missing from the neural networks that computer scientists are making these days.

Pretty much all of the AI research that's being done right now is completely excluding any feedback

circuits from their networks because feedback is really hard to get right. It tends to make the

system more unstable and instability is a very common problem in AI research these days.

I saw a talk about brain-computer interfaces. I think it was a talk by Valovic at GDC in there.

And they seemed to, like, they were saying that, you know, basically the neuron is the basic unit

of computation. And throughout the explanation, I was like, you know, they're making it seem like

it would be really easy to start reading emotions and reading thoughts. And there's a lot more

complexity to the brain here. The dendrite itself might be, some people will compare it to a computer.

Maybe we could talk about the sort of the scale of the challenge of trying to do what some of these

people in brain-computer interface are imagining they can do in terms of reading the mind and

creating, you know, nerve gear. That's a monumental sort of problem to attack with hidden depths of

complexity that they may not even be realizing. Yeah, so I think a lot of people think about neurons

as abstract nodes in a graph, in terms of like graph theory, where they, where you can just represent

a neuron and all of its structural complexity as if it were just a circle. And you're connecting

circles to each other. And that is the connectome, that is all the information you need to know.

And so from that perspective, you can create brains using neural networks where you're just

doing simple matrix math, where each element in a vector might represent one neuron's activation at

one time. And this approach is really powerful and allows you to do some very fast and efficient

calculations in AI, but it has very little bearing with how the brain actually works.

The dendritic tree is very much an analog computer. I mentioned that the neuron as a whole is

digital, but the dendrites are very analog and very sensitive, and they have a lot of different

dynamics to them that are difficult to quantify in that circular neuron model. So one thing that

matters is the diameter of the, of the dendrite. The larger the diameter of the dendrite, the better

it is at conducting signals to distant regions. Short of the diameter, the more quickly that

signal will decay spatially and temporally. And the reason for this is the axial diameter increases

the, the conductivity down the, the dendrite, whereas the surface area increases both the

capacitance and the leakage current. So having a high surface area to volume ratio means that

the signal doesn't obligate very well. And this isn't just like some, you know, coincidental

accidental fact. This is something that neurons actually use when they are choosing connections

or when they are evolving their processing systems. They have usually one very large apical dendrite

that serves as like the trunk of the tree. And then they've got branches that are more and more

finely sized in order to integrate information. And if you have two synapses that are making

them, or two synapses on the same part of that dendritic harbor that are nearby in terms of

either being both on the, on the main apical dendrite or if they're on the same part of the,

the small dendrites, those synapses will add together much more strongly than two synapses

that are very distant. And you can also get, this is fairly rare, but it does happen. You can also

get action potentials within dendrites. The voltage-gated sodium channels that are necessary

for action potentials on the axon are also present in smaller concentrations in dendrites. And so

you get positive feedback locally. And you can have back propagation of signals. Yeah, you can,

there is also some back propagation. There's, again, the long-term potentiation stuff that I

alluded to earlier with the heavy learning, which is something that does not happen in AI neural

networks. You also have more than just one type of signal. It's not like you have excitation and

inhibition. You have several different types. You've got, you know, you've got glutamate,

you've got glycine, you've got GABA, you've got serotonin, dopamine, norepinephrine, you've got

a bunch of different types of signals. And they have different representations or different

interpretations of those signals. Even if you're just looking at glutamate, you have three different

classes of glutamate receptors. And two of them are purely, instantly excitatory. But a third one

is only excitatory if the neuron's already excited. And it's not instantly excitatory. It was not

purely instantly excitatory. It's long-term excitatory. It causes that neuron to be more

sensitive for a few hundred milliseconds to a few days after that excitation. And trying to model

all of these little things that tweak the function, each of which can be used to enhance memory or

depress memory or to add some specificity or sensitivity. Try to model that. I've heard

some hypothesis, like from Jeff Hawkins in particular, that the dendrite could be used to

store a memory of events, to help the timing of when a neuron fires and help the decision of

when a neuron fires in response to criteria. I've heard a neuroscientist whose book I read

talk about how a neuron could be considered a criteria detector or a coincidence detector.

And I sort of like, I don't know what you think about this, but I sort of like to

describe to the idea that maybe a coincidence in the brain is the basis of a bit of information

that makes up, like if the world that we see when we look around was made up of,

was constructed of bits of information, if it was like, I don't know, I like to imagine that

there's many layers of our brain rendering reality. Maybe at the baseline it's just like

simple frequencies and they're not, I don't know, I'm just imagining, like before we get to this

level of rendering that there's lower levels of rendering. And then like, this is like really far

out obviously, but so I guess when I'm sort of going back to something that's more coherent.

So what do you think in terms of like the dendrite being, the sensitivity of the dendrite being

essential to how the brain processes information and maybe how the brain sort of communicate

this to researchers in the tech world who are thinking about what is the importance of a dendrite

in terms of what it does for the brain. And maybe in terms of what is its output, what is its,

it's affecting the, at some point it's affecting the ionotropic brain, the electrical balance

of a certain region of the brain. And maybe it's affecting like, I think at the neurotech

meetup that we were at, there was someone talking about how what the basis of memory

requires some sort of attractor of some sort of signal attractor, some sort of electrical

attractor. I don't know if I'm recalling that correctly what he said, but what do you think is

the sort of like the basis of memory and cognition in terms of, in maybe data, in terms of like,

I mean just maybe speculate about how the brain is detecting information and then moving it around.

Yeah, so I think the coincidence detector is a good starting point. The brain definitely has

systems in it that are built for detecting coincidences and rewiring the neurons in a way

to enhance the detection of these coincidences. By coincidence, what we mean is multiple things

that happen at the same time. And coincidences are, you know, correlations, they don't necessarily

imply some causal relationship, but causal relationships often come at the same time.

So by making a model of the world based on what things coincide, what things happen at the same

time or in the same location, you can often generate neural hypotheses about what's going on,

which can either be strengthened or weakened later on from subsequent data. So yeah, coincidence

detection happens. The third glutamate receptor that I sort of alluded to, the NMDA receptor,

is actually very much a coincidence detector. It only responds when you have multiple action

potentials in a nearby portion of the dendrite that happens in a few milliseconds. Yeah,

a few milliseconds and a few hundred microns. A microns is a distance. Yes, yeah. I mean,

if you have it on completely the opposite ends of the dendritic harbor, then the excitation

isn't going to propagate across. I mean, are there instances where you may have your ears

are on the opposite sides of your head, but is there maybe an NMDA receptor that might fire

because there's a wire linking that your ears together at some point? Right. So this isn't

spatial distance in the world. This is spatial distance on the dendrite. Oh, okay. Yeah,

right. The action potentials have to be hitting the same neuron in nearby parts of the dendrites

at roughly the same time in order to activate that NMDA receptor. And once that happens,

that NMDA receptor causes that synapse or that set of synapses to become stronger and to be more

sensitive in the future. And yeah, that correlation. I'm just like, so if you built, if we built a

robot, right, that was that basically it built a model of the world based upon incoming coincidence

patterns, sort of like, ideally, I would think that if the brain builds the world based on

coincidence patterns, the image of the world that we perceive, that I perceive, that, you know,

we could, you know, put cameras and, you know, for eyes for this robot and microphones for ears

and run some sort of program that takes all the coincidence patterns that this robot notices

from the world and have it build the model of the world. One that we could make perhaps,

you know, render for someone in virtual reality so we could see it here what the robot has

constructed. What do you think about that? Yeah, I mean, that kind of thing is possible and it's a

large portion of how human brains or animal brains work. Unfortunately, it's not the only thing that's

going on in human and animal brains. A lot of the wiring in the brain is actually hard-coded.

The visual cortex has the structure it does, independent of sensory stimuli. And sensory

stimuli is necessary in order to fine-tune it and to improve some of the networks. But even in the

absence of vision, you still get pretty much the same or mostly the same network. And so what we

can see in the brain is that we have this algorithm for detecting coincidences and becoming more

sensitive to these coincidences and also for making sure that different groups of neurons

don't all encode the same coincidence. There's also what we call lateral inhibition going on.

So to have as many different dimensions of sensitivity to coincidences as possible.

So that's one side of things, but it's not the whole story. There's also

just the nuts and bolts wiring diagrams of which areas receive connections from which other areas

and what the different layers of the cortex are and how the neurons in each layer connect to

other neurons in the same layers. What the balance of excitatory versus inhibitory versus

metabotropic neurotransmission is, a large portion of that is all genetically hard-coded.

And in AI, it's also genetically hard-coded. When people are generating a neural network

to process, I don't know, images to look for faces, they will do some of it as back propagation

learning. And some of it, they will just do as trying different models, trying different

connectivity models and seeing which neural networks learn it best. Do you do again or

do you do a convolutional neural network? What works best for learning this kind of thing?

And that's kind of the genetic information. And you just have to, well, currently,

you just have to make guesses and evolve it. You try something, you try something else,

mutating the concept until you get something that works really well.

Okay. So have you studied the basis of how the brain makes memories? I'm just curious.

How the brain makes what memories? Memories, yeah. How memories work.

Yeah, I mean, I've learned a lot about it. What kind of memory are you talking about, though?

Because there's several different categories. There's, you know, the badly model. There's

episodic memory. There's semantic memory. There's procedural memory. There's implicit memory.

There's explicit memory. There's working memory. There's short-term sensory store memory,

both in visual cortex where you have the visual spatial sketch pad. And then you've also got

the auditory cortex for the phonological loop, which is about two seconds. So you've got each

of those types of memory. And a lot of those types of memory have different mechanisms that

underlie them. Like the phonological loop, that's probably a dedicated neural network that operates

in a loop. And so it has, you know, a bi-stable electrical phenomenon where you can either have

a certain network running or a certain network not running. And you've got the,

like, several of these loops in parallel. So each one would be for a different time delay.

So each loop will activate the next loop over and cause it to output a bit. So you can have

a sequence of sounds that get produced in sequence. And that happens inside your memory.

The visual spatial sketch pad is probably something different. Long-term memories are also

very different. Those mostly go through, like, the heavy in learning to calcium going through

NMDA receptors to gene expression changes, increases in receptor densities and synapse densities.

Those are more of a structural thing. So, yeah. I mean... Yeah, it sounds like we have

centuries of work to go in neuroscience. Lots of study. Hopefully it's longer than 10 years.

Hopefully we don't go extinct in a couple centuries, because that's the only thing that's

going to stop us from studying it. Right. Yeah. I mean, I think that, you know, just...

I think one thing that this conversation maybe points to is how important it is to...

for neuroscientists to study which parts of the brain are firing in correlation with

the sensory stimuli around a person, around a brain, and, you know, and correlate that with

the activity of that individual. And because the spatial information really matters

in terms of, like, you know, how your eyes are positioned relative to your brain and

how your incoming senses, you know, from your eyes and your ears go to the thalamus, and then

how that information may flow through the brain and how it's structured genetically and how signals...

the various different ways the signals propagate and the various different ways that memories

are formed. And there's a lot of, like... it's not... I mean, there's a lot of...

a lot of information, a lot of

insights that may only come from just from studying how things move around spatially.

Yeah, I mean, I think that there's a lot that you can learn from just watching and correlating.

And I think ultimately, though, what is the best way to learn is to not watch but to interact.

And one of the reasons why I'm excited about the Nurentford Spectroscopy Biofeedback process

is because it allows you to modify the brain in a way that's spatially specific

and see what happens. And this can be used both for improving cognition and it can also be used

just for discovering how cognition works. So if, for example, I have a hypothesis that the left

hemisphere is happy and the right hemisphere is sad, I could test this hypothesis by training

somebody to increase the activation in their left hemisphere versus their right hemisphere or vice

versa and seeing how that affects their mood. And by the way, I think that left-right thing is

a huge oversimplification and mostly it's about 95% wrong and 5% right. But that kind of model,

I mean, you can also do something more subtle. You can try to identify which parts of the premotor

cortex are involved with gating and activity and deciding whether to enact a memory plan,

or sorry, a motor plan, or to keep it as just something that you could do. And so you could

set up an experiment in which people are trying to do some go-no-go task where they have to either

do a task or not depending on environmental cues. And you could try to do biofeedback in order to

modify the activity in one particular area in order to bias them in one direction or the other.

Those kinds of experiments become a lot more feasible when you have a relatively

non-invasive and safe method and cheap method for modifying activity on a local basis or

activateability perhaps would be a better term. So let's talk about, do you have any plans you

want to share, any areas of research, any products you're working on that you want to talk about?

Well, don't tell anybody, don't pass this on because it's a secret now. But I am working on

something soon which will hopefully take over the entire world and put it all under my dominion.

It's going on next Sunday, actually, on the 12th. But what is that?

There's a Dr. Horrible sing-along blog. Oh, nice. You're part of that. Yeah, I'm the doctor. Wow.

Yeah. Nice. So that's, oh wow, you've got a Dr. Horrible lab coat. So what is the,

maybe plug that for a little bit. What is the date and time and how people find tickets? Actually,

I think we're going to be running out of space. So I'm just mostly just teasing at this point.

But you're going to be doing that? No, but so for the near and front,

near and front spectroscopy value feedback stuff. Yeah, I've been working on a lot of other projects

too. I've got like six things going right now. And this is one of the things that I want to

finish up. Are you still making innovations in the Bitcoin world? Yeah, so a lot of my

time nowadays is taken up at the intersection of cryptocurrency and the environment. So I've

been doing mining for the last few years. Right now, I'm trying to find scalable energy sources

that are carbon neutral or carbon negative for cryptocurrency mining. Specifically,

I'm working with a company that's looking at Arctic methane emissions. And methane is much

more potent greenhouse gas than carbon dioxide. So if we can find a way of making it profitable

to burn methane, that would otherwise be leaked as methane, then we reduce the environmental

impact of that methane by about 96%. And we also can make some basically free or cheap energy at

the same time. So trying to find a way of using cryptocurrency mining to make that economically

viable, I think is interesting and exciting. But yeah, like the biofeedback I think has

the potential to help a lot of people. There's some circumstantial anecdotal evidence that indicates

that doing biofeedback on prefrontal blood oxygenation may improve concentration and focus,

especially in people who have attention deficit type disorders. It may also improve the ability of

people to read social cues that might be lacking in, for example, autism. And a lot of other things,

a lot of therapists have tried doing biofeedback with people who have very psychiatric disorders

and they've had positive results. Of course, they might have had equally positive results from a

placebo, I don't know. But it does seem like it's worth investigating a bit more.

There was a company at a blockchain event that I went to that was talking about storing your

biofeedback data on the blockchain encrypted. In some cases, they offered a homomorphic encryption

service, which is computationally expensive. I don't know if you've seen that sort of thing

out there where, I don't know, but did that make you think of combining your two worlds and like,

well, for your biometric data, I've heard it described as like a fingerprint. You want to

have it protected, right? You want to have it, it's personally identifiable.

Some is, some is not. The near and front spectroscopy data is not personally identifiable.

Okay. Good to know.

I also think that if you want it to be private and encrypted, why do you put it on a blockchain?

Right, yeah, that's what I was thinking too.

I think that a lot of those, a lot of the blockchain excitement and hubbub is just

metuism and most of it's just saying, oh, people are excited about this technology.

How can I use this technology for this completely unrelated task that doesn't require that technology?

Well, I mean, we've been, some of the groups that I've been talking to are like, well,

how can we send EEG up into the cloud into a multiplayer VR experience so people could

sort of do their meditation practice in VR next to other people doing their meditation

practice in VR? And would we need to protect that information with the, like the blockchain

or something that would allow us to distribute the...

Blockchains don't protect information.

They don't, no, they don't.

They share information.

They share information.

It's the opposite idea.

But you can share, you can share encrypted information.

Yeah.

You can do that either in a blockchain or anywhere, any other way.

Like the only time you need a blockchain is if you have a multiple writers, multiple

concurrent writers, who B, don't trust each other, who are C, writing to a shared database.

And in this like game scenario, they probably trust each other or you can like use some kind of

either game rules or input validation in order to minimize the effect of any untrustworthy

activity. You don't really need a shared database.

You just need a central server that like tells them what the game state is.

Right.

Yeah, so...

It's the wrong concept.

Yeah.

It does work for money.

Like that is a scenario where you do need multiple untrusting shared writers to a single

shared database.

But for most other applications, you just need a server, so...

Any, anything else on the topic of future plans, future projects, exciting events that are coming

up that you want to attend besides that?

Was there that May 16th thing?

May 16th, that's right.

You're going to be speaking at the Neurotech X event in San Francisco.

Do you want to give a preview of what you're going to be talking about?

Well, I don't know what I'm going to be talking about yet.

So like I probably should figure that out.

But there's going to be this, it's a Neurotech event.

So I'm willing to bet that FNIRs is going to be a topic.

Like, maybe the topic will...

It could just be that.

It could just be that.

There might be a little bit about computer interfaces in general.

I know you mentioned MRI and compared it to FNIRs at the top when we've talked about different

technologies.

So I'm looking forward to that.

We could also maybe ask the audience and ask them what they would like to hear.

Great.

All right.

So that you heard there, we're doing a Neurotech event.

And y'all can come down on the 16th.

What's the location?

The location is going to be at the Red Victoria.

And great.

So I'll go ahead and stop this.

And thank you very much, John.

I want some Tumen, everybody.
Neural Lace Podcast #5 Guest Jules Urbach, CEO at OTOY

original audio https://soundcloud.com/user-899513447/the-neural-lace-podcast-5-jules-urbach-ceo-otoy-inc

Audio Transcription by OpenAI's Whisper

Were at GTC 2017 the GPU conference hosted by NVIDIA talking to Otoy's Jules Urbach

he's the CEO and founder of Otoy and I'm Micah Blumberg.

This DSLR that was weighted by another DSLR that was spun around in order to do

photogrammetry and that for me that made Otoy famous in my mind and I'm

glad that I'm glad that was the thing that got you interested and it was

definitely an interesting experiment but we've been it was actually sort of a

midpoint for us I mean we've been working on on I wouldn't even call it

photogrammetry we've been working on on really high-end capture of

environments and people through a subsidiary of ours called Light Stage and

Light Stage was started out of USC you know over a decade ago and it's been

used and I mean if you see a film tape you see you know the Avengers or you see

you know Tarkin or Lea in Rogue One like Light Stage is scanning the

actors that stand in for them or that play these people and it's been used for

a long time and it's basically ground truth it gives you all the lighting

information it's like if you're gonna scan something for the holodeck you'd

go to Light Stage and it gives you that data back it's almost too much data for

most rendering pipelines even for cinema to use and what we wanted to do is we

wanted to come up with ways of capturing things outside the Light Stage.

Light Stage is like the Brunberg fly thing you're in a bubble you have to

go to a facility we've been shrinking that down more and more but we also wanted

to come up with ways where you know Light Stage works by having a lot of

lights and a few lenses but you can also capture the same sort of volumetric or

holographic light fields volume by having a lot of viewpoints and the way

that this was structured with that spinning camera was just to spin the

camera 1728 times and get a meter of light and a volume and then basically

process that data and turn it into a true like you know light field surface

in other words light feels like a white light hologram no matter where you're

looking at it the pixels are beamed into your eyes so it looks like you're

looking in the real world and it's a magical effect in VR it looks pretty

good even in a wind-dead mode and I think that it'll look even better when

you have glasses like the Amoglif or maybe Magic Leaf that have depth planes

where you can really appreciate having sort of multiple rays shot into your

eyes at once and and so this was just a test and since then I mean if you look

at the more recent work that we've done as a company we partnered with with

that Facebook and they built a camera that is 24 lenses you know they don't

call it a light field thing but to me it's it captures in a similar way

overlapping viewpoints that we can then use to reconstruct a scene and given that

captures that in motion and that you can move the camera around or have multiple

cameras you can build you know a holographic asset and that's exactly

the pipeline that is a company we're turning on for them and connecting that

to various different tools that we also support through our rendering platform

and we make a software called octane I think some of the more famous pieces

that have been done with octane include the opening Westworld if you watch HBO

that was all done in cinema 40 with our render and you know as a the future of

rendering as I just was giving at this talk this morning I think is real time

I mean it has to be real time then it has to get into this sort of magical area

where it's like when you go on the holodeck and you say arch you know you

need Sherlock Holmes or jungle you know it kind of knows semantically what you

want and that kind of workflow comes from capturing the real world processing it

doing deep learning on it being able to have a ground-tooth renderer and those

these pieces are decades worth of work and we're like seven years into that but

anyway I'm glad that you saw the company at the point where we had that that I

think it was an upload VR that that article on the yes it's article by

randam about the spinning light field capture system and in fact if you get a

lot of people excited because I think it opened their eyes to the fact that

there's more than just 360 or even 360 with depth I mean there's a full

holographic universe waiting to be captured and every time you're not

doing that you know it's like not capturing things in color you're missing

a whole dimension of experience and I'm grateful the Facebook's attacking the

problem I think there's others in this you know in the space doing cool stuff

light row and I also did the Facebook sort of set the bar for a lot of others

to sort of follow them into like the minimum you need now to have a

compelling experience if you've seen the demos that we've done with the data is

depth you know like and getting overlapping depth is really really great

so the way I first heard about the light row and the original name was the

light row sphere and they said it's a fire hose of data there's there's like

how can we how can we ever have the ship of all like you have this server array

with 12 you know 12 hard drives and that only records like an hour of data so

it's this massive fire hose data which I think you were talking about in the

beginning like how do we get this down to you know compress it to something

that's typical we have and now I've seen it so I've been to see yes and I've

tried the hype VR I've got to try the the Sony the Sony has their own sort of

six degree of freedom and your your project with Facebook you know six

degrees of freedom freedom in a camera so this is now going down the pipeline

where Facebook and Sony are are saying okay we're gonna take this this

technology of volume of should we call volumetric video or fine term for that

for what we're doing at this point it's still a point cloud it's got maybe

multiple layers you add even more rays into it it's a light field you add a

more information it's like a holographic digital asset but you know

volumetric video is probably if you're able to move through it at all it's a

volumetric video file I think that's a good description of it's what a lot of

people call it six-dot video so then it Adobe shows off this new you can convert

a 360 from an old just an ordinary like simple 360 camera not even 3d and you

can turn that into sort of like a hologram and the thing that I noticed

with that demo though is that it requires structure for motion so basically

if anything's moving it won't work and if the cameras are moving it won't work so

that means it is basically capturing is still seen and you know that's that is

still super relevant and absolutely important for us to have it even in a

camera I think it's an amazing piece of software I do think though that one of

the things that the Facebook guys did right was that you know I want to be

able to capture video I want to do it in a single small portable ball and I want

it to be volumetric and it needs to be in motion so that magical experience of

having everything around you all at once moving with overlapping you know you

have planes is pretty cool that doesn't mean they can't be bigger and that's

I'm like trust camera is a monster thing it has 90 lenses and that that is

definitely capturing a full light field and it's it's awesome I just think it's

you know you have a spectrum of different players putting in these

different rigs and I think I haven't seen the hype the art rig I've heard is

really good but I also think it's using like LiDAR and 14 red cameras and I

think that this probably some fits somewhere price-wise maybe between the

lightware stuff and the Facebook stuff and I think Sony stuff as far as I

don't know how they captured I think it was done in a very clever way to make

it work well so Sony captured it with three a regular 3d 360 rig and and so

there's but they're selling it not to regular consumers but to like the

producers of shows and plays and concerts because it requires a lot of

post-production yeah the Facebook thing doesn't I mean what you're seeing out of

the demos there is largely the raw data I mean I don't know if you mean post

correction like he needs to be cleaned up or add like add reflections and

different effects I mean you have to do that with the Facebook stuff too but not

not quite so much because one thing I can't speak to the Sony data set I've

never used it but the Facebook one I've I'm now like you know months into this

thing and I spent so many hours looking at it and working on the on the

different parts of it you actually get you know there's eight overlapping rays

for almost every pixel that you capture with this thing and that gives you

essentially glossy reflections so you actually get you when you're moving

around within that you know sort of the space of your seated experience you will

get glossy reflections you don't need to add anything it's in there you also get

whole-filling so you don't have cavities of things that are missing and that's

pretty compelling so you add that with the fact that you there's small enough

you can have three of them you can also you know essentially capture the scene

beforehand I mean that's probably those workflows are like you know minutes of

preparation time you should you probably should do so I think that it's a good

sweet spot as one reason why I was excited enough to back it as a company like

you know we work with a lot of different vendors work in cameras and we want to

support all of them but it's like from for us to you know commit to something

this at this scale like I wanted the results to be really good and I will say

the Facebook stuff is really good so it doesn't mean that others can't even do

higher-quality captures the question is is it practical is it how much work is it

I don't know you know the Facebook stuff is largely automated and it was it was

kind of compelling to see that come out of the processing pipeline without any

human intervention so recently Unity announced that they have a new tool for

360 where you can separate the video into layers and then you can make it

interactive and so you would like failure you're working with point clouds and I

was just trying the latest Nvidia point cloud demo over here and but the question

to me was well how can we make point clouds interactive how can we make them

behave like objects in a program how can programmers use them to make it a demo

we did in Unity with the Facebook video data well anyway if you haven't you should

check out the the video that we did at F8 and in that video we actually show

exactly that workflow we don't just show it in Unity we showed in After Effects

and Nuke where in fact in my talk tomorrow at Ford you know if you have time

you should check it out or if others are listening to this and this guy's posted

yeah basically you can drag dragon synthetic objects octane render things

perfectly it's a cinematic production renderer you take the Facebook data you

can match them together and actually reflections or fractures everything

works perfectly and that's our offline rendering you can sort by the way render

that into a beautiful light field and have that published experience were

perfectly on six in six degrees of freedom and for real-time interaction

weird it's you know you can actually treat the Facebook video data as a game

level which is exactly what we're showing in our booth and I got butterflies

flapping around the Oculus touch control is a giant light I can drop it on the

ground and it you know lights things up you've got ambient inclusion you've got

GI all these tools that we're building so it's a game level and in fact the most

the most awesome thing I think you do with a Facebook camera is you can use it

to just scan environment and you know take a few seconds of that and drop it

into Unity and you've got a fully formed game level that looks really good you

don't have to pay an artist to do it you just captured it and that is that's

pretty powerful so it is a game option you can move it around it's just and you

can scale it you can shrink it I highly recommend that anybody that has access to

our demos until we put it out publicly with Facebook checks it out at our booth

or at these trade shows that we go to it's it's pretty cool so going back to

AWE and you had this announcement with ODG the idea was you know we can we can

stream a VR experience to a headset so you can stream something from that it's

processed with powerful desktop GPUs over Wi-Fi or over a 5G cell phone oh yeah

well we don't need a 5G or Wi-Fi I mean the stuff that we were showing and it's

not just ODG so we've shown a version on Tango we've shown a version of Gear VR

we've shown a version on just a regular Samsung phone with a marker-based

tracker and you know they have different resolutions but what's fascinating

about these these portals is the portals I mean they're not quite as heavy as a

full VR experience but looking at you know per AR and mixed reality even VR

where you're looking into a portal into a different world I mean we can squeeze

that down to a few megabits and it works just fine because we're you know it's

basically foveated rendering in streaming form and it's very fast and we were

that to me that's one of the most that one of the first first things I want to

tackle is it's going to work really well and it's also how we stream life fills

into you know a sort of a higher level framework Unity for example can can take

that stream we can beam it into a surface and it can actually be projected

and that's one of the things that makes the latency much less tricky for

something like ODG the resolution is much higher the thing that we're missing

with ODG is we don't have position tracking there's a there's a module on

the top for lighthouse we absolutely desperately want to have that built so

we can actually test full position tracking in the meantime one thing we

have been testing in the earlier ODG glosses was just having a super high

resolution overlay it's basically our light field stream just one frame of it

without the holographic part and you know moving that over a marker it looks

amazing and that's at our booth as well so that's a great demo it the resolution

on those glasses is remarkable it is four times the res 16 times a res because

it's four times the horizontal and vertical pixel density of the gear VR and

you know it looks kind of magical we don't see a screen door effect I want

that I want that and I want position tracking on a wide field of view so you

know I've seen in parts all the pieces of sort of my ideal HMD and ODG cracked

one thing that I just hadn't seen before which is the resolution problem and they

did it all in a pair of fairly lightweight glosses so you have you have

Microsoft and their HoloLens had the position tracking is pretty good a lot

of people would say and I you know one of the things I wonder as why can't you

take the position tracking from the HoloLens and put it on the ODG glasses

and apparently it's too the power is too high and it's too big so you know that

that was one of the reasons why it was it wasn't necessarily an option I heard

the HoloLens is clocked at 30% of its performance capability because if you

ran it at 100% it would catch fire yeah I mean you know the current HoloLens has

a couple of things that I think could be better it's 720p instead of 1080p and

the ODG glasses are 1080p per eye for example cherry trail which is I think

the the SOC on the HoloLens is it's not a great GPU I mean it's like it's

probably at this point the 835 is probably a better GPU on the way you get

on most phones but it's you know it's it's a full x86 Windows device so I

guess for that from that perspective it works I'm guessing that because Windows

10 that works on the 835 the x86 translator that maybe you'll see a

future HoloLens on Qualcomm's SOC it might even perform better and more power

performant but I do think that the next HoloLens must be having wider field of

you must have higher resolution and what's interesting is I don't know if

you know the story but but Ralph Foster who designed the ODG glasses I mean I

think he sold a lot of the patents for HoloLens to Microsoft before you know he

went a different direction into these classes that's fascinating now with

regard to going back to streaming going back to web VR and going back to the

concern of you know the the frame rates of what's necessary for VR to be

comfortable some people have said it needs to be 90 Hertz some people have

said it needs to be 120 you're talking about in order to you know I was talking

to Microsoft yesterday about you know they're also working on this sort of

like how can we solve the the streaming what we process on a GPU over the web to

a set of glasses like the HoloLens so I was kind of like well what what is the

and they said oh we're doing like 30 frames per second so it's okay for AR

but it's not really like it's not gonna be comfortable for VR and I you know

like okay well then there's phobia to render you can optimize that you can do

the reprojection maybe on the glasses themselves and they were saying that

they're there they're what was interesting to them was you know TCP is

too slow but but UDP is much faster going back 10 years or I guess it's been

that long like you know when we were doing game streaming as a primary you're

one of our primary focuses you know I have a deal with with them unity now

where octane's built into unity it's shipping this year and the CEO of unity

I first met him when he was the COVA and he was you know when John McHale was

COVA we were he was there was a period of time when it was OTOI, Digtai, OnLive all

doing game streaming and the only way to do that right was to do it over UDP so

that was we did UDP streaming in that case the problem is the web doesn't have

a great UDP mechanism you can do it over web RQC but it's not perfect it

doesn't really matter at the end of the day there's probably if you're gonna do

streaming you probably should bake it in right and I think that yeah UDP helps

you you know the way we do our streams I mean there is we built our own codecs

that can suffer a lot more packet loss and traditional video frames do and it

helps and and then there is reprojection and there's reprojection we have a lot

of data and then there's also the fact that one of the things we just showed is

that you can also send out an entire unity game inside of those you know the

you know the bits the adaptive stream and that can run locally the second that

it's there and until then it can run in the cloud and if there's not enough

compute power it'll figure it out that's just part of the staff and the reason

why it's important to author and unity with our tools and have it in there is

that we can set layers that trigger those different pieces this can get sent to

that you know to a plane that gets rendered locally or this is the

threshold for rendering it locally it's pretty simple I mean when you're talking

about video layers and you're talking about picking the right resolution or

bitrate this is even simpler than that and to your point about the the stuff

they're showing it at a vision with sort of the you know the alpha planes in the

video I mean the Facebook thing basically is is that times a thousand because it

has those depth layers you can create any sort of masking you want and our goal

is that we basically are able to beam that that piece with video file into your

unity texture and you can do what you want with it and similarly we can also

take your unity project and put it in the middle of a light field compositing

workflow that's maybe created in unity but still using our our light field

rendered to do all these things together and it's kind of a you know

totally you can do it from either it's bi-directional but having those tools

in place matters the only thing I ultimately want to make sure of is that

there's a URL and you can go to it and no matter what the platform is you see

that experience I don't want to have it apified unless the author intends to have

it apified but it's like a lot of experiences in the future are going to

be social bite-sized things that you can share mash up and I think the unity

guys also see it that way as well and that's what you know and so does Tim

Sweeney of Unreal Engine I mean that guy is really one of the greatest champions

for an open metaverse and that's super important for the future of all of the

work we're doing. So speaking of the meta metaverse and specifically sword art

online is a big is a big concept in terms of you know that ties back into

NeuroLace and NeuroLace the idea of hacking into the brains VR system and

accessing it like it's a special kind of hard drive so you can communicate that's

sort of a read and write communication tool between the brain and the hard drive.

So I went to the San Francisco HTML conference and HTML5 conference and

they were this is where I was asking you how can we because I because I'm I help

organize events with San Francisco virtual reality and I said how can we

like create like a web VR with you know massive multiplayer and Mazzilla and

Chrome are not there those teams are not really thinking about that yet they're

focused on more fundamental stuff and it's a friend of mine who's Ruby on

Rails guy said you know you need to do the UDP and so I said and so then I was

and while I was in the conference because I do all this you know 12 years of

neuroscience study and I have these great great groups like self-aware

networks on Facebook it's very popular and so I'm reading I'm reading this book

networks with a mind and I'm listening to this you know oh you need UDP instead

of TCP and I'm like learning about this stuff and I said so if the brain is like

a network what would the communication protocol be would it be more like TCP

where you need to establish like a connection or to be more like UDP

interestingly Mike you can definitely separate packet loss and fill in the

holes there's no doubt about that I mean experience is definitely probably not

even pretty linear and I also don't think that you know what we think of as

linear experiences are probably our mind sort of constructs that you know

when who knows what the actual the way that you know our brain sort of forms

these these things by the time it gets to our level of like fully conscious

understanding as far as the neural as it goes it's fascinating you know I've

you know it's like I've met Elon a bunch of times and it's like the last time I

saw him was 2013 or so I don't know it was it was a few years back and I

remember telling us like I'm working on I want to get a holographic window for

your you know your spaceship and your Mars colonies I'm really not gonna be

happy in either of those without like a light field display is it always like a

holographic no that's peppers goes this is way better so well let me know when

it's ready and the thing is like I actually working on the softwares I

don't have the holographic display but there are there's a team out of light

row I try carefully is working genuinely on that holographic window this year and

it's called light filled labs you know and I'm working with them because I have

to see this you know this come to fruition and I do wonder about like you

know the you know the sort of the the idea of the neural laces is super

fascinating I don't know how it would work honestly I'm not sure we don't

understand consciousness fully worse I mean our visual you know eyes were

probably the most you know the highest sort of bandwidth we have going into our

minds at this point you know so so we talked about this on the podcast like

how it might work and one of the one of the big ideas okay so one of the big

ideas is if you can apply if you can get like live data of you know like let's

say you're you're you're you're imaging you're using some sort of imaging where

you're creating like a tensor field map of the ionic tropic rain you know all

the electromagnetic waves flowing through space and you you have AI watching

that and it's looking for patterns and it's unsupervised because you can't

really label that but then you have another AI like the self-driving car

that's as it's doing like you know LiDAR and all these different cameras and

it's mapping it's identifying all the objects in the room and then you you

need to correlate like you know this is this plate has you know you have all

these the AI hat says all these different lines and edges add up to this

concept of the plate and at the same time if you have in the other AI is

looking at the neural correlates in terms of the ionic tropics sphere in

terms of temporal spatial brainway patterns and it's saying this pattern

matches that pattern and so if we get that pattern and we have it in the

computer and we know the networking protocol we can send that pattern back

over the networking protocol into the brain and see if you see a plate where

there is no I'm not a neuroscientist but I mean I absolutely am constantly

thinking about that being done I mean it's like you know philosophically I'm

also not a hardware guy so I don't you know and video better make great GPUs and

people better make great displays and as a software you know thinking about it

from the software side of things like I can't wait for there to be something

that allows us to sort of hack into these sort of patterns and and sensibilities

and understand a little bit more about what you're thinking I mean also of

course would be dangerous but I do think that there's there is something to be

said for AI being a big part of how you can sort of encode because you know it's

bandwidth issue right I mean ultimately even our even our visual system and we're

not seeing everything at once we're building like that 32k by 32k image well

I mean I don't know if it I mean a lot of the neuroscientists that I talked to

say it's a bandwidth issue but I'm not sure that it is because you know what

when you like let's say when you when you're trying to figure out whether

something is is red or blue they you're sort of like your it's your brain is

learning how it's different how it's different relative to what's around it

and in quantum physics something is defined by everything else around it and

so time slicing so if you basically want to encode information like when you

think that you're seeing a 32k by 32k image you're actually seeing it it's

almost like a raster line your eyes are quickly moving around and building that

up in your brain and your brain may not even see it again but it keeps that

memory of it so information encoding in that ways is fascinating if there are

ways for your brain to learn how to get shortcuts around what the real world is

and there's like light are being fed and there's a shortcut that sort of builds

that point on your mind that would be amazing and that's where this kind of

stuff could be fascinating when it's applied right but in terms of you know

getting around the bandwidth issue I mean I know what bandwidth when with this

gonna be required in the first place but I'm saying all we're gonna do is figure

out what the pattern is and we're not gonna send the exact same pattern back

in we're gonna send the difference between the pattern here and the

pattern that's already in place location or something you can kind of figure out

what things are it could be it could be interesting to sort of play around with

interference patterns and I don't know there's a lot to be done with with these

things but again I'm not really a neurobiologist but I love the space and

decided to see what comes in there.
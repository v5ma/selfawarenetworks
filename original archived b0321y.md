b0321y ctp&utg (archive / audio) Neurotech AI Hybrid EEG fnirs eight command decoding f

00:01
Making this room.

00:14
So Adam I I realize that you also shared another link which goes to another paper was it an extra suggestion or was it an error I wasn't sure no that's with an extra suggestion maybe for next week or that was a connection between that paper and this paper as well a little bit but your paper is kind of that kind of a BCI flow chart algorithm flow chart the other one was just appears and undergirding memory, but there was some sort of the algorithm that that the use in a second paper was related to the first one.

00:49
But I think tonight we're going to talk about the first paper that this is just and just to to a quick ensure about this room is every Monday at 10pm Eastern time we're going to get together only for one hour more than that and review a paper on regarding our technology variable device signals some interesting papers that we're going to review those for for one album.

01:21
Sounds good, so we start I guess so yes, let's get started. I think Jada that was your proposal, do you want to kick it out? Yeah, of course hi everyone so in the previous weeks we have been talking a lot about combination of different imaging methods and so I picked that paper because they it's really interesting so first of all, it's a combined BCI using EGF and as nurse and then they use different they use several tasks to decode the signal and one of the interesting part is that here.

02:08
People actually control a quadrupled culture online using click that real-time signaling so there's been so there's different comments that they try to decode so for example like there's this mental arithmetic mental content mental rotation and word formation tasks and these are decoded by ethners. And they also decode some of the tasks.

02:46
And. Yeah, so I think maybe like, you know, if you want to kind of click add to me, you can mute and go. Sure yeah. I think on a high level of. We talk a lot about EEG and FNAF and EEG is capturing brain basically neural impulse which is electrical signal and if this is capturing oxygen saturation, which is kind of the input I think in this algorithm if you look at the flow chart for F nears are for basically feature extraction, they were using two second window for each either they were using one second window or as a as a kind of red data science pointed view or or a kind of a system engineering.

03:36
Point of view if I'm looking at one neuron, it should be a time delay between the when they are consuming oxygen versus the time that they are firing impulse when we are capturing those two signals at the same time, we have to be careful about that time difference and I'm not sure the reason that they were using two second window for ethners versus one second window for eg is because of that or not or I don't know what's the best way to make that synchronize because there should be a time to.

04:11
Delay between been part of the brain is consuming oxygen and then they are firing impulse.

04:26
Yeah, I think one of the importance here is you mentioned, you know that time I like two second the ability to measure with two second windows for one second window with EG. I think that was one of the power powerful parts of that paper and I think also like they also like regarding the number of comments that are using this is also interesting so there's been several earlier studies that you know that try to control control.

05:01
So that as the participants to control using PCI and then like one of them for example use motor imaginary imageries for like left right or both hands and so you know like it's it's been I think it's been a like interesting task right like to have that PCI to control the color upper and but I think so did this paper got a lot of citations as well and I think one of the reasons is that they the issue a few things so first is Adam was saying that.

05:36
The temporal, you know window was interesting like and that was a good achievement compared to the earlier studies and also like the number of these tasks these commands were interesting and one of the things that I find look quite surprising is that you know, if you think about this for mental tasks like a mental mathematic content, you know, think about the you do some math you do some content or work formation or mental rotation, these are all really like, you know, frontal lob tasks right it's not like, It's not it's really like they they have some similarities these are and I think differentiating between these different tasks using that signal that has been recorded with ethnic is quite an achievement so if you know if you record like if you're trying to differentiate eyeballing from a motor task or motor imaginary task, you know, these are more easy things because they're very distinct tasks, but I think there's some similarities here in terms of these tasks and I find that part actually impressive.

06:46
And that was a good achievement as well. This is Sharena and I think that part of the reason why this is a highly-sided paper is because it has such a cool factor. I mean being able to practically levitate something with your mind that's what it seems like almost so there's the question of how else could such paradigms be used could things happen like controlling music or controlling various other things, for example, what if there was a theramine pretty much and it's just increased the frequency it.

07:20
Over different brain waves, but corresponding to sound waves and so on that could create quite the game for life, this is Sharina and I am done speaking.

07:33
Thank you sure now, um, yeah, I think that's a good point and I think the number of detectors basically ethnic detectors that they were using was not that much. I forget them the number but I think it was not huge amount of detectors and there at that I think the intersection that they were using in ethnic signal processing the distance between source of the light or that LED that they were using and and the detector basically the distance between them is very important it cannot have I don't know.

08:08
More than if if the distance is larger than the absorption amount that that detector is capturing is is going to change and and the quality of signal is going to be different as well and I think in that ethnic signal processing part they were there were talking about that distance inside the equation that they have and the same at the another sort of concern that they have for each signal processing and in order to to make them both in a good way and synchronize them.

08:41
I think that that that's very difficult. Because lots of experiments because I'm not sure if there is any kind of a theory as a neurology point of view that what's the best distance between the source and detector for for Fnist I don't know or if it's such a thing exists when we have to start experimenting and then asking people I don't know to think about music or do something or do some brain activity and then change that distance and calculate it again and again and again and again or if there is any kind of a theory, that's what's the best distance between them is.

09:18
I think it's like an easy go ahead. I'm sorry yeah. I just had a question so I'm from what I'm reading EG the EEG and the Epioneer Spark are completely separate right there are not using the data together to increase the accuracy rather they're using a separately to increase the number of commands that they can use correct.

09:39
That's what I thought yeah, right? I think so. I'm not understand sure because in figure three that they were using are. I thought they are they are capturing those signal at the same time for sure with not the same device, but at least at the same time. I think they use the two techniques to decode different types of tasks like EEG was used for you know, there's eight comments and like for these mental tasks they use ethners and like there's this um eg tasks that are separate like and that that these are eyeballing and moment tasks.

10:27
So. I you know, like just this this this this has been clear but I just didn't read like every line of methods part. I don't know if the rules and exploratory part of the paper where they used, you know them together in the analysis but they used this to at the same time that's correct so I think that's that is correct what what was just said and that the the so the the emote of device was used basically in a way to basically pick up EMG signals from from you from the eyes, which is not.

11:04
Exactly EEG, but but the EG device was used to because you know, you can pick up those those signals and so they are tracking the eyeballs but that was that was so so they started neatly invited neatly avoided the potential synchronization of timing between EG signals and efner signals so so you had one, you know, it's totally separate system to our totally several control mechanism that was just using the aphene for for for control of part of the quadcopter and and the eye blinks were used for.

11:39
A different part of controlling the quadcopter and I thought that maybe the biggest sort of delay in the paper was just the the amount of time from the signals collected to to travel to the device itself and and so there's just like what that part wasn't fast enough so so the so the the quadcopter would needs data from the brain much faster, but you can you can't send data that fast over Wi-Fi with with their setup, so so the Wi-Fi was the inhibiting factor to maybe that maybe.

12:14
Accuracy of control would improve if they had a faster signal transmission from the brain to the to the copter. Can we do that with only EEG or only adverbs or it's really not me both of them. This is true and I have seen some things some applications where people have used brainwaves that were not was not the combination of EEG and F mirrors.

12:42
I think it was just EEG to control a drone but I do not know how accurate or how good of navigation there may have been for that. This is Sharena and I am done speaking. I think the the main added value of using both is to increase the number of commands that you can use.

12:59
That's from gathering from reading the paper. This is Sharina and yeah that makes sense. I imagine also that the more contacts there are and the more accuracy and the less latency it just makes for a better user experience as well. This is Sharina and I am done speaking.

13:24
Right, right, but when you guys talk about accuracy, are you guys talking about the mapping? I or the error rate of the intention of the user to the computer decoding. The actual command is that where you're talking about when you talk about accuracy? Because I don't see how the accuracy is increased by using both effner's and EEG in this paper.

13:47
So I feel like the paper is is misleading a little bit so the the paper talks about how you know with EEG, you know, what having like a one channel one channel EEG, you can get more accuracy than multi-channel EEG, but it's still sort of confusing the fact that really they're measuring EMG in the you know, with the emotive EEG device.

14:11
And yeah, but but yeah, so the idea is that you know with ED your best accuracy is maybe like a one channel and so the whole thing of the whole benefit of F nurse then is to get is to give you accuracy with more than that that one channel by having like a whole different sort of modality sensor setup.

14:32
My name is Mica.

14:40
Thank you wake up. And I think really right the accuracy was just different commands and in order to to control something in a physical world we cannot have unlimited command and that the classification that they're using I think they just look at the accuracy of their classification that to precision on and recall of that classification.

15:05
I think that's that's what you're talking about as an accuracy. I see yeah that makes sense. So by separating EGFNers you have more so you would have more accuracy with four commands in EEG than with eight and you would have more accuracy with four commands with F nurse than with eight.

15:24
So by separating the two you get more accuracy in both. Is that where you guys are trying to say? That's true. Yes. Okay. Thanks. Yeah, the part that I just understand is why one channel EG is give that them better accuracy than than two channels or even more channels.

15:43
Is it? Problem at the data science point of view, or this is another problem that they have. I am not sure maybe my cat can answer that. Give me a second. I'm just sort of skimming the paper for what I read earlier and then I'll get back to you.

16:02
Cool sounds good, you know, if you.

16:09
Hold or number of channels. I think you know, if you look at a like one of your other studies that was performed by metal could look like a more successful study there's still like an accuracy that's at 90% it's only EEG and they only use some I think I movement controlled Alex study but there's other things that are really important so I think first of all what they say is that that set up with that EEG eye tracker setup.

16:41
I think there was a difficulty to make. Maintain the quadruple control concentration for a significant for a significant span of time, so you know, if a person is gonna control this quadcopter for you know, like an hour or so so that's system with only EEG wouldn't be just you know reliable alone so and also they I think they say that there's there's their system they that combination of EG enough nurse also provides people more freedom to use to the to control the drone.

17:18
I guess. And also it avoids some misdirectional moments. I think these are also important things so I think when we look at the you know, accuracy is really like quick, you know, you click where presentation of like the success but there's really other things as well. I think for especially for BCI it's really important to avoid these potential problems and you know make it sustainable so that was that was a power of that study to I guess.

17:50
This is Sharena and I think that with the point where there was more accuracy or rather the signals that were intended were carried out the most properly with one versus two contacts in that case, why don't they just switch the model to just pay attention to that one contact that is really good when there are two contacts in the picture for those particular applications.

18:18
This is during and talking.

18:25
I don't know that questionable so my card here um, so I so in the paper they refer to something called the accuracy reduction problem or basically so the the activity type of BCI is preferred over reactive BCIs allows a person to communicate with the machines will hang out wait a second so shoot.

18:49
I kind of got lost okay, so um, I wish that lines were numbered like okay so for the purposes of affner's based active BCI is mostly mental and motor related tasks are selected all the recent studies have shown the importance of efnir's based FBCI for reactive and path of tasks the activity tasks are primarily used increased the number of commands for this modality, however the active type BCI is referred over the reactive as it allows a person to communicate with machine at well both the fnares and eg drawback is the increasing is is that the increasing the number of active commands is the Crease and accuracy for BCI and so that's that that's where I think that's where I got that from so both EEG and FNAR is the drawback.

19:35
I've increasing the number of active commands is a decrease in accuracy for BCI so as a means for compensating the accuracy reduction problem is use of single brain signal acquisition modality, the hybrid BCI concept was proposed and the design entails the combination of either two modalities at least one of which is the brain signal acquisition acquisition modality.

20:01
And so that so that this is why so the two modalities I guess are basically the EEG and F nurse and the hybrid was was designed to to basically enhance the classification accuracy and increase the number of commands without decreasing the the the accuracy and and so that is a real reason why they're using Afghanist plus EEG to basically give you more commands without decrease in the accuracy which is which was what would happen if you were just using one modality.

20:38
This is kind of this kind of the same thing that we did discuss. I think two weeks ago regarding that EGM music. I think in that paper they asked people to think about true music it was a binary classification that that based on the EG signal out of their brain they want to predict which music they were thinking about and then it was a binary only two music, they're accuracy was was I think close to 90 percent but when they make that music from chew they, Make I think 12 music the diversity was about 65 percent so the huge decrease the accuracy when you you increase the number of music or number thick the the classification all the number of classes requestification, so it's kind of the same thing that they do here, but if we if what they are doing is 100% right we can go back to that paper and combine agents and the music classification for 12 music should get better.

21:46
I'm so sorry it was pointed out. I guess Adam pointed it out that that the frequency of of EG is is usually much faster than than the. That you know, then then your blood flow which has to react to to your neurons firing right and and but I sort of wonder about how that how it works exactly because there is a there's like a path between you know neurons firing and at in a cortical column and then you know, basically that activity being large enough that you're gonna have dipole activity which is a large scale, you know, global brain dipole activity, which is which is what is is gonna be picked up by the, Sensor and and so I wonder about the timing of that and in how that how you know, because so that so it's what I'm saying is like so there's a delay also between when eat when when when you're neurons fire at a low level and when when the dipole is gonna fire to similar to how there's a delay between when you're you're you're neurons fire, and when blood flow happens and I just this so the timing the timing issue, there is is very.

23:00
It's very interesting and yeah. I'd like to know more about that. Yeah. Thank you this is Sharena and this may seem like a silly question but how high of a frequency can. Can EEGs pick up is it 80 hertz is it? 60 hertz does it depend on which EEG electrodes are being used this is Sharena and I am done speaking.

23:35
I think Nora scientists should answer that question. I don't know.

23:45
But I know that like for. The 80, you know hurts it's hard for like it's hard to get that but I think there's also a positive correlation between the density of the EG in other words the number of electrodes and that capacity to for acquiring that frequency but you know, like on I mean, I know that like it can acquire like 40 30 and it's it's not good at acquiring.

24:18
I think 80 70. I just you know, I I don't know like about the reference right now or I don't know about the exact threshold so I'm his paper they said 128 hertz that was yeah exactly yeah, they mentioned that in the paper that once we have what 128 hertz was the sampling rate actually.

24:40
I think using that device using the hybrid of if nearest an EEG has this advantage for them to comparing to the devices only use the AG signals that they have more commands and have more freedom to use. That as use it to control that quad culture and also comparing to the devices only use the nearest they can reduce the size of window for doing this faster.

25:11
For example that it mentioned that it changed it from 2 to 7 seconds to 0 to 2 seconds and then they cut it those features. So actually the purpose of the method is not exactly about improving the accuracy but to getting more comments and getting more freedom in the controlling the quadcopter and meanwhile they doing that faster you have news as well.

25:35
But the sampling the sampling hurts is is different from from the the amount the the hurts you're able to measure. So so like that, so like from eating. EEG, you're not like eating sensors you're not going to get more than like 80 hertz with EG sensors. It's like usually between 0 and 80 hertz and 8 and so forty to eighties usually like the the high gamma four EEG and then if you need more than that, you know, you got to have a different kind of sensor and but yeah the sampling rate 120 hertz but that's that's that's a different hurts, that's uh.

26:11
Yeah. What I was thinking about it at first I read that sentence but they use the word acquired and that using the word of acquisition makes me think about it that maybe they're using this word because of showing that this is the frequency that they can catch using their sets.

26:30
I'm not sure about this because I have not worked with the EG so far but, In terms of using that word in the sentence, it might be that. This is Sharena and yeah when it comes to picking up brain samples or samples of neural data, it seems that there is a certain Nyquist rate or a rate that at where the signal acquisition has to be higher than the fastest event that is being collected and it needs to be quite a bit faster in order to collect those particular events.

27:05
Events they will they will change depending on numerous things and there are some brain waves that are 130 hertz and so on. That I imagine that EEG is would have a very hard time collecting especially with dry electrodes. But when it comes to to the depth of. EEG is.

27:29
It does it capture all six coortical layers and does it capture anything below that and it does it that depend on the person's head size? This is Sharena asking kind of silly questions but also curious. So they see the so the EG is primarily capturing large-scale dipole activity, but you but you can use each EEG localization to trace the origin points of the signal is all the way to the core of the brain in the in the like in the thymus as deep as the thalamus and that's been dispensed sort of proven with.

28:04
By also co-measuring with deep brain stimulation implants, which can which besides doing deep brain stimulation can also. I do measurements and. And I've also by the way, I've also used I've used many different ED devices myself including the the brain we know which samples at 256 hertz but we could not get more than basically the 660 hertz, you know, once you hit 60 hertz that that is also the range of like muscle activity and so so we couldn't go higher than 60 hertz in terms of the capturing the brain but we were sampling at 256 hertz.

28:47
Yeah actually I think so if you if it talks about the brain waves frequency, it's based on what also chirina mentioned that it might come from denyquist equation that you need at least two times more than sampling rate to capture that frequency and your signal so if it would be for example one to 28 hertz for sampling yeah definitely the brain beam should be less than 64 hertz to get captured in the signal.

29:23
I had a question regarding that fierce part of that which using to get mental activity like mental accounting so one of those in a training set one of the activity was counting backward and I can understand when I'm counting backward my some part of my brain they probably need more oxygen in order to to just I don't know to think harder to go backward, but if I do again and again, and that's become easy.

29:58
For me and I got trained by counting backward then that part of my brain probably doesn't need that much oxygen in order to do it anymore so that PCI over time might not work and over time they have to maybe change those command to make it a little bit more difficult in order to get that oxygen is that true.

30:23
Serena at that absolutely makes sense and that's why they need machine learning models or something to keep up with people's neuroplasticity, this is sure unit and I am done speaking.

30:40
Yeah, I think that's a good point but I feel like content backwards is also a task that still requires mental effort even if you're trained. But you know, we could probably look at the studies looking at the effect of training. I think that's a good point and also probably you know, just to get rid of the you know effect of that training if training you participants are trained before and then if the experiment starts later on probably just gonna provide a moral like homogeneous results.

31:19
But yeah good points. I have a question regarding the frequency that you guys were talking about because when you guys talk about something great frequency makes sense, but when when you start talking about the frequency of the brain, I don't know exactly what you mean since I'm not a neuroscientist.

31:35
I'm not training that field so when you talk about the frequency of the brain what? I'm having a hard time picturing a bunch of neurons. You know extracting away a single point a single quantity of frequency from a bunch of neurons faring so can you guys help me clear that?

31:58
Yeah and the brain it has numerous different frequencies happening all of the time and a lot of times it has multiple frequencies that are superimposed upon each other for example if brainwaves that my lab has discovered is a very high frequency oscillation that only happens at the peaks of data waves so as this 130-ish hurts frequency that happens on top of these about eight to fourteen hurts frequencies, so there's the question of okay.

32:33
If we filter in different bands of frequencies, then what do we get and can we use those to control some sorts of devices this is Sharena and I am done speaking. Okay so that makes sense but then I guess I don't know I'm not sure how I'm not sure that I understand how brainwaves are generated so how how exactly is it that you generate brain waves from single neurons firing so is it like the the rate of which numerous fire kind of make oscillations in the electromagnetic field and that's where you're picking up is that where it is.

33:14
I just have a hard time picture.

33:28
And well the people they popping at different rates, okay that is that is some sort of frequency it is a lot of noise but it is it's a bunch of clapping and it's a bunch of signals they were to to collapse such that half of the people thought that one rate and the other people thought that another rate then that then you can determine two different frequencies from that and, It is kind of strong because multiple people are in sync with each other so it's kind of similar with brain waves and if everyone in the room was to clap at the same frequency then that would create a very large and strong brain wave and this phenomenon is known as the one over f rule otherwise known as a a power frequency dynamic that happens in the brain so if you have brain waves that are at higher frequencies then you'll generally find that they are lower in power, but if you have, Waves that are high.

34:40
In power then you'll usually find that they are alone over infrequency. And so the whole idea to keep in mind is synchronization between different neurons and how well synchronized they are. So that if a lot of people are clapping at the same time, then it will produce a lot of power but if there are a bunch of different people clapping out a bunch of different rates that may be a higher number that may be a high amount of frequency but not very much power because it's not as synchronized.

35:13
This is Sharena and I am done speaking So I want to share two resources that might be useful to people in this group. If you look at if you look at my Twitter, it's my latest post it's not my pen post but it's the post that I just posted.

35:26
One paper might be interesting to Serena the other paper might be interesting the Ricky and everyone else might get a kick out of these papers too. So the first one is about subcortical electrophysiology activity, which which is detectable with EG source imaging and that that dies into the basically the Basically, you know, source imaging is is the the idea of explaining how accurate and how deep the EM EG signals can can be detected basically as it goes all the way to the thalamus and that's what that was I was referencing that.

36:02
The in terms of how EEG enhanced terms of how neuron neural activity at a low level becomes their brainwave Ricky might you might want to check out this biophysical it's a linked right underneath biophysical modeling on the origin of EEG. And it sort of dives deep on unanswering that question as well.

36:23
Where did you say that they were linked? I'm sorry. I missed that part. So just check my Twitter if you click on my profile and click on Twitter and then look at my most recent posts. You can see those two papers.

36:35
Got it. Thank you, man. Appreciate it.

36:41
Great. That was a great question. So I'm gonna go back to that training datasets. I think we were kind of in the same page if we got trained and if we can do some sort of mental activity easier and easier than we might at that point of our brain might not need that much oxygen.

37:01
So these those command might not work in future. So, what about all each signals? Is this true that's if we don't have that much activity, or if that those tasks are become easy. For us Brain or not those norms are not gonna fire or they're gonna fire without oxygen.

37:27
So are you talking about the EG tasks here, which I believe yes? That's true, yes. I I think it's very independent from training. You know like people I mean, according to my experience people, you know. So, I believe some really robust and they take actually a big part of the G signal and I think even even when people are trained they're still real robust CG activity.

38:01
I feel a little bit confused by the the question. I mean every time I neuron fires it uses oxygen, right? I use that is that true. I'm not sure. Yeah. Yes it is. Yeah, and then and then every time he uses oxygen blood has to float to to that spot.

38:22
Okay saying in that case. If consuming oxygen means it's it's consuming energy it's it's more difficult for me if if there is something that routine for me that that's required less oxygen. I'm maybe I'm just too simplifying of brain activity which probably I am but is is that in high level is that true that when I'm thinking hard to solve the mathematical problem versus and relaxing.

38:50
So that's when I'm thinking harder and use my memory, I'd like to my my my brain needs more oxygen. I guess I guess a good story that. Can support that idea is as many people claim that they they think better when they go for a walk or something and in their their brain is getting more oxygen.

39:09
That case if we get if we do something which is routine or it's probably doesn't need that much oxygen, so brains are not gonna fire our neurons are not gonna fire if they're doing oxygen.

39:27
This is Sharena and I am currently thinking about how athletes trade. Hypoxic environments like high up in the mountains in order to get really good athletic performance even under conditions where there's not as much oxygen in the environment. So I think that it really depends on what the body is able to do with what it has.

39:52
Right now I'm also thinking about how even when we're looking at slices and brain slices, then the artificial cerebrospinal fluid it has bubbles in it. It has oxygen for the assaults to stay alive. As long as possible. This is Sharena and I am done speaking.

40:16
I'm gonna shine that thank you huh? Yes. I think I think I'm maybe too simplifying brain activity. I probably there's gonna be much much more activity going around something some things happening and I think Nodes are not gonna just consume oxygen. There's nutrition that they need. They need both of them in order to fire.

40:39
But maybe in some cases with less oxygen or less nutrition, they can they can even fire or or or in some other cases they have to consume oxygen. Well, I can kind of answer that a little bit. So, you know yourself have to metabolize the nutrition that they receive and turn that into ATP.

41:06
And and then ATP is is used is the energy that the cells use to to conduct their active the physical activities. And I think of this in terms of sodium and potassium pumps as well as calcium signaling. So those are the three main molecules that it seems to that seem to be involved in transduction of neurons.

41:34
So yeah some neurons they're like assaulty banana. That's how you can think about them. There is a lot of salt on the outside of neurons and inside of neurons they have a lot of potassium in them. So when the, Cell becomes more and more polarized over time when more sodium comes in and more potassium flows out then eventually it gives a stronger negative.

42:05
Oh gains a stronger positive charge and then it fires an action potential. And this is how brain rhythms and neural circuits work, which is that. Action potentials fire and then the excite or inhibit the next neuron depending on whether it is excitatory or inhibitory neuron. This is Sharena and I am done talking I can add a fun fact that is that so you know sodium potassium and calcium these on the periodic table of these are under the classification of metals, right?

42:37
And and so that so like it's what's interesting is that you know, they'll have positive and negative positive or negative charges and so the basically the separation of positive and negative charges is what leads to that action potential. Firing but there's like an analogy to that to a lightning strike and that a lightning strike in the sky.

42:57
It's a it's a it's a loose loose analogy just just for humor but a lightning strike in the sky is basically a separation of positive and negative charges between the sky and the earth and so that's and then that results in the the action potential. I'm sorry the lightning strike just the again just a little bit of an analogous humor.

43:16
And I like to joke that basically the human beings are literally a metal robots because we because we're because because the the these electrical charges. Which are based upon, you know, the separation of of positive and negative charges, they're like lightning strikes that that is basically you can think of that as the as the the root of a brain wave that that ourselves are transmitting like a little bit of electricity maybe.

43:45
And then maybe also the cells are the the electric like electricity is or the electromagnetism that's bouncing around is altering the the positions of positive and negative ions in other neurons and and in that sense that could change. The. It when those other neurons fire it's just just a hypothesis but it's a fun idea, so I just wanted to share that.

44:10
So some idea I want to share I'm not quite sure about it but in terms of atoms questioning for example effect of neuroplasticity in the level of signal we can got I think the signal we've got in for example. EEG is an extracellular signals coming from the cutting coming from the chemical grant between the neurons.

44:32
So what we do have in our plasticity is all is one thing is firing the neurons in lower thresholds, and not as not the higher tools that it used to. Use to be fired when it is in the first experiences and the other one is making new pass in the brain.

44:53
So I think if for example, the threshold would be lower than the initial experiences it is still fires and be still cut the cut the signals from the extra alert extrasolar level and so on at the end of the day, we got the signals on EEG or for example, if we do get the signals from any source of nutrition or oxygen or ATP that.

45:20
They're not all cells used to do this activation. So I think it might affect a little bit but at the end it depends on what threshold we're going to use to capture the signal and I think it doesn't be that much that could affect our results in shorter at this in short time needs.

45:41
I say thank you bad job, so if and let me ask this question. If in this paper if they run that experiment with the people that they have ADHD, or maybe some other attention or memory problem, then do you think the result will change?

46:03
I think actually need to think a little bit more about it. It's firstly depends on the brain regions we're going to capture the signals from so if the regions are not involved in the regions that we expect to be changed based on ADHD or other situations in the people, it shouldn't affect the signals, but for example, we do have some we do have some proof of changes in for example functional connectivity that one part of it, for example in prefrontal cortex that is in these experiment.

46:38
S that I think for example under your singular chord studies more or less connected to some part of the brain but functionally but what we've we've got from these experiments to to use for that quadcopter control, I think is the level of activation and not sometimes like functional connectivity which is a synchronization or a correlation between two different signals, so I think it doesn't make any problem but yeah, it's it is still need to be.

47:13
Exposed I. I think. You guys that's a great point yeah. China good. This is Sharina and I think that when it comes to attention conditions what will tend to happen is that the signal that is collected will generally be noisier maybe it won't need to be trained upon but it would be noisier not just at one frequency but across a range of frequency is.

47:43
And that will create a sort of challenge for for creating a sort of brain computer interface can a person become better at this stuff over time was training you bet. I'm pretty sure that they can this is Sharina and I am done talking.

48:05
So I I wanted to say sort of so I mean, I guess if if the if the model of of so it and some I think some of the EEG devices really failed in terms of like, you know, the way they the way we went about trying to the you know device or control system with EEG in that when you're when you get into I guess analogy is when you get into a car for the first time and you or when you learn anything for the first time, you're you're your brain activity is greater than then.

48:40
Then what it's gonna be when you're really good at driving the car when when you get good at driving the car you're you're brain activity is is is greatly reduced because you're because I I always say at first your brain is just trying to figure it out and it's throwing it's throwing everything at the in the kitchen saying get trying to figure out how to drive this car and so there's like ton of brain activity and you're and maybe you're you're you're EEG signals will be really great at that point so trying to lift the box by thinking, you know, like the the Jedi mind trick toy or you know, that that is very straightforward in the beginning, but then like the better you.

49:15
Get at it the less brain activity it takes for you to to accomplish that task and and so that means that you're that the the the the app the power of your signals are decreasing and so then then it becomes harder the more you get at it because you're because your signals are decreasing as you get better at it and then then it just becomes confusing because you were really good at it but but but in your brain knows what to do, but it's no longer working because because your brain is not putting out as much effort into it and so there's sort of like like a little paradox with that then I think that's why it's You know this EG works really good in the beginning, but it doesn't seem to keep working anyway, that's just the hypothesis.

50:05
Yes, sorry. I think so Mike I think that's one of the reasons maybe combining another modality too easy might help so I think yeah eg might not be good enough but it still gonna be useful it's gonna give us some data if you use a good kind of data analysis model out of it.

50:27
This is Sharena and yeah, I think that it needs to not just be brain signals, but also behavioral correlates. For example performance on some sort of task, like navigating a drone that is going to make it a really good signal. Or to see okay, how is the person actually doing at this task?

50:50
Because at the end of the day what really matters does it matter whether they're able to navigate this thing or able to pay attention to the things that they want to pay attention to or does it matter what their brain activity is at that point and whether it should be picked up that they are putting a ton of effort.

51:08
So is it effort or outcome? That is a fun question to ask. This is Serena and I am done speaking. My hypothesis about why this study may have been so successful on the EEG side of things is that they were actually measuring the EMG of the muscle movement of the eyes and so similar to like, you know, how faceobok is focusing on the EMG with their with their acquisition of of control labs or CTRL labs.

51:35
What I think that at the point when your brain has figured out the most efficient way to do it, it's still going to consistently triggered the muscle at a in a consistent way even if the EEG activity becomes decreased and so I think if you're Trying to do a brand computer interface by focusing on EMG signals instead of e-juice signals, you might you might have a more consistent BCI for controlling things just just what I'm thinking.

52:06
I think that's a good point yet. I was actually gonna say that. So I think you know what they measure so the things that they are decoding with the GD is eyeballing sir really robust. It's really not something difficult even with one channel you can very easily get that eye blanks with EG.

52:26
So, you know, they're not trying to decode like some mental activities like rotation or something with the EG. So, I think they're all of you do here is just you know, just to increase the number of comments that can that it. Is used for like flying this drawn and when it comes to the other mental tasks.

52:48
So I think you know, you're regarding your earlier point Adam so I think as for some tasks like think about for example counting backwards or something. So if if the task like if you as you are trained in the task, if the task is transitioning to another mental activity, so let's say that you kind of get to memorize like these numbers.

53:16
As your accounting backwards. So if there's a transition between one test to the other if it's becoming less of a computational task and more of a memory task then I would you know, like see much more differentiation, but if it's a kind of tasks that require, you know, still like no matter how much you're trained still you have to use, you know, there's no transitioning in between different tasks.

53:42
I think still like probably the effect of you know, the training won't be that good but I also saw a lot of papers looking into trial. To. Trial variability in Afner signals. I think that's a huge field. So yeah. I think that's probably a problem only for some group of tasks and not all probably.

54:09
That's a good point. Thank you Jeda. And regarding Micah points on using EMG I kind of agree with that because at the end of a day there are a couple of muscles that they need to move and and also be quality of the EMG signal they're going to be better than EEG and combining those three EMG DNAs.

54:36
It might give us a better kind of information regarding what's what's going on in the brain and what? Are all the command that you're thinking about and we can just control some sort of computer out of our brain. Go ahead. This is Sharena and I remember playing Mario Kart as a kid and a really strange thing would happen especially when a person started playing for the first time which is that they would take this game controller and they would move their entire body while trying to move this virtual cart around even though the controller it didn't do anything.

55:14
I mean, it could not sense motion. It was just a game cube controller. So it's kind of fun to consider. Okay, how do people try to control it devices? How do they try to do this with not just their brain activ? Ity but with their muscles at least out first and can they get this stuff to happen just in their brains just as people figure out over time in Mario Kart.

55:37
That's turning their whole body does not actually make the cart changed direction is just the movement of the finger is and thinking about things in that way instead of kind of overfitting and doing things that are just completely instinctual. But working with human factors and thinking about what is instinctual and would get something easier to use is it's super fun as well and it's a huge problem.

56:03
In the world of brain computer interfaces, and I think that could make things better if these signals are picked up in an efficient way. This is Sharina and I am done speaking. Yeah, I think I think if we can find some sort of men's out task that's they always require some energy out of their brain and then we can kind of I'm not sure that's possible or not but I'm sure there should be some sort of a task that they're gonna be more difficult for brain to memorize it and using those to to to have a better PCI tools in future is gonna be much better but it's gonna be a combination of lots of research between our scientists and configurations.

56:50
Great so I think we are almost at the time and we want to make these rooms only one hour to review a paper every Monday at 10:00 p.m. for one hour we can review one one paper regarding your technology and then tonight's paper was within EGF news together in order to to to train a machine to understand different commands and we can use that for lots of things like moving things around us are using.

57:22
This technology. Next week, we're gonna find another good paper and we're gonna choose about it for any last question or comment regarding this paper. And again, thank you shader that was a great suggestion. Thanks everyone. I enjoy discussing with you. I know. Yeah looking forward to seeing you next week.

57:43
Thank you very much guys, this is very good. What did you say that you were gonna link the I'm conviction for next week? Yeah, I'm gonna achieve that then the next paper that we're gonna pick next week discussion. Okay, all right cool. Sounds good. Great, thank you everyone. Thank you Mike I thank you you you better very well.

58:05
I thank you everyone. I thought everyone's contribution was wonderful. I had a great time thank you so much. Thank you everyone, thank you guys.

01:04:47
A.

01:06:25
H.

01:06:38
Yeah.

01:06:45
Make sure to follow these conversations.

01:07:14
Please.

01:07:55
Like work physical body material body, we have to work out other bodies as well, but a lot of people is not aware that that's that's one thing that they have. Taken that level of knowledge away from us because the when we talk about the soul or the different aspects of self beyond the physical this power behind that because you start dealing with the deeper understanding on creation because really how true knowledge was to understand how to create things being architects being the the Masons for instance we were the move the architects of the, Builders but not just in the physical we was builders and the etheric realm as well meaning builders of the mind, we were masters of the mind, but but they understood that there was power behind being able to create and different spaces beyond the physical so they had to take that knowledge away from everybody when you start diving into that deeper knowledge you start diving into the knowledge of the divine feminine the divine feminine principles, that's why when you get into a lot of the, Hammock texts, it's they tend to take a lot of that principles out of.

01:09:37
Additive books, but I just want to say one more thing and I'll.
Transcribed by Pixel

Audio

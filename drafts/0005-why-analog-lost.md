### Why Analog Lost

### Quantum Computing Probably Will Too

I'm a chip designer.  Most of my career has been designing analog circuits and systems.  I spent the bulk of a decade at Apple, designing the analog parts of the overwhelmingly digital processors, or as we'd call them application processors (APs) or systems-on-chip (SoCs) which serve as the brain of every iPhone, iPad, Apple TV, and the like.  (We would also refer to our field as *analog and mixed-signal*, although this phrase has always been redundant: *analog* has always been half of the "mix".)  

The analog discipline and its practicing engineers are a dying breed.  For much of my time here I have been the youngest of the group, even while being its longest-tenured.  Where did this field go?  

### "Analog" Means "Offline" Now, But I Mean Electronics

First we should clarify what it means.  The term *analog* is usually contrasted with its common counterpart, *digital*.  In many contexts we use these terms to refer to differences between being *offline* and *connected*; we say that a taxi is analog, while an Uber is digital.  A Blockbuster store is analog, while a YouTube stream is digital.  These uses are fine, and meaningful, but not what I'll be talking about here.  Here we'll primarily discuss analog and digital *electronics*.  These are the electrical circuits which ultimately underly the Uber request, the Netflix stream, and the entirety of our information-age lives.  

Not long ago, it was a real option - even a common reality - to use analog electronics in all sorts of places - [including for computation](https://en.wikipedia.org/wiki/Analog_computer).  (We'll also review some theories on why it might [come back](https://spectrum.ieee.org/computing/hardware/not-your-fathers-analog-computer).)  Through the twentieth century, the analog and digital paradigms faced off.  This was a fair fight.  Both combatants began staring head-on in the center of the ring.  No referee was [paid off](https://en.wikipedia.org/wiki/Tim_Donaghy).  Neither side colluded with the Russians.  

Digital won in a landslide.  Our world became digital, both in the colloqquial, "connected" sense, and the engineering-level electronic sense.  Every computer - now including between one and several dozen in every car, home appliance, toy, airliner, etc. - operates on the digital paradigm.  Analog was left relegated to the domains where it is the *only* available option - primarily those interacting with the physical world.  It is Napoleon exiled to Elba, or Yoda on Dagoba - it exists only in the limited confines where it can survive.

### Analog and Digital Information

Claude Shannon taught us that any chunk of information can be represented in either discrete or continuous form.  



#### Why did digital win?  

Seven decades into our electronic-information age, digital stuff - digital computers, digital cameras, digital watches, digital networks, and on - are all far better than their analog counterparts.  That's true *today*.  But how and why did this come to be?  

First, we'll need to refine definitions of just what these terms mean.  Analog systems' characteristic trait is that they represent information in continuous quantities.  In typical realizations (including electronics), these continuous variables are mapped directly onto physical quantities (voltage, current, pressure, temperature, etc.)  These *analogies* are in fact the root of the term *analog*. 

Digital systems, in contrast, represent information in, well, digits.  (Also from which they derive their name.)  The (overwhelmingly) most common digital alphabet in electronics is *binary*, in which data are stored in quanta called *binary digits* or *bits*.  Bits only have two values, which we often refer to as 0 and 1, or True and False.  There is a new degree of freedom available in crafting a physical representation of a bit: a whole range of physical quantity can represent each digital value.  In electronics, this is often done by setting voltages "close to" one of two other widely-available voltages.  

### Nature is Analog, and Digital 

The analog comebach mob tends to note that analog cannot go away, because nature is fundamentally analog.  There are a few problems with this idea.  First, *go away* - altogether - is an awfully low bar.  Inventions far older and less useful than analog electronics have avoided going away altogether.  Horses-drawn carriages, muskets, etc all still exist despite centuries of relegation into increasing irrelevance.  They just serve tiny and continually shrinking niches. 

More important, nature is analog, except when it isn't.  Temperature, air pressure, frequency, time, and a whole slew of natural phenomena we experience are (as best we can tell) analog.  Many others are digital.  Most species have a digital number of sexes, typically one or two.  Humans have discrete quantities of arms, legs, eyes, ears, and lungs. 

Perhaps the most impactful such natural-digital phenomena is the mechanism by our genetics are passed from generation to generation: DNA.  Humans - and virtually every other species, including those as simple as amoeba - encode their genetic traits in digital form.  This is true of every genetic form of life of which we know.  Human DNA is encoded in a four-value alphabet represented by the four protein molecules aXXX, cXXX, tXXX, and gXXX, commonly referred to as A, C, T, and G.  

Genetics features many of the needs we have highlighted for digital systems.  It conveys  a large - but finite - quantity of imformation.  It needs to be copied with very high (if not perfect) fidelity, trillions of times over millenia.  

#### Electronics and Its Paradigms

Analog and digital electronics are built of the exact same stuff: silicon, transistors, wires.  They are governed by the same laws of physics.  Yet we frequently refer to combinations of these things as being either analog or digital in nature.  Sometimes we even refer to *the same* combinations on either side of this divide, depending on their context.  Digitally and analog-ly focused minds tend to have viscerally different reactions to circuits like this:

[](Inverter with in-out shorted)

*Credit Bram Nauta, ISSCC*

In the digital paradigm, this is a catastrophe.  It appears to be a sort of infinite-frequency oscillator: any perturbation to the input immediately toggles the output, which is directly tied to the input, causing the output to toggle again.  The process repeats ad infinitum, even before a single instant of time can pass.

The analog crowd sees less cause for panic.  Most probably see this circuit as resolving to something like this:

![]()

*(For the non-engineering crowd: the two squiggly things are transistors.)*

Boils down to just a voltage divider.  No harm, no foul. 

#### The Physics Analogy 

Nauta's catastrophe-avoided circuit should cast doubt on a common question: *is it digital or analog*?  Depending which way we look, it can be either.  Clearly there must be something wrong with the question. 

In truth, "analog" and "digital" are not sub-categories of circuits or systems - they are different paradigms for describing them.

The relationship between the analog and digital paradigms parallels that between classical and quantum physics.  In principle, quantum physics can explain why planes fly or crash, bridges stand or fall, and how balls roll along inclined planes.  Our only problem is applying it.  Even with even desire to create the quantum model of a Boeing 737, we would need far longer than the history of the universe - much less than the history of humanity - for it to compute a result, even on the worlds most advanced super-computers.  While the quantum laws are principally applicable everywhere, they are only practically applicable in the case of the very small, in which their high resolution is not wasted amid a wash of complexity. 

Yet we manage to make bridges stand, and did so long before developing quantum mechanics.   Newton’s mechanics remain the applicable law of the physical land for "regular sized" things: apples, humans, baseballs, airplanes, and bridges.  Things orders of magnitude larger - stars, galaxies - demand relativity.  Others orders smaller - electrons, atoms, and molecules - demand quantum mechanics. 

So it is with electronics.  The analog paradigm is to digital as quantum physics is to Newton.  The digital view is more concise, more abstract, lower fidelity and far more efficient.  The analog views is far higher fidelity, in exchange for being far less efficient.  

Note this applies to *realizable* systems, i.e. those we can build in reality.  A purely theoretical version of, say, John Turing's instruction-tape machine can be made of purely digital stuff.  An implementation built out of electrons cannot.  It has to, at some level of view, play by the same rules the electrons follow in every other context.

* Scratch 

Analog is little more than a wrapper around Maxwells equations and Newton’s mechanics.  

But there must be things that are only analog.  More accurately, there are things whose analysis only works when done from thebanalognoaradigm.  Just as Newtonian mechanics fail to describe electrons, digital mechanics fail to describe an op-amp, antenna 

  Our best analogy is to classical and quantum physics.  The twentieth century's two revolutions in physics, quantum mechanics and relativity, taught us that Newton's physics only covered *part* of the natural universe.  In Newton's case, the subset was things of roughly human-size: apples, people, bridges, airplanes.  It couldn't explain the world at the sub-atomic level, nor could it explain cosmic-size phenomena such as black holes.  Quantum physics was able to explain the sub-atomic, and crucially in the limit of much larger bodies, quantum

In truth, referring to something as an *analog circuit* means "***only*** the analog paradigm successfully describes this".  Calling another circuit *digital* means "we can ***also*** use digital paradigm to describe this one".  



## The Two Reasons

It's probably not yet clear why either of these things is inherently *better* than the other.  In fairness, it's also mysterious (or just unconsidered) to most in the field.  My own theory of the case boils down to two primary factors.  Interestingly only one is a physical property of the systems; *both* are properties of how we think about them.



### The Two Reasons

- 1. Digital better map onto how *we* think. 
- 2. We found an implementation technology which made digital cheaper, and continued to rapidly improve

Note neither is a feature of the analog or digital paradigms per se.  Reason 1 has a number of facets, some of which may be sufficiently distinct to merit being their own reasons. 

### Reason 1: How *We* Think

> Design is a human endeavor; forget that and all is lost.
> -- Bjarne Stroustroup, creator of C++ 

How:

* We hate uncertainty, noise, and anything that operates non-deterministically
* We instead (strongly) prefer narrative, causal descriptions of how things work 
* We solve complex problems by breaking them hierarchically into smaller sub-problems, and building abstractions around the solutions to these sub-problems

Neural networks may be in some sense modeled on how the brain works.  But they are not built in the vein of how we subjectively think.  



### What's the Difference Between "A Lot" and Infinity?

Perhaps the central difference between the analog and digital paradigms - and one where our intuitions diverge most - is their handling of noise. 

Analog systems have an inherent advantage in the resolution

How many voltages are there between 0V and 1V?  Infinity!  This is a lot like asking how many real numbers there are between zero and one.  And if we zoom in, say to between 0.1V and 0.2V, we find yet another infinite number of new values.  The same applies if we zoom into the range from, say, 1nV to 2nV.  This is in some sense the defining trait of analog systems: no matter how far we zoom in, there is not only more, but infinitely more to find.  In this sense, audiophiles complaining about digital music have a point: even the 2^24 levels available to high-resolution audio are a lot less than the infinite resolution available in analog form.  (Whether they can actually *hear* these differences is another matter; most are full of shit.)

It turns out the difference between "a lot" and infinity is still, well, infinity.  This likely sounds like a tough deal to turn down.  But the relevant questions for this infinite resolution are (a) how much more value do we derive from it, and (b) at what cost?  

For much of the information of interest, the "infinite" analog resolution is just wasted.  A test score could be represented between 0 and 100.  Even if we add more precise fractional elements - how far should they go?  Will two decimal places suffice?  If not, how about ten or twenty?  *Infinite* decimal places require a hell of a lot more information than any of these options.  Many quantities are inherently discretely-valued in their own right.  Is a restaurant categorized as Italian, Mexican, Indian or Chinese?  We can think of many values for this field, and still fall far short of infinity.

The rich analog resolution come at a steep price.  Nearly every useful operation to be performed on an analog system is subject to *noise*, often including the act of just storing a value from one instant to the next.  

### Where Does Noise Come From? 

We often use the term *noise* to represent a slew of phenomena, largely unrelated in physical origin.  Their common trait is the act of masking a desired signal.  Some of these phenomena, such as what we'd more specifically call *interference*, are deterministic: if we only had access to more information, we could in principle measure and cancel them our.  A nearby conversation blurting out your own is a common example.  In electronics these interference phenomena are common due to electromagnetic coupling, for instance between nearby circuits or signals.  

Other sources of noise are *stochastic*, or truly random.  While we can make factual statements about stochastic proecesses in aggregate - i.e. their standard deviation - by definition, they lack a mechanism for predicting their progression across time.  Stochastic quantities are like dust molecules randomly floating about and obscuring your view of the Beijing skyline.  

While both the analog and digital paradigms are subject to interference, the digital symbols generally lack any sources of stochastic noise.  Logic gates, flip-flops, and all of the other common digital-processing building blocks are in this sense noiseless.  As long as the underlying physical representation of the bits play by the rules, their outputs are exactly correct, every time, forever.

Analog circuits, in contrast, generally include at least a few fundamentally stochastic noise sources, and an inherent sensitivity to them.  Since analog circuits represent information *directly* as physical quantities, any stochastic-noise injected into these physical quantities cannot be separated in principle from the desired signal.  The digital paradigm adds a layer of indirection, trafficking in symbols which are represented by a *range* of a physical quantity.  This has the happy effect of providing an essentially complete indifference to physics-level stochastic phenomena. 

The most un-shakeable source of this stochastic noise in analog circuits comes, ironically, from the bit of physics we analogized them to: quantum physics.  Particularly the quantization of the fundamental physical quantities - particularly charge - renders the continuously-valued paradigm inaccurate at the smallest scales, and in some error at any scale. 

Let's imagine our analog quantity of interest is an electrical current.  The electrical current is velocity of sorts; it represents the number of electrons which flow past a point, per unit time.  Think of it by analogy to the number of pedestrians crossing a busy intersection.  The "signal" could be represented by the number in-between the two sidewalks at any point in time.  Electrons, like people, are not decomposable in this context - so we can't ever have a half-person, or a quarter-electron.

Now let's imagine reducing the number of people crossing the street.  Initially envision it's incredibly busy, like an intersection in Times Square.  We'll turn down the current, maybe until it looks like the exit from a crowded parking lot.  As we approach the density of a typical suburban crosswalk (and perhaps earlier), it will become apparent that the number of people crossing the street fluctuates with time, no matter our best efforts.  In the limiting case, one person crosses infrequently - say, once per hour.  On average this is the current; instantaneously, there is always either zero or one electron coming by.  And once we recognize this, it should also become clear the problem existed all along: even when 1000 pedestrians crossed the street, there were instants with 999, and other instances with 1001.  In particularly sporadic times there may have even been 1100.

This is the nature of fundamental physical noise, from which all analog systems suffer.  There is no principal by which we can avoid this noise (save for ditching the analog system); we can only manage how much is tolerable.  A few conceptual answers may jump out.  As in the "one street-crosser per hour" case, we can average over time.  In a sense this is what the physical system is doing for us already; we somehow need to track its action.  This limits how often we can update or read our information; we inherently only know the average "current" over the past hour.  We may want to update or react upon our score more frequently.  Equivalently, we can say this averaging technique limits our bandwidth.  If we don't like the bandwidth reduction, we can add more people!  If one person per hour generates too much noise, how about 1000 people per hour?  How about 1000 people per second?  This clearly helps, and also clearly costs a great deal.  

#### Digital Noise

Digital systems have their own fundamental noise source, which we call *quantization noise*.  This arises from nothing about the underlying physics of the problem, but of our choice in how to represent it.  Let's imagine the spring-mass system, in which the mass can travel over, say, 8 inches.  And we'll choose to represent it digitally with 8 levels - nominally {0.5, 1.5, ..., 7,.5} inches.  When the mass is 1.25 inches from the wall, we'd represent it with the second code, which nominally represents 1.5 inches.  Our description in this context would include 0.25 inches of *quantization error*, or quantization *noise*.  We can always reduce this quantization noise, by adding more levels - or correspondingly more bits.  

In a sense, analog noise and quantization noise appear to derive from the same phenomenon: quantization.  But the two have several fundamental differences.  

First: in the analog case, the source of the noise *is the system*.  In the digital case, the source of the noise *is us*.  The two may be equal in value for any particular instance (in fact, digital-analog and analog-digital conversion designers commonly trade-off between the two, and generally seek to make them roughly equal).  Analog noise is generated even if our analog quantities are static.  It has a non-deterministic progression through time.  Quantization noise does not have this property: it is a one-to-one function of the signal value.  

The ramifications here are more profound than we may expect.  They mean that an analog computer, given identical inputs and identical conditions, computes a subtly *different* result each time.  This, ultimately, is the part we can't handle.  Our brains are wired to expect causal systems, with deterministic results.  We expect that a machine designed to add 1+2 will yield 3 - *exactly* 3 - every time, forever.  Analog electronics lack this property.  Their results can be ever-more confounding as the propagate through levels of computation.  In a sense, each of the paradigms has its own fundamental noise source - we just *like* one of them better.



### Causality

Example, driving your car.  Most of us think of a drive as a sequence of steps:

* Go straight until you reach Mission St.
* Then turn right.  Watch out for hipsters on bikes and yuppies on scooters, neither watch where they are going. 
* After you pass three (unsuspiciously) recently-burned-down businesses, make another right. 

These high-level directions form a set of what you might call "open-loop" instructions.  There are no decisions being made, no internal feedback.  A flow-chart would progress in a straight line.  But we enjoy our narrative tone enough to deploy it more broadly, such as in more feedback-sensitive, lower-level tasks such as keeping the distance from a neighboring car on the highway.  If asked to describe how they do this, nearly everyone says something like "If they speed up, I can speed up too.  If they slow down, I have to slow down to keep my distance.".  No one (except maybe the biggest nerds) would say something like "I continuously update my foot's pressure on the accellerator to equal an empirical proportion of the other car's velocity".  But the latter (analog) statement is likely closer to the truth.  Speeding up and slowing down don't happen in discrete events, but instead are taking place continuously, often subconsciously. 

### Abstraction

#### Analog

This comes back to the analogy to classical and quantum physics.  I often analogize the chip and electronics design process to that of other complex systems: the bay bridge, SalesForce tower, or the International Space Station.  If we were designing these systems instead, and wanted to analyze or simulate them - what level of complexity would we use?  Would, say, the molecular level seem appropriate?  How about the quantum level?  Of course not!  We know these paradigms *correctly* describe the orbit of ISS - far more accurately than we would ever care for.  Their real problem is they would take our lifetimes (and then some) to create and evaluate.  Their predictive power is eroded by exactly the same trait which makes them irreplaceable in other contexts: their comprehensively detailed model of the universe.

The level of detail we should use becomes pretty obvious: *the simplest one that works*.  What we mean by *work* is crucial here: more specifically, what will predict the behavior of the system, in the ways that *we care about*.  This is true of any endeavor using design-modeling, or even of more general analytical modeling.  (Nate Silver's election models would be far tougher to grok if they ran at a molecular level.). So it is with electronics.  Particularly chips.  In design-modeling, we often categorize "the ways we care" into other, codifiable dimensions: specs.  Pass-fail criteria.  Performance metrics.  Agreements on what represents success and failure.  Ultimately these are just agreements between people: perhaps a company and its customers, or between teams or individuals in an intra-instituional relationship.

Why use digital?  Exactly *because* it abstracts away a bunch of detail.



### Black Magic

Analog engineers (*especially* the RF variety) have an unfortunate practice of referring to themselves as being versed in *black magic*.  The phrase is enshrined in the titles of books, web sites, and throughout a web's worth of information on the topic.  

This is bullshit.  Any scientific (and really any fact-based) endeavor claiming to rely on *black magic* should not just be regarded skeptically, it should be regarded as full of shit.  Practitioners of these black arts know that underlying their intuitions lies the same science dictating how everything else in the world works.  I read the *black magic* phrase as having a simpler meaning: *I don't understand this well enough to explain it to you*.  

There are many causes of this attitude.  Genuine lack of understanding is perhaps the least charitable of them.  Insecurity in a well-grounded understanding, or in the ability to communicate it, is probably just as common.  Some are likely based in job security; essentially maintaining personally-held trade-secrets, available only to the practitioners, transferred through domain-specific chants, grunts, and jargon.  All of these reasons are lazy, to the point of being cowardly.  This is a profession trapped in an intellectual ghetto, responding to a quickly dying population not by reaching out, but by building taller walls to prevent further escape.  Not only are the *people* from outside the city-walls a terrifying threat - so are any *ideas* they might catapult in.  















### Analog's Most Recent Champion(s)

There has been one person pushing a new wave of analog for years: George Dyson. 

Some GD quotes 

These are category errors.  There are no analog components and digital components to contrast here, only components and analog and digital ways of looking at them.  To the extent that it makes sense to call a thing an analog component, at best we might mean a component whose description only makes sense in the analog paradigm.  

Dyson seems to make these category errors everywhere he goes. 

More quotes, some Facebook stuff

At best this is misguided.  Facebook most certainly stores a social network very digitally.  Case in point, you can be friends with another Facebook user, or not.  You cannot be friends of level 13 versus level 99, much less level 3.14159.  Friendship, in facebooks context, is not only digital, it is binary.  There are two available states: friend and not.  Real life in this sense is analog.  Each of your friends come at different levels of breadth and depth, and perhaps each of these dimensions across a variety of topics, durations, or situations.  You might be great friends in a poker game, but complete strangers regarding your romantic relationships, professions.  Friendship is also not necessarily symmetric.  One friend can rate a relationship as a 99, while her counterpart rates it as a 1. 

Even if you attempt to extract a quantitative multi level measure of friend-ness, perhaps for example a number of shared friends, conversations, or joint photos, Facebook would still store these quantities very digitally.  Even if they attempt to create a floating point representation of friend-ness - perhaps an elaborate weighted combination of the per-time rates of these quantities, the result would still be digital. 

GD seems to believe that analog will matter when we give up the design of our systems, and let the machines take over for us.   

Human brains work

Stats vs systems vs narratives 
Silver, taleb, Harris even agree on narratives 

Stroustroup design human activity













### Moore's Free Lunch

http://www.gotw.ca/publications/concurrency-ddj.htm

The phrase *Moore's Law* has always been off.  The inclusion of the term *law*, coupled with the fact that it concerns a complicated scientific-seeming topic, leads people to believe it is some law of nature, like Newton's laws of motion or the second law of thermodynamics.  Or perhaps more like Ahmdal's law, which sets a theoretical limit on abstract quantities such as computer programs.  What Gordon Moore made, in truth, was a prediction about *people*.  Particularly the intellectual progress of a group of people driving the semiconductor fabrication space.  He predicted an exponential rate of progress in this field, extending indefinitely into the future.  Countless inventions and person-years of hard work caused this prediction to hold over decades. 

The notion of an *end of* Moore's Law appears to fail to dispel this notion.  No one expects gravity or entropy to *end*, but many accept chip-progress as a fact of nature, somehow limited to the late 20th century.  

Perception of Moore's Law seems similar to had Gordon Moore arrived in Chicago in the early 1990s and declared, *this Michael Jordan guy is so good, his team will win the championship every year*.  And the reaction was such a complete internalization of this expectation that we all ceased to notice this as an acheivement.  This *Moore's Jordan's Law* would then only enter our conciousness to disappoint us when violated, whether due to circumstances on the court or Jordan's eventual retirement.  Why shouldn't a Jordan team win every year - it's a verified law of nature?





### If Digital, Why Binary?

Digital information can, in principle, be stored in systems with any number of states.  We have already seen the four-value coding of DNA and RNA.  Researchers at (FIXME: XYZ) study the utility of ternary (three-state) computing for high-performance and high-efficiency applications.  These "multi-level" (where "multi" means "more than two") systems have similar logical algebras, analogous logic gates, and the capacity to generate just as arbitrary of functionality.  And we do use them, in a few niche places.  Popular wireline communication protocols such as PAM-3 and PAM-4 use three-level and four-level binary coding.  Even more popular wireless communication schemes such as QAM-4 similarly encode digital information in more than two states. 

Yet the overwhelming majority of the digital world is represented in binary.  This includes every popular computer architecture and instruction set, and correspondingly every popular programming language.  Any self-respecting computer language has a built in (binary) Boolean type.  None (to my knowledge) include a three, four, or more-state such primitive. 

So why did digital electronics near-universally settle for binary?  Wouldn't allowing every signal to have, say, four states be "twice" as efficient (in some sense) than allowing only two?  For that matter, wouldn't eight, or eleven, or 365 such levels be even more powerful? 

This is due to implication technology.  Even before decades of generation-on-generation advances, the combination of integrated circuit fabrication and CMOS logic was already an awfully good deal.  CMOS uses a combination of two (C)omplementary flavors of MOS (metal-oxide-semiconductor) transistor to represent binary signals as voltages "near" one of two widely distributed power-supply voltages.  This leads to logic circuits which are highly compact, robust, and perhaps most important, power efficient.  The CMOS style powers essentially every digital chip you use - and likely all that you have *ever* used.  The two workhorse universal gates of the boolean algebra, NAND and NOR, each require only four transistors.  Simple memory cells require only six.  More complex and versatile functions such as AND-OR-INVERT (AOI) require only a few more. 

Analog circuits also play nice in CMOS technology.  Advances in CMOS technology often characterized by Moore's "free lunch" also improve analog circuits.  It has just tended to improve them by less than it has digital circuits.  



### Outlook: Quantum Computing

Digital beat analog because (a) the digital paradigm maps better onto how we think, and (b) we found a powerful and improving implementation technology on which to build digital logic.  

This bodes poorly for quantum computing.  It's hard to imagine a paradigm more poorly suited to (a) human intuition and (b) efficient implementation than quantum computers.  

The pitch for quantum computing generally starts with an intro to "quantum bits", or qubits: think of bits, but which instead of storing one of only two values, they can store an infinite number!  Our review of the digital-analog divide should render this pretty unspectacular.  We've always had "analog bits", better known as analog signals, with an infinite number of possible values. 

To be sure, quantum computing offers promise that analog never could.  Computations generally rely on the quantum phenomena of *entanglement* between qubits, or quantum states of particles.  Performing an elaborate computation generally requires entangling a set of qubits in a particular state and observing one.  Poof!  All of the rest resolve too.  

If we went searching for a mechanism of computation amenable to human intuition, it would be hard to find a worse candidate than quantum entanglement.  This was the exact facet of quantum mechanics that Albert Einstein famously derided as "spooky action at a distance".  

Entangling qubits has also proved to be at a painful intersection of two more traits we've reviewed: implementation technology and noise sensitivity.  Existing quantum computers require a high-end science-lab-grade implementation technology, generally requiring temperatures near absolute zero.  Entangling qubits is both the important part and, well, the hard part.  Noise levels in existing quantum computers make analog computation look incredible by comparison.  IBM's advice when running quantum computation is to repeat each one, generally dozens of times.  (In other words, oversampling.)  If only we could entangle, say, 100 qubits, the work inherent in each computation would be something like 2^100 times a typical digital-computer operation; we would have plenty of time to over-sample and still come out ahead.  Unfortunately such levels remain on the distant horizon.

At age 20 I was convinced that my life's work would be working towards ushering out the digital era, and ushering in the quantum era.  Now I expect that quantum computing won't amount to shit, at least in my lifetime.  By this I mean a material economic or popular impact, outside of a research setting.  



### After the Machines Take Over

For Dyson and other champions of the analog renaissance, the rationale may be in line with reason 1.  If (or when) advances in artificial intelligence render humans irrelevant in the design of future systems, human intuition will no longer be terribly relevant to what technologies our AI-overlords decide to develop.  

There is no particular reason to expect super-human - perhaps many orders of magnitude greater than human - intelligence to share our intuitions, tendencies, or patterns.  The biases away from uncertainty and noise, towards narrative and hierarchy have undoubtedly extracted a tax on the quality of human-designed systems.  A perfectly rational AI could in principle shed them, and be left solely with the criteria for what is best. 

It then stands to reason that the future may in fact be analog.  Future AI could generate a return to analog systems, which in principle offer a few powerful points of flexibility which digital systems do not.  But it's also possible that AI-designed systems would be quantum, or digital, or any other mix of any number of paradigms.  That AI would not share our cognitive preference for digital does not mean that it would hold a counterbalancing preference for analog.  The two are not opposites, nor are they the only ways of storing and processing information.  Quantum computing provides an immediately available counterexample.  

But future AI may venture further afield.  Our information age has been built on primarily electronic media.  Virtually all computers, storage, and communication uses electronic means.  Information is, by and large, represented by the location of handfuls of electrons.  While sound and light have always been valuable communications media for humans, they are rare in communication between machines.  (High-performance optical links are an exception which comprise a far smaller share of machine-targeted communication than audio and video comprise human-targeted communication.)  

Will our future AI overlords retain our affinity for storing and transmitting information with electrons?  Maybe.  But just as they need not retain our affinity for the digital paradigm, there is no assurance that artificial designers will prefer electronics at all.  They seem just as likely to find means of storing information which we have not conceived.  Perhaps using temperature, air pressure, or gravity.  Instead of electrons, data might be conveyed with gravitons, photons, Higgs bosons, or any number of as-yet undiscovered physical phenomena. 

There is perhaps one factor making it more likely for AI to prefer digital systems.  At our current place in history and pace of development, it appears increasingly likely that the first super-human intelligences (at least on earth) will be made of digital electronics.  Perhaps the very constitution of AI will cause it to favor the digital paradigm, at least for a time.

But as captured in Sam Harris' AI TED Talk, even meager teams of such AI researchers will perform thousands of years of intellectual work for each human week.  What can we imagine the state of our understanding of the universe will be, after another twenty-thousand years of human-pace intellectual progress?  This will become the pace of a typical work-week. 
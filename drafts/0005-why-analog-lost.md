### Why Analog Lost

My team within Apple Silicon focuses on the *analog and mixed-signal* portions of our chips.  (Although this phrase has always struck me as redundant: isn't *analog* half of the "mix"?)  The analog discipline and its practicing engineers are a dying breed.  For much of my time here I have been the youngest of the group, even while being its longest-tenured.  Where did this field go?  First we should clarify what it means.  The term *analog* is usually contrasted with its common counterpart, *digital*.  In many contexts we use these terms to refer to differences between being *offline* and *connected*; we say that a taxi is analog, while an Uber is digital.  A Blockbuster store is analog, while a Netflix stream is digital.  These uses are meaningful - but not what I'll be referring to.  Here we'll primarily discuss analog and digital *electronics*.  These are the electrical circuits which ultimately underly the Uber request, the Netflix stream, and the entirety of our information-age, computer-driven lives.  

Not long ago, it was a real option - even a common reality - to use analog electronics in all sorts of places - [including computation](https://en.wikipedia.org/wiki/Analog_computer).  (You can even read opinions on why it might [come back](https://spectrum.ieee.org/computing/hardware/not-your-fathers-analog-computer).)  Through the twentieth century, the analog and digital paradigms faced off.  This was a fair fight; both combatants began staring head-on in the center of the ring.  No referee was [paid off](https://en.wikipedia.org/wiki/Tim_Donaghy).  No one colluded with the Russians.  Digital won in a landslide.  Analog was been relegated to the domains where it is the *only* available option - primarily those interacting with the physical world.  It is Napoleon exiled to Elba, or Yoda on Dagoba - it exists only in the limited confines where it can survive.

Why did digital win?  I find that common treatments of this tend to confuse cause and effect.  You'll hear such confusion in describing digital cameras.  The essential improvements of a digital camera: the lack of physical film-development process, ease of copying and sharing of its digital image-output, improvements in image processing - are not really ramifications of it being *digital*, but of it being *electronic*.  We like sharing photos through networked, connected computers, and we like seeing them immediately rather than after a lengthy visit to the developer.  But nowhere in these desires do we care about the physics underlying the signals or computations.  So are they all just created equal?  No.  Again, the digital paradigm won hands-down.  We just tend to misinterpret the reasons.  Claiming that digital won because digital computers are much more powerful *today* would be akin to claiming American won its Revolutionary War because its 2018 military could overpower 2018 Britain's.  

But there are real reasons.  We should take a closer look at what these terms mean.  I find defining *analog* and *digital* to actually be a pretty tough instance of the dinner-party test.  Short answers might include phrases like *analog signals have continuous values, and digital signals have discrete values*.  That's pretty good.  For a broader audience, I have heard this as *digital signals are like on/off switches, and analog signals are like dimmer-switches*.  Also true - although nowhere near descriptive enough to capture why the on/off switch should win.  (Wouldn't having more states be preferable?  Programmers, imagine your efficiency if ever single bit held not just two, but an *infinite* number of possible values!)  

Our common term *analog* is short-handed from *analogous*.  The *analogy* underlying the name is between the *quantities* in a physical system and the *variables* in the math used to describe it.  In analog systems, the two are directly analogous; each variable directly represents a physical quantity.  (The underlying assumption here, is that we will be doing some math.). In electronics, these quantities are commonly voltages and currents.  The same applies to more general analog systems.  Those of us who passed freshman physics will remember the basic spring-mass problem, and the derivations from Newton's laws which describe its dynamics.  Here the position and velocity of the spring are both analog quantities; they have analogous representations in the physical and mathematical systems.

*Digital* electronics, in contrast, represent information in, well, digits.  (Also from which they derive their name.)  These digits are commonly represented in binary form and short-handed from *binary digits* to *bits*.  Bits only have two values, which we often refer to as 0 and 1, or True and False.  There is a new degree of freedom available in crafting a physical representation of a bit: a whole range of physical quantity can represent each digital value.  In electronics, this is often done by setting voltages "close to" one of two other voltages, which we call power and ground.  In the spring-mass system, we can think of the binary states as "close to the wall" and "far from the wall".  Where we draw the line between the two is up to us.  Nothing demands that we limit ourselves to one such threshold; we can (almost) just as easily chop the mass-space into four parts, and have a two-bit, four-level indication of the mass's position.  Improving this accuracy by another factor of two requires (you guessed it) just adding another bit.  

Analog and digital electronics are built of the exact same stuff: silicon, transistors, wires.  The same laws of physics govern them both.  Yet we refer to combinations of these things as being either analog or digital in nature.  Sometimes, as we'll see, we even refer to *the same* combinations on either side of this divide, depending on their context.  

In truth analog and digital are not sub-categories of circuits or systems: they are different paradigms for *describing* them.  The analog paradigm subsumes the digital one (at least in electronics).  Our best analogy is to classical and quantum physics.  The twentieth century's two revolutions in physics, quantum mechanics and relativity, taught us that Newton's physics only covered *part* of the natural universe.  In Newton's case, the subset was things of roughly our size: apples, people, bridges, airplanes.  It couldn't explain the world at the sub-atomic level, nor could it explain cosmic-size phenomena such as black holes.  Quantum physics was able to explain the sub-atomic, and crucially in the limit of much larger bodies, quantum

Quantum and classical physics

In truth, referring to something as an *analog circuit* means "***only*** the analog paradigm successfully describes this".  Calling another circuit *digital* means "we can ***also*** use digital paradigm to describe this one".  

Bram Nauta shared a fun example of this once upon a time at ISSCC, in describing the differences betwen his analog and digital team's reactions to a simple circuit:

[](Inverter with in-out shorted)

The digital crowd sees this as the most common implementation of the logic inverter.  (For the non-engineering crowd: the two squiggly things are transistors.). Forced into the digital paradigm, this appears to be a sort of infinite-frequency oscillator: any perturbation to the input immediately toggles the output, which is directly tied to the input, causing the output to toggle again.  The process repeats ad infinitum, even before a single instant of time can pass.

The analog crowd sees less cause for panic.  

Now again - why did digital win?  

It's probably still unclear why either of these things is inherently *better* than the other.  In fairness, it's either mysterious (or just unconsidered) to most in the field.  My own theory of the case boils down to two primary factors.  Interestingly only one is a physical property of the systems; *both* are properties of how we think about them.

### Noise

As with defining our prior terms, I'll mean something more specific here than may be usual.  We commonly hear of *noise* as generally referring to undesired variation, masking a desirable underlying signal.  There are many varieties and sources.  We may, for example, hear that sampling noise contributes to the margin of error in a political poll.  Or that noise from unimportant news events is crowding out the impact of more important ones.  
These are not the sources of noise that I mean.  There are two that I mean in particular: one each inherently associated with the analog and digital paradigms.  For analog, this boils down to the quantum nature of the universe.  Let's imagine our analog quantity of interest is an electrical current.  And let's have it represent, say, our score in a game of Pac-Man.  The electrical current is velocity of sorts; it represents the number of electrons which flow past a point, per unit time.  Think of it by analogy to the number of pedestrians crossing a busy intersection.  The "signal" could be represented by the number in-between the two sidewalks at any point in time.  Electrons, like people, are not decomposable in this context - so we can't ever have a half-person, or a quarter-electron.
Now let's imagine reducing the number of people crossing the street.  Initially envision it's incredibly busy, like an intersection in Times Square.  We'll turn down the current, maybe until it looks like the exit from a crowded parking lot.  As we approach the density of a typical suburban crosswalk (and perhaps earlier), it will become apparent that the number of people crossing the street fluctuates with time, no matter our best efforts.  In the limiting case, one person crosses infrequently - say, once per hour.  On average this is the current; instantaneously, there is always either zero or one electron coming by.  And once we recognize this, it should also become clear the problem existed all along: even when 1000 pedestrians crossed the street, there were instants with 999, and other instances with 1001.  In particularly sporadic times there may have even been 1100.

This is the nature of fundamental physical noise, from which all analog systems suffer.  (The analogy to a voltage may seem more strained, but remains quite analogous.)  There is no principal by which we can avoid this noise (save for ditching the analog system); we can only manage how much is tolerable.  A few conceptual answers may jump out.  As in the "one street-crosser per hour" case, we can average over time.  (In a sense, this is what the physical system is doing for us already; we somehow need to track its action.)  This limits how often we can update or read our information; we inherently only know the average "current" over the past hour.  We may want to update or react upon our score more frequently.  Equivalantly, we can say this averaging technique limits our bandwidth.  If we don't like the bandwidth reduction, we can add more people!  If one person per hour generates too much noise, how about 1000 people per hour?  How about 1000 people per second?  This clearly helps, and also clearly costs a great deal.  

Digital systems have their own fundamental noise source.  We call it *quantization noise*.  This arises from nothing about the underlying physics of the problem, but of our choice in how to represent it.  Let's imagine the spring-mass system, in which the mass can travel over, say, 8 inches.  And we'll choose to represent it digitally with 8 levels - nominally {0.5, 1.5, ..., 7,.5} inches.  When the mass is 1.25 inches from the wall, we'd represent it with the second code, which nominally represents 1.5 inches.  Our description in this context would include 0.25 inches of *quantization error*, or quantization *noise*.  We can always reduce this quantization noise, by adding more levels - or correspondingly more bits.  

In a sense, analog noise and quantization noise appear to derive from the same phenomenon: quantization.  In the analog case, this is the quantum nature of the fundamental physical particles.  In the digital case, it is our own choice about how accurately to represent the system.  We may even lose the ball in the face of this apparent symmetry, and again decide the two are materially identical.  This would miss a few more fundamental differences.  First: in the analog case, the source of the noise *is the system*.  In the digital case, the source of the noise *is us*.  The two may be equal in value for any particular instance (in fact, digital-analog and analog-digital conversion designers commonly trade-off between the two, and generally seek to make them roughly equal).  Analog noise is generated even if our analog quantities are static.  It has a non-deterministic progression through time.  Quantization noise does not have this property: it is a one-to-one function of the signal value.  The ramifications here are more profound than we may expect.  They mean that an analog computer, given identical inputs and identical conditions, computes a subtly *different* result each time.  This, ultimately, is the part I find we can't handle.  Our brains are wired to expect causal systems, with deterministic results.  We expect that a machine designed to add 1+2 will yield 3 - *exactly* 3 - every time, forever.  Analog electronics lack this property.  Their results can be ever-more confounding as the propagate through levels of computation.  In a sense, each of the paradigms has its own fundamental noise source - we just *like* one of them better.

For much of the information of interest, the "infinite" analog resolution is just wasted.  A test score could be represented between 0 and 100.  Even if we add more precise fractional elements - how far should they go?  Will two decimal places suffice?  If not, how about ten or twenty?  *Infinite* decimal places require a hell of a lot more information than any of these options.  Many quantities are inherently discretely-valued in their own right.  Is a restaurant categorized as Italian, Mexican, Indian or Chinese?  We can think of many values for this field, and still fall far short of infinity.

### Abstraction

Analog
This comes back to the analogy to classical and quantum physics.  I often analogize the chip and electronics design process to that of other complex systems: the bay bridge, SalesForce tower, or the International Space Station.  If we were designing these systems instead, and wanted to analyze or simulate them - what level of complexity would we use?  Would, say, the molecular level seem appropriate?  How about the quantum level?  Of course not!  We know these paradigms *correctly* describe the orbit of ISS - far more accurately than we would ever care for.  Their real problem is they would take our lifetimes (and then some) to create and evaluate.  Their predictive power is eroded by exactly the same trait which makes them irreplaceable in other contexts: their comprehensively detailed model of the universe.

The level of detail we should use becomes pretty obvious: *the simplest one that works*.  What we mean by *work* is crucial here: more specifically, what will predict the behavior of the system, in the ways that *we care about*.  This is true of any endeavor using design-modeling, or even of more general analytical modeling.  (Nate Silver's election models would be far tougher to grok if they ran at a molecular level.). So it is with electronics.  Particularly chips.  In design-modeling, we often categorize "the ways we care" into other, codifiable dimensions: specs.  Pass-fail criteria.  Performance metrics.  Agreements on what represents success and failure.  Ultimately these are just agreements between people: perhaps a company and its customers, or between teams or individuals in an intra-instituional relationship.

Why use digital?  Exactly *because* it abstracts away a bunch of detail.



### Black Magic

Analog engineers (*especially* the RF variety) have an unfortunate practice of referring to themselves as being versed in *black magic*.  The phrase is enshrined in the titles of books, web sites, and throughout a web's worth of information on the topic.  This is bullshit.  Any scientific (or even any fact-based) endeavor claiming to rely on *black magic* should not just be regarded skeptically - it should be regarded as full of shit.  Practitioners of these black arts know that underlying their intuitions lies the same science dictating how everything else in the world works.  I read the *black magic* phrase as having a simpler meaning: *I don't understand this well enough to explain it to you*.  There are many causes of this attitude.  Genuine lack of understanding is perhaps the least charitable of them.  Insecurity in a well-grounded understanding - or in the ability to communicate it - is probably just as common.  Some are likely based in job security; essentially maintaining personally-held trade-secrets, available only to the practitioners, transferred through domain-specific chants, grunts, and jargon.  All of these reasons are lazy, to the point of being cowardly.  This is a profession trapped in an intellectual ghetto, responding to a quickly dying population not by reaching out, but by building taller walls to prevent further escape.  Not only are the *people* from outside the city-walls a terrifying threat - so are any *ideas* they might catapult in.  















Ethos 

My job, for most of my career, has been the design of the analog parts of overwhelmingly digital chips.  Apple mobile socs. 

Uses of analog and digital

Not the colloquial ones 

The relationship between Analog and digital parallels that between classical and quantum physics.  In principle, quantum physics in its full depth can explain why planes fly or crash, bridges stand or fall, and how balls roll along inclined planes.  Our only problem is applying it.  Even with even desire to create the quantum model of a Boeing 737, we would need far longer than the history of the universe - much less than the history of humanity - for it to compute a result, even on the worlds most advanced computers.  The quantum laws are principally applicable everywhere, they are only practically applicable in the case of the very small, in which their high resolution is not wasted amid a wash of complexity. 

Yet we manage to make bridges stand, and did so long before developing quantum mechanics.   Newton’s mechanics remain the applicable law of the physical land for regular sized things: humans, baseballs, airplanes, and bridges.  Things orders of magnitude larger - stars, galaxies - demand relativity.  Others orders smaller - electrons, atoms, and molecules - demand quantum mechanics. 

So it is with electronics.  The analog paradigm is to digital as quantum physics is to newton.  The digital view is more concise, more abstract, lower fidelity and far more efficient.  The analog views is far higher fidelity, in exchange for being far less efficient.  

Analog is little more than a wrapper around Maxwells equations and Newton’s mechanics.  

But there must be things that are only analog.  More accurately, there are things whose analysis only works when done from thebanalognoaradigm.  Just as Newtonian mechanics fail to describe electrons, digital mechanics fail to describe an op-amp, antenna 

There has been one person pushing a new wave of analog for years: George Dyson. 

Some GD quotes 

These are category errors.  There are no analog components and digital components to contrast here, only components and analog and digital ways of looking at them.  To the extent that it makes sense to call a thing an analog component, at best we might mean a component whose description only makes sense in the analog paradigm.  

Dyson seems to make these category errors everywhere he goes. 

More quotes, some Facebook stuff

At best this is misguided.  Facebook most certainly stores a social network very digitally.  Case in point, you can be friends with another Facebook user, or not.  You cannot be friends of level 13 versus level 99, much less level 3.14159.  Friendship, in facebooks context, is not only digital, it is binary.  There are two available states: friend and not.  Real life in this sense is analog.  Each of your friends come at different levels of breadth and depth, and perhaps each of these dimensions across a variety of topics, durations, or situations.  You might be great friends in a poker game, but complete strangers regarding relationships.  Friendship is also not necessarily symmetric.  One friend can rate a relationship as a 99, while her counterpart rates it as a 1. 

Even if you attempt to extract a quantitative multi level measure of friend-ness, perhaps for example a number of shared friends, conversations, or joint photos, Facebook would still store these quantities very digitally.  Even if they attempt to create a floating point representation of friend-ness - perhaps an elaborate weighted combination of the per-time rates of these quantities, the result would still be digital. 

GD seems to believe that analog will matter when we give up the design of our systems, and let the machines take over for us.   

Human brains work

Stats vs systems vs narratives 
Silver, taleb, Harris even agree on narratives 

Stroustroup design human activity



### Nature is Analog, and Digital 

The analog comebach mob tends to note that analog cannot go away, because nature is fundamentally analog.  There are a few problems with this idea.  First, *go away* - altogether - is an awfully low bar.  Inventions far older and less useful than analog electronics have avoided going away altogether.  Horses-drawn carriages, muskets, etc all still exist despite centuries of relegation into increasing irrelevance.  They just serve tiny and continually shrinking niches. 

More important, nature is analog, except when it isn't.  Temperature, air pressure, frequency, time, and a whole slew of natural phenomena we experience are (as best we can tell) analog.  Many others are digital.  Most species have a digital number of sexes, typically one or two.  Humans have discrete quantities of arms, legs, eyes, ears, and lungs. 

Perhaps the most impactful such natural-digital phenomena is the mechanism by our genetics are passed from generation to generation: DNA.  Humans - and virtually every other species, including those as simple as amoeba - encode their genetic traits in digital form.  This is true of every genetic form of life of which we know.  Human DNA is encoded in a four-value alphabet represented by the four protein molecules aXXX, cXXX, tXXX, and gXXX, commonly referred to as A, C, T, and G.  

Genetics features many of the needs we have highlighted for digital systems.  It conveys  a large - but finite - quantity of imformation.  It needs to be copied with very high (if not perfect) fidelity, trillions of times over millenia.  



### What's the Difference Between "A Lot" and Infinity?

How many voltages are there between 0V and 1V?  Infinity!  This is a lot like asking how many real numbers there are between zero and one.  And if we zoom in, say to between 0.1V and 0.2V, we find yet another infinite number of new values.  The same applies if we zoom into the range from, say, 1nV to 2nV.  This is in some sense the defining trait of analog systems: no matter how far we zoom in, there is not only more, but infinitely more to find. 

These riches of values come at a steep price.  Nearly every useful operation to be performed on an analog system is subject to *noise*, often including the act of just storing a value from one instant to the next.  



### Where Does Noise Come From? 

We often use the term *noise* to represent a slew of phenomena, largely unrelated in physical origin.  Their common trait is the act of masking a desired signal.  Some of these phenomena, such as what we'd more specifically call *interference*, are deterministic: if we only had access to more information, we could in principle measure and cancel them our.  A nearby conversation blurting out your own is a common example.  In electronics these interference phenomena are common due to electromagnetic coupling, for instance between nearby circuits or signals.  

Other sources of noise are *stochastic*, or truly random.  While we can make factual statements about stochastic proecesses in aggregate - i.e. their standard deviation - by definition they lack a mechanism for predicting their progression across time.  Stochastic quantities are like dust molecules randomly floating about and obscuring your view of the Beijing skyline.  

While both the analog and digital paradigms are subject to interference, the digital symbols generally lack any sources of stochastic noise.  Logic gates, flip-flops, and all of the other common digital-processing building blocks are in this sense noiseless.  As long as the underlying physical representation of the bits play by the rules, their outputs are exactly correct, every time forever.



### How We Think

Neural networks may be in some sense modeled on how the brain works.  But they are not built in the vein of how we subjectively think.  



### The Two Reasons

* Digital better models how we think
* We found an implementation technology which made digital cheaper, and continued to rapidly improve





### Moore's Free Lunch

The phrase *Moore's Law* has always been off.  The inclusion of the term *law*, coupled with the fact that it concerns a complicated scientific-seeming topic, leads people to believe it is some law of nature, like Newton's laws of motion or the second law of thermodynamics.  Or perhaps more like Ahmdal's law, which sets a theoretical limit on abstract quantities such as computer programs.  What Gordon Moore made, in truth, was a prediction about *people*.  Particularly the intellectual progress of a group of people driving the semiconductor fabrication space.  He predicted an exponential rate of progress in this field, extending indefinitely into the future.  Countless inventions and person-years of hard work caused this prediction to hold over decades. 

The notion of an *end of* Moore's Law appears to fail to dispel this notion.  No one expects gravity or entropy to *end*, but many accept chip-progress as a fact of nature, somehow limited to the late 20th century.  

Perception of Moore's Law seems similar to had Gordon Moore arrived in Chicago in the early 1990s and declared, *this Michael Jordan guy is so good, his team will win the championship every year*.  And the reaction was such a complete internalization of this expectation that we all ceased to notice this as an acheivement.  This *Moore's Jordan's Law* would then only enter our conciousness to disappoint us when violated, whether due to circumstances on the court or Jordan's eventual retirement.  Why shouldn't a Jordan team win every year - it's a verified law of nature?



### Analog and Digital Information

Claude Shannon taught us that any chunk of information can be represented in either discrete or continuous form.  



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

For Dyson and other champions of the analog renaissance, the rationale may be in line with reason 1.  If (or when) advances in artificial intelligence render humans irrelevant in the design of future systems, human intuition will no longer be terribly relevant to what technologies our AI-overlords decide to develop.  This has 
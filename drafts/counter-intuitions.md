## Counter-Intuitions

Probably counter-intuitively, not all HDL programs which can be *run* also can be *compiled*.  This is the opposite of compiled software languages, for which compilation is the only direct runtime for language-native code; execution then operates on the compiler output, whether machine-code or another layer of platform-independent byte-code.  

In contrast it’s perfectly common for hardware descriptions to execute as desired in simulation, but fail to compile to gates.  This just reflects the fact that the set of valid HDL is larger than the set realizable in gates.  HDL methods can print to the console, save to files, call external C code, and generally do a whole host of things that have no gate-level representation.  

HDLs commonly refer to this idea as having a *synthesizable language subset*.  Even for hardware modules inside the synthesizable subset, behavioral simulation proves a necessary performance optimization.  It’s *possible* to always synthesize and simulate gate-level circuits, but incredibly costly.  Synthesis runtimes tend to be an order of magnitude longer than simulation runtimes, and gate-level simulations further add to this total.  And in raw time, these are not trivial changes: synthesis and simulation times on the order of hours (or even days) are common.  

Many situations regard the event-driven behavioral descriptions similarly to how this view sees gates: too much detail, too slow, for no relevant increase in insight.  This is an example of how hardware building is model making; these models fails the criteria described in [*Models All The Way Down*](https://medium.com/software-makes-hardware/models-all-the-way-down-d6f89b1b8d3). 


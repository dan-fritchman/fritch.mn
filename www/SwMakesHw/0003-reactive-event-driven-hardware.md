
# Event-Driven & Reactive Hardware

[Past *Software Makes Hardware* chapters](https://medium.com/software-makes-hardware/the-languages-of-hardware-2954e2138718) introduced a hardware abstraction ladder, including physical, structural, and behavioral layers.  Here we'll dig into a few common patterns at the *behavioral layer*. 

Behavioral hardware programming - or as chip-folks call it, hardware *description* - came into vogue around the mid 1980s.  The industry's two most popular hardware description languages (HDLs), Verilog and VHDL, were introduced around the same time.  While Verilog and VHDL both support the lower *structural layer*, their new contribution was the addition of the behavioral features described here.  The general idea is that instead of directly programming a piece of hardware's *structural content* - essentially a hierarchical list of components and connections - designers can describe what a hardware block *does*, at a slightly higher level of abstraction.  Nearly every complex piece of digital hardware you use was written in either Verilog or VHDL.  This includes essentially every chip required for your reading this article -- your computer (or smartphone) CPU, the network interface transmitting and receiving this document, and the GPU rendering it on your screen.  These languages generally resemble a C++-ish level of abstraction and productivity.  

But HDLs centrally integrate a few programming paradigms which look, well, awfully shiny and new to a lot of programmers in 2019.  Behavioral HDL code particularly features the *event-driven* and *reactive* patterns widely used in modern asynchronous environments.  

There is good reason for this.  Hardware is inherently "executing" in parallel; hardware "programs" therefore had to describe parallelism from day one.  Worse yet, complex hardware is doing *tons* of things in parallel - not just dozens or hundreds, but thousands or millions.  Mimicking that level of parallelism has generally required simulating it using *concurrency*.  (If that statement seems self-contradictory, check out the popular talk [*Concurrency is Not Parallelism*](https://blog.golang.org/concurrency-is-not-parallelism) from Google's Rob Pike.)

As more software - and more *really popular* software - has become more concurrent, these ideas have seeped into the minds of more engineers.  

## Event-Driven Pattern

The *event-driven* paradigm can colloquially be described as something like:

* Stuff happens
* Code runs in response 

Where the "stuff" happening can be described as a series of *events*.  In a web environment, typical programmer-accessible events would include user interactions (clicks, keystrokes), timers, or the completion of slow asynchronous operations, such as file I/O or networking.  

Popular asynchronous frameworks such as NodeJS and Python's asyncio (among the *really popular* software referenced earlier) execute asynchronous code in what is generally called an *event loop*.  Code dictates what events are added, and the background execution-engine determines the order in which they execute. 

Behavioral harware simulation runs on a near-identical paradigm.  Events typically come in the form of changes elsewhere in the system, often to signal values.  HDLs include built-in syntax for capturing the sensitivity of a method -- or in HDL lingo, a *procedural block* -- to changes in signal values.  

The event-driven pattern is commonly used to describe *sequential logic*, in which the outputs of a hardware module are functions of both the current inputs, and the module's current state.  Most digital hardware is both sequential and *synchronous*, in that its operations are triggered by edges of a widely distributed timing signal, commonly called the *clock*. 

```verilog
module fsm ( /* ... */ ) 
  always @ (posedge clock or negedge reset)
    next_state = state;
    out = 0;
    case (state)
      A : 
        if (in) next_state = C;
        else next_state = B;
      B : 
        if (in) begin
          out = 1;
          next_state = C;
        end
      C : 
        if (~in) begin
          out = 1;
          next_state = B;
        end
      default : begin
          out = 1’bX;
          next_state = 3’bX;
        end
    endcase
  end
endmodule
```

Even the most complicated pieces of digital silicon generally boil down to this pattern of: sensitivity plus associated call-back code.  Take an (excerpt of) an open-source RISC-V CPU implementation as an example. 


```verilog
module RISCVCPU (clock);        // A RISC-V module excerpt 
	parameter LD = 7'b000_0011, 	// Instruction opcodes
		SD = 7'b010_0011, 
		BEQ = 7'b110_0011, 
		NOP = 32'h0000_0013, 
		ALUop = 7'b001_0011; 
	input clock;
	reg [63:0] PC; 
	// ... 

	integer i; 
	initial begin
		for (i=0; i<=31; i=i+1) Regs[i] = i;
	end

	always @(posedge clock) begin
		// Fetch & increment PC
		IFIDIR <= IMemory[PC >> 2];
		PC <= PC + 4;
		IDEXA <= Regs[IFIDrs1]; 
		IDEXB <= Regs[IFIDrs2]; 
		// ...
    begin
      if ((opcode == LD) || (opcode == SD))
      begin
        ALUOut <= A + ImmGen; // compute effective address
        state <= 4;
      end
    else if (opcode == ALUop) begin
      case (IR[31:25]) // case for the various R-type instructions
        0: ALUOut <= A + B; // add operation
        default: ; // other R-type operations
      state <= 4;
    end
    else if (opcode == BEQ) begin
      if (A == B) begin
        PC <= ALUOut; // branch taken--update PC
        state <= 1;
      end
      else
      // ...
    end
	end
	// ...
endmodule
```

The core instruction-execution code is, more or less, a big switch statement.  This looks a whole lot like common virtual-machine instruction-executors, such as [CPython's evaluation loop](https://github.com/python/cpython/blob/master/Python/ceval.c). 

```c 
PyObject * PyEval_EvalFrame(PyFrameObject *f) {
    PyObject **stack_pointer;  /* Next free slot in value stack */
    int opcode;        /* Current opcode */
    switch (opcode) {
      case TARGET(BINARY_OR): {
          PyObject *right = POP();
          PyObject *left = TOP();
          PyObject *res = PyNumber_Or(left, right);
          Py_DECREF(left);
          Py_DECREF(right);
          SET_TOP(res);
          if (res == NULL) goto error;
          DISPATCH();
      }
      case TARGET(LIST_APPEND): {
          PyObject *v = POP();
          PyObject *list = PEEK(oparg);
          int err;
          err = PyList_Append(list, v);
          Py_DECREF(v);
          if (err != 0) goto error;
          PREDICT(JUMP_ABSOLUTE);
          DISPATCH();
      }
      // ...
```

## The Two Run-Times

By now you may be wondering, when does this code run?   Unlike typical software, behavioral HDL code operates in (at least) two essential runtimes: 

* *Logic Synthesis* is the compilation of behavioral HDL code into lower level representation, usually logic gates.  
    * Think of this as the compiler.  Although note the language output from this compiler is often the same as its input, i.e. Verilog.  The output just uses the lower-level constructs and avoids the higher-level ones. 
* *Simulation* is the runtime which predicts the hardwares behavior.  
    * Most of the behavioral constructs discussed here -- reactive updates, sensitivities, event loops, and the like -- apply to this simulation runtime.  
    * The model of digital simulation paired with these behavioral descriptions is called [*discrete-event simulation*](https://en.wikipedia.org/wiki/Discrete-event_simulation).  It is used in a number of fields outside electronics, but is particularly pervasive here.

## Discrete-Event Simulation 

Whether those piles of Verilog and C code make much sense or not, we can pretty quickly introduce the ideas behind the discrete-event simulation run-time.  

https://github.com/HW21/EventSim

The ideas are surpisingly simple.

First, we'll need to define what we mean by `Events`.  For hardware simulation an Event minimally consists of:

* (a) A `task` (function-object) to be run, and 
* (b) A simulated `time` to run it at

We'll use an ECMAScript 2015+ `class` to define these `Events`.  For now, the Event-class won't have any behavior, just the two data members `time` and `task`.

```javascript
class Event {
    /* Event "class" 
     * Mostly a two-tuple or structure of 
     * (a) A `task` (function-object) to be run, and 
     * (b) A simulated `time` to run it at */
    constructor (time, task) {
        this.time = time;
        this.task = task;
    }
}
```

Next we'll need some sort of hardware model.  We won't go through the heavy lifting of parsing an existing HDL - instead we'll create a model embedded in Javascript. 

Looking back at the Verilog we've already seen, `modules` tend to be comprised of two categories of things:

* *Structural content* includes signals, ports, and instances of other modules.  
* *Procedural blocks* describe the module's behavior, in code which runs sequentially from beginning to end.  Annotations on each procedural block (`always`, `initial`, et al) describe the sensitivities which cause them to run. 

These two categories look an awful lot like the classes of object-oriented languages such as Python or C++, or object-oriented-*ish* languages such as Javascript.  We'll use such a JavaScript class to represent a sample hardware module. 

```javascript
class Module {
    /* 
     * A Simple System-Model, 
     * Using the sorts of event-driven constructs common in Verilog or VHDL, 
     * But calling `sim.add_event` instead of using special syntax. 
     */
    constructor () {
        // This "this binding" can go away if using arrow-function-enabled Javascript
        this.kickStart = this.kickStart.bind(this);
        this.keepGoing = this.keepGoing.bind(this);
        
        // Create our Sim object.  This would be "behind the scenes" in a dedicated HDL. 
        this.sim = new Sim();
        this.sim.add_event(new Event(0, this.kickStart));
    }
    kickStart () {
        console.log(this.sim.time.toString() + " KICK STARTING!");
        const e = new Event(11, this.keepGoing);
        this.sim.add_event(e);
        const e2 = new Event(3, this.keepGoing);
        this.sim.add_event(e2);
    }
    keepGoing () {
        console.log(this.sim.time.toString() + " STILL GOING!");
        const e = new Event(this.sim.time + 10, this.keepGoing);
        this.sim.add_event(e);
    }
}
```

Our starter hardware-module-class skips many of the features and niceties of a dedicated HDL.  There are no signals, ports, or module instances (for now).  And there is no dedicated syntax for generating events.  Instead the `Module` calls an `add_event` method on `this.sim`, its reference to its simulation run-time. 

With all this groundwork in place, a basic simulation run-time turns out to be pretty straightforward.  The most basic simulation has two data members: a present simulated `time`, and (some sort of) queue to store future `events`.  

Next, sort out what data structure works best for storing and processing future events.  There are a few vital realizations to make here.  First, the simulation run-time's *causality contraint* is that events are executed in non-decreasing simulation-time order.  Events may be *added* to the queue in other orders, but must be removed and executed in simulation-time-order.  Second, while we need to be able to find the minimum-time event, the order of the remaining events is irrelevant.  

Conveniently we have a well-known, widely popular data structure with exactly these features: the (minimum heap)[https://en.wikipedia.org/wiki/Heap_(data_structure)].  (Some introductions to the heap even use this use-case as an introductory example.)  Nearly all popular languages have a robust implementation available in either built-in or widely popular external libraries.  For our JavaScript implementation we'll use the [collections](https://www.npmjs.com/package/collections) package available from NPM. 

With all these realizations in place, the `Sim` class implementing this runtime only needs three simple methods: 

* A constructor, which initializes its primary data members
* `add_event`, which we saw being used by `Module`, adds a (future) event to the queue
* `run` does the heavy lifting - running the simulation up to a specified time `tstop`

```javascript
var Heap = require("collections/heap");

class Sim {
    /* Discrete-Event Simulation Class */
    constructor () {
        // Our primary attribute is a min-heap, sorted by event-time 
        this.events = new Heap(null, null, function (a, b)  { return b.time - a.time; });
        this.time = 0;
    }
    add_event(e) {
        /* Add new Event `e` */
        this.events.push(e);
    }
    run (tstop) {
        /* Run simulation, up to time `tstop` */
        while(this.events.length) {
            // Grab the next event
            const e = this.events.pop();  
            // If it's after tstop, put it back and bail
            if (e.time > tstop) {
                this.events.push(e);
                break;
            }
            // Run it!
            this.time = e.time;
            e.task(); 
        }
    }
}
```

That's it!  
We're ready to create a module-instance and simulate it. 

```javascript
// Create our model instance 
const model = new Model();
const sim = model.sim;
// Run for a while
sim.run(40);
// Pause, look around a second
console.log("PAUSED!");
// Now run for a while longer
sim.run(100);
```

Running the `main.js` script which includes all this code generates output along these lines:

```
yarn run v1.15.2
$ node --use_strict main.js
0 KICK STARTING!
3 STILL GOING!
11 STILL GOING!
13 STILL GOING!
21 STILL GOING!
23 STILL GOING!
31 STILL GOING!
33 STILL GOING!
PAUSED!
41 STILL GOING!
43 STILL GOING!
51 STILL GOING!
53 STILL GOING!
61 STILL GOING!
63 STILL GOING!
71 STILL GOING!
73 STILL GOING!
81 STILL GOING!
83 STILL GOING!
91 STILL GOING!
93 STILL GOING!
✨  Done in 0.12s.
```

## Counter-Intuitions

Probably counter-intuitively, not all HDL programs which can be *run* also can be *compiled*.  This is the opposite of compiled software languages, for which compilation is the only direct runtime for language-native code; execution then operates on the compiler output, whether machine-code or another layer of platform-independent byte-code.  

In contrast it’s perfectly common for hardware descriptions to execute as desired in simulation, but fail to compile to gates.  This just reflects the fact that the set of valid HDL is larger than the set realizable in gates.  HDL methods can print to the console, save to files, call external C code, and generally do a whole host of things that have no gate-level representation.  

HDLs commonly refer to this idea as having a *synthesizable language subset*.  Even for hardware modules inside the synthesizable subset, behavioral simulation proves a necessary performance optimization.  It’s *possible* to always synthesize and simulate gate-level circuits, but incredibly costly.  Synthesis runtimes tend to be an order of magnitude longer than simulation runtimes, and gate-level simulations further add to this total.  And in raw time, these are not trivial changes: synthesis and simulation times on the order of hours (or even days) are common.  

Many situations regard the event-driven behavioral descriptions similarly to how this view sees gates: too much detail, too slow, for no relevant increase in insight.  This is an example of how hardware building is model making; these models fails the criteria described in [*Models All The Way Down*](https://medium.com/software-makes-hardware/models-all-the-way-down-d6f89b1b8d3). 


## Reactive Pattern

In [reactive programming](https://en.wikipedia.org/wiki/Reactive_programming), a piece of software describes static relationships between input and output quantities, which continue to hold even when the input quantities change.  The reactive style is quick to illustrate through a comparison with the more common *imperative* style.  In either, we can imagine setting three variables as such:

```
a = 1
b = 2
c = a + b 

c
```
```
3
```

Imperative and reactive styles differ when the values of `a` or `b` are  changed - *after* the assignment to `c`.  In the typical imperative pardigm, the value of c is unchanged: 

```
a = 11

c
```
```
3
```

The assignment statement `c = a + b` refers to the *values* of a and b, *now* -- at the time of the assignment. 

In the reactive pattern, assignment means something different -- essentially that `c` should equal the total of `a` and `b`, *forever*.

```
a = 1
b = 2
c = a + b 

c
```
```
3
```
```
a = 11
b = 22

c
```
```
33
```

This is a fairly different idea of what assignment means.  Updating the value of c happens in the background, whenever its input arguments change. 

Popular implementations of reactive programming patterns include the [Observable Notebook](https://observablehq.com/@observablehq/how-observable-runs), and everyone’s least favorite, Excel spreadsheet formulas.  Data is free to change well after formulas are entered; in fact this is generally the point.

![obs](img/observable.png)

In procedural programming languages, supporting the reactive style requires something like a dependency graph between variables, and a set of update methods called when an input variable changes value.  

### Reactive Hardware 

The reactive pattern maps so cleanly into hardware, it was built directly into most popular HDLs.  Verilog uses an `assign` keyword to make reactive, or in its lingo, *continuous assignments*. 

```verilog
module combinational (  
  input a, b, c, d, output  o);
 
  assign o = ~((a & b) | c ^ d);
endmodule
```

These reactive assignments map directly to combinational logic, that is, logic in which the outputs are functions solely of the current state of the inputs.  For the verilog example above, we can imagine a synthesis program mapping to a logic circuit like so:

![combo_sch](img/combo_schematic.png)

The HDL code is a platform-independent (process independent) description of this set of logic, which can be compiled to near arbitrary fabrication technology. 

The reactive pattern is fairly low-level behavioral description.  It captures the combinational relationships between hardware signals.  It has no means of incorporating the state, or history, of the system.

## "High-Level" Hardware Description 

Nearly every complex piece of digital hardware you use was written in either Verilog or VHDL.  This includes essentially every chip required for your reading this article -- your computer (or smartphone) CPU, the network interface transmitting and receiving this document, and the GPU rendering it on your screen.  These languages were both born in the mid 1980s, and resemble a C++-ish level of abstraction and productivity.  In the decades since, no consensus has emerged in the hardware community on how to raise the level of designer productivity to mirror that of modern, programmer-centric software languages.  

The initial, and perhaps still most prevalent, efforts use a set of scripting languages (Perl, Bash, or TCL) to generate Verilog or VHDL.  

*High-Level Synthesis* refers to a set of tools and techniques which attempt to describe hardware *functionality* in a relatively low-level software language such as C++, removing all of the hardware abstractions such as modules, ports, signals, and wires.  HLS dramatically elevates the described level of hardware abstraction - effectively removing it altogether -- without materially changing the *description language* abstraction level. 

A newer and contrasting approach, primarily borne from academia, uses modern hardware-description *libraries* built atop existing programming languages.  These libraries near universally eschew HLS, and in many cases drop the event-driven behavioral paradigm.  Modern HDLs instead focus on using the high-productivity programming language facilities to manipulate a structural hardware description, perhaps incorporating the reactive, continuous assignments at the bottom of the behavioral hardware modeling spectrum. 

To date the most accomplished modern HDL is [Chisel](https://chisel.eecs.berkeley.edu/), developed at UC Berkeley.  Chisel is embedded in Scala, and uses a combination of object-oriented and functional programming to craft structural-level hardware. 

```scala
import chisel3._

class GCD extends Module {
  val io = IO(new Bundle {
    val a  = Input(UInt(32.W))
    val b  = Input(UInt(32.W))
    val e  = Input(Bool())
    val z  = Output(UInt(32.W))
    val v  = Output(Bool())
  })
  val x = Reg(UInt(32.W))
  val y = Reg(UInt(32.W))
  when (x > y)   { x := x -% y }
  .otherwise     { y := y -% x }
  when (io.e) { x := io.a; y := io.b }
  io.z := x
  io.v := y === 0.U
}
```

Chisel has been reported as being used at Google, in the design of their [Edge TPU](https://www.youtube.com/watch?v=x85342Cny8c) chip.  Other modern HDLs include [MiGen](https://github.com/m-labs/migen), Cornell's [PyMtl](https://github.com/cornell-brg/pymtl), Stanford's [Magma](https://github.com/phanrahan/magma), all based in Python, and [SpinalHDL](https://github.com/SpinalHDL/SpinalHDL), based in Scala.  All are even earlier-days, and have seen little commercial deployment. 

## Should I Care?

For most engineers in most of the software field, probably not.  But there are reasons the languages of hardware are becoming more relevant for a wider range of engineers.  

Cloud services are making the deployment and use of special-purpose hardware more approachable.  Each of the major cloud providers already has a custom-hardware solution for machine learning acceleration.  The three take very different approaches to driving their hardware.  Amazon's F1 instances provide the most flexible example, offering essentially complete customization of FPGA instances, typically done in Verilog. 

General-purpose hardware is changing too.  The rising popularity of the RISC-V instruction set architecture, also from UC Berkeley, points towards a future where the cloud's most popular infrastructure is open-source - all the way down to transistors.  Such an open-infrastructure future will need contributions from engineers across the hardware and software fields, including to all of the enabling software libraries, tools, and languages. 


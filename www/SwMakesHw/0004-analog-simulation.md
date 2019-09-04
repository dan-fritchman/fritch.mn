# Analog & Transistor-Level Simulation

In past chapters we reviewed the simulation model of computation of most digital logic: a combination of event-driven and reactive logic.  This largely corresponds to sequential and combinational logic, respectively.

Analog circuits fail to fit in this paradigm.  While many have simplified representations in the discrete event digital space, their full explanation requires an entirely different model of computation. 

The analog moc 

Everyone who has taken freshman physics (and especially those who have studied electrical engineering) have been confronted with problems in solving linear circuits.  For example we can imagine an arbitrary network of resistors and current sources. 

Network 

Problems are something like: given the values of the elements, what are the node voltages in this circuit? 
How would we put a program to the task of solving this, both in any specific case and in a general case?  First imagine how this went in freshman physics - how we would solve it with pen and paper.  This boils down to compiling a system of equations, primarily feokbto sources:

Kirchoff laws are simple statements of more fundamental physical concepts.  The current law is a restatement of conservation of charge.  The voltage law similarly captures conservation of energy, particularly electrical potential energy. 

Second, the devices provide voltage-current relationships between heir terminals.  Ohms law is probably the best known, describing the V-IR relationship of a resistor.  Voltage and current sources have even simpler descriptions, of the form V=V0 and I=I0.  More complex devices, including nonlinear elements such as diodes and transistors, and dynamic elements such as capacitors and inductors, add a few wrinkles covered in section N. 

There are more than a few ways to combine these into a soluble system of equations.  In the popular nodal analysis, we write an equation expressing KCL at each node, incorporating the device equations along the way.  For example in the famous resistor-cube problem, the circuit and equations look something like:

Cube 
Eqns 

This is a system of seven equations and eight unknowns (the seven non-grounded vertex voltages) with two parameters (the current, and the unit resistance).  

Efficient means of solving such systems of linear equations generally use a matrix formulation.  We can rewrite the cube system in matrix form as:

Matrix 

In principle, we can solve this system symbolically, for any linear circuit and set of parameters:

Solution 

Captures the symmetry often advertised in more intuitive solutions of the cube problem. 

In practice, this rarely occurs.  Both the matrix inversion and symbolic solution prove aways too costly for all but the smallest circuits.  Instead numeric blues as adopted for the component values (and therefore, the matrix elements), and numeric techniques are used for solving.  For example with component values of R=1k, I=1uA, we get this system:

Matrix 
Solution 

Non linear 

This method works for linear circuits, solving for their study state response.  This corresponds to the spice dc analysis.

Most circuits of practical interest are non-linear.  Transistors, diodes, etc.  the most basic description of the mos transistor, codified in spices level 0 model, is both multivariate, non linear, and defined piece wide.

Id = 0, vgs < vth 
Id = beta * (vgs 
Id = beta * (vgs- vth)**2 (1 + lambda*Vds)

Inserting such a component into our linear nodal analysis causes it to fall flat on its face.  We might in principle try again to brute force the nonlinearotes into our matrix solver, but would quickly run into even deeper problems characteristic of the circuit. 

First, non-linear circuits have have more than one valid solution.  They may have exactly none, one, two, or any larger number of solutions, including infinity.  Linear circuits have either zero or one.  Consider as an example the back to back inverters used as the core of nearly any static memory cell.

Inch cell

This circuit has two stable states, and may have a third astable one.  Either a is near VDD and b is near VSS, or vice-versus.  These two solutions represent the two states of the single-but memory this circuit often powers. 

How could the linear matrix silver find these two states? It can’t. 


The solution of nonlinear circuits instead requires iterative techniques.  Setting aside the matrix components for sake of introducing iterative methods.  The most common oldest most popular is Newton’s method, for finding the roots or zeroes of equations.  For example imagine attempting to find the square root of two, equipped without a square-root implementation, but with multiplication and therefore the power to take squares.  Newton’s method, and any iterative technique, operates something like a game of too hot, too cold, operating on a sequence of guesses and refining them.  In estimating the square root of two, this much look something like: 

0 0 low
100 10,000 high
50 2500 high 
20 400 high 
10 100 high 
5 25 High
2 4 high
1 1 low
1.5 2.25 ...

Even taking an extra wide range of guesses, and an all too human path of updating them. We can see this is quickly converging towards the right answer, roughly 1.414.  

Newton’s method adds a systematic algorithmic means of updating our guesses.  It requires an estimate of the derivative of the function being analyzed - a quantity which may be hard to find in general, but foretunately is generally available for the simulation of circuits.  Our recursive updates 

![](img/newton_method.svg)

Applying Newton’s method to the square root of two, we first cast the expression into an equation of the form f(x) = 0.

$$
a^2 + b^2 = c^2
$$

f(x) = x**2 - 2 = 0

df(x)/dx = 2x 

Applying its update algorithm give us a bit more scientific sequences of guesses.

Iterative methods come with a few built in problems.  First, there is no a priori or even correct definition of when we are done.  How close is close enough?  In general unlike the canned square root of two case, we don’t have the right answer lying around at hand.  (The problems wouldn’t be much worth solvingbid we did.). The convergence criteria is rally for Newton’s applies to decide.  Typical convergence criteria check that successive guesses have changed by sufficiently little, ie that xi- xi-1 < some delta.  Fancier ones include an absolute error check, ie a goal that the value of f(x) be sufficiently close to zero.  Spice users will be familiar with pamaremters of the form reltol and asbtol (and family), short for relative and absolute tolerance, which serve as controls for theee convergence criteria. 

Second, iterative methods will not necessarily converge - even if there is a right answer.  There is no straightforward guarantee that the newton result to such a process will yield the correct result, only heuristics to help its chances.  We can imagine all sorts of functions for which Newton’s method has little or no chance of success. 

Figures 

Do circuits produce these?  All the time.  Veteran circuit simulators will recognize these as convergence failures, usually packed with cryptic error messages, but usually including something about “convergence”.  Analog pros are used to apply a common set of tricks to make these go away. 

For some functions, the newton style method can work or fail based on a single crucial parameter: the initial guess.  Depending on the choice of initial guess, this function will either succeed or get stuck in the local minimum on the right. 

Two dip 

Similar situations apply when there are more than one solution.  Newton’s method by definition produces an answer, not a family of answers as the reality of a function like this really has

Two dips, touching zero 

Back to those matrix and circuit things

Having taken a long aside to introduce a scalar iterative method, we should return to what any of this has to do with our matrix formulation of circuits.  The matrix case of Newton’s method works more or less the same, where the convergence evaluation is across a vector of several quantities.  The heuristic approaches are not quite as easy. 

Generally to invoke an iterative method, for example on the four transistor circuit below, has a few steps

1. Take a guess of the circuit state.  
2. See how close it is to correct, ie to satisfying kcl 
1. Assuming it requires refinement, Linearize the circuit about a given guess of its state.  Generally this involves computing the derivatives of the non-libear device equations.  
2. The matrix solution to something is the change in guess 

Where the linear case produced a matrix system which we could express as:

G*x = s

The non-linear case can be stated as something like: 

G*x + Hg(x) = s

Where Hg(x) is a matrix-valued function including all the non-linear component relationships.  
Attempting to apply Newton's method, we cast our non-linear matrix system into the form form f(x) = 0:

f(x) = G*x + Hg(x) - s = 0

Finding an update criteria requires taking something like a derivative of this.  (Although this can in pricipal refer to a few different things, here we'll loosely refer to "derivatives" of these matrix-valued and vector-valued quantities, and hope it's clear from context what they are derivatives with respect to.)  The derivative of f(x) is also a matrix we'll call Jf(x), often referred to as the Jacobian of the equation-system. 

Jf(x) = df(x)/dx 
      = G + Jg(x)

Where Jg(x) is the (again loosely defined) derivative of Hg(x). 

x_k+1 = x_k - f(x_k) / Jf(x_k)
Jf(x_k) * (x_k+1 - x_k) = - f(x_k) 
Jf(x_k) * dx = - f(x_k) 

Funny enough, finding each update requires solving a linear matrix system.  (Conveniently we just sorted out how to do so.)  Other than that, this looks very much like the scalar Newton case.  We have to evaluate: 

(a) the function to be zeroed, at our last guess, and
(b) its derivative, at our last guess

Then make an update propoprtional to their ratio.  

Note the evaluation of f(x_k) and Jf(x_k) requires evaluating all the non-linear device equations and their derivatives, and least for one data-point (x_k).  

### Example

Transistor inverter cell update? 


## Dynamic / Tran 

Everything reviewed so far works towards steady-state circuit responses.  For SPICE users, this corresponds to the DC analysis.  What a static circuit's response will be at time infinity - or any other time between now and infinity for that matter. 

If there are dynamic elements...

## Is This Real? 

Fsho. 
Examples of SPICE solvers
Description of why its so much slower 


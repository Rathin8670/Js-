console.log("rt")
// *How JavaScript works?
// Ans-Everything in JavaScript happens inside an "execution context".

// Execution context has two component
// 1)memory component[variable environment] 
// -This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;} 

//  2)code component[Thread of execution]
// -This is the place where code is executed one line at a time

// Note-
// *JavaScript is a synchronous single-threaded language

// -Single threaded means JavaScript can execute once command at a time
// -Synchronous single-threaded that means JavaScript can execute one command at a time in a specific order.


//-----------------------------------------//
// how it works--->>
// As we have already discussed in the last video that everything happens in javascript in the execution environment. So the entire execution happens in two phases as follows
// 1. Memory allocation phase- all the variables  and functions get their memory allocated in the memory with undefined and the entire code  respectively. 
// 2. Code execution phase - in this phase  thread execution happens and all the variables get their actual values which were assigned to them and as function is invoked, a new execution environment gets created in the code part, and again there are two phases, memory allocation phase and code execution phase. And the cycle repeats.

// Another thing about functions is that JavaScript ignores the function until it is invoked and when a function a invoked, a new temporary Execution Context is created specially for this function. It remains active until the function executes and is deleted after its work is done.

// Since we can have multiple nested function calls hence JavaScript uses a Call Stack to maintain the order of functions and Execution Contexts. A new EC is inserted when a function is called and popped when that function is executed.

// Call Stack goes by many names such as Execution Context Stack, Program Stack, Control Stack etc.

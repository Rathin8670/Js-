// Immediately Invoked Function Expressions (IIFE)
// Avoid polluting the global namespace 
// To create closures
// Avoid conflict of variable names between libraries and programs.
// IIFE is used to create private and  public variables and methods
// It is used to execute the async and await function
// It is used in JQuery Library
// It is used to work with require function


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//; this is imp bcz to stop the prev func
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
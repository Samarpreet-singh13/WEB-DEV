// Immediately Invoked Function Expressions (IIFE)

// semi colon is required when writing iife as it doesnr know when to stop execution 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// unnamed iffe
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

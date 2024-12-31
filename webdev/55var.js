console.log("First code in js")


// global scoped
var a=5;
var b=4;
console.log(a+b)

// let is block scoped 
let c="Samar"
let d=34
let e=true
let f=undefined
let n=null

// variables and their data types
console.log(c,d,e,f,n)

// null will have datatype as object
console.log(typeof c,typeof d,typeof e,typeof f,typeof n)

// creating an object

let o={
    "samar":"CEO",
    "salary":"30000000"
}
console.log(o)

o.job="head"
console.log(o)

console.log(c+1) 
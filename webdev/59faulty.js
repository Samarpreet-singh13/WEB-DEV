let random=Math.random()

let a=prompt("Enter first number")
let c=prompt("Enter operation")
let b=prompt("Enter second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1) {
    console.log(`Result is ${eval(` ${a} ${c} ${b}`)}`)
} else {
    c=obj[c]
    console.log(`Result is ${a} ${c} ${b}`)
    alert(`Result is ${eval(` ${a} ${c} ${b}`)}`)
}
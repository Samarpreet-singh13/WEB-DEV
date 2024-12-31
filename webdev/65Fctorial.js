let a=7
let fact1=1
for (let i = 1; i <= a; i++) {
    fact1=fact1*i;
}
console.log(fact1)


// a shortcut to make an array
let x=6
function fact(numbers){
    let arr=Array.from(Array(numbers+1).keys())
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}

fact(x)
// types of loops:
// for loop
// for in loop 
// for of loop 
// while loop
// do-while loop

// let a=10;

// for (let i = 0; i < 10; i++) {
//     console.log(a+i)    
// }

let obj={
    name:"samar",
    age:20,
    networth:"20cr"
}

// basic for in loop 
for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

// for of is used for iterable objects(String,arrays)
for (const c of "Samar") {
    console.log(c)
}
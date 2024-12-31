// let arr=[1,2,3,4,5]
// console.log(arr)
// console.log("length is "+arr.length)

// Array is a mutable data structure and can be changed and changes made will be reflected in the original array

// arr[0]=18
// console.log(arr)
// console.log(typeof arr)

// console.log(arr.join(" and "))
// 18 and 2 and 3 and 4 and 5 -above is displayes as

// arr.push(element),arr.pop(); these are used to add or remove an element from the last 
// arr.shift(),arr.unshift(ele); are used to remove or add in beginning respectively 

// an string could be added in a array of int
// arr.push("samar")
// console.log(arr)

// let a1=[1,2,3]
// let a2=[1,2,3]
// let a3=[1,2,3]

// console.log(a1.concat(a2,a3))


// NOW THE LOOPS IN ARRAY STARTS
// let a =[1,13,54,5,3]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// this will print the value and index and the whole array in each iteration
// a.forEach((value, index, arr) => {
//     console.log(value,index,arr)
// });

// ********MAP FILTER AND REDUCE STARTED***************
// MAP: USED TO MAKE A COPY OF THE ORIGINAL ARRAY
let arr=[1,2,3,4,65]

let newarr=arr.map((e)=>{
    return e**2;
})
console.log(newarr)

// FILTER: USED TO FILTER OUT THE DESIRED ELEMENTS FROM AN ARRAY

// REDUCE: USED TO REDUCE OR PERFORM A OPERATION ON ALL THE ELEMENTS OF THE ARRAY

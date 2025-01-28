

let arr = [10,"hello",true,30]

console.log(arr);

//! how to get the length of the array

console.log(arr.length);

//! Array Method

//! 1. push()

// it is used to add element at the end of the array

arr.push("bye")
console.log(arr);


//! 2. pop()

// it is used to remove element from the end.

let names = ["deva","ruby","sandeep","rohit"]

names.pop()
console.log(names);


//! 3. unshift()

// it is used to add element at the starting of the array.


names.unshift("jeeva")

console.log(names);


//! 4. shift()

// it is used to remove an element from the starting of the array.

let fruits = ["appe","mango","guva"]

fruits.shift()
console.log(fruits);

//! 5. indexOf()

// it is used to get the index of the given element

let subject=["html","css","js","java"]

console.log(subject.indexOf("js"));

//!  6. includes()

// it is used to check whether the given element is present or not in the array

console.log(subject.includes('html'));


//! 7. concat()

// it is used to combine two or more than two arrays


let arr1 = [10,20]
let arr2 = [90,80]


let combinedArr = arr1.concat(arr2)
console.log(combinedArr);


//! 9. join()

// it is used to convert array to string

let characters = ['h','e','l','l','o']

console.log(characters.join(""));
console.log(characters.join("#"));



//! 9. reverse()

// it is used to reverse the array

console.log(characters.reverse());




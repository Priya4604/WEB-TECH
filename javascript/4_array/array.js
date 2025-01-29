

let arr = [10,"hello",true,30]

console.log(arr);

//! how to get the length of the array

console.log(arr.length);

//! Array Method

//! 1. push()

// it is used to add element at the end of the array
// it will return the modified length

arr.push("bye")
console.log(arr);


//! 2. pop()

// it is used to remove element from the end.
// it will return poped element

let names = ["deva","ruby","sandeep","rohit"]

names.pop()
console.log(names);


//! 3. unshift()

// it is used to add element at the starting of the array.
// it will return the modified length


names.unshift("jeeva")

console.log(names);


//! 4. shift()

// it is used to remove an element from the starting of the array.
// it will return  shift element

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


//! splice()

// it will modify the original string.
// it will take 3 parameters (startIndex,count, replacementValue)


//             0  1  2  3  4  5

let number = [10,20,30,40,50,60]

number.splice(2,2,"how")
console.log(number);

arr.splice(2,0,"hii")
console.log(arr);

number.splice(2,2)
console.log(number);


//! higherOrder array method

//! foreach()

// it is higherOrder array method and it is used to traverse the array.
// it has three parameter(element,index,array).
// it can not return anything.
// it is the only method return nothing (undefined)


let array1 = [10,20,30,40,50,60]


array1.forEach((ele,index,array)=>{
    console.log(index,ele,array);
    
})

 let element =array1.forEach((ele)=>{
    return ele;
    
})

console.log(element);//undefined

//! print element grater than 30 in array

let output =[]
array1.forEach((ele)=>{
    if(ele>30)
    {
        output.push(ele) 
    }    
})

console.log(output);

//! filter()

// it is higherOrder array method.
// it can take 3 parameters.
// it will check the condition and it will return the element


let greater = array1.filter((ele)=>
{
    return ele>30
})

console.log(greater);


// input:[10,20,30,40,50]
//output[110,120,130,140,150]

let output1 =[]
array1.forEach((ele)=>{
     output1.push(ele+100)
})
console.log(output1);

//! map()
// it is higherOrder array method and it is used to traverse the array.
// it can take 3 parameters.
// it will return the element

let output2 =array1.map((ele)=>{
    return ele+100
})

console.log(output2);


//! add all the element of the array


let sum = 0

let output3 = array1.map((ele)=>
{
    return sum + ele
})

console.log(output3);

//! reduce()



let add = array1.reduce((acc,ele)=>
{
    return acc + ele;
})
/* 
let add = array1.reduce((acc,ele)=>
{
    return acc + ele;
},0)*/
console.log(add);

let prd = array1.reduce((acc,ele)=>
    {   
        console.log(acc);
        return acc * ele;
    })
console.log(prd);
/* 
let prd = array1.reduce((acc,ele)=>
    {   
        console.log(acc);
        return acc * ele;
    },1)
*/

//! sort()

let unsortedarr = [50,10,40,30,60]

let asc = unsortedarr.sort((a,b)=>
{
    return a - b 
})
console.log(asc);

let desc =  unsortedarr.sort((a,b)=>
{
    return b - a
})
console.log(desc);




























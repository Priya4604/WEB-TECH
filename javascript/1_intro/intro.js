

// ! output methods
console.log("I am external js file");

document.write("hello")

// alert("sandeep error go and clear")


// ! how to declare one variable

/*  we have three key words:
     1.let
     2.var
     3.const
*/

var a=10
console.log(a)


let b=20
console.log(b);

const c=30
console.log(c)


//?  in var keyword re-declaation is possible

var a=100
console.log(a);


//? in let keyword re-declaration is not possible

// let b=200
// console.log(b)

//? in let we can do declaration in one line and intialization in another line  it is possible

let myname

myname="priya"
console.log(myname);

//? in var we can do declaration in one line and intialization in another line  it is possible

var myname1

myname1="dhanu"
console.log(myname1);

// ! notes : for const we have to do the variable declaration and intialization in the same line

/*
const myname

myname="priya"
console.log(myname);
*/

// ! Data Types

 //! Primitive Datatypes
   /*
     1.number
     2.boolean
     3.string
     4.undefined
     5.null
     6.bigint
   */
 //! Non-Primitive Datatypes
    /*
     1.array
     2.object
     3.function
    */

//! Primitive datatype

 //! Number
 let num1 =20
 
 console.log(num1)

//! typeof operator is used do to know the datatype

console.log(typeof num1);

let num2 = 20.8
console.log(typeof num2);

//! Boolean
 
let isPlayer = false

console.log(typeof isPlayer);


//! String

// we can create string in single quotes , double quotes , back tick
 
let str1 = 'hello'
let str2 = "hello"
let str3 = `hello`

console.log(str1);
console.log(str2);
console.log(str3);

//! Undefined

// when any variable is decalred  but not initialized is called undefined

let empName 

console.log(empName);
console.log(typeof empName);


//! Null

// where we are intializing value with null is known as null typeof that is object

let sal =null

console.log(sal);
console.log(typeof sal); //object

//! Bigint

let bignumber = 2n

console.log(bignumber);
console.log(typeof bignumber);

//! Non-Primitive datatype
  

 //! Array

 // array is a collection of homogenus and hetrogeneus data 
  
 let arr = [10,"hello",true,null,undefined,[20,80]]
 console.log(arr);
 

//! object

let student = {
    sname:"rahul",
    sid:100,
    isPlayer:false,
    skills:['java','html'],
    add : {
        city:"chennai",
        pin:123456
    }
}

console.log(student);


//! function

function display()
{
    console.log('I am display function');
    
}

display()

















 











   





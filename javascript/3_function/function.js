

//!  Nmaed Function 


function display() {
     console.log("I am display function");     
}

display()

//! fuunction wit parameter

function msg( userName) 
{
  console.log(userName);   
}

msg("rohit")


//! function with return


function add(a,b)
{
   return a + b
}

 let sum = add(20,30)

 console.log(sum);


 //! anonyms function

 // function that does not have any name.

 //?  syntax:  function(){

 //?                     }

 // now we have to store this function in one variable

 let add1 = function(a,b)
 {
    console.log("I am function with expression");
    console.log(a + b);  
 }
 add1(20,30)


 //! arrow function


 let multiply = (a,b)=>{
    console.log("I am arrow function");
    console.log(a * b); 
 }
 multiply(20,4)


let str = "madam"
let str1="deva"
let rev = ""
function palindrome (a)
{
    for(let i=a.length-1;i>=0;i--)
    {
       rev = rev+a.charAt(i)
    }
    
    if( str == rev)
        return "yes"
    else 
     return "no"
}
let ans = palindrome(str)
console.log(ans);

function palindrome1 ( b)
{
    let i=0
    let j=b.length-1

    while (i<j) 
    {
        if(b.charAt(i)!= b.charAt(j) )
        {
            return "false"
        }
        i++
        j--
    }
    return "true"
}

let str2 ="priya"
let ans2 = palindrome1(str2)
console.log(ans2);


//! nested function

let outer=()=>
{
    let a=10
    let inner = ()=>{
        let b=20
        console.log((a + b));
    }
    inner()
}

outer()

//!  lexical scopping

// when  we are taking nested function, inner function can take the prperty of outer function but the outer function can't take the propertyof inner function it is known as lexical scopping


//! HigherOrder function and Callback Function

// any function takes another function as parameter,that is called HigherOrder function

// the function we are sending as paramter to the HigherOrder function is called as callback function


let bye=()=>{
    console.log("bye...");
    
}

let hello = (msg)=>{
    msg()
}
hello(()=>{
    console.log("hi...");
    })
hello(bye);


//! IIFE 
//  immediate invoke function expression



(function(){
    console.log("I am IIFE");
    
})()





// ! Syntax of JSON:
// Objects: Represented as key-value pairs enclosed in curly braces `{}`.

 let j1 ={
"name": "virat",
"age": 30,
"city": "bangalore",
"fruits": ["Apple", "Banana", "Orange"]
}
console.log(j1);


//! Acessing json data

const person = {
    "name": "msd",
    "age": 42,
    "city": "chennai"
    };

    console.log(person.name); 
    
    console.log(person['city']); 




let obj1 ={
        name:"rahul",
        age:12,
        isStudent:true,
        marks : [10,20,30,40] 
        }
console.log(obj1)

// ! 1. JSON.stringify()

// Converting a JSON string into a JavaScript object.

let jsonData = JSON.stringify(obj1);
console.log(jsonData)


// ! 2. JSON.parse()

// Converting a JavaScript object into a JSON string.

let anotherObj = JSON.parse(jsonData)
console.log(anotherObj)
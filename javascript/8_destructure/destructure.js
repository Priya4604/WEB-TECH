


let obj = {
    sname:"abc",
    age:10,
    isStudent : true
}

console.log(obj.sname);

console.log(obj.age);


//! object destructure

let {isStudent,sname,age} = obj // order is not mandatory but key name should be same....

console.log(sname);

//! array destructure

let arr= [10,20,30,40]

let [a,b,c,d]= arr// variable name can be any name..

console.log(d);
console.log(b);


//! Rest Parameter

let hello = (a,b,...c)=>{

console.log(a);
console.log(b);
console.log(c);



}

hello(10,20,30,40,50,80)



let[x,...y] =arr
console.log(y);


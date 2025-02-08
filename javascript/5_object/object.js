let pen = {
    brand:"camlin",
    price:100,
    color:["red","yellow","green"],
    work: function(){
        console.log("I can write");     
    }

}

//! HOW to access

console.log(pen.price);

pen.work()

console.log(pen.brand.toUpperCase());



// ! How to modify

pen.price=300

console.log(pen);

// ! how to add


pen.type=['gel','ballpoint pen','ink pen']

console.log(pen);

// ! how to delete


delete pen.type

console.log(pen);


// ! Methods

// ! 1.object.keys()

let keys=Object.keys(pen)

console.log(keys);

// console.log(Object.keys(pen));  

// ! Object values ()

//  it will return one array it will store all the values

let values1=Object.values(pen)

console.log(values1);


// this method will return all the values in the form of array.


let values2 = Object.values(ob)
console.log(values2)


// ! Object.entries()
// it will return one nested array where all the key and value pair will be stored in each indivisual array.


let key_value = Object.entries(ob)
console.log(key_value)




let ob2 = {
ob_name : "mobile",
price:450000
}
console.log(ob2)


// !  Object.freeze()
// we can't add , modify , delete

Object.freeze(ob2)
ob2.color = "black"

delete ob2.price

ob2.price = 400000
console.log(ob2)


// !  Object.isFrozen()
// it is used to check whether the object is frozen or not.

console.log(Object.isFrozen(ob2))



let ob3 = {
ob_name:"mobile",
price:350000
}

// ! 6. Object.seal()
// it is also similar to Object.freeze() method but here we can modify the value. 
// we can not add or delete.

console.log(ob3)

Object.seal(ob3)
delete ob3.price

ob3.color="red"
ob3.price = 500000

console.log(ob3)


// ! 7. Object.isSealed()
// it is used to check whether the object is sealed or not.
// if it is sealed it will give true otherwise it will give false.

console.log(Object.isSealed(ob3))


// ! 8. hasOwnProperty()
// it will check the given key is present or not.
// if it is present it will give true otherwise it will give false.

// ? syntax: object_name.hasOwnProperty()
console.log(ob3.hasOwnProperty("price")) // true
console.log(ob3.hasOwnProperty("color")) // false





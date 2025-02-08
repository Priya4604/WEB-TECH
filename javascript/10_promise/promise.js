

let p = new Promise((resolve,reject)=>{

    resolve("hellooooo")

   // reject("not done")

})



let p0 = new Promise((resolve,reject)=>{
    resolve("done")
    //reject("not done")
})

p0.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})
.finally(
    console.log("Promise is there")
    
)

//! promise static methods

let p1 = new Promise((resolve,reject)=>{
   // resolve("reolve1")
    reject("reject1")
})

let p2 = new Promise((resolve,reject)=>{
    //resolve("reolve2")
    reject("reject2")
})

let p3 = new Promise((resolve,reject)=>{
    resolve("reolve3")
    //reject("reject3")
})

let p4 = new Promise((resolve,reject)=>{
    resolve("reolve4")
    //reject("reject4")
})


// ! Promise.any()

Promise.any([p1,p2,p3,p4])
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})

//!  Promise .all()


let p5 = new Promise((resolve,reject)=>{
     resolve("reolve5")
   //  reject("reject5")
 })
 
 let p6 = new Promise((resolve,reject)=>{
     resolve("reolve6")
    // reject("reject6")
 })
 
 let p7 = new Promise((resolve,reject)=>{
     resolve("reolve7")
     //reject("reject7")
 })
 
 let p8 = new Promise((resolve,reject)=>{
     resolve("reolve8")
    // reject("reject8")
 })


 Promise.all([p5,p6,p7,p8])
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})


//! Promise.allSetteled()

Promise.allSettled([p1,p2,p3,p4])
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})

//! Promise.race()


Promise.race([p1,p2,p3,p4])
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})
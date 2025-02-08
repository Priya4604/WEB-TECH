

/*
let fetchedData =  fetch("https://fakestoreapi.com/products")

// console.log(fetchedData);

fetchedData
.then((data)=>
{
  //console.log(data);

  let jsondata = data.json()
  //console.log(jsondata);

  jsondata
  .then((data)=>{
      console.log(data);
   
     // data.map((ele)=>{
     //   console.log(ele.title);
       
   //  }) 

    
  })
  .catch((err)=>{
    console.log(err);
    
  })
  
  
})
.catch((err)=>{
    console.log(err);
    
}) */



//! async await

let getdata = async ()=>{

    try{
        let response = await  fetch("https://fakestoreapi.com/products")

        let data = await response.json()

        console.log(data)
     
        

    }
    catch(err)
    {
        console.log(err)
        
    }
}

getdata ()

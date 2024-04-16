// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export const Cart = () => {
//   const [cartData,setcartData] =useState([]);
//   useEffect(()=>{
//     const fetchData=()=>{
//       axios.get("http://localhost:8080/file/getcart")
//       .then((res)=>{
//         console.log("res",res.data);
//         setcartData(res.data);

//       })
//       .catch(()=>{
//         console.log("error");
//       });

//     };

//     fetchData();
//     return()=>{

//     }

//   });

//   const tem = (categoryData) => {
//     let a = {
//       productName: categoryData.productName,
//       description: categoryData.description,
//       price: categoryData.price,
//       image: categoryData.image,
//       catogries: categoryData.catogries,
//     };

//     console.log(a);
//     fetch("http://localhost:8080/file/addcart", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify(a),
//     }).then((response) => {
//       console.log("Data received " + response);
//       alert("Product Added to Cart..!");
//     });
//   };

 

  
 
// }




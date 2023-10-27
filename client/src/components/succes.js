import React from "react";
import Swal from 'sweetalert2'
function Success() { 
    return ( 
        <>
     {
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thanks for your order! ',
        text: "Your payment is successful",
        showConfirmButton: true,
        confirmButtonText: '<a href="/" style="color:white">Go to Home page <a>',
        timer: 100000
      })
    }
</>

    ); 
  } 
   
  export default Success;
import React from "react";
import Swal from 'sweetalert2'
function Cancel() { 
  return ( 
    
          <>
          {
             Swal.fire({
             position: 'center',
             icon: 'error',
             title: 'Oops! ',
             text: "Your payment has been cancelled",
             showConfirmButton: true,
             confirmButtonText: '<a href="/" style="color:white">Go to Home page <a/>',
             timer: 100000
           })
         }
     </>
  ); 
} 
 
export default Cancel;
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import {PaymentElement} from '@stripe/react-stripe-js';

// export default function Checkout() {
//     const [Name_On_Card, setName_On_Card]=useState('');
//     const [Credit_Card_Number, setCredit_Card_Number]=useState('');
//     const [Expiration_Date, setExpiration_Date]= useState(0);
//     const [CVV, setCVV]=useState(0)
//     var elements={
//         Name_On_Card: Name_On_Card,
//         Credit_Card_Number: Credit_Card_Number,
//         Expiration_Date: Expiration_Date,
//         CVV: CVV
//       }
//     return (
//    <>
//     <h4 className="mb-3">Payment</h4>

// <div className="my-3">
//   <div className="form-check">
//   <input
//       id="credit"
//       name="paymentMethod"
//       type="radio"
//       className="form-check-input"
//       required=""
//     />
//     <label className="form-check-label" htmlFor="credit">
//       Credit card
//     </label>
//   </div>
//   <div className="form-check">
//     <input
//       id="debit"
//       name="paymentMethod"
//       type="radio"
//       className="form-check-input"
//       required=""
//     />
//     <label className="form-check-label" htmlFor="debit">
//       Debit card
//     </label>
//   </div>
//   <div className="form-check">
//     <input
//       id="flouci"
//       name="paymentMethod"
//       type="radio"
//       className="form-check-input"
//       required=""
//     />
//     <label className="form-check-label" htmlFor="flouci">
//       Flouci
//     </label>
//   </div>
// </div>

// <div className="row gy-3">
//   <div className="col-md-6">
//     <label htmlFor="cc-name" className="form-label">
//       Name on card
//     </label>
//     <input
//       type="text"
//       className="form-control"
//       id="cc-name"
//       placeholder=""
//       required=""
//       onChange={setName_On_Card}
//     />
//     <small className="text-muted">
//       Full name as displayed on card
//     </small>
//     <div className="invalid-feedback">
//       Name on card is required
//     </div>
//   </div>

//   <div className="col-md-6">
//     <label htmlFor="cc-number" className="form-label">
//       Credit card number
//     </label>
//     <input
//       type="text"
//       className="form-control"
//       id="cc-number"
//       placeholder=""
//       required=""
//       onChange={setCredit_Card_Number}
//     />
//     <div className="invalid-feedback">
//       Credit card number is required
//     </div>
//   </div>

//   <div className="col-md-3">
//     <label htmlFor="cc-expiration" className="form-label">
//       Expiration
//     </label>
//     <input
//       type="text"
//       className="form-control"
//       id="cc-expiration"
//       placeholder=""
//       required=""
//       onChange={setExpiration_Date}
//     />
//     <div className="invalid-feedback" >
//       Expiration date required
//     </div>
//   </div>

//   <div className="col-md-3">
//     <label htmlFor="cc-cvv" className="form-label">
//       CVC
//     </label>
//     <input
//       type="text"
//       className="form-control"
//       id="cc-cvv"
//       placeholder=""
//       required=""
//       onChange={setCVV}
//     />
//     <div className="invalid-feedback">Security code required</div>
//   </div>
// </div>

// <hr className="my-4" />

// <button className="w-100 btn btn-primary btn-lg" type="submit" >
//   Pay
// </button>




//    </>
//   )
// }

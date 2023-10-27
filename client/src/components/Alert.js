import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";

const AlertError = () => {
  const errors = useSelector((state) => state.ErrorReducer);

  useEffect(() => {
    errors.forEach((el) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: el.msg,
      });
    });
  }, [errors]);

  return <div></div>; // You can return an empty div or your desired JSX structure.
};

export default AlertError;
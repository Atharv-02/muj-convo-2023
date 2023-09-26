import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "react-bootstrap";
import { useAlert } from "../context/AlertMessageContext";
const Alerts = () => {
  const { message, setMessage } = useAlert();
  return (
    <div className=''>
      <Alert
        variant='success'
        style={{
          position: "absolute",
          width: "300px",
          left: "30%",
          marginTop: "5rem",
        }}
      >
        {message}{" "}
      </Alert>
    </div>
  );
};

export default Alerts;

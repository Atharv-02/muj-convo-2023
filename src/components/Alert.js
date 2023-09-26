import React, { useState } from "react";
import { Snackbar } from "@mui/material";

import { useAlert } from "../context/AlertMessageContext";
const Alert = () => {
  const { message, setMessage } = useAlert();
  return (
    <Alert severity='success' sx={{ width: "100%" }}>
      {message} jcbjcdbjb
    </Alert>
  );
};

export default Alert;

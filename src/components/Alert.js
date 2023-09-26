import React from "react";
import { Snackbar } from "@mui/material";
const Alert = () => {
  return (
    <Snackbar open={true} autoHideDuration={1000}>
      <Alert onClose={handleClose} severity='success' sx={{ width: "100%" }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
};

export default Alert;

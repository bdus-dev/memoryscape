import React, { useState, useEffect } from "react";

import theming from "../src/services/theming";
import { MuiThemeProvider, CssBaseline, Snackbar } from "@material-ui/core";
import Bar from "./components/Bar";

import TestDB from "./components/Tests/TestDB";

export default function App (props) {

  const [theme, setTheme] = useState(theming.defaultTheme);
  const [performingAction, setPerformingAction] = useState(false);
  const [snackbar, setSnackbar] = useState({
    autoHideDuration: 0,
    message: '',
    open: false
  });


  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Bar
        performingAction={performingAction}
        // onSignUpClick={() =>    openDialog("signUpDialog")}
        // onSignInClick={() =>    openDialog("signInDialog")}
        onSettingsClick={() =>  console.log('onSettingsClick') }
        onSignOutClick={() =>   console.log("onSignOutClick")}
      />

      <TestDB />

      <Snackbar
        autoHideDuration={snackbar.autoHideDuration}
        message={snackbar.message}
        open={snackbar.open}
        // onClose={this.closeSnackbar}
      />
    </MuiThemeProvider>
  );  
}
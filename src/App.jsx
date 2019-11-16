import React, { useState } from 'react';

import { MuiThemeProvider, CssBaseline, Snackbar } from '@material-ui/core';
import theming from './services/theming';
import Bar from './components/Bar';

import TestDB from './components/Tests/TestDB';

export default function App() {
  const [theme] = useState(theming.defaultTheme);
  const [performingAction] = useState(false);
  const [snackbar] = useState({
    autoHideDuration: 0,
    message: '',
    open: false,
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Bar
        performingAction={performingAction}
        // onSignUpClick={() =>    openDialog("signUpDialog")}
        // onSignInClick={() =>    openDialog("signInDialog")}
        onSettingsClick={() => console.log('onSettingsClick')}
        onSignOutClick={() => console.log('onSignOutClick')}
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

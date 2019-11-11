import React, { Component } from "react";

import theming from "../src/services/theming";
import { MuiThemeProvider, CssBaseline, Snackbar } from "@material-ui/core";
import Bar from "./components/Bar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        theme: theming.defaultTheme,

        performingAction: false,

        snackbar: {
            autoHideDuration: 0,
            message: '',
            open: false
        }
    };
  }

  render() {
    const { theme, performingAction, snackbar } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Bar
          performingAction={performingAction}
          onSignUpClick={() => this.openDialog("signUpDialog")}
          onSignInClick={() => this.openDialog("signInDialog")}
          onSettingsClick={() => this.openDialog("settingsDialog")}
          onSignOutClick={() => this.openDialog("signOutDialog")}
        />

        <Snackbar
          autoHideDuration={snackbar.autoHideDuration}
          message={snackbar.message}
          open={snackbar.open}
          onClose={this.closeSnackbar}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;

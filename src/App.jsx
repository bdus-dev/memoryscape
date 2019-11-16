import React, { useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theming from './services/theming';

import Intro from './components/Intro/Intro';

export default function App() {
  const [theme] = useState(theming.defaultTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Intro} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

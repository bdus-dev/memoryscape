import React, { useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theming from './services/theming';

import Intro from './components/Intro/Intro';
import Mappa from './components/Mappa/Mappa';
import Search from './components/Search/Search';

export default function App() {
  const [theme] = useState(theming.defaultTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/mappa/" component={Mappa} />
          <Route exact path="/search/" component={Search} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

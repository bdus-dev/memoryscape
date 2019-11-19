import React, { useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { IntlProvider } from 'react-intl';
import theming from './services/theming';

import Intro from './components/Intro/Intro';
import Map from './components/Map/Map';
import Search from './components/Search/Search';
import Clip from './components/Clip/Clip';
import itMessages from './translations/it.json';
import enMessages from './translations/en.json';

const messages = {
  it: itMessages,
  en: enMessages,
};

export default function App() {
  const [theme] = useState(theming.defaultTheme);
  const [lang, setLang] = useState('it');
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Intro changeLang={setLang} />} />
            <Route exact path="/mappa/" component={Map} />
            <Route exact path="/search/" component={Search} />
            <Route exact path="/clip/:id" component={Clip} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </IntlProvider>
  );
}

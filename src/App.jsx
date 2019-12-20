import React, { useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { IntlProvider } from 'react-intl';
import theming from './services/theming';

import itMessages from './translations/it.json';
import enMessages from './translations/en.json';

import Intro from './components/Intro/Intro';
import Map from './components/Map/Map';
import Search from './components/Search/Search';
import Clip from './components/Clip/Clip';
import About from './components/About/About';
import ReactGA from 'react-ga';


if(window.location.href.match(/homemovies\.it/g)){
  ReactGA.initialize('UA-151640045-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
            <Route exact path="/:lang(en|it)/map/" component={Map} />
            <Route exact path="/:lang(en|it)/search/" component={Search} />
            <Route exact path="/:lang(en|it)/clip/:id" component={Clip} />
            <Route exact path="/:lang(en|it)/about" component={About} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </IntlProvider>
  );
}

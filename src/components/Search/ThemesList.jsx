import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Fab } from '@material-ui/core';

import { FormattedHTMLMessage } from 'react-intl';

import Database from '../../services/Database';

const useStyles = makeStyles((theme) => ({
  fabTheme: {
    borderRadius: '0 !important',
    padding: '0.5em',
    margin: '0.2em',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#7a1dcf',
      color: '#fff',
    },
  }
}));

export default function ThemesList(props) {

  const onThemeSelect = props.onThemeSelect;

  const classes = useStyles();

  const [themes, setThemes] = useState(null);

  useEffect(() => {
    Database.getVocabulary('temi-ms', (result) => {
      setThemes(result);
    });
  }, []);

  return (
    <React.Fragment>
      <h2>
        <FormattedHTMLMessage id="app.filterModal.themes" />
      </h2>
      {themes && themes.map((e, i) => {
        return (
          <Fab className={classes.fabTheme} key={i} variant="extended" size="small" onClick={onThemeSelect}>
            {e.trim()}
          </Fab>
        );
      })}
    </React.Fragment>
  );
}

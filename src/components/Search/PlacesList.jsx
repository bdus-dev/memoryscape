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

export default function PlacesList(props) {

  const onPlaceSelect = props.onPlaceSelect;

  const classes = useStyles();

  const [places, setPlaces] = useState(null);

  useEffect(() => {
    Database.getUniqueVal('luogo', (result) => {
      setPlaces(result);
    });
  }, []);

  return (
    <React.Fragment>
      <h2>
        <FormattedHTMLMessage id="app.filterModal.places" />
      </h2>
      {places && places.map((e, i) => {
        return (
          <Fab className={classes.fabTheme} key={i} variant="extended" size="small" onClick={onPlaceSelect}>
            {e.trim()}
          </Fab>
        );
      })}
    </React.Fragment>
  );
}

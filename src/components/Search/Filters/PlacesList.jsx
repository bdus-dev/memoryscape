import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';

import { List, Box } from '@material-ui/core';

import { FormattedHTMLMessage } from 'react-intl';

import Database from '../../../services/Database';
import PlaceElement from './PlaceElement';
import FilterContext from '../FilterContext';

const useStyles = makeStyles(() => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default function PlacesList() {
  const { isPlaceSelected } = useContext(FilterContext);
  const classes = useStyles();
  const [placesArray, setPlacesArray] = useState(null);

  useEffect(() => {
    Database.getUniqueVal('luogo', (result) => {
      const arrayList = [];
      const maxNumberOfElements = 10;
      if (result.length > maxNumberOfElements) {
        while (result.length) {
          arrayList.push(result.splice(0, maxNumberOfElements));
        }
      } else {
        arrayList.push(result);
      }
      setPlacesArray(arrayList);
    });
  }, []);

  return (
    <div>
      <h2>
        <FormattedHTMLMessage id="app.filterModal.places" />
      </h2>
      <Box className={classes.listContainer}>
        {placesArray && placesArray.map((places, x) => {
          return (
            <List component="nav" key={x}>
              { places.map((e, i) => {
                return (
                  <PlaceElement
                    key={`${x} ${i}`} 
                    placeValue={e.trim()}
                    selected={isPlaceSelected(e.trim())} />
                );
              })}
            </List>
          );
        })}
      </Box>
    </div>
  );
}

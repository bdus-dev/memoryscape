import React, { useContext } from 'react';

import { FormattedHTMLMessage } from 'react-intl';
import { Box, TextField, makeStyles } from '@material-ui/core';
import FilterContext from '../FilterContext';

const useStyles = makeStyles(() => ({
  root: {
    '& label': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& input': {
      color: '#fff',
    },
  },
  yearContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function YearsList() {
  const { addYearFromToQuery, addYearToToQuery, yearFrom, yearTo } = useContext(FilterContext);
  const classes = useStyles();

  const valueFromChange = (event) => {
    if (event.target.value.length === 4) {
      addYearFromToQuery(event.target.value);
    }
  };

  const valueToChange = (event) => {
    if (event.target.value.length === 4) {
      addYearToToQuery(event.target.value);
    }
  };

  return (
    <div>
      <h2>
        <FormattedHTMLMessage id="app.filterModal.year" />
      </h2>
      <Box className={classes.yearContainer}>
        <TextField
          id="dateFrom"
          label="From"
          className={classes.root}
          onChange={valueFromChange}
          inputProps={{
            pattern: '^(19|20)\d{2}$',
            maxLength: '4',
          }}
        />
        <TextField
          id="dateFrom"
          label="To"
          className={classes.root}
          onChange={valueToChange}
          inputProps={{
            pattern: '^(19|20)\d{2}$',
            maxLength: '4',
          }}
        />
      </Box>
    </div>
  );
}

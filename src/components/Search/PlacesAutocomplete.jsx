import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { app } from '../../cfg';
import Database from '../../services/Database';
import { makeStyles } from '@material-ui/styles';
import FilterContext from './FilterContext';
// TODO:
// Modificare lo stile

const useStyles = makeStyles(theme => ({
  autoComplete: {
    border: 'none',
    borderBottom: '1px solid #fff',
    color: '#fff !important',
    backgroundColor: 'rgba(0,0,0,.3)',
    padding: '0 .5rem',
    '& .MuiAutocomplete-input, & .MuiAutocomplete-popupIndicator, & .MuiAutocomplete-clearIndicator, & .MuiFormLabel-root, & .MuiFormLabel-root.Mui-focused': {
      color: '#fff !important',
    },
  },
}));

export default function PlacesAutocomplete() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const classes = useStyles();
  const { togglePlaces, getQueryFilters, initFilters } = useContext(FilterContext);
  const history = useHistory();

  const searchPlace = (place) => {
    setLoading(true);
    Database.getUniqueVal('luogo', place, `app|LIKE|%${app}%`, (result) => {
      setPlaces(result.sort());
      setLoading(false);
    });
  };

  const applyFilters = () => {
    history.push(getQueryFilters());
  };

  const doSearch = (el) => {
    if (el === '') {
      initFilters('places');
    } else {
      togglePlaces(el);
    }
    applyFilters();
  };

  return (
    <Autocomplete
      id="place"
      className={classes.autoComplete}
      open={open}
      noOptionsText={<FormattedMessage id="app.autocomplete.type" />}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={ (event, values) => {
        doSearch(values);
      }}
      //getOptionSelected={(option, value) => option.name === value.name}
      //getOptionLabel={option => option.name}
      options={places}
      loading={loading}
      renderInput={params => (
        <FormattedMessage id="app.filterModal.places">
          {placeholder => (
            <TextField
              {...params}
              label={placeholder}
              fullWidth
              onChange={ (event) => {
                searchPlace(event.target.value);
              }} 
              variant="standard"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        </FormattedMessage>
      )}
    />
  );
}

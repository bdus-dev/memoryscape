import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {app} from '../../cfg';
import Database from '../../services/Database';

// TODO:
// Gestione multilingua
// Wrap del context per effettuare la ricerca correttamente
// Load del valore
// Test gestione del loading
// Dargli uno stile

export default function PlacesAutocomplete() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  const searchPlace = (place) => {
    setLoading(true);
    Database.getUniqueVal('luogo', place, `app LIKE '%${app}%'`, (result) => {
      setPlaces(result.sort());
      setLoading(false);
    });
  };


  return (
    <Autocomplete
      id="place"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      //getOptionSelected={(option, value) => option.name === value.name}
      //getOptionLabel={option => option.name}
      options={places}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label="Luogo"
          fullWidth
          onChange={ (event) => {
            searchPlace(event.target.value);
          }} 
          variant="outlined"
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
    />
  );
}

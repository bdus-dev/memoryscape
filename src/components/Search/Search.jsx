import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import qs from 'qs';

import InternalTmpl from '../Templates/InternalTmpl';

import Results from './Results';
import FilterModal from './FilterModal';
import { FilterContextComponent } from './FilterContext';
import {col, title} from '../../cfg';
import PlacesAutocomplete from './PlacesAutocomplete';
import ResetButton from './ResetButton';
import Decades from './Decades';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '4rem',

  },
  textBox: {
    color: '#fff',
    marginTop: '1em',
    paddingTop: '1em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2.5em',
    },
  },
  mainTitle: {
    fontSize: '2em',
    marginBlockStart: '0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em',
    },
  },
  yearButton: {
    color: '#fff',
    fontWeight: '900',
    '&.active': {
      backgroundColor: col,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.7em',
    },
  },
  filterContainer: {
    textAlign: 'right',
    marginTop: '1em',
    marginBottom: '1em',
  },
}));

export default function Search(props) {

  const classes = useStyles();
  const qstring = qs.parse(props.location.search, {ignoreQueryPrefix: true});
  const lang = props.lang || props.match.params.lang;

  return (
    <InternalTmpl lang={lang}>
      <Typography className={classes.boxContainer} component="div">
        <Box className={classes.textBox}>
            <Button href="https://homemovies.it/memoryscapes/ " target="_blank" style={{ color: '#fff', fontWeight: 'bold', paddingLeft: 0}}>
              memoryscapes
            </Button>
          <h1 className={classes.mainTitle}>{title.main}</h1>
        </Box>

        <Box>
          <Grid container justify="space-between" alignItems="center">
            <FilterContextComponent>
              <Grid item xs={12} md={7}>
                <Box component="div">
                  <ResetButton classes={{root: classes.yearButton}}  />
                  <Decades classes={{root: classes.yearButton}} currDecade={ qstring.decade } />
                </Box>
              </Grid>

              <Grid item className={classes.filterContainer} xs={8} md={3}>
                <PlacesAutocomplete />
              </Grid>

              <Grid item className={classes.filterContainer} xs={4} md={2}>
                <FilterModal />
              </Grid>
            </FilterContextComponent>
          </Grid>

        </Box>
        {/* Fine barra di ricerca */}

      </Typography>

      <Results qs={qstring} />
    </InternalTmpl>
  );
}

import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedHTMLMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InternalTmpl from '../Templates/InternalTmpl';

import qs from 'qs';

import Results from './Results';
import FilterModal from './FilterModal';
import { FilterContextComponent } from './FilterContext';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '3rem',

  },
  textBox: {
    color: '#fff',
    marginTop: '1em',
    paddingTop: '1em',
  },
  mainTitle: {
    fontSize: '2em',
    marginBlockStart: '0',
  },
  yearButton: {
    color: '#fff',
    fontWeight: '900',
    '&.active': {
      backgroundColor: '#7a1dcf'
    }
  },
  filterContainer: {
    textAlign: 'right'
  },
}));

export default function Search(props) {

  const classes = useStyles();
  const history = useHistory();
  const qstring = qs.parse(props.location.search, {ignoreQueryPrefix: true});
  const lang = props.lang || props.match.params.lang;

  const go2page = (page)=>{ history.push(page)};

  // TODO: i bottoni .active devono avere il color viola!
  return (
    <InternalTmpl lang={lang}>
      <Typography className={classes.boxContainer} component="div">
        <Box className={classes.textBox}>
          <h5>
              HOME MOVIES DIGITAL ARCHIVES
          </h5>
          <h1 className={classes.mainTitle}>memoryscapes 01<br />lungo la via emilia</h1>
        </Box>
        <Box>
          <Grid
            justify="space-between"
            container 
            alignItems="center"
            >
            <Grid item xs={9}>
              <Box component="div">
                <Button classes={{root: classes.yearButton}} 
                        className={ !qstring.decade ? 'active' : ''} 
                        onClick={() => go2page('./')}
                        >
                  <FormattedHTMLMessage id="app.search.all" />
                </Button>
                {
                  [30, 40, 50, 60, 70, 80].map((e, i) => {
                    return (
                      <Button
                        classes={{root: classes.yearButton}}
                        className={ Number(qstring.decade) === e ? 'active' : ''}
                        key={i}
                        onClick={() => go2page(`./?decade=${e}`)}>'{e}</Button>
                        )})
                  }
                </Box>
            </Grid>

            <Grid item className={classes.filterContainer} xs={3}>
              <FilterContextComponent>
                <FilterModal />
              </FilterContextComponent>
            </Grid>
          </Grid>
          
        </Box>
      </Typography>

      <Results qs={qstring} />
    </InternalTmpl>
  );
}

import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedHTMLMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Bar from '../Bar/Bar';
import backGroundImage from '../../img/internal-background.jpg';

import qs from 'qs';

import Results from './Results';
import FilterModal from './FilterModal';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(${backGroundImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  },
  boxContainer: {
    padding: theme.spacing(3, 2),
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
    fontSize: '3.2em',
    letterSpacing: '0.1em',
    marginBlockStart: '0',
  },
  languageContainer: {
    marginTop: 'auto',
    marginBottom: '6em',
    textAlign: 'center',
  },
  buttomLang: {
    color: '#fff',
    fontWeight: '900',
  },
  filterContainer: {
    marginRight: '1%',
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
    <div className={classes.homeContainer}>
      <Bar lang={lang} />
      <Container fixed>
        <Typography className={classes.boxContainer} component="div">
          <Box className={classes.textBox}>
            <h5>HOME MOVIES DIGITAL ARCHIVE</h5>
            <h1 className={classes.mainTitle}>Viaggio in Italia</h1>
          </Box>
          <Box>
            <Grid
              justify="space-between"
              container 
              alignItems="center"
              >
              <Grid item>
                <Box component="div">
                  <Button classes={{root: classes.buttomLang}} 
                          className={ !qstring.decade ? 'active' : ''} 
                          onClick={() => go2page('./')}
                          >
                    All
                  </Button>
                  {
                    [20, 30, 40, 50, 60, 70, 80].map((e, i) => {
                      return (
                        <Button
                          classes={{root: classes.buttomLang}}
                          className={ Number(qstring.decade) === e ? 'active' : ''}
                          key={i}
                          onClick={() => go2page(`./?decade=${e}`)}>'{e}</Button>
                          )})
                    }
                  </Box>
              </Grid>

              <Grid item className={classes.filterContainer}>
                <FilterModal />
              </Grid>
            </Grid>
            
          </Box>
        </Typography>

        <Results qs={qstring} />

      </Container>
    </div>
  );
}
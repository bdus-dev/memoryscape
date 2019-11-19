import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Bar from '../Bar/Bar';

import Record from './Record';

import backGroundImage from '../../img/internal-background.jpg';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(${backGroundImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    paddingBottom: '2rem'
  },
  boxContainer: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textBox: {
    textAlign: 'center',
    color: '#fff',
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
}));

export default function Clip(props) {
  const classes = useStyles();

  const clipId = props.match.params.id;
  const lang = props.match.params.lang;

  return (
    <div className={classes.homeContainer}>
      <Bar lang={lang} />
      <Container fixed>
        <Typography className={classes.boxContainer} component="div">
          <Box className={classes.textBox}>
            <h5>HOME MOVIES DIGITAL ARCHIVE | Viaggio in Italia</h5>
          </Box>
        </Typography>

        <Record id={clipId} />

      </Container>
    </div>
  );
}

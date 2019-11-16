import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Box, Button } from '@material-ui/core';
import Bar from '../Bar/Bar';
import backGroundImage from '../../img/home-background.jpg';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(${backGroundImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
  },
  boxContainer: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textBox: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 'auto',
    paddingTop: '9em',
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

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Bar />
      <Container fixed>
        <Typography className={classes.boxContainer} component="div" style={{ height: '100vh' }}>
          <Box className={classes.textBox}>
            <h5>HOME MOVIES DIGITAL ARCHIVE</h5>
            <h2 className={classes.mainTitle}>Viaggio in Italia</h2>
          </Box>
          <Box className={classes.languageContainer}>
            <Button className={classes.buttomLang}>ITA</Button>
            <Button className={classes.buttomLang}>ENG</Button>
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

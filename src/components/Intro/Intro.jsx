import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import { Container, Typography, Box, Button } from '@material-ui/core';
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

export default function Intro({ changeLang }) {
  const classes = useStyles();
  const history = useHistory();

  const selectLang = (lang) => {
    changeLang(lang);
    history.push(`/${lang}/search/`);
  };

  /**
   * <Box className={classes.languageContainer}>
            <Button className={classes.buttomLang} onClick={() => selectLang('it')}>ITA</Button>
            <Button className={classes.buttomLang} onClick={() => selectLang('en')}>ENG</Button>
          </Box>
   */

  return (
    <div className={classes.homeContainer}>
      <Container fixed>
        <Typography className={classes.boxContainer} component="div" style={{ height: '100vh' }}>
          <Box className={classes.textBox}>
            <h5>HOME MOVIES DIGITAL ARCHIVE</h5>
            <h2 className={classes.mainTitle}>memoryscapes01 //<br />lungo la via emilia</h2>
          </Box>
          <Box className={classes.languageContainer}>
            <Button className={classes.buttomLang} onClick={() => selectLang('it')}>Vai all'archivio</Button>
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

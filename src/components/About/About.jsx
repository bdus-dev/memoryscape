import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Container, Typography, Box, Button } from '@material-ui/core';
import backGroundImage from '../../img/internal-background.jpg';

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
  },
  mainTitle: {
    fontSize: '3.2em',
    letterSpacing: '0.1em',
    marginBlockStart: '0',
  }
}));

export default function About() {
  const classes = useStyles();
  

  return (
    <div className={classes.homeContainer}>
      <Container fixed>
        <Typography className={classes.boxContainer} component="div" style={{ height: '100vh' }}>
          <Box className={classes.textBox}>
            <h5>HOME MOVIES DIGITAL ARCHIVE</h5>
            <h2 className={classes.mainTitle}>About: TODO</h2>
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

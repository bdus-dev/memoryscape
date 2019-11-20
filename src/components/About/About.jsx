import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Bar from '../Bar/Bar';

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

export default function About(props) {
  const classes = useStyles();
  const lang = props.lang || props.match.params.lang;

  return (
    <div className={classes.homeContainer}>
      <Bar lang={lang} />
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

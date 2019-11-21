import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Typography, Box } from '@material-ui/core';
import InternalTmpl from '../Templates/InternalTmpl';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    zIndex: 100,

  },
  textBox: {
    textAlign: 'center',
    color: '#fff',
  },
  mainTitle: {
    fontSize: '3.2em',
    letterSpacing: '0.1em',
    marginBlockStart: '0',
  },
  
}));

export default function About(props) {
  const classes = useStyles();
  const lang = props.lang || props.match.params.lang;

  return (
    <InternalTmpl lang={lang}>
      <Typography className={classes.boxContainer} component="div">
        <Box className={classes.textBox}>
          <h5>HOME MOVIES DIGITAL ARCHIVE</h5>
          <h2 className={classes.mainTitle}>About: TODO</h2>
        </Box>
      </Typography>
    </InternalTmpl>
  );
}

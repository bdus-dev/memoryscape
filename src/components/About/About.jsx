import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Typography, Box } from '@material-ui/core';
import BlackTmpl from '../Templates/BlackTmpl';

import {app, title} from '../../cfg';
import ER from './ER';
import Italia from './Italia';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: theme.spacing(3, 2),
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
  },
  
}));

export default function About(props) {
  const classes = useStyles();
  const lang = props.lang || props.match.params.lang;

  return (
    <BlackTmpl lang={lang}>
      <Typography className={classes.boxContainer} component="div">
        <Box className={classes.textBox}>
          <h5>HOME MOVIES DIGITAL ARCHIVES</h5>
          <h2 className={classes.mainTitle}>
            {title.main}<br /> {title.sub}
          </h2>
          { app === 'er' ? <ER /> : <Italia />}
        </Box>
      </Typography>
    </BlackTmpl>
  );
}

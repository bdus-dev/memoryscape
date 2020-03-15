import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Bar from '../Bar/Bar';

import { Container } from '@material-ui/core';
import {app} from '../../cfg';
import backGroundImageEr from '../../img/internal-background-er.jpg';
import backGroundImageItalia from '../../img/internal-background-er.jpg';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(${app === 'er' ? backGroundImageEr : backGroundImageItalia})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    overflow: 'scroll'
  }
}));

export default function InternalTmpl(props) {
  const classes = useStyles();
  const lang = props.lang;

  return <div className={classes.homeContainer}>
      <Bar lang={lang} />
        <Container fixed>
          { props.children }
        </Container>
      </div>
}
import React from 'react';
import {isMobile} from 'react-device-detect';
import { makeStyles } from '@material-ui/styles';
import Bar from '../Bar/Bar';

import { Container } from '@material-ui/core';
// TODO: differenziare ER e ITALIA?
import backGroundImage from '../../img/internal-background.jpg';
import backGroundVideo from '../../img/video-bg.mp4';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(${backGroundImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    overflow: 'scroll'
    
  },
  video: {
    background: '#000000',
    position: 'fixed',
    right: 0,
    bottom: 0,
    zIndex:-1,
    minWidth: '100%',
    minHeight: '100%'
  }
}));

export default function InternalTmpl(props) {
  const classes = useStyles();
  const lang = props.lang;

  if (isMobile){
    return <div className={classes.homeContainer}>
      <Bar lang={lang} />
        <Container fixed>
          { props.children }
        </Container>
      </div>
  } else {
    return (
      <div className={classes.darkBg}>
        <video autoPlay loop className={classes.video}>
          <source src={backGroundVideo} type="video/mp4" />
        </video>
        <Bar lang={lang} />
        <Container fixed>
          { props.children }
        </Container>
      </div>
    );
  }

  
}

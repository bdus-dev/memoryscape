import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/styles';
import { FormattedHTMLMessage } from 'react-intl';

import YouTube from 'react-youtube';

import Database from '../../services/Database';
import Results from '../Search/Results';

const useStyles = makeStyles(() => ({
  fabTheme: {
    borderRadius: '0 !important',
    padding: '0.5em',
    margin: '0.2em',
    fontSize: '0.7rem',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#7a1dcf',
      color: '#fff',
    },
  }
}));


export default function Record(props) {

  const classes = useStyles();


  const [result, setResult] = useState();
  const [viewVideo, setViewVideo] = useState();
  const history = useHistory();

  const clipId = props.id;

  useEffect( () => {
    Database.getOne(parseInt(clipId), result => {
      setResult(result);
    });
  }, [clipId]);
  
  if (!result){
    return <CircularProgress />
  }

  const item = result.core;
  // const geoD = result.geodata;

  return (
    <Box style={{ color: '#fff' }}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6} style={{ textAlign: 'center'}}>
          <h1>{item.tit.val}</h1>
          { !viewVideo && <img src={`https://img.youtube.com/vi/${item.videoid.val}/0.jpg`} alt={item.tit.val} onClick={ ()=> setViewVideo(true) }/> }
          { viewVideo && <YouTube videoId={item.videoid.val} onEnd={() => setViewVideo(false)} /> }
        </Grid>
      </Grid>


      <Grid container spacing={1} justify="center">
        <Grid item xs={2}>
          <Box my={5}>
            <h3><FormattedHTMLMessage id="app.clip.author" /></h3>
            { item.aut.val }
            <h3><FormattedHTMLMessage id="app.clip.place" /></h3>
            { item.luogo.val }
            <h3><FormattedHTMLMessage id="app.clip.year" /></h3>
            { item.anno.val }
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box my={5}>
            <h3><FormattedHTMLMessage id="app.clip.format" /></h3>
            { item.formato.val }
            <h3><FormattedHTMLMessage id="app.clip.duration" /></h3>
            { item.durata.val }
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box my={5}>
            { item.descr.val }
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center">
        <Grid item xs={8} style={{ textAlign: 'center'}}>
        <h3><FormattedHTMLMessage id="app.filterModal.themes" /></h3>
          {
            item.temi.val.split(';').map( (e, i) =>  {
              return <Fab key={i} variant="extended" className={classes.fabTheme} onClick={()=>history.push(`../search/?theme=${e.trim()}`)}>{e.trim()}</Fab>
            })
          }
        </Grid>
      </Grid>
      
      <Results qs={{ author: item.aut.val }} suppressEmpty={true} title="Clip dello stesso autore" />
    </Box>
  );
}
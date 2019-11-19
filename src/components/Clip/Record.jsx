import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import LabelIcon from '@material-ui/icons/Label';

import YouTube from 'react-youtube';

import Database from '../../services/Database';
import Results from '../Search/Results';




export default function Record(props) {

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
          <h2>{item.tit.val}</h2>
          { !viewVideo && <img src={`https://img.youtube.com/vi/${item.videoid.val}/0.jpg`} alt={item.tit.val} onClick={ ()=> setViewVideo(true) }/> }
          { viewVideo && <YouTube videoId={item.videoid.val} onEnd={() => setViewVideo(false)} /> }
        </Grid>
      </Grid>


      <Grid container spacing={1} justify="center">
        <Grid item xs={2}>
          <Box my={5}>
            <h3>Autore</h3>
            { item.aut.val }
            <h3>Luogo</h3>
            { item.luogo.val }
            <h3>Anno</h3>
            { item.anno.val }
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box my={5}>
            <h3>Formato</h3>
            { item.formato.val }
            <h3>Inventario</h3>
            { item.inv.val }
            <h3>Durata</h3>
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
          {
            item.temi.val.split(';').map( (e, i) =>  {
              return <Fab key={i} variant="extended" size='small' onClick={()=>history.push(`../search/?theme=${e.trim()}`)}><LabelIcon />{e.trim()}</Fab>
            })
          }
        </Grid>
      </Grid>
      
      <Results qs={{ author: item.aut.val }} suppressEmpty={true} title="Clip dello stesso autore" />
    </Box>
  );
}
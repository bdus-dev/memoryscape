import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import RoomOutlined from '@material-ui/icons/RoomOutlined';
import { makeStyles } from '@material-ui/styles';
import { FormattedHTMLMessage } from 'react-intl';
import YouTube from 'react-youtube';
import MetaTags from 'react-meta-tags';

import Results from '../Search/Results';
import Database from '../../services/Database';
import {col} from '../../cfg';

const useStyles = makeStyles(() => ({
  fabTheme: {
    borderRadius: '0 !important',
    padding: '0.5em',
    margin: '0.2em',
    fontSize: '0.7rem',
    textTransform: 'capitalize',
    height: '2.2rem',
    '&:hover': {
      backgroundColor: col,
      color: '#fff',
    },
  },
  button: {
    color: '#fff',
    textTransform: 'none',
    textAlign: 'left',
    padding: 0,
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold'
    }
  },
  videoWrapper: {
    height: 0,
    overflow: 'hidden',
    paddingBottom: '75%',
    paddingTop: '30px',
    position: 'relative',
  },
  iframe: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
}));

const Wkt2Arr = function(wkt){
  wkt = wkt.trim();
  wkt = wkt.replace("POINT(", '');
  wkt = wkt.replace(")", '');
  return wkt.split(' ').map(e=>Math.round(parseFloat(e) * 1000) / 1000);
};

export default function Record(props) {

  const classes = useStyles();


  const [result, setResult] = useState();
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
  const geoD = result.geodata[0];
  
  
  return (
    <Box style={{ color: '#fff' }}>
      <MetaTags>
        <meta property="og:title" content={`Memoryscapes: ${item.tit.val}`} />
        <meta property="og:description" content="Memoryscapes: la prima piattaforma online sul cinema privato in Italia" />
        <meta property="og:image" content={`https://img.youtube.com/vi/${item.videoid.val}/0.jpg`} />
        <meta property="og:url" content={window.location} />
        <title>Memoryscapes: {item.tit.val}</title>
      </MetaTags>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={6} style={{ textAlign: 'center'}}>
          <h1>{item.tit.val}</h1>
          <div className={classes.videoWrapper}>
            <YouTube 
              videoId={item.videoid.val} 
              className={classes.iframe} 
              onEnd={ (e)=>{
                e.target.seekTo(0);
                e.target.stopVideo();
              }}
              />
          </div>
          
        </Grid>
      </Grid>


      <Grid container spacing={1} justify="center">
        <Grid item xs={6} md={2}>
          <Box my={5}>

            <h3><FormattedHTMLMessage id="app.clip.author" /></h3>
            <Button className={classes.button} onClick={ ()=>{
              history.push(`../search/?author=${item.aut.val}`)
            }}>{ item.aut.val }</Button>
            
            <h3><FormattedHTMLMessage id="app.clip.place" /></h3>
            <Button className={classes.button} onClick={ ()=>{
              history.push(`../search/?places=${item.luogo.val}`)
            }}>{ item.luogo.val }</Button>
            
            <h3><FormattedHTMLMessage id="app.clip.inv" /></h3>
            { item.inv.val }

          </Box>
        </Grid>
        <Grid item xs={6} md={2}>
          <Box my={5}>
            <h3><FormattedHTMLMessage id="app.clip.format" /></h3>
            { item.formato.val }

            <h3><FormattedHTMLMessage id="app.clip.year" /></h3>
            { item.annoda.val }
            { item.annoda.val !== item.annoa.val ? `-${item.annoa.val}` : ''}

            {geoD && <React.Fragment><h3><FormattedHTMLMessage id="app.clip.map" /></h3>
            <Button className={classes.button} onClick={ ()=>{
              history.push(`../map/?center=${Wkt2Arr(geoD.geometry).join(",")}`)
            }}><RoomOutlined fontSize="small" /> </Button></React.Fragment>}
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box my={5}>
            { item.descr.val }
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center">
        <Grid item xs={8} style={{ textAlign: 'center'}}>
        <h3><FormattedHTMLMessage id="app.themes" /></h3>
          {
            item.temi.val.split(';').map( (e, i) =>  {
              return <Fab 
                  key={i} 
                  variant="extended" 
                  className={classes.fabTheme} 
                  onClick={()=>history.push(`../search/?themes=${e.trim()}`)}>
                    {e.trim()}
                  </Fab>
            })
          }
        </Grid>
      </Grid>

      <Box my={5} py={3} borderTop={1} borderColor="grey.500" textAlign="center">
      
      <Button className={classes.button} onClick={ ()=>{
              history.push('../search/')
            }}><FormattedHTMLMessage id="app.clip.back2archive" /></Button>
      </Box>
      <Results
            qs={{ places: item.luogo.val }} 
            exclude={item.id.val}
            suppressEmpty={true} 
            title={<FormattedHTMLMessage 
            id="app.clip.same_place" values={{ place: item.luogo.val }} />} />
    </Box>
  );
}
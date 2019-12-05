import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RoomOutlined from '@material-ui/icons/RoomOutlined';

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
    height: '2.2rem',
    '&:hover': {
      backgroundColor: '#7a1dcf',
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

const decadeFromYear = function (year){
  year = parseInt(year.slice(2));
  year = (year+1)/10;
  year = Math.ceil(year)*10;
  year = year-10;
  return year;
}


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
  decadeFromYear(item.anno.val);
  
  
  return (
    <Box style={{ color: '#fff' }}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={6} style={{ textAlign: 'center'}}>
          <h1>{item.tit.val}</h1>
          <div className={classes.videoWrapper}>
            <YouTube videoId={item.videoid.val} className={classes.iframe} />
          </div>
          
        </Grid>
      </Grid>


      <Grid container spacing={1} justify="center">
        <Grid item xs={6} md={2}>
          <Box my={5}>

            <h3><FormattedHTMLMessage id="app.clip.author" /></h3>
            <Button className={classes.button} onClick={ ()=>{
              history.push(`../search/?author=${item.aut.val}`)
            }}><SearchOutlinedIcon fontSize="small" /> { item.aut.val }</Button>
            
            <h3><FormattedHTMLMessage id="app.clip.place" /></h3>
            <Button className={classes.button} onClick={ ()=>{
              history.push(`../search/?places=${item.luogo.val}`)
            }}><SearchOutlinedIcon fontSize="small" /> { item.luogo.val }</Button>

          </Box>
        </Grid>
        <Grid item xs={6} md={2}>
          <Box my={5}>
            <h3><FormattedHTMLMessage id="app.clip.format" /></h3>
            { item.formato.val }

            <h3><FormattedHTMLMessage id="app.clip.year" /></h3>
            { item.anno.val }

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
        <h3><FormattedHTMLMessage id="app.filterModal.themes" /></h3>
          {
            item.temi.val.split(';').map( (e, i) =>  {
              return <Fab key={i} variant="extended" className={classes.fabTheme} onClick={()=>history.push(`../search/?theme=${e.trim()}`)}>{e.trim()}</Fab>
            })
          }
        </Grid>
      </Grid>
      
      <Results qs={{ decade: decadeFromYear(item.anno.val) }} suppressEmpty={true} title={<FormattedHTMLMessage id="app.clip.same_period" />} />
    </Box>
  );
}
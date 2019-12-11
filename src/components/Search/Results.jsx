import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoomOutlined from '@material-ui/icons/RoomOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Pagination from './Pagination';
import Database from '../../services/Database';

const useStyles = makeStyles({
  GridListTitle: {
    cursor: 'pointer',
  },
  GridListTileBar: {
    background: 'rgba(123,30,207, .5)',
    height: '100px'
  },
  GridListTileBarTitle: {
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: '.9rem'
  },
  GridListTileBarSubtitle: {
    lineHeight: 1.5
  },
  IconButton: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default function Results(props) {
  const [result, setResult] = useState();

  const classes = useStyles();
  const history = useHistory();

  const qs = props.qs;
  const suppressEmpty = props.suppressEmpty;
  const title = props.title;
  const exclude = props.exclude;

  const cols = useMediaQuery('(min-width:960px)') ? 3 : 1;

  useEffect(() => {
    // Ricerca per decade
    if (qs.decade) {
      Database.getDecade(parseInt(qs.decade), qs.page, result => {
        setResult(result);
      });
    // Ricerca luogo || temi
    } else if (qs.places || qs.themes) {
      let p = {};

      if (qs.places){
        qs.places.split(",").map( (e, i) => {
          p[`p${i}`] = {
            'f': 'hm__ms:luogo',
            'v': e,
            'o': 'LIKE',
            'c': 'AND'
          }
          return false;
        })
      }
      if (qs.themes){
        qs.themes.split(",").map( (e, i) => {
          p[`p${i}`] = {
            'f': 'hm__ms:temi',
            'v': e,
            'o': 'LIKE',
            'c': 'OR'
          }
          return false;
        })
      }
      Database.getAdv(p, 1, result => {
        setResult(result);
      });
    
    // Ricerca per autore
    } else if (qs.author) {
      Database.getSimple('hm__ms:aut', qs.author, true, 1, result => {
        setResult(result);
      });
    // Ricerca tutto!
    } else {
      Database.getAll(qs.page, result => {
        setResult(result);
      });
    }

  }, [qs]);

  if (!result) {
    return <CircularProgress />;
  }
  
  if (result.head.total_rows === 0) {
    // TODO: grafica messaggio d'errore!!!
    
    if (suppressEmpty){
      return null;
    }
    return (
      <Container>
        <p style={{ color: '#fff', fontSize: '2rem' }}>
          Nessun risultato trovato!
        </p>
      </Container>
    );
  }

  return (
    <Box container="div">
      { title && <h2>{title}</h2>}
      {!suppressEmpty && <Pagination head={result.head} qs={qs} /> }
      <GridList cellHeight={280} cols={cols} spacing={40}>
        { 
        result.records.map((row, k) => {
          if (exclude && exclude === row.id){
            return null
          } else {
           return ( <GridListTile key={k} className={classes.GridListTitle} onClick={ ()=> {
            history.push(`../clip/${row.id}`);
            window.scrollTo(0, 0);
          }}>
            <img
              src={`https://img.youtube.com/vi/${row.videoid}/0.jpg`}
              alt={row.tit}
            />
            <GridListTileBar
              classes={{
                root: classes.GridListTileBar,
                title: classes.GridListTileBarTitle,
                subtitle: classes.GridListTileBarSubtitle,
              }}
              title={(
                <span>
                  {row.tit}{" "}
                  <Box component="span" mx={2}> | </Box>
                  {" "}
                  <strong>{row.annoda}{row.annoda !== row.annoa ? `-${row.annoa}` : ''}</strong>
                </span>
              )}
              subtitle={(
                <span><RoomOutlined fontSize="small" /> {row.luogo}
                <br /> 
                <LocalOfferOutlinedIcon fontSize="small" /> {row.temi}</span>
                )}
                
              actionIcon={(
                <IconButton
                  onClick={ ()=> {
                    history.push(`../clip/${row.id}`);
                    window.scrollTo(0, 0);
                  }}
                  aria-label={`info about ${row.tit}`}
                  classes={{ root: classes.IconButton }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              )}
            />
          </GridListTile>
        )}})
      }
      </GridList>
    </Box>
  );
}

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

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Pagination from './Pagination';
import Database from '../../services/Database';

const useStyles = makeStyles({
  GridListTileBar: {
    background: 'rgba(123,30,207, .5)',
  },
  GridListTileBarTitle: {
    textTransform: 'uppercase',
    fontWeight: '900',
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

  const cols = useMediaQuery('(min-width:960px)') ? 3 : 1;

  useEffect(() => {
    // Ricerca per decade
    if (qs.decade) {
      Database.getDecade(parseInt(qs.decade), qs.page, result => {
        setResult(result);
      });
    // Ricerca year_start || year__end || luogo || temi
    } else if (qs.year_start || qs.year_end || qs.places || qs.themes) {
      let p = {};

      if (qs.year_start){
        p.ys = {
          'f': 'hm__ms:anno',
          'v': qs.year_start,
          'o': '>=',
          'c': 'AND'
        };
      }
      if (qs.year_end){
        p.ye = {
          'f': 'hm__ms:anno',
          'v': qs.year_end,
          'o': '<=',
          'c': 'AND'
        };
      }
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
            'c': 'AND'
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
    <Container>
      { title && <h2>{title}</h2>}
      {!suppressEmpty && <Pagination head={result.head} qs={qs} /> }
      <GridList cellHeight={280} cols={cols} spacing={40}>
        {result.records.map((row, k) => (
          <GridListTile key={k}>
            <img
              src={`https://img.youtube.com/vi/${row.videoid}/0.jpg`}
              alt={row.tit}
            />
            <GridListTileBar
              classes={{
                root: classes.GridListTileBar,
                title: classes.GridListTileBarTitle,
              }}
              title={(
                <span>
                  {row.tit}{" "}
                  <Box component="span" mx={2}>
                    |
                  </Box>{" "}
                  <strong>{row.anno}</strong>
                </span>
              )}
              subtitle={<span>di: {row.aut}</span>}
              actionIcon={(
                <IconButton
                  onClick={ ()=> history.push(`../clip/${row.id}`)}
                  aria-label={`info about ${row.tit}`}
                  classes={{ root: classes.IconButton }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}
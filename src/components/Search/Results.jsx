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
import {col} from '../../cfg';

const useStyles = makeStyles({
  GridListTitle: {
    cursor: 'pointer',
  },
  GridListTileBar: {
    background: `${col}7f`,
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

// https://stackoverflow.com/a/12646864/586449
// const shuffleArray = function (result) {
//   for (let i = result.records.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [result.records[i], result.records[j]] = [result.records[j], result.records[i]];
//   }
//   return result;
// }

export default function Results(props) {
  const [result, setResult] = useState(false);
  const [opacity, makeOpaque] = useState(1);

  const classes = useStyles();
  const history = useHistory();

  const qs = props.qs;
  const suppressEmpty = props.suppressEmpty;
  const title = props.title;
  const exclude = props.exclude;

  const cols = useMediaQuery('(min-width:960px)') ? 3 : 1;

  useEffect(() => {
    makeOpaque(.3);
    // Ricerca per decade
    if (qs.decade) {
      Database.getDecade(parseInt(qs.decade), qs.page, result => {
        setResult(result);
        makeOpaque(1);
      });
    // Ricerca luogo || temi
    } else if (qs.places || qs.themes) {
      Database.getByPlacesAndThemse(qs.places, qs.themes, qs.page, result => {
        setResult(result);
        makeOpaque(1);
      });
    
    // Ricerca per autore
    } else if (qs.author) {
      Database.getByAuthor(qs.author, qs.page, result => {
        setResult(result);
        makeOpaque(1);
      });
    // Ricerca tutto!
    } else {
      Database.getAll(qs.page, result => {
        setResult(result);
        makeOpaque(1);
      });
    }

  }, [qs]);

  if (!result) {
    return <CircularProgress />;
  }

  if (
    result.head.total_rows === 0 
    || 
    (result.head.total_rows === 1 && exclude)
    ) {

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
    <Box container="div" style={{ opacity: opacity}}>
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
            if (document.getElementsByClassName('MuiGrid-root').length > 0){
              document.getElementsByClassName('MuiGrid-root')[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
            }
          }}>
            <img
              src={row.vimeoimg}
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
      {!suppressEmpty  && result.head.total_pages > 1 && <Pagination head={result.head} qs={qs} /> }
    </Box>
  );
}

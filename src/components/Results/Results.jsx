import React, { useState, useEffect} from 'react';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

import Database from '../../services/Database';


const useStyles = makeStyles({
    GridListTileBar: {
        background: 'rgba(123,30,207, .5)'
    },
    GridListTileBarTitle: {
        textTransform: 'uppercase'
    },
    IconButton: {
      color: 'rgba(255, 255, 255, 0.8)'
    },
  });




export default function Results (props) {

    const [result, setResult] = useState();

    const page = props.page ? parseInt(props.page) : 1;
    const type = props.type ? props.type : 'all';

    const classes = useStyles();


    useEffect( () => {

        if (type === 'all'){
            Database.getAll(page, result => {
                setResult(result);
            });
        }
        // else if: altri tipi di query...
    });

    if (!result){
        return <CircularProgress />
    }

    return (
        <Container>
            <GridList cellHeight={280}  cols={3} spacing={40}>
                {result.records.map( (row, k) => (
                    
                    <GridListTile key={k}>
                    <img src={`https://img.youtube.com/vi/${row.videoid}/0.jpg`} alt={row.tit} />
                    <GridListTileBar
                        classes={{
                            root: classes.GridListTileBar,
                            title:classes.GridListTileBarTitle
                        }}
                        title={<span>{row.tit} | <strong>{row.anno}</strong></span>}
                        subtitle={<span>di: {row.aut}</span>}
                        actionIcon={
                        <IconButton aria-label={`info about ${row.tit}`} classes={{ root: classes.IconButton }}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                        }
                    />
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    );  
}
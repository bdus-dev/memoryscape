import React, { useState, useEffect} from 'react';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CircularProgress from '@material-ui/core/CircularProgress';




import Database from '../../services/Database';


export default function Results (props) {

    const [result, setResult] = useState();

    const page = props.page ? parseInt(props.page) : 1;
    const type = props.type ? props.type : 'all';

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
                        style={{
                            background: "rgba('#7B1ECF', .5)"
                        }}
                        title={row.tit}
                        subtitle={<span>di: {row.aut}</span>}
                        actionIcon={
                        <IconButton aria-label={`info about ${row.tit}`}>
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    );  
}
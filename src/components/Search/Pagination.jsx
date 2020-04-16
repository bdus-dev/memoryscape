import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';

import qString from 'qs';

import FilterApplied from './FilterApplied';

import {col} from '../../cfg';


const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: col,
      '&:not(:last-child)': {
        borderRight: '1px solid #fff'
      },
      "&:hover":{
        backgroundColor: col
      }
    }
  }));

export default function Pagination (props) {

    const classes = useStyles();


    const history = useHistory();

    const go2page = page => history.push(page);

    const qs = props.qs;
    const head = props.head;

    const recTotal = parseInt(head.total_rows);
    const recShownStart = parseInt(head.page)*30-30+1;
    const recShownEnd = recShownStart + parseInt(head.no_records_shown)-1;
    const pageCurr = parseInt(head.page);
    const pageTot = parseInt(head.total_pages);
    let prevPageLink = false;
    if (pageCurr - 1 > 0){
        let qsCopy = Object.assign({}, qs);
        qsCopy.page = pageCurr - 1;
        prevPageLink = `./?${qString.stringify(qsCopy)}`;
    }
    let nextPageLink = false;
    if (pageCurr + 1 <= pageTot){
        let qsCopy = Object.assign({}, qs);
        qsCopy.page = pageCurr + 1;
        nextPageLink = `./?${qString.stringify(qsCopy)}`;
    }
    let firstPageLink = false;
    if (pageCurr - 1 > 1){
        let qsCopy = Object.assign({}, qs);
        qsCopy.page = 1;
        firstPageLink = `./?${qString.stringify(qsCopy)}`;
    }
    let lastPageLink = false;
    if (pageCurr + 2 <= pageTot){
        let qsCopy = Object.assign({}, qs);
        qsCopy.page = pageTot;
        lastPageLink = `./?${qString.stringify(qsCopy)}`;
    }

    


    return (
        <Box p={1} my={2} style={{background: 'rgba(255, 255, 255, .5)'}}>
            
            <Grid
                justify="space-between"
                container 
                alignItems="center"
                >
                <Grid item>
                    <FormattedMessage id="app.pagination.recap" values={{start: recShownStart, end: recShownEnd, tot: recTotal}}/>
                    <FilterApplied qs={qs} />
                </Grid>

                <Grid item>
                    <ButtonGroup 
                        size="small" 
                        aria-label="small outlined button group"
                        color="secondary"
                        variant="contained"
                        style={{ background: '#fff'}}
                        >
                        { firstPageLink && <Button className={classes.button} onClick={()=>go2page(firstPageLink)}><FirstPageIcon /></Button> }
                        { prevPageLink  && <Button className={classes.button} onClick={()=>go2page(prevPageLink)}><KeyboardArrowLeft /></Button> }
                        { (firstPageLink || prevPageLink || nextPageLink || lastPageLink) && <Button className={classes.button} disabled><FormattedMessage id="app.pagination.page" values={{pageNo: pageCurr}}/> </Button>}
                        { nextPageLink  && <Button className={classes.button} onClick={()=>go2page(nextPageLink)}><KeyboardArrowRight /></Button>}
                        { lastPageLink && <Button className={classes.button} onClick={()=>go2page(lastPageLink)}><LastPageIcon /></Button>}
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Box>
    );
}


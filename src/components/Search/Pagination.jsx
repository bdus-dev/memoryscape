import React from 'react';

import Box from '@material-ui/core/Box';

import qString from 'qs';


export default function Pagination (props) {

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
        <Box style={{padding: '3rem', background: '#fff'}}>
            <p>recTotal: {recTotal}</p>
            <p>recShownStart: {recShownStart}</p>
            <p>recShownEnd: {recShownEnd}</p>
            <p>pageCurr: {pageCurr}</p>
            <p>pageTot: {pageTot}</p>
            <p>prevPageLink: {prevPageLink}</p>
            <p>nextPageLink: {nextPageLink}</p>
            <p>firstPageLink: {firstPageLink}</p>
            <p>lastPageLink: {lastPageLink}</p>
        </Box>
    );
}

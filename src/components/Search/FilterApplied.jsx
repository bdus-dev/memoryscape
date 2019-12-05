import React from 'react';
import Box from '@material-ui/core/Box';

import { FormattedHTMLMessage } from 'react-intl';


export default function FilterApplied (props) {

    const qs = props.qs;

    if (!qs.themes && !qs.author && !qs.places){
        return null;
    }
    return (
        <Box my={2}>
            { qs.themes && <Box component="span" mr={1}><FormattedHTMLMessage id="app.themes" />: {qs.themes}</Box>}
            { qs.author && <Box component="span" mr={1}><FormattedHTMLMessage id="app.clip.author" />: {qs.author}</Box>}
            { qs.places && <Box component="span" mr={1}><FormattedHTMLMessage id="app.clip.place" />: {qs.places}</Box>}
        </Box>
    );
}


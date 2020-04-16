import React from 'react';
import Box from '@material-ui/core/Box';

import { FormattedMessage } from 'react-intl';


export default function FilterApplied (props) {

    const qs = props.qs;

    let filters = [];

    

    if (qs.themes) {
        filters = filters.concat(qs.themes.split(','));
    }
    if (qs.author) {
        filters = filters.concat(qs.author.split(','));
    }
    if (qs.places) {
        filters = filters.concat(qs.places.split(','));
    }

    if (filters.length === 0){
        return null;
    }

    return (
        <Box ml={1} component="span">
            <FormattedMessage id="app.for" /> <em>{filters.join(', ')}</em>
        </Box>
    );
}


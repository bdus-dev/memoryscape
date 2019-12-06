import React from 'react';
import Box from '@material-ui/core/Box';
import InternalTmpl from '../Templates/InternalTmpl';

import Record from './Record';

export default function Clip(props) {

  const clipId = props.match.params.id;
  const lang = props.match.params.lang;

  return (
    <InternalTmpl lang={lang}>
      <Box pt='5rem'>
        <Record id={clipId}/>
      </Box>
    </InternalTmpl>
  );
}

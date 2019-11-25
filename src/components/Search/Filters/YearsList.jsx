import React from 'react';

import { FormattedHTMLMessage } from 'react-intl';
import { Box } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';


export default function YearsList() {
  const handleDateChange = () => console.log('bu');
  

  return (
    <div>
      <h2>
        <FormattedHTMLMessage id="app.filterModal.year" />
      </h2>
      <Box>
{/*         <DatePicker
          views={['year']}
          onChange={handleDateChange}
        /> */}
      </Box>
    </div>
  );
}

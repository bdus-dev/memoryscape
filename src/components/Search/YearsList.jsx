import React from 'react';


import { FormattedHTMLMessage } from 'react-intl';


export default function YearsList(props) {

  const onYearSelect = props.onYearSelect;

  return (
    <React.Fragment>
      <h2>
        <FormattedHTMLMessage id="app.filterModal.year" />
      </h2>
      
    </React.Fragment>
  );
}

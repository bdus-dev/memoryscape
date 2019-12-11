import React from 'react';
import { Container } from '@material-ui/core';
import Bar from '../Bar/Bar';

import './BlackTmpl.scss';

export default function BlackTmpl(props) {
  const lang = props.lang;

  return (
    <div className="blackBg">
      <Bar lang={lang} />
      <Container className="mw-700">
        { props.children }
      </Container>
    </div>
  );
  
}

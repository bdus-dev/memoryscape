import React, { useState } from "react";

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Database from '../../../services/Database'

export default function GetVocabulary (props) {

  const [result, setResult] = useState();
  
  const loadResult = () => {
    Database.getVocabulary('temi-ms', result => {
      setResult(JSON.stringify(result, null, 2));
    });
  };

  return (
    <Container>
      <h4>Database.getVocabulary('temi-ms', callback)</h4>
      <Button variant="contained" color="primary" onClick={()=>loadResult()}>
        Run!
      </Button>
      <pre>{ result }</pre>
      <hr />
    </Container>
  );  
}
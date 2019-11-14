import React, { useState } from "react";

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Database from '../../../services/Database'

export default function GetSimple (props) {

  const [result, setResult] = useState();
  
  const loadResult = () => {
    Database.getSimple('hm__ms:anno', '1954', true, 1, result => {
      setResult(JSON.stringify(result, null, 2));
    });
  };

  return (
    <Container>
      <h4>Database.getSimple('hm__ms:anno', '1954', true, 1, callback)</h4>
      <Button variant="contained" color="primary" onClick={()=>loadResult()}>
        Run!
      </Button>
      <pre>{ result }</pre>
      <hr />
    </Container>
  );  
}
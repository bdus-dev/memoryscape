import React, { useState } from "react";

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Database from '../../../services/Database'

export default function GetByEncodedSql (props) {

  const [result, setResult] = useState();
  
  const loadResult = () => {
    Database.getByEncodedSql('YGFubm9gPScxOTU0JyBPUkRFUiBCWSBgaG1fX21zYC5gaW52YCBhc2Mg', 
    1, result => {
      setResult(JSON.stringify(result, null, 2));
    });
  };

  return (
    <Container>
      <h4>Database.getByEncodedSql('YGFubm9gPScxOTU0JyBPUkRFUiBCWSBgaG1fX21zYC5gaW52YCBhc2Mg', 1, callback)</h4>
      <Button variant="contained" color="primary" onClick={()=>loadResult()}>
        Run!
      </Button>
      <pre>{ result }</pre>
      <hr />
    </Container>
  );  
}
import React, { useState, useEffect } from "react";

import Container from '@material-ui/core/Container';

import Database from '../../services/Database'



export default function Unused () {

  const [themes, setThemes] = useState();
  const [usedThemes, setUsedThemes] = useState();


  useEffect(() => {
    Database.getVocabulary('temi-ms', result => {
      setThemes(result);

      Database._getData(
        'ms?verb=search&type=encoded',
        {
          "fields[temi]": "Temi",
          "limit_start": "0",
          "limit_end": "1500",
          "q_encoded": btoa( " temi is not null AND temi != ''" )
        },
        result => {
          setUsedThemes( result );
        }
      );    
    });
  }, []);

  

  if (!themes || !usedThemes){
    return <p>Hold on... Fetching the data from the database...</p>
  }

  let utlist = [];
  usedThemes.records.forEach(e => {
    e.temi.split(';').forEach(t => {
      t = t.trim();
      if (!utlist.includes(t)){
        utlist.push(t)
      }
    });
  });

  const unused = themes.map(t => {
    if (!utlist.includes(t)){
      return t;
    } else {
      return false;
    }
  }).filter(Boolean);


  
  return (
    <Container>
      <p>Valori del menu temi-ms non usati</p>
      <ol>
        { unused.map( (e, i) => {
          return <li key={i}>{e}</li>
        })}
      </ol>
    </Container>
  );  
}
import React from "react";

import Container from '@material-ui/core/Container';

import Inspect from './DB/Inspect'
import GetStr from './DB/GetStr'
import GetOne from './DB/GetOne'
import GetAll from './DB/GetAll'
import GetSimple from './DB/GetSimple'
import GetAdv from './DB/GetAdv'
import GetUniqueVal from './DB/GetUniqueVal'
import GetByEncodedSql from './DB/GetByEncodedSql'
import Decades from './DB/Decades'
import GetVocabulary from './DB/GetVocabulary'

export default function TestDB (props) {

  return (
    <Container>
      <Inspect />
      <GetStr />
      <GetOne />
      <GetAll />
      <GetSimple />
      <GetAdv />
      <GetUniqueVal />
      <GetByEncodedSql />
      <Decades />
      <GetVocabulary />
    </Container>
  );  
}
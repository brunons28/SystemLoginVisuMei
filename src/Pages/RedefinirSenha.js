import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import Redefine from './components/RedefinePassword';


function RedefinirSenha() {
  return (
    <div className="App">
            <Redefine/>
    </div>
  );
}

export default RedefinirSenha;
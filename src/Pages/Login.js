import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import RedefinirSenha from './RedefinirSenha';


function Login() {
  return (
    <div className="App">
      
      <Row>
        <Col ><RedefinirSenha /></Col>
        
        <Col ><RightSide /></Col>
      </Row>
    </div>
  );
}

export default Login;
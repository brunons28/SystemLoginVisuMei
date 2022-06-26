import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import RightSide from "./components/RightSide";
import Register from './components/RegistrationSide';



function Registration() {
  return (
    <div className="App">
      
      <Row>
        <Col ><Register/></Col>
        
        <Col ><RightSide /></Col>
      </Row>
    </div>
  );
}

export default Registration;
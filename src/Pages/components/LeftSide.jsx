import React from 'react';
import {Form, Button} from 'react-bootstrap';
import Logo from '../images/Logo.svg'

const LeftSide = () => {
 return (
     <div>
        <img src={Logo} style={{width: '20vh', position: 'Relative', left: '30px', top: '30px', cursor: 'pointer'}} />
         <br/>
         <br/>
         <br/>
         <Form style={{width:"80%", height:"550px", marginLeft:"10%", marginTop:""}}>
             <h1 style={{marginLeft:"28%", marginTop:"10%", color:"#849CFF"}}>Bem-Vindo</h1>
             <Form.Group style={{marginLeft:"70px", marginTop:"10%" }}>
                 <Form.Label>Email</Form.Label>
                 <Form.Control style={{width:"80%"}} type="email" placeholder="Enter your email" />
             </Form.Group>
             <Form.Group style={{marginLeft:"70px", marginTop:"25px" }}>
                 <Form.Label>Senha</Form.Label>
                <Form.Control style={{width:"80%"}} type="password" placeholder="Enter your password" />
                 <span style={{fontSize:"12px", color:"#415DCC", cursor: "pointer"}}>Esqueci Minha Senha</span>
             </Form.Group>
             <Button style={{marginLeft:"96px", marginTop:"45px", width:"60%", backgroundColor:"#849CFF", borderColor:"#849CFF" }} type="submit">Sing In</Button>
             <div style={{marginLeft:"158px", marginTop:"15px"}} >
                <p style={{fontSize:"12px"}}> Ainda nao tem conta?    <span style={{color:"#415DCC", cursor: "pointer"}}>Cadastre-se</span></p>
                <p style={{fontSize:"20px", marginLeft:"83px"}}> ou</p>
             </div>
         </Form>
     </div>
 )
}

export default LeftSide;
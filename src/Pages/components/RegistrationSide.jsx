import React from 'react';
import {Form, Button} from 'react-bootstrap';
import Logo from '../images/Logo.svg'
import PoliticaDePrivacidade from "./PoliticaDePrivacidade";

const Registration = () => {

    const [modalShow, setModalShow] = React.useState(false);
    
 return (
     <div>
        <img src={Logo} style={{width: '20vh', position: 'Relative', left: '30px', top: '30px', cursor: 'pointer'}} />
         <br/>
         <br/>
         <br/>
         <Form style={{width:"80%", height:"550px", marginLeft:"10%", marginTop:""}}>
             <h1 style={{marginLeft:"28%", marginTop:"10%", color:"#849CFF"}}>Registre-se</h1>
             <Form.Group style={{marginLeft:"70px", marginTop:"5%" }}>
                 <Form.Label>Nome</Form.Label>
                 <Form.Control style={{width:"80%"}} type="text" placeholder="Enter your Name" />
             </Form.Group>

             <Form.Group style={{marginLeft:"70px", marginTop:"5%" }}>
                 <Form.Label>Email</Form.Label>
                 <Form.Control style={{width:"80%"}} type="email" placeholder="Enter your email" />
             </Form.Group>
             
             <Form.Group style={{marginLeft:"70px", marginTop:"25px" }}>
                 <Form.Label>Senha</Form.Label>
                <Form.Control style={{width:"80%"}} type="password" placeholder="Enter your password" />
             </Form.Group>


             <Button style={{marginLeft:"96px", marginTop:"55px", width:"60%", backgroundColor:"#849CFF", borderColor:"#849CFF" }} type="submit">Sing Up</Button>
             <div style={{marginLeft:"10px", marginTop:"15px", width:"100%"}} >
                <p style={{fontSize:"12px"}}>Ao se registrar, você confirma que aceita os    <span style={{color:"#415DCC", cursor: "pointer"}}>Termos de Uso</span> e as <span  variant="primary" onClick={() => setModalShow(true)} style={{color:"#415DCC", cursor: "pointer"}}>Politicas de Privacidade</span> da VisuMEI.</p>
             </div>
         </Form>

         

         <PoliticaDePrivacidade show={modalShow} onHide={() => setModalShow(false)} />

     </div>
 )
}

export default Registration;
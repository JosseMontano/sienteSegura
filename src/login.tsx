import { useState } from "react";
import styled from "styled-components";
import { db } from "./config/firebase";


function Login() {
  return (
        <Container_son>
          <Conatiner_center>
          <h3>AURORA</h3>
          <p>Registrate en nuestra pagina</p>
        <Imputs>
          <input type="text" id="username"/>
        </Imputs>
          
          <label htmlFor="username">Nombre de usuario</label>
        
          <Imputs>
          <input type="password" id="username"/>
          </Imputs>
          <label htmlFor="password">Contraseña</label>
          <label htmlFor="password-confirmed">Confirma tu contraseña</label>

        <div>
            <Buttons>Registrar</Buttons>
        </div>

        <Register>
          <p>Ya te registraste → </p>
          <Buttons>Iniciar Sension</Buttons>
        </Register>
        </Conatiner_center>   
      </Container_son>
  )
}

export default Login
const Container_son = styled.div`
background-color: #fff;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const Conatiner_center=styled.div`
height: 350px;
width: 480px;
text-align: center;
font-family:Ysabeau Office;
background-color: pink;
`;
const Imputs=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
margin-top:10px;
`;
const Buttons=styled.button`
margin-top: 10px;
border-radius: 20px;
height: 30px;
width: 100px;
`;
const Register=styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: row;
`;

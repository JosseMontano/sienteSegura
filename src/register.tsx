import React from 'react'
import styled from 'styled-components';

function Register() {
  return (
        <Container_son>
          <Conatiner_center>
          <h3>REGISTRO</h3>
          <p>Aurora te apoya en los momentos dificiles</p>
        <Imputs>
          <input type="text" id="username"/>
        </Imputs>
          
          <label htmlFor="username">Nombre de usuario</label>
        
          <Imputs>
          <input type="password" id="username"/>
          </Imputs>
          <label htmlFor="password">Contraseña</label>
          

          <Imputs>
          <input type="confirm-password" id="username"/>
          </Imputs>
          <label htmlFor="password-confirm">Confirmar contraseña</label>

        <div>
            <Buttons>Registrarse</Buttons>
        </div>

        <Registro>
          <p>Ya estas registrado → </p>
          <Buttons>Iniciar Sesion</Buttons>
        </Registro>
        </Conatiner_center>   
      </Container_son>
  )
}

export default Register

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
const Registro = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: row;
`;
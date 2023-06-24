import React from 'react'
import styled from 'styled-components';

function Register() {
  return (
        <Container_son>
          <Conatiner_center>
          <h3>AURORA</h3>
          <p>Bienvenidos a Aurora</p>
        <Imputs>
          <input type="text" id="username"/>
        </Imputs>
          
          <label htmlFor="username">Nombre de usuario</label>
        
          <Imputs>
          <input type="password" id="username"/>
          </Imputs>
          <label htmlFor="password">Contraseña</label>

        <div>
            <Buttons>Iniciar Sesion</Buttons>
        </div>

        <Registro>
          <p>Aun no tienes una cuenta? → </p>
          <Buttons>Registrate</Buttons>
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
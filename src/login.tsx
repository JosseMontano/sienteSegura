import { useState } from "react";
import styled from "styled-components";
import { db } from "./config/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

function Login() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const obj = {
        nombre: nombre,
        edad: edad,
      };
      //Add document to Firestore with an auto-generated Id
     

      // Limpiar los campos después de enviar el formulario
      setNombre("");
      setEdad("");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  return (
    <Container_father>
      <Container_son>
        <Conatiner_center>
          <h3>LOGIN</h3>
          <p>Bienvenidos a Aurora</p>

          <div>
            <input type="text" id="username" />
            <label htmlFor="username">Nombre de usuario</label>

            <input type="password" id="username" />
            <label htmlFor="password">Contraseña</label>
          </div>

          <div>
            <button>Iniciar Sesion</button>
          </div>

          <div>
            <p>Aun no tienes una cuenta? → </p>
            <button>Registrate</button>
          </div>
        </Conatiner_center>
      </Container_son>
    </Container_father>
  );
}

export default Login;
const Container_father = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  width: 100%;
  display: flex;
`;
const Container_son = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Conatiner_center = styled.form``;

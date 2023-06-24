import { useState } from "react";
import ImgRobot from "./assets/robot.png";

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleShowChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="App">
      <div className="imagePrincipal">
        {!showChat && (
          <div className="containerChat">
            <div className="iconoChat" onClick={handleShowChat}>
              <img src={ImgRobot} alt="" />
            </div>
          </div>
        )}

        {showChat && (
          <div className="containerContent">
            <div>
              <p onClick={handleShowChat}>X</p>
              <h2>Chatea con nosotros</h2>
              <div>
                <p>Derecho1</p>
              </div>
              <div>
                <p>Derecho2</p>
              </div>
              <div>
                <p>Derecho3</p>
              </div>
            </div>
          </div>
        )}

        <div className="nabvarPricipal">
          <ul className="menu">
            <li>Inicio</li>
            <li>Informacion</li>
            <li>¿Como Ayudar?</li>
            <li>Contacto</li>
            <li>Encuesta</li>
            <li>Iniciar Sesion</li>
          </ul>
        </div>

        <div className="mensajePrincipal">
          <h2>BIENVENIDO A</h2>
          <h1>AURORA</h1>
          <div className="mensaje">
            <p>
              "No estás sola en esta lucha. Hay una comunidad de mujeres fuertes <br/>
              y solidarias dispuestas a apoyarte y acompañarte en tu camino<br/>
              hacia la sanación y la recuperación."
            </p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="btnDenuncia">
          <button>DENUNCIA AQUI</button>
        </div>
      </div>
    </div>
  );
}

export default App;

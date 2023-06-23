import { useState } from "react";
import ImgRobot from "./assets/robot.png";
function App() {
  const [showChat, setShowChat] = useState(false);

  const handleShowChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="App">
      <div>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
        <h2>hola qu tal</h2>
      </div>

      <div className="containerChat">
        <div className="iconoChat" onClick={handleShowChat}>
          <img src={ImgRobot} alt="" />
        </div>
      </div>

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
    </div>
  );
}

export default App;

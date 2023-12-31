import { useState } from "react";
import ImgRobot from "./assets/robot.png";
import NavbarComponent from "./components/navbar";

interface QuestionsType {
  question: string;
  response: string;
}

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleShowChat = () => {
    setShowChat(!showChat);
  };

  //======== CHAT ========

  const [responseQuestion, setResponseQuestion] = useState("");

  const questions: QuestionsType[] = [
    {
      question: "¿Que es la violencia?",
      response:
        "La violencia es un concepto amplio y complejo que se refiere a la acción o comportamiento que causa daño, sufrimiento, lesiones físicas o psicológicas, o incluso la muerte, hacia otras personas o hacia uno mismo. Es un acto intencional que implica el uso de la fuerza, la coacción o la intimidación para ejercer dominio, control o poder sobre otra persona.",
    },
    {
      question: "¿Que es la violencia contra la mujer?",
      response:
        "Según la Ley No 348 “Ley integral para garantizar a las mujeres un vida libre de violencia” conceptualiza la violencia contra la mujer como cualquier acción o conducta, por el hecho de ser mujer, que cause muerte, daño o sufrimiento físico, sexual o psicológico a la mujer, puede ocurrir en el ámbito privado como en el ámbito público",
    },
    {
      question: "¿Ques es la violencia Mediática?",
      response:
        "Es aquella producida por los medios masivos de comunicación a través de publicaciones, difusión de mensajes e imágenes, que discriminan, deshonran, humillan a las mujeres. Por ejemplo, difundir imágenes de mujeres en grupos de whatsapp.",
    },
  ];

  const handleChangeResponse = (response: string) => {
    setResponseQuestion(response);
  };

  return (
    <div className="App">
      <div className="imagePrincipal">
        <NavbarComponent />

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

        <div className="mensajePrincipal">
          <h2>BIENVENIDO A</h2>
          <h1>AURORA</h1>
          <div className="mensaje">
            <p>
              "No estás sola en esta lucha. Hay una comunidad de mujeres fuertes{" "}
              <br />
              y solidarias dispuestas a apoyarte y acompañarte en tu camino
              <br />
              hacia la sanación y la recuperación."
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="btnDenuncia">
          <button>DENUNCIA AQUI</button>
        </div>
      </div>

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
            <div className="container_header">
              <div className="title">
                <h2>Chatea con nosotros</h2>
              </div>
              <div className="close">
                <p onClick={handleShowChat}>X</p>
              </div>
            </div>

            <div className="containerQuestions">
              {questions.map((v) => (
                <div
                  className="questionChat"
                  onClick={() => handleChangeResponse(v.response)}
                >
                  <p>{v.question}</p>
                </div>
              ))}
            </div>

            {responseQuestion && (
              <div className="containerResponse">{responseQuestion}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

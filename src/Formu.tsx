import React, { useState } from "react";
import "./Formu.css";
import LabelComponent from "./components/formQuiz/label";
import { useNavigate } from "react-router";
import NavbarComponent from "./components/navbar";

interface VecLabelType {
  id: number;
  name: string;
  value: number;
  response: string;
}

const Formu: React.FC = () => {
  const navigate = useNavigate();
  const [respuestas, setRespuestas] = useState<string[]>([]);

  const handleChange = (preguntaIndex: number, respuestaIndex: number) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaIndex] = `Respuesta ${respuestaIndex + 1}`;
    setRespuestas(nuevasRespuestas);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(respuestas);
    navigate("/Formu2");
  };

  const vecLabel: VecLabelType[] = [
    {
      id: 1,
      name: "respuesta",
      value: 0,
      response: "Nunca",
    },
    {
      id: 2,
      name: "respuesta",
      value: 1,
      response: "En ocasiones",
    },
    {
      id: 3,
      name: "respuesta",
      value: 2,
      response: "Casi siempre",
    },
  ];

  return (
    <>
      <NavbarComponent />
      <div className="container-formulario">
        <h1 className="Title-Form1">Cuestionario</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-pregunta1">
            <h3>¿Te culpa por sus cambios de ánimo?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Te culpa por sus malestares o frustraciones?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Te amanaza o chantajea?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Te grita, se burla de ti, te humilla?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Desestima tus opiniones y te critica?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Controla tu forma de vestir?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Te prohíbe decidir sobre tu dinero y tus bienes?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>
              ¿Controla tu hora de salida, de llegada, o uso del tiempo en
              general?
            </h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Te obliga a mantener su relación en la clandestinidad?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Tu relación de pareja te ha llevado a ser destructiva?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta1">
            <h3>¿Tu pareja se irrita si le dices que fuma o bebe demasiado?</h3>
            <div className="container-respuestas1">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <button type="submit">Siguiente</button>
        </form>
      </div>
    </>
  );
};

export default Formu;

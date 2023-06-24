import React, { useState } from "react";
import "./Formu3.css";
import LabelComponent from "./components/formQuiz/label";
import NavbarComponent from "./components/navbar";

interface VecLabelType {
  id: number;
  name: string;
  value: number;
  response: string;
}

const Formu3: React.FC = () => {
  const [respuestas, setRespuestas] = useState<string[]>([]);

  const handleChange = (preguntaIndex: number, respuestaIndex: number) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaIndex] = `Respuesta ${respuestaIndex + 1}`;
    setRespuestas(nuevasRespuestas);
  };

  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const res = Math.round(Math.random() * (3 - 1) + 1);

    const vec = ["Opcion 1", "Opcion 2", "Opcion 3"];

    alert(vec[res]);
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
      <div className="container-formulario3">
        <h1 className="Title-Form3">Cuestionario</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-pregunta">
            <h3>¿Tienes miedo a tu pareja?</h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>
              ¿Te amenaza con hacerte daño o dañar a tu familia si terminas la
              relación?
            </h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>¿Te ha quitado tus bienes?</h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>
              ¿Te amenaza con hacerse daño o suicidarse si se acaba la relación?
            </h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>¿Tu pareja te dice que no podría arreglártelas sin él/ella?</h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>
              ¿Ha vuelto a agredirte después de haberte prometido que no lo
              volvería a hacer?
            </h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>
              ¿Estás deprimida y con problemas de salud, o has tenido
              pensamientos suicidas?
            </h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>¿Te obliga a tener relaciones sexuales?</h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>
              ¿Las reacciones de violencia son impredecibles y más recurrentes?
            </h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>
              ¿Sientes que nadie te puede ayudar o no consideras que mereces
              ayuda?
            </h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <div className="container-pregunta">
            <h3>
              ¿Aunque temes por tu vida sientes que no hay cómo salir de la
              violencia?
            </h3>
            <div className="container-respuestas">
              {vecLabel.map((v) => (
                <LabelComponent
                  handleChange={() => handleChange(0, v.value)}
                  v={v}
                />
              ))}
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Formu3;

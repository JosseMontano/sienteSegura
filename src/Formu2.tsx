import React, { useState } from 'react';
import './Formu2.css';
import LabelComponent from './components/formQuiz/label';
import { useNavigate } from 'react-router';

interface VecLabelType {
  id: number;
  name: string;
  value: number;
  response: string;
}

const Formu2: React.FC = () => {
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
    navigate('/Formu3')
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
    <div className="container-formulario2">
      <h1 className="Title-Form2">Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        <div className="container-pregunta">
          <h3>¿Te empuja, te golpea, te pellizca?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Evitas tocar ciertos temas o hacer ciertas cosas por temor a la reacción de tu pareja?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Sientes culpa o responsabilidad por las reacciones violentas de quien te agrede?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Tienes conocimiento si tu pareja ha violentado a parejas anteriores?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Tu pareja es excesivamente celosa o posesiva?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Te has aislado de tu familia, amigas y amigos?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Crees que con tu sacrificio tu pareja puede cambiar?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Sientes que tu pareja tiene la razón en sus críticas, quejas o reclamos contra ti?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Tienes relaciones sexuales sin consentimiento?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Te amenaza con quitarte a tus hijos o tus bienes si terminas la relación o denuncias?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <div className="container-pregunta">
          <h3>¿Ha vuelto a agredirte después de haber prometido que no vuelve a hacer?</h3>
          <div className="container-respuestas">
            {vecLabel.map((v) => (
              <LabelComponent handleChange={() => handleChange(0, v.value)} v={v} />
            ))}
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formu2;
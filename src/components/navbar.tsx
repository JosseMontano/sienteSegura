import React from "react";
import { useNavigate } from "react-router";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleClick = (ruta: string) => {
    navigate(ruta);
  };

  return (
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
  );
};

export default NavbarComponent;

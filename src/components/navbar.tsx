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
        <li onClick={() => handleClick("/")}>Inicio</li>
        <li onClick={() => handleClick("/")}>Informacion</li>
        <li onClick={() => handleClick("/")}>¿Como Ayudar?</li>
        <li onClick={() => handleClick("/contactos")}>Contacto</li>
        <li onClick={() => handleClick("/Formu")}>Encuesta</li>
        <li onClick={() => handleClick("/login")}>Iniciar Sesion</li>
      </ul>
    </div>
  );
};

export default NavbarComponent;

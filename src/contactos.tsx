import React from "react";
import imgContactos1 from "../src/assets/contactos/contacto1.jpg";
import imgContactos2 from "../src/assets/contactos/contacto2.jpg";
import { styled } from "styled-components";
import NavbarComponent from "./components/navbar";

const Contactos = () => {
  return (
    <>
      <NavbarComponent />

      <ConatinerImg>
        <StyledImg src={imgContactos1} alt="ImgDeContactos" width="600" />
        <StyledImg src={imgContactos2} alt="ImgDeContactos" width="600" />
      </ConatinerImg>
    </>
  );
};

export default Contactos;

const ConatinerImg = styled.div`
  display: grid;
  justify-content: center;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

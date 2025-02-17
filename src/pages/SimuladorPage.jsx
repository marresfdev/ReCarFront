import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Simulador from "../components/Simulador"
import "../styles/SimuladorPage.css";

const SimuladorPage = () => {
    return (
      <div className="simulador-page-container">
        <Simulador />
      </div>
    );
  };

export default SimuladorPage;

import React from "react";
import { useNavigate } from "react-router-dom"; // Para redirección
import "../styles/LoginForm.css";

const AdminInicio = () => {
  const navigate = useNavigate(); // Hook para navegar a otra página

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/adminPanel"); // Redirige al login
  };

  return (
    <div>
      <h2>Inicio Admin</h2>
      <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
    </div>
  );
};

export default AdminInicio;

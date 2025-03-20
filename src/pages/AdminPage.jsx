import React from "react";
import Login from "../components/FormLogin";
import "../styles/AdminPage.css";
import logo from "../assets/recarlogo.png";

const AdminPage = () => {
    return (
        <div className="admin-container">
            <div className="title-container">
                <img src={logo} alt="ReCar Motors Logo" className="admin-logo" />
                <h2 className="admin-title">ERP ReCar Motors</h2>
                <br />
                <br />
            </div>
            <Login />
        </div>
    );
};

export default AdminPage;

import React from "react";
import Login from "../components/FormLogin"
import "../styles/AdminPage.css"

const AdminPage = () => {
    return (
        <div className="admin-container">
            <h2 className="admin-title">ERP ReCar Motors</h2>
            <Login />
        </div>
    );
};


export default AdminPage;

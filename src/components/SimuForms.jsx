import { useState, useEffect } from "react"; 
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SimuForms.css';
import Alert from '@mui/material/Alert';

const initialState = {
  name: "",
  email: "",
  message: "",
  selectedCar: "",
  imagen: null,
  preview: null,
};

const SimuForms = () => {
  const [{ name, email, message, selectedCar }, setState] = useState(initialState);
  const [vehicles, setVehicles] = useState([]);
  const [selectedCarPrice, setSelectedCarPrice] = useState("");
  const [selectedCarId, setSelectedCarId] = useState("");
  const [enganche, setEnganche] = useState("");
  const [errorEnganche, setErrorEnganche] = useState("");
  const [errorCarro, setErrorCarro] = useState("");
  const [errorEmail, setErrorEmail] = useState(""); // Error de validación de correo
  const [plazo, setPlazo] = useState("");
  const [errorPlazo, setErrorPlazo] = useState("");
  const [buro, setBuro] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [calculoCredito, setCalculoCredito] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorBuro, setErrorBuro] = useState("");
  const [errorImagen, setErrorImagen] = useState("");
  const [tasa, setTasa] = useState("");

  // Obtener vehículos desde la API
  useEffect(() => {
    fetch("http://localhost:8080/api/getAllAutos")
      .then((response) => response.json())
      .then((data) => {
        const cars = data.map((car) => ({
          value: car.id,
          label: `${car.submarca} ${car.color} ${car.modelo}`,
          price: car.precio, // Agregar precio
          carId: car.id, // Agregar id
        }));
        setVehicles(cars);
      })
      .catch((error) => console.error("Error al obtener los autos:", error));
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "selectedCar") {
      const selectedCar = vehicles.find((car) => car.value === Number(value));
      setSelectedCarPrice(selectedCar ? selectedCar.price : "");
      const selectedCarId = selectedCar ? selectedCar.carId : "";
      setSelectedCarId(selectedCarId);
      console.log("Vehículo seleccionado:", selectedCar);
      console.log("ID del vehículo seleccionado:", selectedCarId);
    }
    
  
    if (name === "enganche") {
      setEnganche(value);
    }
  
    if (name === "plazo") {
      setPlazo(value);
    }      
    
    if (name === "buro") {
      setBuro(value);
    } 

    // Aquí se debía usar `e.target.value` en lugar de `event.target.value`
    //setBuro(value);
    
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagen(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearState = () => {
    setState({ ...initialState });
    setImagen(null);
    setPreview(null);
  
    // Limpiar el valor del input de imagen para que no permanezca seleccionado
    const imageInput = document.getElementById("imagen");
    if (imageInput) {
      imageInput.value = ""; // Esto desmarcará el campo de archivo
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!imagen) {
      setErrorImagen("Debe subir una imagen");
      return;
    }
  
    setLoading(true);
    setMostrarAlerta(false);
  
    const formData = new FormData();
    formData.append("contacto", name);
    formData.append("imagen", imagen);
  
    try {
      const response = await fetch("http://localhost:8080/api/emailBuro", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setMostrarAlerta(true);
      clearState();
      setTimeout(() => {
        setMostrarAlerta(false);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el correo");
      setLoading(false);
    }
  };       

  const calcularCredito = async () => {
    const engancheNum = Number(enganche);
    const plazoNum = Number(plazo);
    const carIdNum = Number(selectedCarId);
    const tasaNum = Number(buro);
  
    if (isNaN(carIdNum) || carIdNum <= 0) {
      setErrorCarro("Seleccione un vehículo");
      setCalculoCredito("");
      return;
    }else{
      setErrorCarro("");
    }
  
    if (isNaN(engancheNum) || engancheNum < Number(selectedCarPrice)) {
      setErrorEnganche("El enganche debe ser mayor o igual a " + selectedCarPrice);
      setCalculoCredito("");
      return;
    } else {
      setErrorEnganche("");
    }
  
    if (isNaN(plazoNum) || plazoNum <= 0) {
      setErrorPlazo("Seleccione un plazo");
      setCalculoCredito("");
      return;
    } else {
      setErrorPlazo("");
    }

    if (isNaN(buro) || buro <= 0) {
      setErrorBuro("Seleccione su situación en buró de crédito");
      setCalculoCredito("");
      return;
    } else {
      setErrorBuro("");
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/calcularCredito", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: carIdNum,
          enganche: engancheNum,
          plazo: plazoNum,
          tasa: tasaNum,
        }),
      });
  
      console.log("id:", carIdNum);
      console.log("precio:", selectedCarPrice);
      console.log("enganche:", engancheNum);
      console.log("plazo:", plazoNum);
      console.log("tasa:", tasaNum);
  
      const data = await response.json();
      console.log("Resultado del cálculo:", data);
  
      if (typeof data === 'number') {
        //alert("El cálculo del crédito es: " + data);
        //<Alert severity="success">Calculo realizado correctamente</Alert>
        setCalculoCredito("Pago mensual aproximado:\n" + data + "\n (este valor puede variar un poco)");
      } else {
        alert("Hubo un problema con los datos del cálculo.");
      }
    } catch (error) {
      console.error("Error al calcular el crédito:", error);
      alert("Hubo un error al calcular el crédito");
    }
  };
     

  const calcularEnganche = () => {
    if (enganche < selectedCarPrice) {
      setErrorEnganche("El enganche debe ser mayor o igual a " + selectedCarPrice);
    } else {
      setErrorEnganche("");
      // Aquí puedes continuar con el cálculo
      console.log("Cálculo realizado correctamente.");
    }
  };

  /*
  const validarPlazos = () => {
    const plazoNum = Number(plazo);
    if (isNaN(plazoNum) || plazoNum < 12 || plazoNum > 60) { 
      setErrorPlazo("El plazo debe ser entre 12 y 60 meses");
    } else {
      setErrorPlazo("");
      console.log("Plazo válido.");
    }
  };  
  */

  return (
    <div id="contact-simforms">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="form-container">
            <h2>
              <img
                src="/recarlogo.png" // Asegúrate de que la ruta del logo sea correcta
                alt="Logo ReCar Motors" 
                style={{ width: "50px" ,height: "50px", marginRight: "10px" }} 
              />
              Simulador de crédito de ReCar Motors
            </h2>
            <br />
              <div className="row">
                {/* Primer formulario de contacto */}
                <div className="col-md-3 formulario1">
                  <div className="section-title-form1">
                    <h3>¿Quieres saber tu crédito exacto?</h3>
                    <br />
                    <p className="justified-text">
                      Envianos una foto de tu INE para revisar tu buró de crédito y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>
                  <form name="sentMessage" onSubmit={handleSubmit}>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            className="form-control"
                            placeholder="Correo o Número"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* Campo de subida de imagen */}
                      <div className="form-group">
                      <label htmlFor="imagen" className="form-label">
                        <strong>Sube una imagen de tu INE (parte frontal)</strong>
                      </label>
                      {/* Contenedor cuadrado que simula el recuadro */}
                      <div 
                        className="upload-box" 
                        onClick={() => document.getElementById('imagen').click()}
                        style={{ 
                          width: "200px", 
                          height: "100px", 
                          border: "2px dashed #ccc", 
                          borderRadius: "5px", 
                          display: "flex", 
                          justifyContent: "center", 
                          alignItems: "center", 
                          position: "relative", 
                          cursor: "pointer"
                        }}
                      >
                        {preview ? (
                          <img 
                            src={preview} 
                            alt="Vista previa" 
                            style={{ 
                              maxWidth: "100%", 
                              maxHeight: "100%", 
                              objectFit: "cover", 
                              borderRadius: "5px" 
                            }}
                          />
                        ) : (
                          <i className="fas fa-camera" style={{ fontSize: "40px", color: "#888" }}></i> // Icono para indicar carga
                        )}
                      </div>

                      {/* Input de carga de imagen oculto */}
                      <input
                        type="file"
                        id="imagen"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }} // Esconde el input
                      />

                      
                    </div>
                    <button type="submit" className="btn btn-customContact btn-lg">
                      Enviar
                    </button>
                    <br />
                    <br />
                  </form>
                </div>
                {/* Segundo formulario de contacto */}
                <div className="col-md-9 formulario2">
                  <div className="section-title-form2">
                    <h1>Obten tu crédito aproximado</h1>
                    <br />
                    <p className="justified-text">
                      <center>Ingresa tus datos y obtendrás un crédito aproximado para la unidad que desees comprar.</center>
                    </p>
                  </div>
                  <form name="sentMessage" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          <strong>Vehículo</strong>
                        </label>
                          {/* Lista desplegable para seleccionar el vehículo */}
                          <select
                            id="carro"
                            name="selectedCar"
                            value={selectedCar}
                            className="form-control"
                            required
                            onChange={handleChange}
                          >
                            <option value="">Selecciona un vehículo</option>
                            {vehicles.map((car) => (
                              <option key={car.value} value={car.value}>
                                {car.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errorCarro && <p style={{ color: "red", fontSize: "14px" }}>{errorCarro}</p>}
                      </div>
                      <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="enganche" className="form-label">
                        <strong>Enganche</strong>
                        </label>
                        <input
                          type="text"
                          id="enganche"
                          name="enganche"
                          className="form-control"
                          placeholder={selectedCarPrice ? `Enganche mínimo de: ${selectedCarPrice} en esta unidad` : "Enganche"}
                          required
                          onChange={handleChange}
                        />
                      </div>
                      {errorEnganche && <p style={{ color: "red", fontSize: "14px" }}>{errorEnganche}</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="plazo" className="form-label">
                        <strong>Plazo</strong>
                        </label>
                        {/* Lista desplegable con opciones fijas */}
                        <select
                          id="plazo"
                          name="plazo"
                          value={plazo}
                          className="form-control"
                          required
                          onChange={handleChange}
                        >
                          <option value="">Selecciona un plazo</option>
                          <option value="12">12 meses</option>
                          <option value="24">24 meses</option>
                          <option value="36">36 meses</option>
                          <option value="48">48 meses</option>
                          <option value="60">60 meses</option>
                        </select>
                        </div>
                        {errorPlazo && <p style={{ color: "red", fontSize: "14px" }}>{errorPlazo}</p>}
                      </div>
                      <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="buro" className="form-label">
                        <strong>Situación en buró de crédito</strong>
                        </label>
                        {/* Lista desplegable con opciones fijas */}
                        <select
                          id="buro"
                          name="buro"
                          value={buro}
                          className="form-control"
                          required
                          onChange={handleChange}
                        >
                          <option value="">Selecciona tu situación</option>
                          <option value="16.99">No tengo historial</option>
                          <option value="12.99">Bien</option>
                          <option value="17.99">Regular</option>
                          <option value="30">Mal</option>
                        </select>
                      </div>
                      {errorBuro && <p style={{ color: "red", fontSize: "14px" }}>{errorBuro}</p>}
                    </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-customContact btn-lg"
                      onClick={calcularCredito}  // Elimina los paréntesis
                    >
                      Calcular
                    </button>
                    <br />
                    <br />
                    <strong>{calculoCredito && <div className="text-danger">{calculoCredito}</div>}</strong>
                  </form>
                </div>
                <br />
                <br />
                {mostrarAlerta && (
                  <Alert sx={{ borderRadius: 2, backgroundColor: '#30AD23', color: '#fff' }} severity="success">
                    Correo enviado. Nos pondremos en contacto con usted lo más pronto posible.
                  </Alert>
                )}
                {loading && (
                  <Alert sx={{ borderRadius: 2, backgroundColor: '#4194cb', color: '#fff' }} severity="info">
                    Enviando correo, aguarde un momento...
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimuForms;

{/*

  scotiabank = eliud (una persona que esta muy bien en buro)
  ara = capital bank (para una persona que no tenga historial)
  luis = bancomer (bancomer para alguien que esta regular)
  javi = saga (donde se encuentran mal)

*/}
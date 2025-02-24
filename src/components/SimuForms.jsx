import { useState, useEffect } from "react"; 
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SimuForms.css'; // Asegúrate de tener este archivo CSS
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
  const [plazo, setPlazo] = useState("");
  const [errorPlazo, setErrorPlazo] = useState("");
  const [buro, setBuro] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [calculoCredito, setCalculoCredito] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [loading, setLoading] = useState(false);

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
  
    // Aquí se debía usar `e.target.value` en lugar de `event.target.value`
    setBuro(value);
    
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
    console.log("selectedCar: " + selectedCar);
  
    setLoading(true); // Mostrar el mensaje de "Enviando correo..."
    setMostrarAlerta(false); // Ocultar la alerta de éxito al inicio
  
    fetch(`http://localhost:8080/api/email?name=${name}&email=${email}&message=${message}&car=${selectedCar}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false); // Ocultar el mensaje de "Enviando correo..."
        setMostrarAlerta(true); // Mostrar la alerta de éxito
        clearState(); // Limpiar el formulario
        setImagen(null); // Limpiar el campo de imagen
        setPreview(null); // Limpiar la vista previa de la imagen
        setTimeout(() => {
          setMostrarAlerta(false);
        }, 5000); // 5000 milisegundos = 5 segundos
      })    
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el correo");
        setLoading(false); // Ocultar el mensaje si ocurre un error
      });
  };   

  const calcularCredito = async () => {
    const engancheNum = Number(enganche);
    const plazoNum = Number(plazo);
    const carIdNum = Number(selectedCarId);
  
    if (isNaN(carIdNum) || carIdNum <= 0) {
      alert("Por favor selecciona un vehículo válido.");
      return;
    }
  
    if (isNaN(engancheNum) || engancheNum < Number(selectedCarPrice)) {
      setErrorEnganche("El enganche debe ser mayor o igual a " + selectedCarPrice);
      return;
    } else {
      setErrorEnganche("");
    }
  
    if (isNaN(plazoNum) || plazoNum < 12 || plazoNum > 60) {
      setErrorPlazo("El plazo debe estar entre 12 y 60 meses");
      return;
    } else {
      setErrorPlazo("");
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/calcularCredito", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: carIdNum,
          enganche: engancheNum,
          plazo: plazoNum,
          tasa: 13,
        }),
      });
  
      console.log("id:", carIdNum);
      console.log("precio:", selectedCarPrice);
      console.log("enganche:", engancheNum);
      console.log("plazo:", plazoNum);
  
      const data = await response.json();
      console.log("Resultado del cálculo:", data);
  
      if (typeof data === 'number') {
        //alert("El cálculo del crédito es: " + data);
        //<Alert severity="success">Calculo realizado correctamente</Alert>
        setCalculoCredito(data);
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
  
  const validarPlazos = () => {
    const plazoNum = Number(plazo);
    if (isNaN(plazoNum) || plazoNum < 12 || plazoNum > 60) { 
      setErrorPlazo("El plazo debe ser entre 12 y 60 meses");
    } else {
      setErrorPlazo("");
      console.log("Plazo válido.");
    }
  };  

  return (
    <div id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <br />
          <div className="col-md-10">
            <h2>Simulador de crédito de ReCar Motors</h2>
            <div className="form-container">
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
                          Sube una imagen de tu INE
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="imagen"
                          accept="image/*"
                          onChange={handleImageUpload}
                          required
                        />
                        {preview && (
                          <div className="mt-3">
                            <p>Vista previa:</p>
                            <img
                              src={preview}
                              alt="Vista previa"
                              style={{ maxWidth: "40%", height: "auto", borderRadius: "5px" }}
                            />
                          </div>
                        )}
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
                    <p className="justified-text">
                      <center>Ingresa tus datos y obtendrás un crédito aproximado para la unidad que desees comprar.</center>
                    </p>
                  </div>
                  <form name="sentMessage" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Vehiculo
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
                      </div>
                      <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="enganche" className="form-label">
                          Enganche
                        </label>
                        <input
                          type="text"
                          id="enganche"
                          name="enganche"
                          className="form-control"
                          placeholder={selectedCarPrice ? `Enganche mínimo de: ${selectedCarPrice} para esta unidad` : "Enganche"}
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
                          Selecciona el plazo
                        </label>
                          <input
                            type="text"
                            id="plazo"
                            name="plazo"
                            className="form-control"
                            placeholder="Debe estar entre 12 y 60 meses"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      {errorPlazo && <p style={{ color: "red", fontSize: "14px" }}>{errorPlazo}</p>}
                      </div>
                      <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="buro" className="form-label">
                          Situación en buró de crédito
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
                          <option value="sin-historial">No tengo historial</option>
                          <option value="bien">Bien</option>
                          <option value="regular">Regular</option>
                          <option value="mal">Mal</option>
                        </select>
                      </div>
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
                    <label className="credito">CREDITO MENSUAL APROXIMADO: </label>
                    {calculoCredito && <div className="text-danger">{calculoCredito}</div>}
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
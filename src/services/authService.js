import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

export const authService = {
  login: async (email, password) => {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.LOGIN}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: email, password }),
    });

    if (!response.ok) throw new Error("Credenciales incorrectas");
    return await response.json();
  },

  register: async (userData) => {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.REGISTER}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Error al registrar usuario");
    return await response.json();
  },
};

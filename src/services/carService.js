import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

export const carService = {
  getAll: async () => {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTOS}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener los autos");
    return await response.json();
  },

  getById: async (id) => {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTO}/${id}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener el auto");
    return await response.json();
  },

  getImageUrl: (imageName) => `${ENV.API_URL}/${ENV.ENDPOINTS.IMAGES}/${imageName}`,
};

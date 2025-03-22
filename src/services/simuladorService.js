import { ENV } from "../utils/constants";

export const simuladorService = {
  calcularCredito: async (simuladorData) => {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SIMULADOR}`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(simuladorData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error HTTP ${response.status}: ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error en simuladorService:", error);
      throw error;
    }
  },
};

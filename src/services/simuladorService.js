import { ENV } from "../utils/constants";

export const simuladorService = {
  calcularCredito: async (simuladorData) => {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SIMULADOR}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(simuladorData),
    });

    if (!response.ok) throw new Error("Error al calcular crédito");
    return await response.json();
  },
};

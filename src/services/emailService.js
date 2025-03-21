import { ENV } from "../utils/constants";

export const emailService = {
  sendEmail: async (emailData) => {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.EMAIL}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) throw new Error("Error al enviar el correo");
    return await response.json();
  },

  sendEmailBuro: async (emailData) => {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.EMAILBURO}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) throw new Error("Error al enviar el correo de buró");
    return await response.json();
  },
};

import { jwtDecode } from "jwt-decode"; // Importación correcta

export const tokenExpired = (token) => {
    if (!token) return true;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convertir a segundos
        return decoded.exp < currentTime; // Retorna `true` si expiró
    } catch (error) {
        console.error("Error al decodificar el token:", error);
        return true; // Si hay error, asumir que está expirado
    }
};

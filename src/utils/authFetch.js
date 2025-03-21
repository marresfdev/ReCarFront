import { storageController } from "../services/token";
import { tokenExpired } from "./tokenExpired";

export const authFetch = async (url, params = {}) => {
    const token = storageController.getToken();

    // Función para cerrar sesión
    const logout = () => {
        storageController.removeToken();
        window.location.href = "/login"; // Redirigir al login
    };

    if (!token) {
        logout();
        return;
    }

    if (tokenExpired(token)) {
        logout();
        return;
    }

    // Configurar la solicitud con el token en el header
    const options = {
        ...params,
        headers: {
            ...params.headers,
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);

        // Si el backend responde con 401 (Unauthorized), cerrar sesión
        if (response.status === 401) {
            logout();
            return;
        }

        return response;
    } catch (error) {
        console.error("Error en authFetch:", error);
        throw error;
    }
};

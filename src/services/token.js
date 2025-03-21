import { ENV } from "../utils/constants";

export const storageController = {
    getToken: () => localStorage.getItem(ENV.STORAGE.TOKEN),
    
    setToken: (token) => localStorage.setItem(ENV.STORAGE.TOKEN, token),
    
    removeToken: () => localStorage.removeItem(ENV.STORAGE.TOKEN),
};

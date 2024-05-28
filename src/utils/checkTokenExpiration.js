import { jwtDecode } from "jwt-decode";

export const checkTokenExpiration = () => {

    const token = localStorage.getItem('auth-token');
    if (token) {
        const decodedToken = jwtDecode(token);
        const dateNow = new Date();

        if (decodedToken.exp < dateNow.getTime() / 1000) 
            throw new Error('Token expired');
    } else {
        throw new Error('Token not found');
    }
};
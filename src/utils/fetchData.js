import { checkTokenExpiration } from "./checkTokenExpiration"; 

export const fetchData = async (path, method = 'GET', data = null) => {
    
    checkTokenExpiration();
    
    const response = await fetch(import.meta.env.VITE_API_URL + path, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
        },
        body: data ? JSON.stringify(data) : null,
    });
    const responseData = await response.json();
    return responseData.data;
}
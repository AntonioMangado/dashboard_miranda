import { createContext, useEffect, useReducer } from 'react';
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                user: initialState,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: { ...state.user, username: action.payload },
            };
        default:
            return state;
    }
}

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {username: '', email: '', isAuth: false},
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        toast.success('Logout successful!', {
            autoClose: 2000,
            hideProgressBar: true,
        });
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state]);

    return (
        <AuthContext.Provider value={{ state, dispatch, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
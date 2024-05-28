import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();


export const AuthReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                user: {username: '', email: '', isAuth: false},
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

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
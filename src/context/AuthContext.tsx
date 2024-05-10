import { createContext, useEffect, useReducer } from 'react';
import { User } from '../../lib/types';


type AuthContextType = {
    state: User;
    dispatch: React.Dispatch<any>;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type Actions = {
    type: 'LOGIN' | 'LOGOUT' | 'UPDATE_USER';
    payload: User["user"];

}

export const AuthContext = createContext({} as AuthContextType);

export const AuthReducer = (state: User, action: Actions): User => {
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
                user: action.payload,
            };
        default:
            return state;
    }
}

const initialState: User = {
    user: JSON.parse(localStorage.getItem('user')) || {username: '', email: '', isAuth: false},
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
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
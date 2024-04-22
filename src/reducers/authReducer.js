const initialState = {
    user: localStorage.getItem('user') || null,
    isAuth: localStorage.getItem('auth') || false,
};
  
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuth: false,
            };
        case 'UPDATE_USER':
            console.log(action.payload)
            return {
                ...state,
                user: action.payload,
            };
        default:
        return state;
    }
}

export { initialState, reducer }
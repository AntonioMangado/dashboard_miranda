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
        default:
        return state;
    }
}

export { initialState, reducer }
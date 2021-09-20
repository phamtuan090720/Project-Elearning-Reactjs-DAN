import * as Type from './type';
let initialState = {
    loading: true,
    userLogin: null,
    err: null,
}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOGIN_REQUEST: {
            state.loading = true;
            state.userLogin = null;
            state.err = null;
            return {...state}
        }
        case Type.LOGIN_SUCCESS:{
            state.loading = false;
            state.userLogin = action.data;
            state.err = null;
            return {...state}
        }
        case Type.LOGIN_FAILED:{
            state.loading = false;
            state.userLogin = null;
            state.err = action.data;
            return {...state}
        }
        case Type.LOGOUT:{
            state.loading = false;
            state.userLogin = null;
            return {...state}
        }
        default:
            return { ...state }
    }

}
export default LoginReducer;
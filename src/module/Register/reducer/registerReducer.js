import * as Type from './type';
let initialState = {
    loading: false,
    userRegister: null,
    err: null,
}
const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.REGISTER_REQUEST: {
            state.loading = true;
            state.userRegister = null;
            state.err = null;
            return {...state}
        }
        case Type.REGISTER_SUCCESS:{
            state.loading = false;
            state.userRegister = action.data;
            state.err = null;
            return {...state}
        }
        case Type.REGISTER_FAILED:{
            state.loading = false;
            state.userRegister = null;
            state.err = action.data;
            return {...state}
        }
        default:
            return { ...state }
    }

}
export default RegisterReducer;
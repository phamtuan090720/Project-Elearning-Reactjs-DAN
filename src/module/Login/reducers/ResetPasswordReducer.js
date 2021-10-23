import * as Type from './type.js';
const initialState = {
    loading: false,
    err: null
}
const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.RESET_PASSWORD_REQUEST:
            state.loading = true;
            state.err = null;
            return { ...state }
        case Type.RESET_PASSWORD_SUCCESS:
            state.loading = false;
            state.err = null;
            return { ...state }
        case Type.RESET_PASSWORD_FAILED:
            state.loading = false;
            state.err = null;
            return { ...state }
        default:
            return { ...state };
    }
}
export default resetPasswordReducer;
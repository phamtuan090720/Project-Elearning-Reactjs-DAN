import * as Type from './type';
let initialState = {
    loading: false,
    infoTeacher: null,
    err: null
}
const infoTeacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_INFO_REQUEST: {
            state.loading = true;
            state.err = null;
            state.infoTeacher = null;
            return { ...state }
        }
        case Type.GET_INFO_SUCCESS: {
            state.loading = false;
            state.infoTeacher = action.data;
            return { ...state }
        }
        case Type.GET_INFO_FAILED: {
            state.loading = false;
            state.err = action.err;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default infoTeacherReducer;
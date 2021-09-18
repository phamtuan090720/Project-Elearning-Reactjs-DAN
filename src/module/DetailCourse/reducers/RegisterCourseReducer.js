import * as Type from './type';
let initialState = {
    mess: null,
    err: null,
    loading: null,
}
const registerCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.REGISTER_COURSE_SUCCESS: {
            state.mess = action.data;
            state.err = null;
            state.loading = null;
            return { ...state }
        }
        case Type.REGISTER_COURSE_FAILED: {
            state.mess = null;
            state.err = action.err;
            state.loading = null;
            return { ...state }
        }
        case Type.REGISTER_COURSE_REUQEST: {
            state.mess = null;
            state.err = null;
            state.loading = null;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default registerCourseReducer;
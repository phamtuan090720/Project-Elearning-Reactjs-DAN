import * as Type from './type';
let initialState = {
    loading: false,
    detailCourse: null,
    error: null,
}
const detailCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DETAILCOURSE_REQUEST: {
            state.loading = true;
            state.detailCourse = null;
            state.error = null;
            return { ...state }
        }
        case Type.GET_DETAILCOURSE_SUCCESS: {
            state.loading = false;
            state.detailCourse = action.data;
            return { ...state }
        }
        case Type.GET_DETAILCOURSE_FAILED: {
            state.loading = false;
            state.error = action.err;
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default detailCourseReducer;
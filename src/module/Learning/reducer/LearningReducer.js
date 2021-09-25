import * as Type from './type';
let initialState = {
    loading: true,
    lesson: null,
    err: null,
}
const learningReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_LESSON_REQUEST: {
            state.loading = true;
            state.lesson = null;
            state.err = null;
            return { ...state }
        }
        case Type.GET_LESSON_SUCCESS: {
            state.lesson = action.data;
            state.loading = false;
            return { ...state }
        }
        case Type.GET_LESSON_FAILED: {
            state.err = action.err;
            state.loading = false;
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default learningReducer;
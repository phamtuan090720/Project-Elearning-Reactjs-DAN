import * as Type from './type';
const initialState = {
    openContainer: false,
    detailLesson: null,
    err: null,
    loading: false,
    key: null
}
const detailLessonManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DETAIL_LESSON_REQUEST: {
            state.loading = true;
            state.err = null;
            state.detailLesson = null;
            return { ...state };
        }
        case Type.GET_DETAIL_LESSON_SUCCESS: {
            state.loading = false;
            state.detailLesson = action.data;
            return { ...state };
        }
        case Type.GET_DETAIL_LESSON_FAILED: {
            state.loading = false;
            state.err = action.err;
            return { ...state };
        }
        case Type.SET_STATUS_CONTAINER: {
            state.openContainer = action.status;
            return { ...state };
        }
        case Type.SET_KEY_CONTAINER: {
            state.key = action.key;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default detailLessonManageReducer;
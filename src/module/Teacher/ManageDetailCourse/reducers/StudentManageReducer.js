import * as Type from '../reducers/type';
const initialState = {
    loading: false,
    listStudent: null,
    error: null
}
const studentManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_STUDENT_REQUEST: {
            state.loading = true;
            state.listStudent = null;
            state.error = null;
            return { ...state };
        }
        case Type.GET_STUDENT_SUCCESS: {
            state.loading = false;
            state.listStudent = action.data;
            return { ...state };
        }
        case Type.GET_STUDENT_FAILED: {
            state.loading = false;
            state.error = action.err;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default studentManageReducer;
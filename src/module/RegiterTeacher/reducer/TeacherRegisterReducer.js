import * as Type from './type';
let initialState = {
    loading: true,
    teacher: null,
    err: null,
    access: null,
}
const teacherRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.TEACHERREGISTER_REQUEST: {
            state.loading = true;
            state.teacher = null;
            state.err = null;
            state.access = null;
            return { ...state }
        }
        case Type.TEACHERREGISTER_SUCCESS: {
            state.loading = false;
            state.teacher = action.data;
            state.err = null;
            return { ...state }
        }
        case Type.TEACHERREGISTER_FAILED: {
            state.loading = false;
            state.teacher = null;
            state.err = action.data;
            return { ...state }
        }
        case Type.TEACHER_ACTIVE: {
            state.access = action.data
            return { ...state }
        }
        default:
            return { ...state }
    }

}
export default teacherRegisterReducer;
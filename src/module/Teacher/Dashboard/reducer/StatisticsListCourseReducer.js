import * as Type from './type';
let initialState = {
    loading: false,
    data: null,
    err: null
}
const statisticsListCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_STATISCS_COURSE_REQUEST:{
            state.loading = true;
            state.data=null;
            state.err=null;
            return { ...state }
        }
        case Type.GET_STATISCS_COURSE_SUCCESS:{
            state.loading = false;
            state.data=action.data;
            return { ...state }
        }
        case Type.GET_STATISCS_COURSE_FAILED:{
            state.loading = false;
            state.err=action.err;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default statisticsListCourseReducer;
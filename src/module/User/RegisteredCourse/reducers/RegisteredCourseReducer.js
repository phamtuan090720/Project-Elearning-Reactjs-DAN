import * as Type from './type';
let initialState = {
    loading: true,
    data: null,
    err: null,
    pagination: {
        current: 1,
        pageSize: 10,
    }
}
const addKey = (data) => {
    let newData = [];
    data.forEach((item, index) => {
        let newItem = { ...item, key: index }
        newData.push(newItem);
    });
    return newData;
}
const registeredCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_LIST_COURSE_USER_REQUEST: {
            state.data = null;
            state.err = null;
            state.loading = true;
            state.pagination = {
                current: 1,
                pageSize: 10,
            }
            return { ...state }
        }
        case Type.GET_LIST_COURSE_USER_SUCCESS: {
            state.loading = false;
            state.data = addKey(action.data);
            // console.log(addKey(action.data));
            state.err = null;
            return { ...state }
        }
        case Type.GET_LIST_COURSE_USER_FAILED: {
            state.data = null;
            state.err = action.err;
            state.loading = false;
            state.pagination = {
                current: 1,
                pageSize: 10,
            }
            alert(action.err)
            return { ...state }
        }
        case Type.GET_LIST_COURSE_USER_PAGINATION: {
            state.pagination = { ...state.pagination, current: action.data.current, total: action.data.total }
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default registeredCourseReducer;
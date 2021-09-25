import * as Type from './type.js';
let initialState = {
    isOpenModal: false,
    sreach: null,
}
export const userCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.OPEN_MODAL_RATING: {
            state.isOpenModal = true;
            return { ...state }
        }
        case Type.CLOSE_MODAL_RATING: {
            state.isOpenModal = false;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
let dataState = {
    course: null,
    listLesson: null,
    loading: true,
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
export const userCouserReducerData = (state = dataState, action) => {
    switch (action.type) {
        case Type.GET_COURSE_REQUEST: {
            state.loading = true;
            state.course = null;
            state.err = null;
            state.listLesson = null;
            return { ...state };
        }
        case Type.GET_COURSE_SUCCESS: {
            state.loading = false;
            state.course = action.data.info;
            state.listLesson = addKey(action.data.list_lesson);
            return { ...state };
        }
        case Type.GET_COURSE_FAILED: {
            state.loading = false;
            state.err = action.err
            return { ...state };
        }
        case Type.SET_PAGINATION: {
            state.pagination = { ...state.pagination, current: action.data.current, total: action.data.total }
            // console.log('pa',state.pagination)
            return { ...state };
        }
        default:
            return { ...state };
    }
}
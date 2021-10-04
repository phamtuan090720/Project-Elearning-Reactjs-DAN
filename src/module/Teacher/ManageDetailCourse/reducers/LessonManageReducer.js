import * as Type from './type';
const initialState = {
    listLesson: null,
    err: null,
    loading: false,
    isOpenCreateForm: false,

}
const addKey = (data) => {
    let newData = [];
    data.forEach((item, index) => {
        let newItem = { ...item, key: index }
        newData.push(newItem);
    });
    return newData;
}
const lessonManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_STATUS_OPENCEATEFORM: {
            state.isOpenCreateForm = action.status;
            return { ...state };
        }
        case Type.GET_LIST_LESSON_REQUEST: {
            state.loading = true;
            state.listLesson = null;
            state.err = null;
            return { ...state };
        }
        case Type.GET_LIST_LESSON_SUCCESS: {
            state.loading = false;
            // state.listLesson = addKey(action.data);
            state.listLesson = addKey(action.data.results.list_lesson);
            console.log(action.data);
            return { ...state };
        }
        case Type.GET_LIST_LESSON_FAILED: {
            state.loading = false;
            state.err = action.err;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default lessonManageReducer;
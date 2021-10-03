import * as Type from './type';
const initialState = {
    isOpenFormCreate: false,
    isOpenFormEdit: false,
    courseEdit: null,
    listCategory: null,
    listCourse: null,
    loading: false,
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
const manageCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_STATUS_OPENCREATEFROM: {
            state.isOpenFormCreate = action.status
            return { ...state }
        }
        case Type.SET_STATUS_OPENEDITFROM: {
            state.isOpenFormEdit = action.status
            state.courseEdit = null
            return { ...state }
        }
        case Type.SET_COURSE_EDIT: {
            // console.log("Đã chạy")
            // // console.log(action.id)
            let course = state.listCourse.find((item) => item.id === action.id)
            if (course) {
                state.courseEdit = course
            }
            else {
                alert("Not Found Course ID " + action.id)
            }
            console.log(course)
            return { ...state }
        }
        case Type.GET_CATEGORIES_REQUEST: {
            state.listCategory = null;
            return { ...state }
        }
        case Type.GET_CATEGORIES_SUCCESS: {
            state.listCategory = action.data;
            return { ...state }
        }
        case Type.GET_MY_COURSE_REQUEST: {
            state.loading = true;
            state.courseEdit = null;
            state.listCourse = null;
            state.err = null;
            return { ...state };
        }
        case Type.GET_MY_COURSE_SUCCESS: {
            state.loading = false;
            state.listCourse = addKey(action.data);
            return { ...state }
        }
        case Type.SET_PAGINATION: {
            state.pagination = { ...state.pagination, current: action.data.current, total: action.data.total }
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default manageCourseReducer;
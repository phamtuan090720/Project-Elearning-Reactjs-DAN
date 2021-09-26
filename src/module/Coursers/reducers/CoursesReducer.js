import * as Type from './type';
let initialState = {
    arrCategory: [],
    categoryfilter: null,
    error: null,
    loading: true,
    arrCourses: null,
    padingation: {
        total: 0,
        pageSize: 6,
        current: 1
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_CATEGORIES: {
            state.arrCategory = action.data;
            return { ...state }
        }
        case Type.GET_COURSES_REQUEST: {
            state.loading = true;
            state.arrCourses = null;
            state.error = null;
            return {
                ...state
            }
        }
        case Type.GET_COURSES_SUCCESS: {
            state.loading = false;
            state.arrCourses = action.data;
            state.error = null;
            return { ...state }
        }
        case Type.GET_COURSES_FAILED: {
            state.loading = false;
            state.error = state.data;
            state.padingation = {
                total: 0,
                pageSize: 6,
                curent: 1
            }
            return { ...state }
        }
        case Type.INFO_PAGINATION: {
            state.padingation=action.data;
            // console.log('padigation',action.data)
            return { ...state }
        }
        case "ERROR": {
            state.error = true;
            alert(action.data)
            return { ...state }
        }
        case "Category_filter": {
            state.categoryfilter = action.data;
            return { ...state }
        }

        default:
            return { ...state };
    }
}
export default reducer;
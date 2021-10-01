import * as Type from './type';
const initialState = {
    isOpenFormCreate: false,
    listCategory: null,
}
const manageCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_STATUS_OPENCREATEFROM: {
            state.isOpenFormCreate = action.status
            return { ...state }
        }
        case Type.GET_CATEGORIES_REQUEST: {
            state.listCategory = null;
            return { ...state }
        }
        case Type.GET_CATEGORIES_SUCCESS:{
            state.listCategory = action.data;
            return {...state}
        }
        default:
            return { ...state };
    }
}
export default manageCourseReducer;
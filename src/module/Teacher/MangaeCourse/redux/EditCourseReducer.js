const initialState = {
    loading: true,
    course: null,
    err: null,
}
const editCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
}
export default editCourseReducer;
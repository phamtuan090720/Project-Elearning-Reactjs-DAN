let initialState = {
    test: 'hahah'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Test_mess": {
            alert(action.data)
            state.test = action.data; 
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default reducer;
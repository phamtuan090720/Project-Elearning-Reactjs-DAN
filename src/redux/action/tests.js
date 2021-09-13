export const actiontest = (mess)=>{
    return (dispatch)=>{
        dispatch({
            type:"Test_mess",
            data: mess
        })
    }
}
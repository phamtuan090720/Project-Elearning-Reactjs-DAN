import { http } from '../../../api/setting';
import * as Type from './type';
export const getCategory = () => {
    return (dispatch) => {
        let promise = http.get('category/');
        promise.then((result) => {
            dispatch({
                type:Type.GET_CATEGORIES,
                data:result.data
            })
        })
        promise.catch((error) => {
            dispatch({
                type:"ERROR",
                data:error
            })
        })
    }
}

export const getCourse = (page='?page=1') =>{
    return (dispatch)=>{
        dispatch(actGetCoursesRequest());
        let promise = http.get(`courses/${page}`);
        promise.then((result) => {
            console.log(result)
            dispatch(actGetCoursesSuccess(result.data.results))
            dispatch({
                type:Type.INFO_PAGINATION,
                data:{
                    total:result.data.count,
                }
            })
        })
        promise.catch((error) => {
            dispatch(actGetCoursesFailed(error));
        })
    }
}
const actGetCoursesRequest=()=>{
    return{
        type:Type.GET_COURSES_REQUEST
    }
}
const actGetCoursesSuccess=(data)=>{
    return{
        type:Type.GET_COURSES_SUCCESS,
        data:data
    }
}
const actGetCoursesFailed=(err)=>{
    return{
        type:Type.GET_COURSES_FAILED,
        data:err
    }
}
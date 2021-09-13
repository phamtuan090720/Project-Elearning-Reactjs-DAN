import * as Type from './type';
import { http } from '../../../api/setting';
export const actGetDetailCourse=(id)=>{
    return (dispatch)=>{
        dispatch(actGetDetailCourseRequest())
        let promise = http.get(`coures/${id}/`);
        promise.then((rs)=>{
            console.log('data Course',rs);
            dispatch(actGetDetailCourseSuccess(rs.data))
        })
        promise.catch(err=>{
            console.log(err);
            actGetDetailCourseFailed(err);
        })
    }
}
const actGetDetailCourseRequest = ()=>{
    return {
        type:Type.GET_DETAILCOURSE_REQUEST
    }
}
const actGetDetailCourseSuccess = (data)=>{
    return {
        type:Type.GET_DETAILCOURSE_SUCCESS,
        data:data
    }
}
const actGetDetailCourseFailed = (err)=>{
    return {
        type:Type.GET_DETAILCOURSE_FAILED,
        err:err
    }
}

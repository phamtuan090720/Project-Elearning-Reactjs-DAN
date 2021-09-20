import * as Type from './type';
import { http } from '../../../api/setting';
export const actRegisterCourse = (id)=>{
    return (dispatch)=>{
        dispatch(actRegisterCourseRequest());
        http.get(`courses/${id}/access-course/`).then((rs)=>{
            dispatch(actRegisterCourseSuccess(rs.data));
            dispatch(actGetDetailCourse(id));
        }).catch((err)=>{
            // console.log(err.response.data);
            dispatch(actRegisterCourseFailed(err.response.data));
        })
    }
}
const actRegisterCourseRequest = ()=>{
    return {
        type:Type.REGISTER_COURSE_REUQEST
    }
}
const actRegisterCourseSuccess = (data)=>{
    return {
        type:Type.REGISTER_COURSE_SUCCESS,
        data:data
    }
}
const actRegisterCourseFailed = (err)=>{
    return {
        type:Type.REGISTER_COURSE_FAILED,
        err:err
    }
}
export const actGetDetailCourse=(id)=>{
    return (dispatch)=>{
        dispatch(actGetDetailCourseRequest())
        let promise = http.get(`courses/${id}/`);
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

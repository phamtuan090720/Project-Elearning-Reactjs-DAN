import * as Type from './type';
import { authHttp, http } from '../../../api/setting';
export const actRegisterCourse = (id)=>{
    return (dispatch)=>{
        dispatch(actRegisterCourseRequest());
        authHttp.get(`courses/${id}/access-course/`).then((rs)=>{
            dispatch(actRegisterCourseSuccess(rs.data));
            // khi đăng kí hoàn tất sẽ gọi lại api để get lại thông tin khóa học.
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
            // console.log('data Course',rs);
            dispatch(actGetDetailCourseSuccess(rs.data))
        })
        promise.catch(err=>{
            // console.log(err?.response.data?.mess);
            dispatch(actGetDetailCourseFailed(err?.response.data?.mess));
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

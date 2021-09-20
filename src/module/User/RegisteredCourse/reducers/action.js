import {http} from '../../../../api/setting.js';
import * as Type from './type.js';

const actGetListRegisteredCourse = (page='?page=1')=>{
    return (dispatch)=>{
        http.get(`user/course/?`)
    }
}
const actGetListRegisteredCourseRequest=()=>{
    return {
        type:Type.GET_LIST_COURSE_USER_REQUEST
    }
}
const actGetListRegisteredCourseSuccesst=(data)=>{
    return {
        type:Type.GET_LIST_COURSE_USER_SUCCESS,
        data:data
    }
}
const actGetListRegisteredCourseFailed=(err)=>{
    return {
        type:Type.GET_LIST_COURSE_USER_FAILED,
        err:err
    }
}
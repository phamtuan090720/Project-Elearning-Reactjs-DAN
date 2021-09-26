import {http} from '../../../../api/setting.js';
import * as Type from './type.js';

export const actGetListRegisteredCourse = (page='page=1',history)=>{
    return (dispatch)=>{
        dispatch(actGetListRegisteredCourseRequest());
        http.get(`user/course/?${page}`).then((rs)=>{
            // console.log(rs.data)
            // console.log(typeof(rs.data.results))
            dispatch(actGetListRegisteredCourseSuccesst(rs.data.results));
            // console.log(page.substr(page.length-1))
            // console.log(rs.data)
            let pagination = {
                current: parseInt(page.substr(page.length-1)),
                total:rs.data.count
            }
            dispatch(actGetListRegisteredCoursePagination(pagination));

        }).catch(error=>{
            dispatch(actGetListRegisteredCourseFailed(error.response.data.mess));
        });
    }
}
const actGetListRegisteredCourseRequest=()=>{
    return {
        type:Type.GET_LIST_COURSE_USER_REQUEST
    }
}
const actGetListRegisteredCoursePagination=(obj)=>{
    return{
        type:Type.GET_LIST_COURSE_USER_PAGINATION,
        data:obj
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
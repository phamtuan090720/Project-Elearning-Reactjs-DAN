import {authHttp } from '../../../../api/setting.js';
import * as Type from './type.js';

export const actGetListRegisteredCourse = (page = 'page=1', history) => {
    return (dispatch) => {
        dispatch(actGetListRegisteredCourseRequest());
        authHttp.get(`user/course/?${page}`).then((rs) => {
            dispatch(actGetListRegisteredCourseSuccesst(rs.data.results));
            let pagination = {
                current: parseInt(page.substr(page.length - 1)),
                total: rs.data.count
            }
            dispatch(actGetListRegisteredCoursePagination(pagination));

        }).catch(error => {
            if (error.response?.data?.mess) {
                return dispatch(actGetListRegisteredCourseFailed(error.response.data.mess));
            }
            else if(error.response?.data?.detail){
                return dispatch(actGetListRegisteredCourseFailed(error.response.data.mess));
            }
            else{
                return dispatch(actGetListRegisteredCourseFailed(error));
            }

        });
    }
}
const actGetListRegisteredCourseRequest = () => {
    return {
        type: Type.GET_LIST_COURSE_USER_REQUEST
    }
}
const actGetListRegisteredCoursePagination = (obj) => {
    return {
        type: Type.GET_LIST_COURSE_USER_PAGINATION,
        data: obj
    }
}
const actGetListRegisteredCourseSuccesst = (data) => {
    return {
        type: Type.GET_LIST_COURSE_USER_SUCCESS,
        data: data
    }
}
const actGetListRegisteredCourseFailed = (err) => {
    return {
        type: Type.GET_LIST_COURSE_USER_FAILED,
        err: err
    }
}
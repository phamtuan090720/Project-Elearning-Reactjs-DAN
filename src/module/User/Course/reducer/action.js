import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import {  http_auth } from '../../../../api/http_auth';
import * as Type from '../reducer/type';
// export const getInfoCourse = (page = 1, kw = '') => {
//     return (dispatch) => {
//         http.get(`courses/8/complete/?page=${page}&kw=${kw}`).then((rs) => {
//             console.log('info course', rs.data)
//             console.log(page)
//             dispatch()
//         }).catch((err) => {
//             console.log(err)
//         })
//     }
// }
const notification = (getInfoCourse,dispatch,mess) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width:400,
        okText:"confirm",
        onOk(){
           return dispatch(getInfoCourse);
        }
    });
}
const notificationErr = (mess) => {
    return Modal.error({
        title: 'This is a notification message',
        content: `${mess}`,
        width:400,
        okText:"confirm",
    });
}
export const rating = (id,data)=>{
    return (dispatch)=>{
        http_auth.post(`courses/${id}/rating/`,data).then((rs)=>{
            console.log(rs)
            notification(getInfoCourse(id),dispatch,rs.data);
        }).catch((err)=>{
            console.log(err)
            notificationErr(err?.response.data?.mess)
        })
    }
}
export const getInfoCourse = (id, page = 1, kw = '') => {
    return (dispatch) => {
        dispatch(getInfoCourseRequest());
        http_auth.get(`courses/${id}/complete/?page=${page}&kw=${kw}`).then((rs) => {
            console.log(rs.data)
            dispatch(getInfoCourseSuccess(rs.data.results));
            let pagination = {
                current: parseInt(page),
                total: rs.data.count
            }
            dispatch(setPagination(pagination))
        }).catch((error) => {
            console.log(error)
            if (error?.response.data?.mess) {
                return dispatch(getInfoCourseFailed(error?.response.data?.mess));
            }
            else if(error?.response?.data?.detail &&  error?.response.status === 401){
                return dispatch(getInfoCourseFailed(Err401(error?.response.data?.detail)));
            }
        })
    }
}
const Err401 = (err) => {
    return <>
        {err} &nbsp; <Link to='/login'>Go to Login</Link>
    </>
}
const setPagination = (pagination) => {
    return {
        type: Type.SET_PAGINATION,
        data: pagination
    }
}
const getInfoCourseRequest = () => {
    return {
        type: Type.GET_COURSE_REQUEST
    }
}

const getInfoCourseSuccess = (data) => {
    return {
        type: Type.GET_COURSE_SUCCESS,
        data: data
    }
}

const getInfoCourseFailed = (err) => {
    return {
        type: Type.GET_COURSE_FAILED,
        err: err
    }
}
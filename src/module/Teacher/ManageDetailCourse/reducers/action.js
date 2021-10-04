import { Modal } from 'antd';
import { http } from '../../../../api/setting.js';
import * as Type from './type';
const notification = (mess, confirm, dispatch) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
        onOk() {
            return dispatch(confirm)
        }
    });
}

const notificationErr = (mess) => {
    return Modal.error({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
    });
}
export const actDeleteLesson = (id,idCourse)=>{
    return (dispatch)=>{
        http.delete(`lesson/${id}/`).then((rs)=>{
            notification("Succesfully",getListLesson(idCourse),dispatch);
        }).catch((err)=>{
            notificationErr("Delete Failed")
        })
    }
    
}
export const addLesson = (id,data,form)=>{
    return (dispatch)=>{
        http.post(`courses/${id}/add-lesson/`,data).then((rs)=>{
            console.log(rs)
            notification(rs.data.mess,getListLesson(id),dispatch);
            form.resetFields()
            dispatch({type:Type.SET_STATUS_OPENCEATEFORM,status:false});
        }).catch((err)=>{
            console.log(err);
            if(err?.response.data?.mess){
                notificationErr(err?.response.data?.mess)
            }
        });
    }
}
export const getListLesson = (id) => {
    return (dispatch) => {
        dispatch(getListLessonRequest());
        http.get(`courses/${id}/lesson/`).then((rs) => {
            dispatch(getListLessonSuccess(rs.data));
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return dispatch(getListLessonFailed(error?.response.data?.mess));
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return dispatch(getListLessonFailed(error?.response.data?.detail))
            }
            else {
                console.log(error)
            }
        })
    }
}
const getListLessonRequest = () => {
    return {
        type: Type.GET_LIST_LESSON_REQUEST
    }
}
const getListLessonSuccess = (data) => {
    return {
        type: Type.GET_LIST_LESSON_SUCCESS,
        data: data
    }
}
const getListLessonFailed = () => {
    return {
        type: Type.GET_LIST_LESSON_FAILED
    }
}

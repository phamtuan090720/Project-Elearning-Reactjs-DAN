import { http } from '../../../api/setting.js';
import * as Type from './type.js';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
const countDown = (actGetLesson,dispatch,mess) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width:400,
        okText:"confirm",
        onOk(){
           return dispatch(actGetLesson);
        }
    });
}
export const actCompleteLesson = (id) => {
    return (dispatch) => {
        http.post(`lesson/${id}/complete-lesson/`).then((rs) => {
            countDown(actGetLesson(id),dispatch,rs.data.mess);
        }).catch((err) => {
            if (err?.response?.data?.mess) {
                return alert(err?.response?.data?.mess)
            }
            else if (err?.response.data?.detail) {
                return alert(err?.response.data?.detail)
            }
        })
    }
}
export const actGetLesson = (id) => {
    return (dispatch) => {
        dispatch(actGetLessonRequest());
        setTimeout(() => {
            http.get(`lesson/${id}/`).then((rs) => {
                console.log(rs.data)
                dispatch(actGetLessonSuccess(rs.data));
                if (rs.data.list_video.length > 0) {
                    dispatch(actChangeVideo(rs.data.list_video[0]))
                }
            }).catch((err) => {
                // console.log(err?.response.data?.mess)
                if (err?.response?.data?.mess) {
                    return dispatch(actGetLessonFailed(err?.response.data?.mess))
                }
                else if (err?.response.data?.detail && err?.response.status === 401) {
                    return dispatch(actGetLessonFailed(Err401(err?.response.data?.detail)))
                }
                else {
                    return dispatch(actGetLessonFailed(err.response.data?.detail))
                }

            });
        }, 1000);

    }
}
const Err401 = (err) => {
    return <>
        {err} &nbsp; <Link to='/login'>Go to Login</Link>
    </>
}
const actGetLessonRequest = () => {
    return {
        type: Type.GET_LESSON_REQUEST
    }
}
const actGetLessonSuccess = (data) => {
    return {
        type: Type.GET_LESSON_SUCCESS,
        data: data
    }
}
const actGetLessonFailed = (err) => {
    return {
        type: Type.GET_LESSON_FAILED,
        err: err
    }
}
export const actChangeVideo = (link) => {
    return {
        type: Type.CHANGE_VIDEO,
        link: link
    }
}

import { Modal } from "antd";
import { http_auth } from "../../../api/http_auth";
import * as Type from './type';
const notification = (mess, confirm) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
        onOk() {
            return confirm()
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
export const actionRegisterTeacher = (data, history) => {
    return (dispatch) => {
        dispatch(actionRegisterRequest());

        http_auth.post('teacher/register-teacher/', data).then((rs) => {
            notification(rs.data, () => history.push('/home'))
            dispatch(actionRegisterSuccess(rs.data));
        }).catch((err) => {
            notificationErr(err.respone)
            dispatch(actionRegisterFailed(err));
        })

    }
}

export const checkActiveTeacher = () => {
    return (dispatch) => {
        http_auth.get('teacher/check-active-teacher/').then((rs) => {
            console.log(rs.data.access)
            dispatch({
                type: Type.TEACHER_ACTIVE,
                data: rs.data.access
            })
        }).catch((error) => {
            dispatch({
                type: Type.TEACHER_ACTIVE,
                data: null
            })
            // if (error.response?.data?.mess) {
            //     return notificationErr(error.response?.data?.mess)
            // }
            // else if (error.response?.data?.detail) {
            //     return notificationErr(error.response?.data?.detail)
            // }
            // else {
            //     return notificationErr(error)
            // }
        })
    }
}

const actionRegisterRequest = () => {
    return {
        type: Type.TEACHERREGISTER_REQUEST
    }
}
const actionRegisterSuccess = (data) => {
    return {
        type: Type.TEACHERREGISTER_SUCCESS,
        data: data
    }
}
const actionRegisterFailed = (err) => {
    return {
        type: Type.TEACHERREGISTER_FAILED,
        data: err
    }
}

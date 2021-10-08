import * as Type from './type';
import { http } from '../../../../api/setting';
import { Modal } from 'antd';
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
export const actChangeInfo = (user) => {
    return async (dispatch) => {
        await http.patch(`user/${user.get('id')}/`, user).then((rs) => {
            notification('Change info success', getInfoTeacher(), dispatch)
            console.log(rs)
        }).catch((err) => {
            notificationErr('Change info success')
            console.log(err)
        })
    }
}
export const getInfoTeacher = () => {
    return (dispatch) => {
        dispatch(getInfoTeacherRequest())
        http.get(`teacher/current-teacher/`).then((rs) => {
            dispatch(getInfoTeacherSuccess(rs.data))
            console.log(rs)
        }).catch((err) => {
            dispatch(getInfoTeacherFailed(err))
            alert(err)
        })
    }
}
const getInfoTeacherRequest = () => {
    return {
        type: Type.GET_INFO_REQUEST
    }
}
const getInfoTeacherSuccess = (data) => {
    return {
        type: Type.GET_INFO_SUCCESS,
        data: data
    }
}
const getInfoTeacherFailed = (err) => {
    return {
        type: Type.GET_INFO_FAILED,
        err: err
    }
}
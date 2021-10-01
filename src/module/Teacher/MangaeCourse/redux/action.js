import { Modal } from 'antd';
import { http } from '../../../../api/setting';
import * as Type from './type';
const notification = (mess) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
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
export const actCreateCourse = (data, form, resetStateImg) => {
    return async (dispatch) => {
        await http.post('courses/create_course/', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then((rs) => {
            console.log(rs.data)
            notification(rs.data.mess)
            form.resetFields()
            resetStateImg()
        }).catch(error => {
            console.log(error)
            notificationErr(error?.response?.data?.mess)
        })
    }
}

export const actGetCategory = () => {
    return async (dispatch) => {
        dispatch(actGetCategoryRequest())
        await http.get('category/').then((rs) => {
            dispatch(actGetCategorySuccess(rs.data));
        }).catch((err) => {
            console.log(err)
            notificationErr(err?.response?.data?.detail)
        })
    }
}

const actGetCategoryRequest = () => {
    return {
        type: Type.GET_CATEGORIES_REQUEST
    }
}
const actGetCategorySuccess = (data) => {
    return {
        type: Type.GET_CATEGORIES_SUCCESS,
        data: data
    }
}
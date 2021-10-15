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
export const actDeleteLesson = (id, idCourse) => {
    return (dispatch) => {
        http.delete(`lesson/${id}/`).then((rs) => {
            notification("Succesfully", getListLesson(idCourse), dispatch);
        }).catch((err) => {
            notificationErr("Delete Failed")
        })
    }

}
export const actChangeActive = (id, idCourse, data) => {
    return (dispatch) => {
        http.patch(`lesson/${id}/`, data).then((rs) => {
            notification("Successfully", getListLesson(idCourse), dispatch)
        }).catch((err) => {
            notificationErr("Failed")
        })
    }
}
export const actEditLesson = (id, idCourse, data, form) => {
    return async (dispatch) => {
        await http.patch(`lesson/${id}/`, data).then((rs) => {
            notification("Successfully", getListLesson(idCourse), dispatch)
            dispatch({ type: Type.SET_STATUS_OPENEDITFORM, status: false })
            form.resetFields()
        }).catch((err) => {
            notificationErr("Failed")
        })
    }
}
export const addLesson = (id, data, resetFrom) => {
    return (dispatch) => {
        http.post(`courses/${id}/add-lesson/`, data).then((rs) => {
            console.log(rs)
            notification(rs.data.mess, getListLesson(id), dispatch);
            resetFrom();
            dispatch({ type: Type.SET_STATUS_OPENCEATEFORM, status: false });
        }).catch((err) => {
            console.log(err);
            if (err?.response.data?.mess) {
                notificationErr(err?.response.data?.mess)
            }
        });
    }
}

export const getListLesson = (id, page = 1, kw = '') => {
    return (dispatch) => {
        dispatch(getListLessonRequest());
        http.get(`courses/${id}/lesson/?page=${page}&kw=${kw}`).then((rs) => {
            dispatch(getListLessonSuccess(rs.data));
            let pagination = {
                current: parseInt(page),
                total: rs.data.count
            }
            dispatch(setPagination(pagination));
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
const setPagination = (pagination) => {
    return {
        type: Type.SET_PAGINATION,
        data: pagination
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
// FILE 
export const actAddFile = (id, data, closeForm) => {
    return (dispatch) => {
        http.post(`lesson/${id}/add-file/`, data).then((rs) => {
            console.log(rs.data)
            notification(rs.data.mess, getDetailLesson(id), dispatch);
            closeForm();
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }
}
export const actEditFile = (id, idLesson, data, closeForm) => {
    return (dispatch) => {
        http.patch(`file/${id}/`, data).then((rs) => {
            console.log(rs.data)
            notification("SuccessFully", getDetailLesson(idLesson), dispatch);
            if (closeForm) {
                closeForm();
            }
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }
}
export const actDeleteFile = (id, idLesson) => {
    return (dispatch) => {
        http.delete(`file/${id}/`).then((rs) => {
            notification("SuccessFully", getDetailLesson(idLesson), dispatch);
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }

}
// Video 
export const actAddVideo = (id, data, closeForm) => {
    return (dispatch) => {
        http.post(`lesson/${id}/add-video/`, data).then((rs) => {
            console.log(rs.data)
            notification(rs.data.mess, getDetailLesson(id), dispatch);
            closeForm();
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }
}
export const actEditVideo = (id, idLesson, data, closeForm) => {
    return (dispatch) => {
        http.patch(`video/${id}/`, data).then((rs) => {
            console.log(rs.data)
            notification("SuccessFully", getDetailLesson(idLesson), dispatch);
            if (closeForm) {
                closeForm();
            }
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }
}
export const actDeleteVideo = (id, idLesson) => {
    return (dispatch) => {
        http.delete(`video/${id}/`).then((rs) => {
            notification("SuccessFully", getDetailLesson(idLesson), dispatch);
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }

}
// Home Work 
export const actAddHomeWork = (id, data, closeForm) => {
    return (dispatch) => {
        http.post(`lesson/${id}/add-homework/`, data).then((rs) => {
            console.log(rs.data)
            notification(rs.data.mess, getDetailLesson(id), dispatch);
            closeForm();
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }
}
export const actEditHomeWork = (id, idLesson, data, closeForm) => {
    return (dispatch) => {
        http.patch(`homeWork/${id}/`, data).then((rs) => {
            console.log(rs.data)
            notification("SuccessFully", getDetailLesson(idLesson), dispatch);
            if (closeForm) {
                closeForm();
            }
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }
}
export const actDeleteHomeWork = (id, idLesson) => {
    return (dispatch) => {
        http.delete(`homeWork/${id}/`).then((rs) => {
            notification("SuccessFully", getDetailLesson(idLesson), dispatch);
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }

}

export const getDetailLesson = (id) => {
    return (dispatch) => {
        dispatch(getDetailLessonRequest())
        http.get(`lesson/${id}/`).then((rs) => {
            console.log(rs.data)
            dispatch(getDetailLessonSuccess(rs.data));
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return dispatch(getDetailLessonFailed(error?.response.data?.mess));
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return dispatch(getDetailLessonFailed(error?.response.data?.detail))
            }
            else if (error?.response.data?.detail) {
                return dispatch(getDetailLessonFailed(error?.response.data?.detail))
            }
            else {
                console.log(error)
            }
        })
    }
}
const getDetailLessonRequest = () => {
    return {
        type: Type.GET_DETAIL_LESSON_REQUEST
    }
}
const getDetailLessonSuccess = (data) => {
    return {
        type: Type.GET_DETAIL_LESSON_SUCCESS,
        data: data
    }
}
const getDetailLessonFailed = (err) => {
    return {
        type: Type.GET_DETAIL_LESSON_REQUEST,
        err: err
    }
}
export const actAllowStudentJoinCourse = (idCourse, data) => {
    return (dispatch) => {
        http.post(`courses/${idCourse}/accept-student/`, data).then((rs) => {
            notification(rs.data.mess, actGetListStudentInCourse(idCourse), dispatch)
        }).catch((err) => {
            console.log(err)
            notificationErr('Failed')
        })
    }
}
export const actGetListStudentInCourse = (id) => {
    return (dispatch) => {
        dispatch(actGetListStudentInCourseRequest())
        http.get(`courses/${id}/get-student-course/`).then((rs) => {
            dispatch(actGetListStudentInCourseSuccess(rs.data))
            console.log(rs.data)
        }).catch((error) => {
            if (error?.response?.data?.mess) {
                return dispatch(actGetListStudentInCourseFailed(error?.response?.data?.mess));
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return dispatch(actGetListStudentInCourseFailed(error?.response.data?.detail))
            }
            else if (error?.response.data?.detail) {
                return dispatch(actGetListStudentInCourseFailed(error?.response.data?.detail))
            }
            else {
                console.log(error)
            }
        })

    }
}

const actGetListStudentInCourseRequest = () => {
    return {
        type: Type.GET_STUDENT_REQUEST
    }
}
const actGetListStudentInCourseSuccess = (data) => {
    return {
        type: Type.GET_STUDENT_SUCCESS,
        data: data
    }
}
const actGetListStudentInCourseFailed = (err) => {
    return {
        type: Type.GET_STUDENT_FAILED,
        err: err
    }
}
export const getInfoStatisticsCouser = (id) => {
    return (dispatch) => {
        dispatch(getInfoStatisticsCouserRequest())
        http.get(`courses/${id}/statistics/`).then((rs) => {
            console.log(rs.data)
            dispatch(getInfoStatisticsCouserSuccess(rs.data))
        }).catch((err) => {
            dispatch(getInfoStatisticsCouserFalied(err))
        })
    }
}
const getInfoStatisticsCouserRequest = () => {
    return {
        type: Type.GET_STATISCS_COURSE_REQUEST
    }
}
const getInfoStatisticsCouserSuccess = (data) => {
    return {
        type: Type.GET_STATISCS_COURSE_SUCCESS,
        data: data
    }
}
const getInfoStatisticsCouserFalied = (err) => {
    return {
        type: Type.GET_STATISCS_COURSE_FAILED,
        err: err
    }
}
import { Modal } from 'antd';
import { http } from '../../../../api/setting';
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
export const actChangeType = (id, data) => {
    return (dispatch) => {
        http.patch(`courses/${id}/`, data).then((rs) => {
            notification("Successfully", actGetMyCourse(), dispatch)
        }).catch((err) => {
            notificationErr("Failed")
        })
    }
}
export const actChangeActive = (id, data) => {
    return (dispatch) => {
        http.patch(`courses/${id}/`, data).then((rs) => {
            notification("Successfully", actGetMyCourse(), dispatch)
        }).catch((err) => {
            notificationErr("Failed")
        })
    }
}
export const actEditCourse = (id, data, tags) => {
    return async (dispatch) => {
        await http.patch(`courses/${id}/`, data).then((rs) => {
            notification("Successfully", actGetMyCourse(), dispatch)
            dispatch({ type: Type.SET_STATUS_OPENEDITFROM, status: false })
        }).catch((err) => {
            notificationErr("Failed")
        })
        if (tags) {
            data = { "tags": tags }
            await http.post(`courses/${id}/add-tag/`, data).then((rs) => {

            }).catch((err) => {
                console.log(err)
                notificationErr("Add Tags To Failed")
            })
        }
    }
}
export const actCreateCourse = (data, form, resetStateImg) => {
    return async (dispatch) => {
        await http.post('courses/create_course/', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then((rs) => {
            console.log(rs.data)
            notification(rs.data.mess, actGetMyCourse(), dispatch)
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

export const actDeleteCourse = (id) => {
    return async (dispatch) => {
        await http.delete(`courses/${id}/`).then((rs) => {
            notification("Successfully", actGetMyCourse(), dispatch)
        }).catch((err) => {
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
export const actGetMyCourse = (page = 1, kw = '') => {
    return (dispatch) => {
        dispatch(actGetMyCourseRequest())
        http.get(`teacher/get-list-courses/?page=${page}&kw=${kw}`).then((rs) => {
            dispatch(actGetMyCourseSuccess(rs.data.results));
            console.log(rs)
            let pagination = {
                current: parseInt(page),
                total: rs.data.count
            }
            dispatch(setPagination(pagination))
        }).catch((err) => {
            notificationErr(err?.response?.data?.detail)
            console.log(err)
            dispatch(actGetMyCourseFailed(err?.response?.data?.mess));
        });
    }
}
const actGetMyCourseRequest = () => {
    return {
        type: Type.GET_MY_COURSE_REQUEST
    }
}
const actGetMyCourseSuccess = (data) => {
    return {
        type: Type.GET_MY_COURSE_SUCCESS,
        data: data
    }
}
const actGetMyCourseFailed = (err) => {
    return {
        type: Type.GET_MY_COURSE_FAILED,
        err: err

    }
}
const setPagination = (pagination) => {
    return {
        type: Type.SET_PAGINATION,
        data: pagination
    }
}


// export const actEditCourse = (id, data) => {
//     return async (dispatch) => {
//         await http.patch(`courses/${id}/`, data, { headers: { 'Content-Type': 'multipart/form-data' } }).then((rs) => {
//             console.log(rs)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }
// }
import { http } from '../../../../api/setting';
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
export const getInfoCourse = (id, page = 1, kw = '') => {
    return (dispatch) => {
        dispatch(getInfoCourseRequest());
        http.get(`courses/${id}/complete/?page=${page}&kw=${kw}`).then((rs) => {
            console.log(rs.data)
            dispatch(getInfoCourseSuccess(rs.data.results));
            let pagination = {
                current: parseInt(page),
                total: rs.data.count
            }
            dispatch(setPagination(pagination))
            // console.log(pagination)
        }).catch((error) => {
            console.log(error)
            console.log(error?.response.data)
            dispatch(getInfoCourseFailed(error?.response.data.mess));
        })
    }
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
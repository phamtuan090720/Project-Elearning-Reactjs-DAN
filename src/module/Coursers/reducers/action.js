import { http } from '../../../api/setting';
import * as Type from './type';
export const getCategory = () => {
    return (dispatch) => {
        let promise = http.get('category/');
        promise.then((result) => {
            dispatch({
                type: Type.GET_CATEGORIES,
                data: result.data
            })
        })
        promise.catch((error) => {
            dispatch({
                type: "ERROR",
                data: error
            })
        })
    }
}

export const getCourse = (page = "?page=1") => {
    return (dispatch) => {
        dispatch(actGetCoursesRequest());
        setTimeout(() => {
            http.get(`courses/${page}`).then((result) => {
                dispatch(actGetCoursesSuccess(result.data.results))
                dispatch({
                    type: Type.INFO_PAGINATION,
                    data: {
                        total: result.data.count,
                        current: parseInt(page.substr(page.length - 1)),
                        pageSize: 6
                    }
                })
            }).catch(err => {
                dispatch(actGetCoursesFailed(err));
            })
        }, 800)
    }
}
export const searchCourse = (page = 1, dataSreach) => {
    if (dataSreach) {
        return (dispatch) => {

            dispatch(actGetCoursesRequest());
            http.get(`courses/?page=${page}&kw=${dataSreach.kw ? dataSreach.kw : ''}&rate=${dataSreach.rate ? dataSreach.rate : ''}&fee=${dataSreach.fee ? dataSreach.fee : ''}&public=${dataSreach.public ? dataSreach.public : ''}&category=${dataSreach.category ? dataSreach.category : ''}`).then((result) => {
                console.log(result.data)
                dispatch(actGetCoursesSuccess(result.data.results))
                dispatch({
                    type: Type.INFO_PAGINATION,
                    data: {
                        total: result.data.count,
                        current: page,
                        pageSize: 6
                    }
                })
            }).catch((err) => {
                dispatch(actGetCoursesFailed(err));
            })
        }
    }
    else {
        return (dispatch) => {
            dispatch(actGetCoursesRequest());
            http.get(`courses/?page=${page}`).then((result) => {
                dispatch(actGetCoursesSuccess(result.data.results))
                dispatch({
                    type: Type.INFO_PAGINATION,
                    data: {
                        total: result.data.count,
                        current: page,
                        pageSize: 6
                    }
                })
            }).catch(err => {
                dispatch(actGetCoursesFailed(err));
            })
        }
    }

}
const actGetCoursesRequest = () => {
    return {
        type: Type.GET_COURSES_REQUEST
    }
}
const actGetCoursesSuccess = (data) => {
    return {
        type: Type.GET_COURSES_SUCCESS,
        data: data
    }
}
const actGetCoursesFailed = (err) => {
    return {
        type: Type.GET_COURSES_FAILED,
        data: err
    }
}
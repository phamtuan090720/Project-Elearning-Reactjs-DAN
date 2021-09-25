import { http } from '../../../api/setting.js';
import * as Type from './type.js';
import { Link } from 'react-router-dom';
export const actGetLesson = (id) => {
    return (dispatch) => {
        dispatch(actGetLessonRequest());
        setTimeout(() => {
            http.get(`lesson/${id}/`).then((rs) => {
                // console.log(rs.data)
                dispatch(actGetLessonSuccess(rs.data));
            }).catch((err) => {
                // console.log(err?.response.data?.mess)
                if (err?.response.data?.mess) {
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
import { http_auth } from '../../../../api/http_auth.js';
import * as Type from './type';
export const getInfoStatisticsCouser = () => {
    return (dispatch) => {
        dispatch(getInfoStatisticsCouserRequest())
        http_auth.get(`teacher/statistics/`).then((rs) => {
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
import { http } from '../../../../api/setting.js';
import * as Type from './type';
export const getInfoStatisticsCouser = () => {
    return (dispatch) => {
        dispatch(getInfoStatisticsCouserRequest())
        http.get(`teacher/statistics/`).then((rs) => {
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
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getInfoStatisticsCouser } from '../../reducers/action'
import StudentJoinCourse from './StudentJoinCourse/StudentJoinCourse';
import Loading from '../../../../../components/Loading/LoadingTeacher.js';
import StudentRateCorse from './StudentJoinCourse/StudentRateCorse';
import Paper from '../../../../../components/Paper/Paper';
import style from './Statistical.module.scss';
export default function Statistical() {
    const { loading } = useSelector(state => state.statisticsCourseReducer)
    const dispatch = useDispatch()
    const param = useParams();
    React.useEffect(() => {
        dispatch(getInfoStatisticsCouser(param.id));
    }, [dispatch, param]);
    if (loading) return <Loading />
    return (
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Paper className={style.wrapChart}>
                <StudentJoinCourse />
            </Paper>
            <Paper className={style.wrapChart}>
                <StudentRateCorse />
            </Paper>
        </div>
    )
}

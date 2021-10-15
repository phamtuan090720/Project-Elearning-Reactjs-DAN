import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../components/Loading/LoadingTeacher';
import Paper from '../../../../components/Paper/Paper';
import Header from '../components/Header/Header.js';
import styles from './Dashboard.module.scss';
import StatisticListCourse from '../components/StatisticListCourse/StatisticListCourse.js';
import { getInfoStatisticsCouser } from '../reducer/action.js';
export default function Dashboard() {
    const { loading } = useSelector(state => state.statisticsListCourseReducer)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getInfoStatisticsCouser())
    }, [dispatch])
    if (loading) return <Loading />
    return (
        <div>
            <Header />
            <Paper className={styles.wrapChart}>
                <StatisticListCourse />
            </Paper>
        </div>
    )
}

import React from 'react'
import { useParams } from 'react-router-dom';
import CardCouse from './../components/CardCourse/CardCouse';
import BackgroundCourse from './../components/BackgroundCourse/BackgroundCourse';
import Content from './../components/Content/Content';
import styles from './DetailCourse.moudle.scss';
import { actGetDetailCourse } from '../reducers/action';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading/Loading';
export default function DetailCourse() {
    const { loading, detailCourse } = useSelector(state => state.DetailCourseReducer);
    let router = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(actGetDetailCourse(router.id));
    }, [dispatch, router.id]);
    if (loading) return <Loading />
    return (
        <>
            <BackgroundCourse />
            <CardCouse subject={detailCourse?.subject} img={detailCourse?.image} countStudent={detailCourse?.student}/>
            <div className={styles.bg}>
                <Content />
            </div>

        </>
    )
}

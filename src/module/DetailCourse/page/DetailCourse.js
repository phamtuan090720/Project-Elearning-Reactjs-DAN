import React from 'react'
import { useParams } from 'react-router-dom';
import CardCouse from './../components/CardCourse/CardCouse';
import BackgroundCourse from './../components/BackgroundCourse/BackgroundCourse';
import Content from './../components/Content/Content';
import styles from './DetailCourse.moudle.scss';
import { actGetDetailCourse } from '../reducers/action';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading/Loading';
import * as Type from '../reducers/type';
import { message } from 'antd';
export default function DetailCourse() {
    // const [haveMessage, setHaveMessage] = React.useState(false);
    const { loading, detailCourse } = useSelector(state => state.DetailCourseReducer);
    const { mess,err } = useSelector(state => state.RegisterCourseReducer);
    let router = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(actGetDetailCourse(router.id));
    }, [dispatch, router.id]);
    const renderMessage = (type,mess) => {
        switch (type) {
            case "success":
                return message.success(mess);
            case "error":
                return message.error(mess);
            case "warning":
                return message.warning(mess);
            default:
                break;
        }
    }
    React.useEffect(() => {
        if(mess){
            renderMessage("success",mess);
            dispatch({
                type:Type.REGISTER_COURSE_REUQEST
            })
        }
        if(err){
            renderMessage("error",err)
            dispatch({
                type:Type.REGISTER_COURSE_REUQEST
            })
        }
    }, [mess,err,dispatch]);

    if (loading) return <Loading />
    return (
        <>
            <BackgroundCourse />
            <CardCouse subject={detailCourse?.subject} img={detailCourse?.image} countStudent={detailCourse?.student} />
            <div className={styles.bg}>
                <Content />
            </div>
        </>
        
    )
}

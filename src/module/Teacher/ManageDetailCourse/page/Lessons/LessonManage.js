import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getListLesson } from '../../reducers/action';
import FormAddLesson from './FormAddLesson/FormAddLesson';
import Header from './Header/Header';
import styles from './LessonManage.module.scss';
import TableLesson from './TableLesson/TableLesson';

export default function LessonManage() {
    const dispatch = useDispatch();
    const router = useParams();
    React.useEffect(() => {
        dispatch(getListLesson(router.id));
    }, [dispatch, router.id])
    return (
        <div className={styles.wrapContainer}>
            <Header />
            <TableLesson />
            <FormAddLesson/>
        </div>
    )
}

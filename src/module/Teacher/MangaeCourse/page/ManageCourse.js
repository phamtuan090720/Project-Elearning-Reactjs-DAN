import React from 'react';
import { useDispatch } from 'react-redux';
import FormCreateCourse from '../components/FormCreateCourse/FormCreateCourse';
import FormEditCourse from '../components/FormEditCourse/FormEditCourse';
import Header from '../components/Header/Header';
import TableListCouse from '../components/TableListCourse/TableListCouse';
import { actGetCategory, actGetMyCourse } from '../redux/action';
// import MyLoading from '../../../../components/Loading//Loading.js';
export default function ManageCourse() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(actGetCategory());
    }, [dispatch]);
    React.useEffect(() => {
        dispatch(actGetMyCourse());
    }, [dispatch]);
    // if (loading) return <MyLoading />
    return (
        <div className='container'>
            <Header />
            <TableListCouse />
            <FormCreateCourse />
            <FormEditCourse />
        </div>
    )
}

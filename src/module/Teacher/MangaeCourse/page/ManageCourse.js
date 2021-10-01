import React from 'react';
import { useDispatch } from 'react-redux';
import FornCreateCourse from '../components/FormCreateCourse/FormCreateCourse';
import Header from '../components/Header/Header';
import TableListCouse from '../components/TableListCourse/TableListCouse';
import { actGetCategory } from '../redux/action';

export default function ManageCourse() {
    const dispatch = useDispatch()
    React.useEffect(() => {
       dispatch(actGetCategory());
    }, [dispatch])
    return (
        <div className='container'>
           <Header/>
           <TableListCouse/>
           <FornCreateCourse />
        </div>
    )
}

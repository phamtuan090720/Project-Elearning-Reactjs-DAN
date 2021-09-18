import { Col, Empty, Row } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory,useLocation } from 'react-router';
import styles from './ListCourses.module.scss';
import Course from '../../../../components/Course/Course';
import PaginationCustom from '../../../../components/Pagination/Pagination';
import { getCourse } from '../../reducers/action';
import Loading from '../../../../components/Loading/Loading';
export default function ListCourses() {
    const { arrCourses,padingation,loading } = useSelector(state => state.CoursesReducer)
    const dispatch = useDispatch();
    const router = useLocation(); 
    const history = useHistory();
    const [page, setpage] = useState(1)

    useEffect(() => {
        dispatch(getCourse(router.search));
        setpage(router.search===''?1:router.search.substr(router.search.length-1));
    }, [dispatch,router.search,padingation])

    const onChange = (pageNumber) => {
        history.push(`/courses/?page=${pageNumber}`)
    }
    const renderCoures = useCallback(() => {
        if(!arrCourses) return
        return arrCourses.map((item, index) => {
            return <Col key={index} span={8}>
                <Course subject={item.name_course} img={item.image}
                    description={item.description} teacher={item.teacher.user.username} price={item.fee} id={item.id} rate={item.rate} tags={item.tags} />
            </Col>
        })
    }, [arrCourses]);
    if(loading) return <Loading/>
    if(!arrCourses) return <Empty/>
    return (
        <>
            <Row className={styles.wrap}>
                {renderCoures()}
            </Row>
            <PaginationCustom onChange={onChange} defaultCurrent={page} defaultPageSize={padingation.count} total={padingation.total} />
        </>
    )
}

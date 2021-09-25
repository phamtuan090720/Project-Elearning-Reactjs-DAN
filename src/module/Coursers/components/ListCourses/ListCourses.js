import { Col, Empty, Row, Pagination } from 'antd';
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import styles from './ListCourses.module.scss';
import Course from '../../../../components/Course/Course';
import { getCourse } from '../../reducers/action';
import Loading from '../../../../components/Loading/Loading';
export default function ListCourses() {
    const { arrCourses, padingation, loading } = useSelector(state => state.CoursesReducer)
    const dispatch = useDispatch();
    const router = useLocation();
    const history = useHistory();
    useEffect(() => {
        dispatch(getCourse(router.search));
    }, [dispatch, router.search])
    // console.log(router.search === '')

    const onChange = (pageNumber) => {
        history.push(`/courses/?page=${pageNumber}`)
    }
    const renderCoures = useCallback(() => {
        if (!arrCourses) return
        return arrCourses.map((item, index) => {
            return <Col key={index} span={8}>
                <Course subject={item.name_course} img={item.image}
                    description={item.description} teacher={item.teacher?.user.username} price={item.fee} id={item.id} rate={item.rate} tags={item.tags} />
            </Col>
        })
    }, [arrCourses]);
    if (loading) return <Loading />
    if (!arrCourses) return <Empty />
    return (
        <>
            <Row className={styles.wrap}>
                {renderCoures()}
            </Row>
            <Pagination onChange={onChange} current={router.search === '' ? 1 : padingation.current} defaultPageSize={padingation.pageSize} total={padingation.total} />
        </>
    )
}

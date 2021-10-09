import { Col, Empty, Row, Pagination } from 'antd';
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './ListCourses.module.scss';
import Course from '../../../../components/Course/Course';
import { getCourse, searchCourse } from '../../reducers/action';
import Loading from '../../../../components/Loading/Loading';
export default function ListCourses() {
    const { arrCourses, padingation, loading, dataSreach } = useSelector(state => state.CoursesReducer)
    const dispatch = useDispatch();
    // const history = useHistory();
    useEffect(() => {
        dispatch(getCourse());
    }, [dispatch])
    // console.log(router.search === '')

    const onChange = (pageNumber) => {
        console.log(pageNumber)
        dispatch(searchCourse(pageNumber, dataSreach))
    }
    const renderCoures = useCallback(() => {
        if (!arrCourses) return
        return arrCourses.map((item, index) => {
            return <Col key={index} span={8}>
                <Course subject={item.name_course} img={item.image}
                    description={item.description} teacher={item.teacher?.user.username} is_public={item.is_public} category={item.category} price={item.fee} id={item.id} rate={item.rate} tags={item.tags} />
            </Col>
        })
    }, [arrCourses]);
    if (loading) return <Loading />
    if (!arrCourses) return <Empty />
    if (arrCourses.length === 0) return <Empty description="No data on course listings" />
    return (
        <>
            <Row className={styles.wrap}>
                {renderCoures()}
            </Row>
            <Pagination onChange={onChange} current={padingation.current} pageSize={padingation.pageSize} total={padingation.total} />
        </>
    )
}

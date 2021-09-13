import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListCourses from '../components/ListCourses/ListCourses'
import MenuSreachCourse from '../components/MenuSreachCourse/MenuSreachCourse'
import styles from './CoursesPage.module.scss'
import { getCategory} from '../reducers/action';
export default function CoursesPage() {
    const { categoryfilter } = useSelector(state => state.CoursesReducer)
    const dispatch = useDispatch()
    React.useEffect(() => {
        function fetchData() {
            const action = getCategory()
            dispatch(action)
            // dispatch(getCourse())
        }
        fetchData();
    }, [dispatch]);
    return (
        <Layout>
            <Content className='page-spacer'>
                <Row className='container'>
                    <Col className={styles.colLeft}>
                        <MenuSreachCourse />
                    </Col>
                    <Col className={styles.colRight}>
                        <h2 className={styles.title}> {categoryfilter == null ? "All Courses" : categoryfilter + " Courses"}</h2>
                        <ListCourses />
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

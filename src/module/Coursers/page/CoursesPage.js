import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import ListCourses from '../components/ListCourses/ListCourses'
import MenuSreachCourse from '../components/MenuSreachCourse/MenuSreachCourse'
import styles from './CoursesPage.module.scss'
export default function CoursesPage() {
    return (
        <Layout>
            <Content className='page-spacer'>
                <Row className='container'>
                    <Col className={styles.colLeft}>
                       <MenuSreachCourse/>
                    </Col>
                    <Col className={styles.colRight}>
                        <h2 className={styles.title}>All Courses</h2>
                        <ListCourses/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

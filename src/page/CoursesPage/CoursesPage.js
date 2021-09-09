import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import styles from './CoursesPage.module.scss'
import MenuSreachCourse from './MenuSreachCourse/MenuSreachCourse';
import PaginationCustom from '../../components/Pagination/Pagination';
import Course from '../../components/Course/Course';
export default function CoursesPage() {
    return (
        <Layout>
            <Content className='page-spacer'>
                <Row className='container'>
                    <Col className={styles.colLeft}>
                        <MenuSreachCourse />
                    </Col>
                    <Col className={styles.colRight}>
                        <h2 className={styles.title}>All Courses</h2>
                        <Row className={styles.container_course}>
                            <Col span={8}>
                                <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                                    description="this is a description of the course test" teacher="teacher1" price="free" id='1' />
                            </Col>
                            <Col span={8}>
                                <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                                    description="this is a description of the course test" teacher="teacher1" price="free" id='2' />
                            </Col>
                            <Col span={8}>
                                <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                                    description="this is a description of the course test" teacher="teacher1" price="free" id='3' />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                                    description="this is a description of the course test" teacher="teacher1" price="free" id='4' />
                            </Col>
                            <Col span={8}>
                                <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                                    description="this is a description of the course test" teacher="teacher1" price="free" id='5' />
                            </Col>
                            <Col span={8}>
                                <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                                    description="this is a description of the course test" teacher="teacher1" price="free" id='6' />
                            </Col>
                        </Row>
                        <PaginationCustom defaultCurrent={1} defaultPageSize={100} total={500} />
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import styles from './CoursesPage.module.scss'  
import MenuSreachCourse from './MenuSreachCourse/MenuSreachCourse'
export default function CoursesPage() {
    return (
        <Layout>
            <Content className='page-spacer'>
                <Row className='container'>
                    <Col className={styles.colLeft}>
                        <MenuSreachCourse/>
                    </Col>
                    <Col className={styles.colRight}>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

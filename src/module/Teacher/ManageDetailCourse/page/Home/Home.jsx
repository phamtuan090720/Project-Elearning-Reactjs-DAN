import React from 'react';
import styles from './HomeManageCourseDetail.module.scss';
import { Row, Col, Button } from 'antd';
import Paper from '../../../../../components/Paper/Paper';


export default function HomeManageCourseDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.spanText}>
                <p>Based on your experience, we think these resources will be helpful.</p>
            </div>
            <Paper className={styles.introduce} >
                <Row align='middle'>
                    <Col span={8}><img alt='' style={{ width: '100%' }} src='/1.png' /></Col>
                    <Col span={16}>
                        <div className={styles.contentRight}>
                            <div className={styles.title}>Create an Engaging Course</div>
                            <div className={styles.content} >
                                Whether you've been teaching for years or are teaching for the first time,
                                you can make an engaging course. We've compiled resources and best practices to help you get to the next level,
                                no matter where you're starting.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Paper>
            <Paper className={styles.introduce} >
                <Row align='middle'>
                    <Col span={8}><img alt='' style={{ width: '100%' }} src='/4.png' /></Col>
                    <Col span={16}>
                        <div className={styles.contentRight}>
                            <div className={styles.title}>Join the Newcomer Challenge!</div>
                            <div className={styles.content} >
                                Get exclusive tips and resources designed to help you launch your first course faster!
                                Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!
                            </div>
                        </div>
                    </Col>
                </Row>
            </Paper>
            <Paper className={styles.introduce} >
                <Row align='middle'>
                    <Col span={8}><img alt='' style={{ width: '100%' }} src='/2.png' /></Col>
                    <Col span={16}>
                        <div className={styles.contentRight}>
                            <div className={styles.title}>Get Started with Video</div>
                            <div className={styles.content} >
                                Quality video lectures can set your course apart.
                                Use our resources to learn the basics.
                            </div>
                            <div className={styles.btnGroup}>
                                <Button>Add Video To Lesson</Button>
                            </div>
                           
                        </div>
                        
                    </Col>
                </Row>
            </Paper>
            <Paper className={styles.introduce} >
                <Row align='middle'>
                    <Col span={8}><img alt='' style={{ width: '100%' }} src='/3.png' /></Col>
                    <Col span={16}>
                        <div className={styles.contentRight}>
                            <div className={styles.title}>Build Your Audience</div>
                            <div className={styles.content} >
                                Set your course up for success by building your audience
                            </div>
                        </div>
                    </Col>
                </Row>
            </Paper>
        </div>
    )
}

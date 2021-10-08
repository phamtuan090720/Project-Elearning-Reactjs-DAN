import React from 'react'
import Paper from '../../../../../components/Paper/Paper';
import styles from './InfoUser.module.scss';
import { Col, Image, Row, Typography } from 'antd'
import { useSelector } from 'react-redux';
const { Text } = Typography;
export default function InfoTeacher() {
    const { userLogin } = useSelector(state => state.LoginReducer)
    return (
        <Paper className={styles.container}>
            <div className={styles.title}>
                <div>General Information</div>
            </div>
            <div className={styles.wrapInfo}>
                <Row justify='center'>
                    <Col span={24} style={{ marginBottom: 20 }}>
                        <div className={styles.avatar}>
                            <Image
                                width={'100%'}
                                height={'100%'}
                                src={userLogin?.avatar===null?'/default-image.jpg':userLogin?.avatar}
                                onError={(e) => { e.target.onerror = null; e.target.src = "/default-image.jpg" }} 
                            />
                        </div>
                    </Col>
                    <Col span={24}>
                        <Row style={{ marginBottom: 10 }}>
                            <Col span={4}><Text strong>Username :</Text></Col>
                            <Col><Text strong type='secondary'>{userLogin?.username}</Text></Col>
                        </Row>
                        <Row style={{ marginBottom: 10 }}>
                            <Col span={4}><Text strong>Frist Name :</Text></Col>
                            <Col><Text strong type='secondary'>{userLogin?.first_name}</Text></Col>
                        </Row>
                        <Row style={{ marginBottom: 10 }}>
                            <Col span={4}><Text strong>Last Name :</Text></Col>
                            <Col><Text strong type='secondary'>{userLogin?.last_name}</Text></Col>
                        </Row>
                        <Row style={{ marginBottom: 10 }}>
                            <Col span={4}><Text strong>Email:</Text> </Col>
                            <Col><Text strong type='secondary'>{userLogin?.email}</Text></Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </Paper>

    )
}

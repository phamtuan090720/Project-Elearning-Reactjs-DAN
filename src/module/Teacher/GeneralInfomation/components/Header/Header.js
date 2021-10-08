import React from 'react'
import Paper from '../../../../../components/Paper/Paper'
import styles from './Header.module.scss';
import { Avatar, Button, Col, Row, Space, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const { Title } = Typography;
export default function Header({ openChangeInfo }) {
    const { infoTeacher } = useSelector(state => state.infoTeacherReducer)
    return (
        <Paper className={styles.wrapHeader}>
            <Row>
                <Col span={12}>
                    <Space align='center'>
                        <Avatar src={infoTeacher?.user?.avatar} style={{ backgroundColor: '#38B2AC' }} size='large'>{infoTeacher?.user.username}</Avatar>
                        <Title level={4} style={{ marginBottom: 0 }}>Hi {infoTeacher?.user?.username} wellcome back </Title>
                    </Space>
                </Col>
                <Col span={12}>
                    <Row justify='end'>
                        <Button onClick={openChangeInfo} shape='round' type='link' icon={<SettingOutlined />}>Change Info</Button>
                    </Row>
                </Col>
            </Row>
        </Paper>
    )
}

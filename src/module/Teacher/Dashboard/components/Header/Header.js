import React from 'react'
import Paper from '../../../../../components/Paper/Paper'
import styles from './Header.module.scss';
import { Avatar, Space, Typography } from 'antd';
import { useSelector } from 'react-redux';
const { Title } = Typography;
export default function Header() {
    const { userLogin } = useSelector(state => state.LoginReducer)
    return (
        <Paper className={styles.wrapHeader}>
            <Space align='center'>
                <Avatar src={userLogin?.avatar} style={{ backgroundColor: '#38B2AC' }} size='large'>{userLogin?.username}</Avatar>
                <Title level={4} style={{ marginBottom: 0 }}>Hi {userLogin?.username} wellcome back</Title>
            </Space>
        </Paper>
    )
}

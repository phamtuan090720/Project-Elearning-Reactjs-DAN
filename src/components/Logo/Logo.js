import React from 'react'
import styles from './logo-style.module.scss'
import LogoCourse from '../../assets/img/logo.svg'
import { Typography } from 'antd';
export default function Logo(props) {
    const direction = {
        'flexDirection': props.direction,
    };
    return (
        <div style={{ display: 'flex', ...direction }} className={styles.logoContainer}>
            <img src={LogoCourse} alt="me" width="40" height="40" />
            <Typography.Text strong style={{ color: '#38B2AC' }}>TTdemy</Typography.Text>
        </div>
    )
}
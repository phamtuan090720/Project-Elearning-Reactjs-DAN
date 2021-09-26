import { Button } from 'antd';
import React from 'react';
import imgNotification from '../../assets/img/notification.png';
import styles from './PageError.module.scss';
import { useHistory } from 'react-router';
export default function PageError({ children }) {
    const history = useHistory();
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <img src={imgNotification} style={{width:'100%'}} alt='Notification' />
                <div className={styles.content}>
                    {children}
                </div>
                <div className={styles.ButtonHome}>
                    <Button type='primary' shape='round' size='large' onClick={() => {
                        history.push('/')
                    }}>Back To Home Page</Button>
                </div>
            </div>
        </div>
    )
}

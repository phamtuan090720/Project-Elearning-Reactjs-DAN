import { Avatar, Divider, Rate } from 'antd';
import React from 'react'
import styles from './Review.module.scss';
export default function Review({ point,student,review }) {
    return (
        <>
            <Divider />
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <Avatar size={50} src={student?.avatar} >{student?.username}</Avatar>
                        <p>{student?.username}</p>
                    </div>
                    <div className={styles.rate_point}>
                        <Rate defaultValue={point} disabled />
                    </div>
                </div>
                <div className={styles.review}>
                    {review}
                </div>
            </div>
        </>
    )
}

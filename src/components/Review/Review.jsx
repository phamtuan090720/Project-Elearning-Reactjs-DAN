import { Avatar, Divider, Rate } from 'antd';
import React from 'react'
import styles from './Review.module.scss';
export default function Review({ point }) {
    return (
        <>
            <Divider />
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <Avatar size={50} src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                        <p>Test</p>
                    </div>
                    <div className={styles.rate_point}>
                        <Rate style={{ fontSize: 15 }} defaultValue={point} disabled />
                    </div>
                </div>
                <div className={styles.review}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, exercitationem dolorem sapiente fugit perspiciatis eligendi architecto saepe, autem ab amet fugiat, odio ipsam alias aut fuga quasi ut quisquam deserunt?
                </div>
            </div>
        </>
    )
}

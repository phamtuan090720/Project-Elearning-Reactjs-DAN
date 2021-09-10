import { Button, Card } from 'antd'
import React from 'react'
import styles from './CardCourse.module.scss';
export default function CardCouse({ subject, img }) {
    return (
        <Card className={styles.card}
            bordered={true}
            style={{ boxShadow: "0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)" }}
            cover={<img alt={subject} src={img} style={{ height: '200px' }} />}
        >
            <p className={styles.count_enrolled}>+19 Enrolled</p>
            <Button shape='round' type="primary" block>
                Register the course
            </Button>
        </Card>
    )
}

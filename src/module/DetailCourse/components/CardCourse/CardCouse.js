import { Button, Card } from 'antd'
import React from 'react'
import styles from './CardCourse.module.scss';
export default function CardCouse({ subject, img ,countStudent}) {
    return (
        <Card className={styles.card}
            bordered={true}
            style={{ boxShadow: "0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)" }}
            cover={<img alt={subject} src={img} style={{ height: '200px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200/200" }} />}
        >
            <p className={styles.count_enrolled}>{countStudent>0?`+${countStudent} Enrolled`:'The course has not been registered yet'} </p>
            <Button style={{marginBottom:10}} shape='round' type="primary" size="large" block>
                Add your wish list
            </Button>
            <Button shape='round' type="primary" danger size="large" block>
                Register the course
            </Button>
        </Card>
    )
}

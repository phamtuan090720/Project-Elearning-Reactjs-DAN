import React from 'react';
import styles from './Item.module.scss';
import { Card } from 'antd';
import { Rate } from 'antd';


export default function Course(props) {
    return (
        <Card
            hoverable
            className={styles.cardContainer}
            cover={<img alt={props.subject} src={props.img} style={{height: '150px'}}/>}
        >
            <h2>{props.subject}</h2>
            <p>{props.description}</p>
            <div className={styles.row}>
                <p className={styles.textLeft}>{props.teacher}</p>
                <p className={styles.textRight}>{props.price}</p>
            </div>
            <Rate allowHalf defaultValue={2.5} />
        </Card>
    )
}

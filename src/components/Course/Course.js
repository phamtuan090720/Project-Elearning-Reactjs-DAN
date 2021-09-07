import { Card, Rate, Tag, Tooltip } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Item.module.scss';
export default function Course(props) {
    return (
        <Link to={`/course/${props.id}`}>
            <Card
                hoverable
                className={styles.cardContainer}
                cover={<img alt={props.subject} src={props.img} style={{ height: '150px' }} />}
            >
                <Tooltip placement="bottomLeft" title={props.subject}>
                    <h2>{props.subject}</h2>
                </Tooltip>
                <p className={styles.author}>by : {props.teacher}</p>
                <div>
                    <Tag color="#f50">#ReactJs</Tag>
                    <Tag color="#f50">#Angular</Tag>
                    <Tag color="#f50">#HTML</Tag>
                </div>
                <div className={styles.footer}>
                    <Rate className={styles.rating} allowHalf disabled defaultValue={2.5} />
                    <span className={styles.price}>{props.price}</span>
                </div>
            </Card>
        </Link>

    )
}

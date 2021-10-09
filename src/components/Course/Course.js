import { Card, Rate, Tag, Tooltip, Typography } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import TagCustom from '../Tag/TagCustom';
import styles from './Item.module.scss';
const { Text } = Typography;
export default function Course(props) {
    const renderTag = () => {
        if (props.tags.length > 0) {
            return props.tags.map((item, index) => {
                return <TagCustom key={index} content={item.name} />
            });
        }
    }
    return (
        <Link to={`/course/${props?.id}`}>
            <Card
                hoverable
                className={styles.cardContainer}
                cover={<img alt={props.subject} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200/200" }} src={props.img === null ? 'https://picsum.photos/200/200' : props.img} style={{ height: '150px' }} />}
            >
                <Tooltip placement="bottomLeft" title={props?.subject}>
                    <h2>{props?.subject}</h2>
                </Tooltip>
                <p className={styles.author}><Text strong type='secondary'>by :</Text>  {props?.teacher}</p>
                <p className={styles.author}><Text strong type='secondary'>category :</Text>  {props?.category}</p>
                <div>
                    {renderTag()}
                </div>
                <div className={styles.footer}>
                    <Rate className={styles.rating} allowHalf disabled defaultValue={props.rate} />
                    <span className={styles.price}>{props?.price === "0.00" ? "Free" : props?.price}</span>
                </div>

            </Card>
            <div className={styles.type}>
                <Tag color="#f50">{props.is_public === true ? "Public" : "Private"}</Tag>
            </div>
        </Link>

    )
}

import { Empty } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import ItemDocument from './ItemDocument'
import styles from './Document.module.scss';
export default function Document() {
    const { lesson } = useSelector(state => state.LearningReducer)
    const renderFile = () => {
        if (lesson?.list_file.length > 0) {
            return lesson?.list_file.map((item, index) => {
                return <ItemDocument key={index} file={item.file} subject={item.subject} />
            })
        }
        else {
            return <Empty description={'No document for the lesson yet!'} />
        }
    }
    return (
        <div className={styles.wrap}>
            <ul className={styles.list_item}>
                {renderFile()}
            </ul>
        </div>
    )
}

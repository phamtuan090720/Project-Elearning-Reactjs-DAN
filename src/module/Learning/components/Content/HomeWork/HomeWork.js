import { Empty } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import ItenHomeWrok from './ItenHomeWrok'

export default function HomeWork() {
    const { lesson } = useSelector(state => state.LearningReducer)
    const renderHomeWork = () => {
        if (lesson?.home_work.length > 0) {
            return lesson?.home_work.map((item, index) => {
                return <ItenHomeWrok key={index} subject={item?.subject} file={item?.file} content={item?.content} />
            })
        }
        else {
            return <Empty description={'No homework for the lesson yet!'}/>
        }
    }
    return (
        <div style={{minHeight:500,marginLeft:20,marginRight:20}}>
            {renderHomeWork()}
        </div>
    )
}

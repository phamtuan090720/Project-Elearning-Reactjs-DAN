import { Empty } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

export default function TabContent() {
    const { lesson } = useSelector(state => state.LearningReducer)
    return (
        <div style={{minHeight:500,marginLeft:20,marginRight:20}}>
            {lesson?.content === null ? <Empty description='No content' /> : lesson?.content}
        </div>
    )
}

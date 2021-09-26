import { Divider, Empty } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import Media from '../../../components/Media/Media';
import ContentLearning from '../components/Content/Content';
export default function Learning() {
    const { video } = useSelector(state => state.LearningReducer)
    const RenderMedia = () => {
        if (video) {
            return <Media video={video} />
        }
        else return <Empty description={'Lessons Without Video'} style={{ height: '40vh', backgroundColor: 'white', maxWidth: 1200, margin: '0 auto' }} />
    }
    return (
        <div>
            {RenderMedia()}
            <Divider type="vertical" />
            <ContentLearning />
        </div>
    )
}

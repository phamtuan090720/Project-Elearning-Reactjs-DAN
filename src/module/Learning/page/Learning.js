import { Divider } from 'antd';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Media from '../../../components/Media/Media';
import ContentLearning from '../components/Content/Content';
export default function Learning() {
    return (
        <div>
            <Media />
            <Divider type="vertical" />
            <ContentLearning />
        </div>
    )
}

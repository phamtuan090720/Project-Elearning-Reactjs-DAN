import { PlusOutlined } from '@ant-design/icons';
import { Button, PageHeader } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import Paper from '../../../../../../components/Paper/Paper';
import sytles from './Header.module.scss';
import * as Type from '../../../reducers/type';

export default function Header() {
    const dispatch = useDispatch()
    // const router = useParams();
    const openForm = () => {
        return dispatch({ type: Type.SET_STATUS_OPENCEATEFORM, status: true })
    }
    return (
        <Paper className={sytles.wrap}>
            <PageHeader
                title="Lesson Manage"
                extra={[
                    <Button icon={<PlusOutlined />} onClick={openForm} shape={'round'} key="1" type="primary">
                        Create Lesson
                    </Button>,
                ]}
            />
        </Paper>
    )
}

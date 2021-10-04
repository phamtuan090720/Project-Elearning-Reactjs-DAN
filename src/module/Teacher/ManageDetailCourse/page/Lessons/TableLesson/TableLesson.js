
import React from 'react'
import { Button, Modal, Space, Switch, Table, Tooltip } from 'antd'
import Paper from '../../../../../../components/Paper/Paper';
import styles from './TableLesson.module.scss';
import { BookOutlined, DeleteOutlined, EditOutlined, FileOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { actDeleteLesson } from '../../../reducers/action';
export default function TableLesson() {
    const { loading, listLesson } = useSelector(state => state.lessonManageReducer)
    const param = useParams();
    const dispatch = useDispatch()
    const deleteLesson = (id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want to delete these Lesson?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                dispatch(actDeleteLesson(id, param.id));
            }

        });
    }
    const columns = [
        {
            title: 'Lesson',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Learning Resources',
            align: 'center',
            width: '15%',
            key: 'action',
            render: (record) => <Space>
                <Tooltip placement='bottom' title='Files'>
                    <Button className={styles.btnItem} shape='circle' icon={<FileOutlined />}></Button>
                </Tooltip>
                <Tooltip placement='bottom' title='HomeWork'>
                    <Button className={styles.btnItem} shape='circle' icon={<BookOutlined />}></Button>
                </Tooltip>
                <Tooltip placement='bottom' title='Videos'>
                    <Button className={styles.btnItem} shape='circle' icon={<VideoCameraOutlined />}></Button>
                </Tooltip>
            </Space>
        },
        {
            title: 'Action',
            width: '10%',
            align: 'center',
            key: 'action',
            render: (record) => <Space>
                <Tooltip placement='bottom' title='Edit'>
                    <Button className={styles.btnItem} type='primary' shape='round' icon={<EditOutlined />}></Button>
                </Tooltip>
                <Tooltip placement='bottom' title='Delete'>
                    <Button className={styles.btnItem} type='primary' onClick={() => deleteLesson(record.id)} shape='round' icon={<DeleteOutlined />} danger></Button>
                </Tooltip>
            </Space>
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            width: '5%',
            render: (acvitve) => <Switch defaultChecked={acvitve} />
        }
    ];
    // const data =
    //     [
    //         {
    //             "key": 1,
    //             "id": 4,
    //             "subject": "Cùng Học Lạp Trình Nào Các Bạn",
    //             "image": null,
    //             "created_date": "2021-10-03T16:11:45.389554Z",
    //             "updated_date": "2021-10-03T16:11:45.389554Z",
    //             "content": "Test",
    //             "course": 59,
    //             "active": true
    //         },
    //         {
    //             "key": 2,
    //             "id": 4,
    //             "subject": "Cùng Học Lạp Trình Nào Các Bạn",
    //             "image": null,
    //             "created_date": "2021-10-03T16:11:45.389554Z",
    //             "updated_date": "2021-10-03T16:11:45.389554Z",
    //             "content": "Test",
    //             "course": 59,
    //             "active": false
    //         }
    //     ]
    return (
        <Paper className={styles.wrap}>
            <Table
                dataSource={listLesson}
                loading={loading}
                bordered
                columns={columns}
            />
        </Paper>
    )
}

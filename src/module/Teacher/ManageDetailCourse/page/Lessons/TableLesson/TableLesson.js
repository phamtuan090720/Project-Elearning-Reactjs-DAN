import React from 'react'
import { Button, Input, Modal, Space, Switch, Table, Tooltip } from 'antd'
import Paper from '../../../../../../components/Paper/Paper';
import styles from './TableLesson.module.scss';
import { BookOutlined, DeleteOutlined, EditOutlined, FileOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { actDeleteLesson, actChangeActive, getListLesson, getDetailLesson } from '../../../reducers/action';
import * as Type from '../../../reducers/type';
import { useQuery } from '../../../../../../Hooks/useQuery';
const { Search } = Input;
export default function TableLesson() {
    const { loading, listLesson, pagination } = useSelector(state => state.lessonManageReducer)
    const param = useParams();
    const dispatch = useDispatch();
    const query = useQuery();
    const [sreach, changeSreach] = React.useState('');
    const history = useHistory();
    React.useEffect(() => {
        changeSreach(query.get('kw'))
    }, [query])
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
    const onSearch = value => {
        history.push(`/teacher/manage-course/${param.id}/lessons/?kw=${value}`)
        dispatch(getListLesson(param.id, 1, value));
    };
    const openFormEdit = (id) => {
        dispatch({
            type: Type.SET_STATUS_OPENEDITFORM,
            status: true,
        })
        dispatch({ type: Type.SET_DETAIL_LESSON, id: id })
    }
    const onChangeActive = (checked, id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want ${checked === true ? "active" : "unactive"} these Lesson?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                dispatch(getListLesson(param.id))
            },
            onOk() {
                let data = {
                    active: checked
                }
                dispatch(actChangeActive(id, param.id, data))
            }

        });
    }
    const handleTableChange = (pagination) => {
        if (query.has('kw') === true) {
            return dispatch(getListLesson(param.id, pagination.current, query.get('kw')))
        }
        else {
            return dispatch(getListLesson(param.id, pagination.current))
        }
    };
    const openContainer = (id) => {
        // alert(id);
        dispatch(getDetailLesson(id));
        dispatch({ type: Type.SET_STATUS_CONTAINER, status: true });
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '5%',
            key: 'id',
        },
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
                    <Button className={styles.btnItem} onClick={() => {
                        openContainer(record.id)
                        dispatch({ type: Type.SET_KEY_CONTAINER, key: "Files" })
                    }
                    } shape='circle' icon={<FileOutlined />}></Button>
                </Tooltip>
                <Tooltip placement='bottom' title='HomeWork'>
                    <Button className={styles.btnItem} onClick={() => {
                        openContainer(record.id)
                        dispatch({ type: Type.SET_KEY_CONTAINER, key: "HomeWork" })
                    }
                    } shape='circle' icon={<BookOutlined />}></Button>
                </Tooltip>
                <Tooltip placement='bottom' title='Videos'>
                    <Button className={styles.btnItem} onClick={() => {
                        openContainer(record.id)
                        dispatch({ type: Type.SET_KEY_CONTAINER, key: "Videos" })
                    }
                    } shape='circle' icon={<VideoCameraOutlined />}></Button>
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
                    <Button className={styles.btnItem} type='primary' shape='round' icon={<EditOutlined />} onClick={() => {
                        openFormEdit(record.id)
                    }}></Button>
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
            render: (acvitve, record) => <Switch defaultChecked={acvitve} onChange={(checked) => {
                onChangeActive(checked, record.id)
            }} />
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
                onChange={handleTableChange}
                dataSource={listLesson}
                loading={loading}
                bordered
                columns={columns}
                pagination={pagination}
                title={() => <Search placeholder="search lesson" defaultValue={sreach} onSearch={onSearch} style={{ width: 200 }} />}
            />
        </Paper>
    )
}

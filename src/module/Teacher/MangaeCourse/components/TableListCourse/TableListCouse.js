import { Switch, Table, Button, Rate, Tooltip, Modal } from 'antd';
import React from 'react'
import styles from './TableLisCourse.module.scss';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actDeleteCourse, actGetMyCourse, actChangeType, actChangeActive } from '../../redux/action';
import { useQuery } from '../../../../../Hooks/useQuery';
import { Link } from 'react-router-dom';
import * as Type from '../../redux/type';
export default function TableListCouse() {
    const { pagination, listCourse, loading } = useSelector(state => state.manageCourseReducer)
    const query = useQuery();
    const dispatch = useDispatch();
    const onChangeType = (checked, id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want ${checked === true ? "Public" : "Private"} these Course?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                dispatch(actGetMyCourse())
            },
            onOk() {
                let data = {
                    is_public: checked
                }
                dispatch(actChangeType(id, data))
            }

        });
    }
    const onChangeActive = (checked, id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want ${checked === true ? "active" : "unactive"} these Course?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                dispatch(actGetMyCourse())
            },
            onOk() {
                let data = {
                    active: checked
                }
                dispatch(actChangeActive(id, data))
            }

        });
    }
    const handleTableChange = (pagination) => {
        if (query.has('kw') === true) {
            return dispatch(actGetMyCourse(pagination.current, query.get('kw')))
        }
        else {
            return dispatch(actGetMyCourse(pagination.current))
        }
    }
    const openFormEdit = (id) => {
        dispatch({
            type: Type.SET_STATUS_OPENEDITFROM,
            status: true,
        })
        dispatch({ type: Type.SET_COURSE_EDIT, id: id })
    }
    const deleteCourse = (id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want to delete these Course?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                dispatch(actDeleteCourse(id))
            }

        });
        // dispatch(actDeleteCourse(id))
        // alert(id)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name course',
            dataIndex: 'name_course',
            key: 'name_course',
            render: (name_course, record) => <Link to={`/teacher/manage-course/${record.id}/home`}>{name_course}</Link>
        },
        {
            title: 'Category',
            dataIndex: 'category_name',
            key: 'category',
        },
        {
            title: 'Average Rating',
            dataIndex: 'rate',
            key: 'rate',
            width: '15%',
            render: rate => <Tooltip placement='bottom' title={`${rate === null ? "There are no rating for this course yet" : 'Average Rating ' + parseFloat(rate).toFixed(1)} `}>
                <div>
                    <Rate disabled value={rate} allowHalf />
                </div>
            </Tooltip>
        },
        {
            title: 'Action',
            width: '10%',
            align: 'center',
            key: 'action',
            render: (record) => <div className={styles.btnGroup}>
                <Tooltip placement='bottom' title='Edit'>
                    <Button className={styles.btnItem} type='primary' onClick={() => {
                        openFormEdit(record.id)
                    }} shape='round' icon={<EditOutlined />}></Button>
                </Tooltip>
                <Tooltip placement='bottom' title='Delete'>
                    <Button className={styles.btnItem} onClick={() => { deleteCourse(record.id) }} type='primary' shape='round' icon={<DeleteOutlined />} danger></Button>
                </Tooltip>
            </div>
        },
        {
            title: 'Type',
            dataIndex: 'is_public',
            key: 'is_public',
            align: 'center',
            width: '5%',
            render: (active, record) => <div>
                <Tooltip placement='bottom' title={`${active === true ? 'Public' : 'Private'}`}>
                    <Switch defaultChecked={active} onChange={(checked) => {
                        onChangeType(checked, record.id)
                    }} />
                </Tooltip>
            </div>
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            align: 'center',
            width: '5%',
            render: (active, record) => <Switch defaultChecked={active} onChange={(checked) => {
                onChangeActive(checked, record.id)
            }} />
        },
    ];
    return (
        <div className={styles.wrap} style={{ boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)', transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}>
            <Table dataSource={listCourse}
                bordered columns={columns}
                pagination={pagination}
                onChange={handleTableChange}
                loading={loading}
            />
        </div>

    )
}

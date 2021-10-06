import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Drawer, Modal, Space, Switch, Table, Tooltip } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actDeleteHomeWork, actEditHomeWork, getDetailLesson } from '../../../reducers/action';
import FormEditHomeWork from './FormEdit/FormEditHomeWork';
const DrawerChild = ({ visible, onClose, children }) => {

    // const [visible, setVisible] = React.useState(true);
    return <Drawer
        title={'Edit Home Work'}
        width={600}
        onClose={onClose}
        visible={visible}
    >
        {children}
    </Drawer>
}
export default function HomeWork() {
    const { detailLesson, loading } = useSelector(state => state.detailLessonManageReducer);
    const [valueEdit, setValueEdit] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const dispatch = useDispatch();
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const onChangeActive = (checked, id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want ${checked === true ? "active" : "unactive"} these HomeWork??`,
            width: 450,
            okText: "confirm",
            onCancel() {
                dispatch(getDetailLesson(detailLesson.id))
            },
            onOk() {
                const data = {
                    active: checked
                }
                dispatch(actEditHomeWork(id, detailLesson.id, data));
            }

        });
    }
    const openFormEdit = (value) => {
        setVisible(true)
        setValueEdit(value)
    }
    const deleteHomeWork = (id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want to delete these Home Work?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                dispatch(actDeleteHomeWork(id, detailLesson.id));
            }

        });
    }
    const formatData = () => {
        let newData = []
        if (detailLesson?.home_work) {
            detailLesson?.home_work.forEach((item, index) => {
                let newItem = { ...item, key: index }
                newData.push(newItem);
            });
            return newData
        }
        return newData
    }
    const onClose = () => {
        setVisible(false)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'File',
            dataIndex: 'file',
            key: 'file',
            render: (file) => <div onClick={() => {
                openInNewTab(file)
            }}>
                <Button type='link'>{file}</Button>
            </div>
        },
        {
            title: 'Content',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            width: '5%',
            render: (acvitve, record) => <Switch defaultChecked={acvitve} onChange={(checked) => {
                onChangeActive(checked, record.id)
            }} />
        },
        {
            title: 'Action',
            key: 'action',
            width: '10%',
            align: 'center',
            render: (record) => <Space>
                <Tooltip placement='bottom' title='Edit'>
                    <Button type='primary' shape='round' icon={<EditOutlined />} onClick={() => {
                        openFormEdit(record)
                    }}></Button>
                </Tooltip>
                <Tooltip placement='bottom' title='Delete'>
                    <Button type='primary' onClick={() => deleteHomeWork(record.id)} shape='round' icon={<DeleteOutlined />} danger></Button>
                </Tooltip>
            </Space>
        }
    ]
    return (
        <>
            <Table
                dataSource={formatData()}
                loading={loading}
                bordered
                columns={columns}
            />
            <DrawerChild visible={visible} onClose={onClose}  >
                <FormEditHomeWork onClose={onClose} value={valueEdit} />
            </DrawerChild>
        </>

    )
}

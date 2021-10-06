import React from 'react'
import { Button, Drawer, Modal, Space, Switch, Table, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import FormEditFile from './FormEdit/FormEditFile';
import { actDeleteFile, actEditFile, getDetailLesson } from '../../../reducers/action';
const DrawerChild = ({ visible, onClose, children }) => {

    // const [visible, setVisible] = React.useState(true);
    return <Drawer
        title={'Edit File'}
        width={700}
        onClose={onClose}
        visible={visible}
    >
        {children}
    </Drawer>
}
export default function FilesManage() {
    const { detailLesson, loading } = useSelector(state => state.detailLessonManageReducer);
    const [visible, setVisible] = React.useState(false);
    const [valueEdit, setValueEdit] = React.useState(null);
    const dispatch = useDispatch();
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onChangeActive = (checked, id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want ${checked === true ? "active" : "unactive"} these File??`,
            width: 450,
            okText: "confirm",
            onCancel() {
                dispatch(getDetailLesson(detailLesson.id))
            },
            onOk() {
                const data = {
                    active: checked
                }
                dispatch(actEditFile(id, detailLesson.id, data));
            }

        });
    }
    const openFormEdit = (value) => {
        setVisible(true)
        setValueEdit(value)
    }
    const deleteFile = (id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want to delete these File?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                dispatch(actDeleteFile(id, detailLesson.id));
            }

        });
    }
    const onClose = () => {
        setVisible(false)
    }
    const formatData = () => {
        let newData = []
        if (detailLesson?.list_file) {
            detailLesson?.list_file.forEach((item, index) => {
                let newItem = { ...item, key: index }
                newData.push(newItem);
            });
            return newData
        }
        return newData
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
                    <Button type='primary' onClick={() => deleteFile(record.id)} shape='round' icon={<DeleteOutlined />} danger></Button>
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
                <FormEditFile onClose={onClose} value={valueEdit} />
            </DrawerChild>
        </>

    )
}

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Drawer, Modal, Space, Switch, Table, Tooltip } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actDeleteVideo, actEditVideo, getDetailLesson } from '../../../reducers/action';
import FormEditVideo from './FormEdit/FormEditVideo';
const DrawerChild = ({ visible, onClose, children }) => {

    // const [visible, setVisible] = React.useState(true);
    return <Drawer
        title={'Edit Video'}
        width={600}
        onClose={onClose}
        visible={visible}
    >
        {children}
    </Drawer>
}
export default function VideoManage() {
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
            content: `Do you Want ${checked === true ? "active" : "unactive"} these Video??`,
            width: 450,
            okText: "confirm",
            onCancel() {
                dispatch(getDetailLesson(detailLesson.id))
            },
            onOk() {
                const data = {
                    active: checked
                }
                dispatch(actEditVideo(id, detailLesson.id, data));
            }

        });
    }
    const openFormEdit = (value) => {
        setVisible(true)
        setValueEdit(value)
    }
    const deleteVideo = (id) => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want to delete these Video?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                dispatch(actDeleteVideo(id, detailLesson.id));
            }

        });
    }
    const onClose = () => {
        setVisible(false)
    }
    const formatData = () => {
        let newData = []
        if (detailLesson?.list_video) {
            detailLesson?.list_video.forEach((item, index) => {
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
            title: 'Url Video',
            dataIndex: 'url_video',
            key: 'url_video',
            render: (url_video) => <div onClick={() => {
                openInNewTab(url_video)
            }}>
                <Button type='link'>{url_video}</Button>
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
                    <Button type='primary' onClick={() => deleteVideo(record.id)} shape='round' icon={<DeleteOutlined />} danger></Button>
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
                <FormEditVideo onClose={onClose} value={valueEdit} />
            </DrawerChild>
        </>

    )
}

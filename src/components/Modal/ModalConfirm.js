import React from 'react'
import { Alert, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import imgNotification from '../../assets/img/notification.png';
const content = () => {
    return <div>
        <img src={imgNotification} style={{marginBottom:10}} alt='imgNotification' width={"100%"} />
        <Alert
            message="You Want To Complete The Lesson ?"
            type="warning"
            showIcon
        />
    </div>
}
export default function ModalConfirm(completeLesson) {
    return (
        Modal.confirm({
            title: 'Confirm',
            centered: true,
            icon: <ExclamationCircleOutlined />,
            content: content(),
            width: 500,
            okText: 'Comfirm',
            cancelText: 'Cancel',
            onOk() {
                return completeLesson()
            }
        })
    )
}

import React from 'react'
import {notification } from 'antd';

export default function Notification({type,mess,description}) {
    const openNotificationWithIcon = (type,mess,description) => {
        notification[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    return (
        <>
            {() => openNotificationWithIcon('success','test','hhaha')}
        </>
    )
}

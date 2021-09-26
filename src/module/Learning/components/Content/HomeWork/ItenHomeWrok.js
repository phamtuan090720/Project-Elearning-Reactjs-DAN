import { Button, Card, Divider, Tooltip } from 'antd'
import React from 'react';
import { FileOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function ItenHomeWrok({ subject, file, content }) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (

        <Card style={{ width: '100%', marginTop: 16 }}
            hoverable
        >
            <Meta
                title={subject}
                description={content}
            />
            <Divider />
            <Tooltip placement="bottom" title={'Click to open file'}>
                <Button shape={'circle'} icon={<FileOutlined />} onClick={() => {
                    openInNewTab(file)
                }}></Button>
            </Tooltip>
        </Card>


    )
}

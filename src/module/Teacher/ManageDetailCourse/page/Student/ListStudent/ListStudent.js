import { Button, Progress, Space, Table } from 'antd';
import React from 'react'

export default function ListStudent() {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            complete : 50
        },
    ];

    const columns = [
        {
            title: 'Account',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Avatar',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Date join',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Complete',
            dataIndex: 'complete',
            width: "10%",
            key: 'Complete',
            render: complete_course => <Progress style={{ fontSize: 15 }} strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
            }} width='55px' type="circle" percent={complete_course} />
        },
        
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            width: "5%",
            align: 'center',
            render: () => <Space>
                <Button type='primary' shape='round'>Seen Review</Button>
            </Space>
        },
    ];
    return (
        <Table dataSource={dataSource} bordered columns={columns} />
    )
}

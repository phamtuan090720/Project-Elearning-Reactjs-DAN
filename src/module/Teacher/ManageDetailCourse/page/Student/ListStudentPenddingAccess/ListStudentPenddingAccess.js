import { Button, Space, Table } from 'antd';
import React from 'react'

export default function ListStudentPenddingAccess() {
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
            title: 'Action',
            dataIndex: '',
            key: 'x',
            align:'center',
            width:'10%',
            render: () => <Space>
                <Button type='primary' shape='round'>Allow</Button>
                <Button type='primary' danger shape='round'>Not allow</Button>
            </Space>

        },
    ];
    return (
        <Table dataSource={dataSource} bordered columns={columns} />
    )
}

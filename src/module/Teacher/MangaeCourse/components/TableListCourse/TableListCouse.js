import { Switch, Table, Button, Rate } from 'antd';
import React from 'react'
import styles from './TableLisCourse.module.scss';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
export default function TableListCouse() {
    const dataSource = [

    ];

    function onChange(checked, id) {
        console.log(`${id} switch to ${checked}`);
    }
    const columns = [
        {
            title: 'Name course',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            width: '15%',
            render: rate => <Rate value={rate} allowHalf disabled />
        },
        {
            title: 'Action',
            width: '10%',
            align: 'center',
            key: 'address',
            render: (record) => <div className={styles.btnGroup}>
                <Button className={styles.btnItem} type='primary' shape='round' icon={<EditOutlined />}>Edit</Button>
                <Button className={styles.btnItem} type='primary' shape='round' icon={<DeleteOutlined />} danger>Delete</Button>
            </div>
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'address',
            align: 'center',
            width: '5%',
            render: (active, record) => <Switch defaultChecked={active} onChange={(checked) => {
                onChange(checked, record.id)
            }} />
        },
    ];
    return (
        <div className={styles.wrap} style={{ boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)', transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}>
            <Table dataSource={dataSource} bordered columns={columns} />
        </div>

    )
}

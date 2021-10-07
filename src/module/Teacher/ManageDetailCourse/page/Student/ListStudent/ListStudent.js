import { Avatar, Button, Modal, Progress, Rate, Space, Table, Typography } from 'antd';

import React from 'react'
import { useSelector } from 'react-redux';
const { Text, Paragraph } = Typography;

export default function ListStudent() {
    const { listStudent, loading } = useSelector(state => state.studentManageReducer)
    const formatData = () => {
        let newData = []
        if (listStudent?.list_student_accessed) {
            listStudent?.list_student_accessed.forEach((item, index) => {
                let newItem = { ...item, key: index }
                newData.push(newItem);
            });
            return newData
        }
        return newData
    }

    const seenReview = (rate, reivew) => {
        return Modal.info({
            title: 'Review Student',
            content: (
                <div>
                    <div>
                        <label style={{ marginRight: 10, fontWeight: 'bold' }}>Rate :</label>
                        <Rate value={rate} disabled></Rate>
                    </div>
                    <div style={{ margin: '10px 0px' }}>
                        <label style={{ fontWeight: 'bold' }}>Review :</label>
                        <Paragraph style={{ marginTop: 10 }}>
                            <Text type='secondary'>{reivew}</Text >
                        </Paragraph>
                    </div>
                </div>
            ),
            onOk() { },
        });
    }

    const renderDate = (date) => {
        let d = new Date(date);
        return d.toDateString();
    }

    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'info_student',
            width: "5%",
            key: 'info_student.avatar',
            render: info_student => <Space>
                <Avatar size='large' src={info_student.avatar}>{info_student.username}</Avatar>
            </Space>
        },
        {
            title: 'Account',
            dataIndex: 'info_student',
            key: 'info_student.username',
            render: info_student => info_student.username
        },
        {
            title: 'Date join',
            dataIndex: 'join_date',
            key: 'join_date',
            render: date => renderDate(date)
        },
        {
            title: 'Complete',
            dataIndex: 'complete_course',
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
            render: (record) => <Space>
                <Button type='primary' onClick={() => seenReview(record.rate, record.review)} shape='round'>Seen Review</Button>
            </Space>
        },
    ];
    return (
        <Table dataSource={formatData()} loading={loading} bordered columns={columns} />
    )
}

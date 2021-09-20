import { DesktopOutlined } from '@ant-design/icons';
import { Avatar, Space, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import TagCustom from '../../../../components/Tag/TagCustom';
export default function RegisteredCourse() {
    const columns = [{
        title: 'Name Course',
        dataIndex: 'name_course',
        render: (text, record) => <Link to={`/user/list-course/${record.id}`}>{text}</Link>
    },
    {
        title: 'Category',
        dataIndex: 'category',
        render: category => `${category}`,
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        render: tags => tags.map((item,index) => {
            return <TagCustom key={index} content={item.name} />
        }),
    },
    {
        title: 'Teacher',
        dataIndex: 'teacher',
        render: teacher => <Space>
            <Avatar size='large' src={teacher.user.avatar}>{teacher.user.username}</Avatar>
            <span>{teacher.user.username}</span>
        </Space>
    },

    ]
    const data = [
        {
            "key":'1',
            "id": 1,
            "name_course": "English for beginer",
            "category": "English",
            "subject": null,
            "description": "Chưa có mô tả Khóa Học",
            "image": "http://127.0.0.1:8000/courses/2021/09/download.jfif",
            "created_date": "2021-09-07T09:19:57.080951Z",
            "active": true,
            "fee": "0",
            "is_public": true,
            "teacher": {
                "user": {
                    "id": 2,
                    "username": "ThuThuy",
                    "avatar": "http://127.0.0.1:8000/static/uploads/2021/09/60618778_2320937534611138_7508554572390989824_n.jpg"
                }
            },
            "rate": 3.3333,
            "tags": [
                {
                    "id": 2,
                    "name": "tag2"
                },
                {
                    "id": 3,
                    "name": "tag3"
                }
            ]


        }
    ]
    return (
        <>
            <Table columns={columns} dataSource={data}
             title={() => <h1><DesktopOutlined style={{marginRight:10}} /> Registered Course</h1>}
             />
        </>
    )
}

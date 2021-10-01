import { DesktopOutlined } from '@ant-design/icons';
import { Avatar, Progress, Space, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import TagCustom from '../../../../components/Tag/TagCustom';
import { useDispatch, useSelector } from 'react-redux';
import { actGetListRegisteredCourse } from '../reducers/action';

export default function RegisteredCourse() {
    const { pagination, loading, data } = useSelector(state => state.RegisteredCourseReducer);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(actGetListRegisteredCourse());
    }, [dispatch])
    const handleTableChange = (pagination) => {
        dispatch(actGetListRegisteredCourse(`page=${pagination.current}`));
    };
    const columns = [{
        title: 'Name Course',
        dataIndex: 'name_course',
        key:'name_course',
        render: (text, record) => <Link to={`/user/course/${record.id}`}>{text}</Link>
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key:'category',
        render: category => `${category}`,
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key:'tags',
        render: tags => tags.map((item, index) => {
            return <TagCustom key={index} content={item.name} />
        }),
    },
    {
        title: 'Teacher',
        dataIndex: 'teacher',
        key:'teacher',
        render: teacher => <Space>
            <Avatar size='large' src={teacher.user.avatar}>{teacher.user.username}</Avatar>
            <span>{teacher.user.username}</span>
        </Space>
    },
    {
        title: 'Complete',
        dataIndex: 'complete_course',
        key:'complete_course',
        width: '10%',
        align: 'center',
        render: complete_course => <Progress strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
        }} width='55px' type="circle" percent={complete_course} />
    },
    ]
    return (
        <>
            <Table
                style={{ marginTop: 20 }}
                columns={columns}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
                bordered
                title={() => <h1><DesktopOutlined style={{ marginRight: 10 }} /> Registered Course</h1>}
            />
        </>
    )
}

import { Avatar, Button, Modal, Space, Table } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { actAllowStudentJoinCourse } from '../../../reducers/action';

export default function ListStudentPenddingAccess() {
    const { listStudent, loading } = useSelector(state => state.studentManageReducer)
    const dispatch = useDispatch()
    const param = useParams()
    const formatData = () => {
        let newData = []
        if (listStudent?.list_student_pending_access) {
            listStudent?.list_student_pending_access.forEach((item, index) => {
                let newItem = { ...item, key: index }
                newData.push(newItem);
            });
            return newData
        }
        return newData
    }
    const AcceptStudent = (idStudent, account) => {
        return Modal.confirm({
            title: 'Message',
            content: `Do you want accept ${account} join course ?`,
            onCancel() {

            },
            onOk() {
                let data = {
                    student_id: idStudent
                }
                dispatch(actAllowStudentJoinCourse(param.id, data));
            }
        })
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
            title: 'Action',
            dataIndex: '',
            key: 'x',
            align: 'center',
            width: '10%',
            render: (record) => <Space>
                <Button type='primary' onClick={() => AcceptStudent(record.info_student.id, record.info_student.username)} shape='round'>Accept</Button>
            </Space>

        },
    ];
    return (
        <Table dataSource={formatData()} loading={loading} bordered columns={columns} />
    )
}

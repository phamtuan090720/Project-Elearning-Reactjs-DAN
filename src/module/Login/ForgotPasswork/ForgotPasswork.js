import { Modal, Form, Input, Button, Row, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { resetPw } from '../reducers/action'

export default function ForgotPasswork({ isModalVisible, onCancel, onOk }) {
    const dispatch = useDispatch()
    const handleOk = (value) => {
        console.log(value)
        dispatch(resetPw(value, onOk));
    }
    const handleCancel = () => {
        onCancel()
    }
    return (
        <Modal title="Forgot Password" visible={isModalVisible} centered footer={null} closable={false}>
            <Form name='reset password' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleOk}>
                <Form.Item label="Username" name='username' rules={[{ required: true, message: "Please input username" }]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Email" name='email' rules={[{ required: true, message: "Please input email" }, { type: 'email', message: "Incorrect email format" }]}>
                    <Input></Input>
                </Form.Item>
                <Row justify='end'>
                    <Space>
                        <Button htmlType='submit' shape='round' type='primary'>
                            Ok
                        </Button>
                        <Button htmlType='reset' shape='round' type='primary' danger onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Space>
                </Row>
            </Form>
        </Modal>
    )
}

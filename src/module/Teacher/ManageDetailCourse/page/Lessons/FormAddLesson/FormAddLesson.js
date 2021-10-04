import { Drawer, Form, Button, Space, Input } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addLesson } from '../../../reducers/action';
import * as Type from '../../../reducers/type';
import RichTextEdit from './RichTextEdit';
import {useParams} from 'react-router-dom';
export default function FormAddLesson() {
    const { isOpenCreateForm } = useSelector(state => state.lessonManageReducer)
    const dispatch = useDispatch();
    const param = useParams();
    const onClose = () => {
        dispatch({ type: Type.SET_STATUS_OPENCEATEFORM, status: false })
        form.resetFields();
    }
    const onFinish = (values) => {
        dispatch(addLesson(param.id,values,form));
    }
    /* eslint-disable no-template-curly-in-string */

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */
    const [form] = Form.useForm();
    return (
        <Drawer
            title="Create a new lesson"
            width={"40%"}
            onClose={onClose}
            visible={isOpenCreateForm}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <Form form={form} validateMessages={validateMessages} layout="vertical" onFinish={onFinish}>
                <Form.Item label='Name Lesson' hasFeedback name='subject' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label='Content' hasFeedback name='content' rules={[{ required: true }]}>
                    <RichTextEdit form={form} />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button htmlType='submit'> Submit</Button>
                        <Button onClick={onClose} type="primary">
                            Cancel
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Drawer>
    )
}

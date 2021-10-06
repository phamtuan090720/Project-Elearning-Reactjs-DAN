import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Space } from 'antd';
import { actAddVideo } from '../../../../reducers/action';
export default function FormAddVideo({ onClose }) {
    const { detailLesson } = useSelector(state => state.detailLessonManageReducer);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const dispatch = useDispatch();
    const [valueURL, setValueURL] = React.useState('');
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values)
        dispatch(actAddVideo(detailLesson.id, values, () => {
            form.resetFields()
            onClose()
        }))
    }
    const handelChangURL = (e) => {
        setValueURL(e.target.value)
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
    return (
        <Form form={form} validateMessages={validateMessages} layout="vertical" onFinish={onFinish}>
            <Form.Item label='Subject Video' hasFeedback name='subject' rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label='URL Video' name='url' rules={[{ required: true }]}>
                <Input onChange={handelChangURL} />
            </Form.Item>
            <Form.Item>
                <div>
                    You should check the video link before submitting
                </div>
            </Form.Item>
            <Form.Item label='URL'>
                <div onClick={() => {
                    openInNewTab(valueURL)
                }}>
                    <Button type='link'>{valueURL}</Button>
                </div>
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
    )
}

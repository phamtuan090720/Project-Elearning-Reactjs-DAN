import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { actEditHomeWork } from '../../../../reducers/action';
export default function FormEditHomeWork({ onClose, value }) {
    const { detailLesson } = useSelector(state => state.detailLessonManageReducer);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [file, setFile] = React.useState(null);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    React.useEffect(() => {
        if (value) {
            form.setFieldsValue({
                subject: value.subject,
                content: value.content
            });
            setFile(value.file)
        }
    }, [value, form]);
    const onFinish = (values) => {
        console.log(values)
        let formData = new FormData();
        if (values.file) {
            for (let key in values) {
                if (key === 'file') {
                    formData.append(key, values[key][0].originFileObj)
                }
                else {
                    formData.append(key, values[key])
                }
            }
        }
        else {
            delete values.file
            for (let key in values) {
                formData.append(key, values[key])
            }
        }
        dispatch(actEditHomeWork(value.id, detailLesson.id, formData, () => {
            onClose();
            form.resetFields();
        }))

    }
    const handleChangeFile = async (info) => {
        let file = info.fileList[0]
        if (file) {
            setFile(null)
        }
        else {
            setFile(value.file)
        }
        form.setFieldsValue({
            file: info.fileList,
        });
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
            <Form.Item label='Subject Home Work' hasFeedback name='subject' rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label='Content Home Work' hasFeedback name='content' rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item label="File">
                <Form.Item
                    label="File"
                    name='file'
                    valuePropName="file"
                    hasFeedback
                    noStyle>
                    <Upload.Dragger maxCount={1} onChange={handleChangeFile} beforeUpload={() => false}>
                        <p className="ant-upload-drag-icon">
                            <UploadOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <div onClick={() => {
                    openInNewTab(file)
                }}>
                    <Button type='link'>{file}</Button>
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

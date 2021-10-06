import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { actAddFile } from '../../../../reducers/action';
export default function FormAddFile({ onClose }) {
    const { detailLesson } = useSelector(state => state.detailLessonManageReducer);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values)
        let formData = new FormData();
        for (let key in values) {
            if (key === 'file') {
                formData.append(key, values[key][0].originFileObj)
            }
            else {
                formData.append(key, values[key])
            }
        }
        dispatch(actAddFile(detailLesson.id, formData, () => {
            form.resetFields()
            onClose()
        }))
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
    const handleChangeFile = async (info) => {
        form.setFieldsValue({
            file: info.fileList,
        });
    }
    return (
        <Form form={form} validateMessages={validateMessages} layout="vertical" onFinish={onFinish}>
            <Form.Item label='Subject File' hasFeedback name='subject' rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="File">
                <Form.Item
                    label="File"
                    name='file'
                    valuePropName="file"
                    hasFeedback
                    rules={[{ required: true }]}
                    noStyle>
                    <Upload.Dragger maxCount={1} onChange={handleChangeFile} beforeUpload={() => false} accept='application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf'>
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

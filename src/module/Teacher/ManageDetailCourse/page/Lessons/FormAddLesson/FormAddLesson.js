import { Drawer, Form, Button, Space, Input, Upload } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addLesson } from '../../../reducers/action';
import * as Type from '../../../reducers/type';
import RichTextEdit from './RichTextEdit';
import { useParams } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
export default function FormAddLesson() {
    const { isOpenCreateForm } = useSelector(state => state.lessonManageReducer)
    const [imgSrc, setImgSrc] = useState('/default-image.jpg')
    const dispatch = useDispatch();
    const param = useParams();
    const onClose = () => {
        dispatch({ type: Type.SET_STATUS_OPENCEATEFORM, status: false })
        form.resetFields();
    }
    const onFinish = (values) => {
        let formData = new FormData();
        for (let key in values) {
            if (key === 'image') {
                formData.append(key, values[key][0].originFileObj)
            }
            else {
                formData.append(key, values[key])
            }

        }
        dispatch(addLesson(param.id, formData, () => {
            form.resetFields();
            setImgSrc('/default-image.jpg')
        }));
    }
    /* eslint-disable no-template-curly-in-string */
    const handleChangeFile = async (info) => {
        // console.log(info.file)
        //Lấy dữ liệu từ file từ người dùng nhập
        let file = info.fileList[0]
        if (file) {
            setImgSrc(URL.createObjectURL(file.originFileObj));
        }
        else {
            setImgSrc('/default-image.jpg');
        }
        form.setFieldsValue({
            image: info.fileList,
        });
        // console.log('file', file);
        // if (file) {
        //     let reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = async (e) => {
        //         // console.log(e.target.result);
        //         setImgSrc(e.target.result);
        //     }
        // }
        // form.setFieldsValue('image', info.fileList)


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
                <Form.Item label="Image of Lesson">
                    <Form.Item
                        label="Image of Lesson"
                        name='image'
                        valuePropName="file"
                        rules={[{ required: true }]}
                        noStyle>
                        <Upload.Dragger maxCount={1} onChange={handleChangeFile} beforeUpload={() => false} accept='image/png, image/jpg, image.jpeg,image/gif' >
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
                    <p style={{ marginTop: 10 }}>Preview Image :</p>
                    <img style={{ width: 300 }} className="mt-2" src={imgSrc} alt="..."
                        onError={(e) => { e.target.onerror = null; e.target.src = "/default-image.jpg" }} />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button htmlType='submit' type='primary'> Submit</Button>
                        <Button onClick={onClose} type="primary">
                            Cancel
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Drawer>
    )
}

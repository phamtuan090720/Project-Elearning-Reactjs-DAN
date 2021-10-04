import { UploadOutlined } from '@ant-design/icons';
// import style from './FormEditCourse.module.scss';
import { Drawer, Form, Button, Space, Input, Switch, Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RichTextEdit from './RichTextEdit';
import * as Type from '../../../reducers/type';
import { actEditLesson } from '../../../reducers/action';

export default function FormEditCourse() {
    const { isOpenEditForm, lesson } = useSelector(state => state.lessonManageReducer)
    const [form] = Form.useForm();
    const [imgSrc, setImgSrc] = useState('/default-image.jpg')
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (lesson) {
            form.setFieldsValue({
                subject: lesson.subject,
                content: lesson.content,
                active: lesson.active,
            });
            if(lesson.image !==null){
                setImgSrc(lesson.image)
            }
        }

    }, [form, lesson])

    const onClose = () => {
        dispatch({ type: Type.SET_STATUS_OPENEDITFORM, status: false })
    }
    const onFinish = (values) => {
        let formData = new FormData();
        if (values.image) {
            for (let key in values) {
                if (key === 'image') {
                    formData.append(key, values[key][0].originFileObj)
                }
                else {
                    formData.append(key, values[key])
                }

            }
            dispatch(actEditLesson(lesson.id, lesson.course, formData))
        }
        else {
            delete values.image;
            for (let key in values) {
                formData.append(key, values[key])
            }

            dispatch(actEditLesson(lesson.id, lesson.course, formData))
        }
    }
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

        <Drawer
            title="Edit Lesson"
            width={'40%'}
            onClose={onClose}
            visible={isOpenEditForm}
        >

            <Form form={form} name="myForm" layout={'vertical'}
                onFinish={onFinish}
                validateMessages={validateMessages}
                initialValues={{
                    content: "",
                    active: true,
                }}
            >

                <Form.Item
                    name={'subject'}
                    label="Subject"
                    // className={style.inputItem}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Content" name='content' rules={[{ required: true }]}>
                    <RichTextEdit form={form} />
                </Form.Item>

                <Form.Item name={'active'} label={"Active"} valuePropName="checked" hasFeedback rules={[
                    {
                        required: true
                    },
                ]}>
                    <Switch />
                </Form.Item>
                <Form.Item label="Image of Lesson">
                    <Form.Item
                        label="Image of Lesson"
                        name='image'
                        valuePropName="file"
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
                <Form.Item style={{ paddingTop: 30 }}>
                    <Space>
                        <Button shape='round' htmlType='submit' type="primary">
                            Edit
                        </Button>
                        <Button shape='round' onClick={onClose}>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>

        </Drawer>
    )
}

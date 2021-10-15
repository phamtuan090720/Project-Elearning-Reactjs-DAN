import { UploadOutlined } from '@ant-design/icons';
import style from './FormEditCourse.module.scss';
import { Drawer, Form, Button, Space, Input, Select, InputNumber, Row, Col, Switch, Upload } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RichTextEdit from './RichTextEdit';
import * as Type from '../../redux/type';
import AddTag from '../AddTag/AddTag';
import { actEditCourse } from '../../redux/action';
const { Option } = Select;

export default function FormEditCourse() {
    const { isOpenFormEdit, listCategory, courseEdit } = useSelector(state => state.manageCourseReducer)
    const [form] = Form.useForm();
    const [imgSrc, setImgSrc] = useState('/default-image.jpg')
    const dispatch = useDispatch()
    console.log(courseEdit)
    React.useEffect(() => {
        if (listCategory && courseEdit) {
            const tags = []
            courseEdit.tags.forEach((item) => {
                tags.push(item.name)
            })
            form.setFieldsValue({
                name_course: courseEdit.name_course,
                subject: courseEdit.subject,
                fee: parseInt(courseEdit.fee),
                is_public: courseEdit.is_public,
                category: courseEdit.category,
                description: courseEdit.description,
            });
            setImgSrc(courseEdit.image)
        }

    }, [form, courseEdit, listCategory])

    const renderCategory = React.useCallback(() => {
        if (listCategory?.length > 0) {
            return listCategory.map((item, index) => {
                return <Option key={index} value={item.id}>{item.name}</Option>
            })
        }
    }, [listCategory]);
    const onClose = () => {
        dispatch({ type: Type.SET_STATUS_OPENEDITFROM, status: false })
    }
    const onFinish = (values) => {
        let formData = new FormData();
        // console.log(values)
        if (values.image) {
            for (let key in values) {
                if (key === 'image') {
                    formData.append(key, values[key][0].originFileObj)
                }
                else if (key !== 'tags') {
                    formData.append(key, values[key])
                }

            }
            dispatch(actEditCourse(courseEdit.id, formData,values.tags))
        }
        else {
            delete values.image;
            console.log(values)
            for (let key in values) {
                if (key !== 'tags') {
                    formData.append(key, values[key])
                }
            }
            dispatch(actEditCourse(courseEdit.id, formData ,values.tags))
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
    const handleChangeCategory = (value) => {
        console.log(value)


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
            title="Edit course"
            width={'40%'}
            onClose={onClose}
            visible={isOpenFormEdit}
        >

            <Form form={form} name="myForm" layout={'vertical'}
                onFinish={onFinish}
                validateMessages={validateMessages}
                initialValues={{
                    fee: 0,
                    is_public: true,
                    description: "",
                }}
            >

                <Form.Item
                    name={'name_course'}
                    label="Name Course"
                    className={style.inputItem}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'subject'}
                    label="Subtitle"
                    className={style.inputItem}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name={'category'}
                    label="Category"
                    className={style.inputItem}
                    hasFeedback
                    rules={[{ required: true, message: 'Please select Category!' }]}
                >
                    <Select
                        placeholder="Please select Category"
                        showSearch
                        optionFilterProp="children"
                        onChange={handleChangeCategory}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        {renderCategory()}
                    </Select>
                </Form.Item>
                <Row>
                    <Col span={14}>
                        <Form.Item name="fee" label={"Fee"} hasFeedback rules={[
                            {
                                type: 'number',
                                min: 0,
                                max: 10000000,
                                required: true
                            },
                        ]}>
                            <InputNumber />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item name={'is_public'} label={"Public"} valuePropName="checked" hasFeedback rules={[
                            {
                                required: true
                            },
                        ]}>
                            <Switch />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Image Course">
                    <Form.Item
                        label="Image Course"
                        name='image'
                        valuePropName="file"
                        noStyle>
                        <Upload.Dragger maxCount={1} onChange={handleChangeFile} beforeUpload={() => false} accept='image/*' >
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
                    {/* <input type="file" name="image" onChange={handleChangeFile} accept="image/png, image/jpg, image.jpeg,image/gif " /> */}
                    <img style={{ width: 300 }} className="mt-2" src={imgSrc} alt="..."
                        onError={(e) => { e.target.onerror = null; e.target.src = "/default-image.jpg" }} />
                </Form.Item>
                <Form.Item label="Description" name='description' rules={[{ required: true }]}>
                    <RichTextEdit form={form} />
                </Form.Item>
                <Form.Item label="Tags" name="tags">
                    <AddTag form={form} />
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

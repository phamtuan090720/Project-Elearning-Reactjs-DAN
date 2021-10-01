import { UploadOutlined } from '@ant-design/icons';
import style from './FormCreateCourse.module.scss';
import { Drawer, Form, Button, Space, Input, Select, InputNumber, Row, Col, Switch, Upload } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RichTextEdit from './RichTextEdit';
import * as Type from '../../redux/type';
import { actCreateCourse } from '../../redux/action';
const { Option } = Select;

export default function FormCreateCourse() {
    const { isOpenFormCreate, listCategory } = useSelector(state => state.manageCourseReducer)
    const [form] = Form.useForm();
    const [tags,setTags] = React.useState([])
    const [imgSrc, setImgSrc] = useState('/default-image.jpg')
    const dispatch = useDispatch()
    const renderCategory = React.useCallback(() => {
        if (listCategory?.length > 0) {
            return listCategory.map((item, index) => {
                return <Option key={index} value={item.id}>{item.name}</Option>
            })
        }
    }, [listCategory]);
    const onClose = () => {
        dispatch({ type: Type.SET_STATUS_OPENCREATEFROM, status: false })
    }
    const onFinish = (values) => {
        let formData = new FormData();
        console.log(values)
        for (let key in values) {
            if (key === 'image') {
                formData.append(key, values[key][0].originFileObj)
            }
            else {
                formData.append(key, values[key])
            }
            // formData.append(key, values[key])
            // console.log(values[key])
        }

        dispatch(actCreateCourse(formData, form, () => { setImgSrc('/default-image.jpg') }));
        // console.log(form.getFieldValue('fee'))

    }
    // const fill = () => {
    //     form.setFieldsValue({
    //         name_course: 'https://taobao.com/',
    //         description: "gaga"
    //     });
    // }
    // const handleChangeRichTextBox = async (event, editor) => {
    //     const data = editor.getData();
    //     form.setFieldsValue({
    //         description: data
    //     })
    //     console.log(data)
    // }
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
            title="Create a new course"
            width={'40%'}
            onClose={onClose}
            visible={isOpenFormCreate}
        >
            <Form form={form} name="myForm" layout={'vertical'}
                onFinish={onFinish}
                validateMessages={validateMessages}
                initialValues={{
                    fee: 0,
                    is_public: true,
                    description: ""
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
                    <Input />
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
                    {/* <input type="file" name="image" onChange={handleChangeFile} accept="image/png, image/jpg, image.jpeg,image/gif " /> */}
                    <img style={{ width: 300 }} className="mt-2" src={imgSrc} alt="..." />
                </Form.Item>
                <Form.Item label="Description" name='description' rules={[{ required: true }]}>
                    <RichTextEdit form={form} />
                </Form.Item>

                <Form.Item style={{ paddingTop: 30 }}>
                    <Space>
                        <Button shape='round' htmlType='submit' type="primary">
                            Submit
                        </Button>
                        {/* <Button shape='round' onClick={fill} type="primary">
                            Fill
                        </Button> */}
                        <Button shape='round' onClick={onClose}>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Drawer>
    )
}

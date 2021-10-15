import { UploadOutlined } from '@ant-design/icons';
import { Button, Row, Tabs, Form, Col, Input, Upload, Image, Typography } from 'antd';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Paper from '../../../../../components/Paper/Paper';
import { actChangeInfo, actChangePassword, actChangeProfile } from '../../reducer/action';
import AddSkills from './AddTag/AddTag.js';
import styles from './ChangeInfo.module.scss';
const { TabPane } = Tabs;
const { Text } = Typography;
export default function ChangeInfo({ closeChangeInfo }) {
    return (
        <Paper className={styles.wrapChangeInfo}>
            <Tabs defaultActiveKey={['Change Info']} tabPosition={"left"}>
                <TabPane tab="Change Info" key="1">
                    <div className={styles.wrapContent}>
                        <FormChangeInfoUser />
                    </div>
                </TabPane>
                <TabPane tab="Change Profile" key="2">
                    <div className={styles.wrapContent}>
                        <FormChangeProfile />
                    </div>
                </TabPane>
                <TabPane tab="Change Password" key="3">
                    <div className={styles.wrapContent}>
                        <FormChangePassword />
                    </div>
                </TabPane>
            </Tabs>
            <Row justify='end'>
                <Button onClick={closeChangeInfo} type='link'>Back</Button>
            </Row>
        </Paper>

    )
}
const FormChangePassword = () => {
    const { infoTeacher } = useSelector(state => state.infoTeacherReducer)
    const dispatch = useDispatch()
    const onFinish = (values) => {
        let data = {
            username: infoTeacher.user.username,
            oldPassword: values.oldPassword,
            password: values.password,
            id: infoTeacher.user.id
        }
        console.log(data)
        dispatch(actChangePassword(data));
    }
    return <Form name='change-password' layout='horizontal' onFinish={onFinish}>
        <Form.Item
            name="oldPassword"
            rules={[
                {
                    required: true,
                    message: 'Please input your old password!',
                },
            ]}
        >
            <Input.Password placeholder="Old Password" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
                { required: true, message: 'Please input your password!' }, {
                    min: 6, message: 'This password is too short. It must contain at least 6 characters'
                }]}
        >
            <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Please confirm your new password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
            ]}
        >
            <Input.Password placeholder="Confirm your new password" />
        </Form.Item>
        <Row justify='end'>
            <Form.Item>
                <Button htmlType='submit' type='link'>Change</Button>
            </Form.Item>
        </Row>
    </Form>
}
const FormChangeInfoUser = () => {
    const { infoTeacher } = useSelector(state => state.infoTeacherReducer)
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const formData = new FormData();
    const [src, setSrc] = React.useState('/default-image.jpg');
    const onFinish = (values) => {
        console.log(values)
        for (let v in values) {
            formData.append(v, values[v]);
        }
        formData.append('id', infoTeacher.user.id);
        dispatch(actChangeInfo(formData));
    }
    React.useEffect(() => {
        form.setFieldsValue({
            first_name: infoTeacher?.user?.first_name,
            last_name: infoTeacher?.user?.last_name,
            email: infoTeacher?.user?.email
        })
        if (infoTeacher?.user?.avatar === null) {
            setSrc('/default-image.jpg')
        }
        else {
            setSrc(infoTeacher?.user?.avatar)
        }
    }, [form, infoTeacher])
    const renderImage = useCallback(() => {
        return <Image id='srcImg' width={'100%'}
            height={'100%'}
            src={src}
            fallback={'/default-image.jpg'}
            onError={(e) => { e.target.onerror = null; e.target.src = "/default-image.jpg" }}
        ></Image>
    }, [src]);
    const handleChangeFile = async (event) => {
        console.log(event)
        //Lấy dữ liệu từ file từ người dùng nhập
        let file = event.fileList[0];
        let reader = new FileReader();
        // //Đọc file
        reader.readAsDataURL(file.originFileObj);
        // console.log(URL.createObjectURL(file.originFileObj))
        // //Sau khi đọc file chạy hàm onload để thay đổi hình
        reader.onload = async (e) => {
            setSrc(e.target.result);
        }
        formData.set('avatar', file.originFileObj);
    }
    return <Form form={form} layout='horizontal' onFinish={onFinish}>
        <Row style={{ marginBottom: 20 }}>
            <Col span={24}>
                <Text strong>Avatar</Text>
            </Col>
            <div className={styles.avatar}>
                {renderImage()}
                <Upload.Dragger
                    maxCount={1}
                    accept='image/png, image/jpg, image.jpeg,image/gif'
                    className={styles.updateAvatar}
                    onChange={handleChangeFile}
                > <p style={{ color: 'white' }}><UploadOutlined /> Upload</p> </Upload.Dragger>
            </div>
        </Row>
        <Row>
            <Col style={{ marginRight: 20 }}>
                <Form.Item label='Frist name' name='first_name'>
                    <Input></Input>
                </Form.Item>
            </Col>
            <Col>
                <Form.Item label='Last name' name='last_name'>
                    <Input></Input>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Form.Item style={{ width: 400 }} label='Email' name='email'>
                <Input></Input>
            </Form.Item>
        </Row>
        <Row justify='end'>
            <Form.Item>
                <Button htmlType='submit' type='link'>Change</Button>
            </Form.Item>
        </Row>

    </Form>

}
const FormChangeProfile = () => {
    const { infoTeacher } = useSelector(state => state.infoTeacherReducer)
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue({
            job: infoTeacher.job,
            skills: infoTeacher.skills
        })
    }, [form, infoTeacher])
    const onFinish = (values) => {
        dispatch(actChangeProfile(values));
    }
    return <Form form={form} layout='horizontal' onFinish={onFinish}>
        <div style={{ marginBottom: 10 }}><Text strong>Your profession</Text></div>
        <Form.Item style={{ marginBottom: `10px` }} name="job">
            <Input placeholder="Your profession..." />
        </Form.Item>
        <Form.Item name='skills'>
            <AddSkills form={form} />
        </Form.Item>
        <Row justify='end'>
            <Form.Item>
                <Button htmlType='submit' type='link'>Change</Button>
            </Form.Item>
        </Row>
    </Form>
}
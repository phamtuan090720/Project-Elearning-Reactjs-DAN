import React, { useState } from 'react'
import { Form, Button, Input, Divider, Layout } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { actLogin, actLoginGG } from '../reducers/action';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import ForgotPasswork from '../ForgotPasswork/ForgotPasswork';
export default function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        let user = values;
        const action = actLogin(user, history);
        dispatch(action);
    };
    const responseGoogle = (response) => {
        console.log(response);
        const action = actLoginGG(response.accessToken, history);
        dispatch(action);
    }
    return (
        <Layout>

            <div className={styles.container}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    className={styles.formContainer}
                    onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                    <h1>Login</h1>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input size="large" placeholder="Username " />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password size="large" placeholder="Password" />
                    </Form.Item>

                    <Form.Item >
                        <Button type="link" style={{ padding: 0 }} onClick={showModal}>Forgot password?</Button>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: `10px` }}>
                        <Button type='primary' size="large" shape="round" htmlType="submit" style={{ width: `100%`, height: `50px` }}>
                            Login
                        </Button>
                    </Form.Item>

                    <Divider>or</Divider>

                    <Form.Item >
                        <GoogleLogin
                            clientId="438276732910-nn7g9m5d9jo5mbkbv3doi9f61lhis822.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            render={renderProps => (
                                <Button onClick={renderProps.onClick} disabled={renderProps.disabled} size="large" shape="round" className={styles.googleBtn} >
                                    <FcGoogle className={styles.icon} /> Continue with Google
                                </Button>
                            )}
                        />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: `10px` }}>
                        <div style={{ textAlign: 'center' }}>
                            Not a member? <Link to="/register">Join now</Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
            {/* {renderNoti()} */}
            <ForgotPasswork isModalVisible={isModalVisible} handleOk={handleOk} onCancel={handleCancel} onOk={handleOk} />
        </Layout>

    )
}

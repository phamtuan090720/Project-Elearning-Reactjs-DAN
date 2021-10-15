import React from 'react'
import { Form, Button, Input, Divider } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import styles from './register.module.scss';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { actionRegister } from '../reducer/action';
import {actLoginGG} from '../../Login/reducers/action';
import { GoogleLogin } from 'react-google-login';


export default function Register() {
    const { loading } = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const onFinish = (values) => {
        let user = values;
        console.log(user)
        const action = actionRegister(user, history);
        dispatch(action);
    };
    const responseGoogle = (response) => {
        console.log(response);
        const action = actLoginGG(response.accessToken, history);
        dispatch(action);
    }
    return (
        <div className={styles.container}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                className={styles.formContainer}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <h2>CREATE ACCOUNT</h2>

                <Form.Item
                    name="username"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                    ]}

                >
                    <Input size="large" placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="Email " />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' }, {
                            min: 6, message: 'This password is too short. It must contain at least 6 characters'
                        }]}
                >
                    <Input.Password size="large" placeholder="Password" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
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
                    <Input.Password size="large" placeholder="Confirm your password" />
                </Form.Item>

                <Form.Item style={{ marginBottom: `10px` }}>
                    <Button type='primary' size="large" shape="round" htmlType="submit" style={{ width: `100%`, height: `50px` }} loading={loading}>
                        Register
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
                                    <FcGoogle className={styles.icon} /> Sign in with Google
                                </Button>
                            )}
                        />
                    </Form.Item>
                <Form.Item style={{ marginBottom: `10px` }}>
                    <div style={{ textAlign: 'center' }}>
                        <NavLink to="/">Back to home</NavLink>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
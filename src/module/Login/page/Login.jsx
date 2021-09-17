import React from 'react'
import { Form, Button, Input, Divider, Layout, notification } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { actLogin } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
export default function Login() {
    let history = useHistory();
    const { userLogin } = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (userLogin) {
            history.push('/home');
        }
    }, [userLogin,history]);
    const { err } = useSelector(state => state.LoginReducer);
    const openNotification = (mess, description) => {
        notification.open({
            message: mess,
            description:
                description,
            placement: 'bottomRight',
            type: 'error',
            style: {
                width: 400,
            },
        });
    };
    const onFinish = (values) => {
        let user = values;
        const action = actLogin(user, history);
        dispatch(action);
    };
    const renderNoti = React.useCallback(
        () => {
            return <> {err === null ? '' : openNotification('Login failed', err)} </>
        },
        [err],
    )
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
                        <Button type="link" style={{ padding: 0 }}>Forgot password?</Button>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: `10px` }}>
                        <Button type='primary' size="large" shape="round" htmlType="submit" style={{ width: `100%`, height: `50px` }}>
                            Login
                        </Button>
                    </Form.Item>

                    <Divider>or</Divider>

                    <Form.Item >
                        <Button size="large" shape="round" className={styles.googleBtn} >
                            <FcGoogle className={styles.icon} /> Continue with Google
                        </Button>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: `10px` }}>
                        <div style={{ textAlign: 'center' }}>
                            Not a member? <Link to="/register">Join now</Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
            {renderNoti()}
        </Layout>

    )
}

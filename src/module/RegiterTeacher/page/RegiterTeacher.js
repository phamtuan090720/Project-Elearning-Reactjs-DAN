import React, { useEffect } from 'react'
import { Steps, Button, Space, Form, Input, Row, Typography, Col, Alert } from 'antd';
import styles from './tRegister.module.scss';
import { useMediaQuery } from 'react-responsive';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../../Login/reducers/action';
import PageError from '../../../page/PageError/PageError';
import Loading from '../../../components/Loading/Loading';
import { useHistory } from 'react-router-dom';
import { actionRegisterTeacher, checkActiveTeacher } from '../reducer/action';

const { Step } = Steps;
const { Title, Text } = Typography;

export default function RegisterTeacher() {
    const { userLogin, loading } = useSelector(state => state.LoginReducer);
    const { access } = useSelector(state => state.teacherRegisterReducer);
    const [valueInfo, setValueInfo] = React.useState(null);
    const [valueJob, setValueJob] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getUserLogin());
    }, [dispatch]);
    useEffect(() => {
        dispatch(checkActiveTeacher());
    }, [dispatch]);
    const isPhone = useMediaQuery({
        query: '(max-width: 46.1875em)'
    });
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
    const onFinishFormInfomation = (value) => {
        setValueInfo(value)
        // console.log(value);
        next();
    }
    const onFinishJob = (value) => {
        setValueJob(value)
        console.log(value)
        next();
    }
    const onFinishAch = (value) => {
        let data = {
            ...value,
            ...valueJob,
            ...valueInfo
        }
        let newData = {}
        for (let key in data) {
            if (data[key]) {
                newData = {
                    ...newData,
                    [key]: data[key]
                }
            }
        }
        dispatch(actionRegisterTeacher(newData, history))
    }
    const steps = [
        {
            title: 'Step 1',
            description: "Personal details",
            content: <div className={styles.containerForm}>
                <Form validateMessages={validateMessages} onFinish={onFinishFormInfomation} layout='vertical' >
                    <div><Title level={3} style={{ marginBottom: 10 }}>Infomation</Title></div>
                    <div style={{ marginBottom: 20 }}><Text type='secondary' >You should fill in your information completely for us to confirm</Text></div>
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
                    <Form.Item style={{ width: 400 }} label='Email' name='email'>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item className={styles.btnGroup}>
                        <Button type="primary" htmlType='submit' shape='round'>
                            Next
                        </Button>
                    </Form.Item>
                </Form>
            </div>,
        },
        {
            title: 'Step 2',
            description: "Profession",
            content: <div className={styles.containerForm}>
                <Form style={{ height: '100%' }} name='jobForm' onFinish={onFinishJob}>
                    <div><Title level={3} style={{ marginBottom: 20 }}>What is your profession?</Title></div>
                    <div style={{ marginBottom: 20 }}><Text type='secondary' >We want to know your current job</Text></div>
                    <Form.Item style={{ marginBottom: `10px` }} name="job" validateFirst="">
                        <Input placeholder="Your profession..." />
                    </Form.Item>
                    <Form.Item className={styles.btnGroup}>
                        <Space>
                            <Button style={{ margin: '0 8px' }} shape='round' onClick={() => prev()}>
                                Previous
                            </Button>
                            <Button type="primary" htmlType='submit' shape='round'>
                                Next
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>,
        },
        {
            title: 'Step 3',
            description: "Skills",
            content: <div className={styles.containerForm}>
                <Form name="skills" onFinish={onFinishAch}>
                    <div><Title level={3} style={{ marginBottom: 20 }}>What is your skills?</Title></div>
                    <div style={{ marginBottom: 20 }}><Text type='secondary' >What skills do you think you have to become an instructor?</Text></div>
                    <Form.List name="skills">
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        required={false}
                                        key={field.key}
                                    >
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: "Please input skills or delete this field.",
                                                },
                                            ]}
                                            noStyle
                                        >
                                            <Input placeholder="Skills......" style={{ width: '200px' }} />
                                        </Form.Item>
                                        {fields.length > 0 ? (
                                            <MinusCircleOutlined
                                                className="dynamic-delete-button"
                                                onClick={() => remove(field.name)}
                                            />
                                        ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        style={{ width: '60%' }}
                                        icon={<PlusOutlined />}
                                    >
                                        Add field
                                    </Button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <Form.Item className={styles.btnGroup}>
                        <Space>
                            <Button style={{ margin: '0 8px' }} shape='round' onClick={() => prev()}>
                                Previous
                            </Button>
                            <Button type="primary" htmlType='submit' shape='round'>
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>,
        },
    ];
    const [current, setCurrent] = React.useState(0);
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const renderMess = React.useCallback(() => {
        console.log(access)
        if (access === false) {
            return <div style={{ marginBottom: 20, marginTop: 20, display: 'flex', justifyContent: 'center' }}><Text type='warning' >You are registered as an instructor, please wait for us to accept or re-register</Text></div>
        }
        return
    }, [access]);
    if (loading) return <Loading />
    // console.log(userLogin)
    if (!userLogin) return <PageError>
        <Alert showIcon={true} type='error' description={<Text type='danger'>You must be logged in to continue. <Link to='/login'>Login</Link></Text>}>
        </Alert>
    </PageError>
    if (userLogin?.user_type === "Teacher") return <PageError>
        <Alert showIcon={true} type='warning' description={<Text type='warning'>You are already an instructor please come back home</Text>}>
        </Alert>
    </PageError>

    return (
        <div className={styles.container}>
            {renderMess()}
            {isPhone &&
                <Steps current={current} className={styles.stepContainer} size="small">
                    <Step />
                    <Step />
                    <Step />
                </Steps>}
            {!isPhone &&
                <Steps current={current} className={styles.stepContainer} responsive={true}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} description={item.description} />
                    ))}
                </Steps>
            }
            <div className={styles.content}>{steps[current].content}</div>
            <div style={{ marginBottom: 20, marginTop: 20, display: 'flex', justifyContent: 'center' }}><Text type='secondary' >If you want to rethink you can go back</Text></div>
            <div className={styles.btnBackToHome}><Button type='link'><Link to='/'> Back To Home</Link></Button></div>
        </div>
    )
}

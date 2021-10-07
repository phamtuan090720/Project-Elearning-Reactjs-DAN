import React from 'react';
import { Col, Form, Input, Row, Typography } from 'antd'
const { Text, Title } = Typography;
export default function FormInfomation({ onFinish, form }) {
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
        <div style={{ maxWidth: "600px", margin: "0 auto", display: 'flex', justifyContent: "center",marginBottom:30 }}>
            <Form form={form} validateMessages={validateMessages} onFinish={onFinish} layout='vertical' >
                <div><Title level={4}>Infomation</Title></div>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Form.Item label='Frist name' name='fristName'>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label='Last name' name='lastName'>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item style={{ width: 400 }} label='Email' name='email'>
                    <Input></Input>
                </Form.Item>
            </Form>
        </div>

    )
}

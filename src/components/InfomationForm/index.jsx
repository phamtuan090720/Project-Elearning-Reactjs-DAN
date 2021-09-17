import React from 'react';
import { Row, Form, Input, Radio, } from 'antd';
import styles from './infoForm.module.scss'

export default function InfoForm() {
    return (
       <>
            <h2>Information</h2>
            <Row className={styles.row}>
                <Form.Item
                    name="firstName"
                    className={styles.items}
                    // rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input style={{ height: `50px` }} size="large" placeholder="First name " />
                </Form.Item>
                <Form.Item
                    name="lasttName"
                    className={styles.items}
                    // rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input style={{ height: `50px` }} size="large" placeholder="Last name " />
                </Form.Item>
            </Row>
            <Form.Item name="gender" label="Gender" className={styles.radioGroup}>
                <Radio.Group >
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                    <Radio value="orther">Orther</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="phone"
                className={styles.items}
                // rules={[{ required: true, message: 'Please input your phone!' }]}
            >
                <Input style={{ height: `50px` }} size="large" placeholder="Phone number" />
            </Form.Item>

            <Form.Item
                name="adress"
                className={styles.items}
                // rules={[{ required: true, message: 'Please input your address!' }]}
            >
                <Input style={{ height: `50px` }} size="large" placeholder="Address" />

            </Form.Item>

        </>
    )
}

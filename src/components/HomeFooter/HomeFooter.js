import React from 'react'
import { Row, Col } from 'antd';
import styles from './homeFooter.module.scss'
import {Link} from 'react-router-dom';
import { Input, Form, Button, Divider, Tooltip } from 'antd';
import { CopyrightOutlined, FacebookFilled, TwitterCircleFilled, GooglePlusCircleFilled, LinkedinFilled } from '@ant-design/icons';

export default function HomeFooter() {
    return (
        <div className={styles.footerContainer}>
            <Row className={styles.main} wrap={true}>
                <Col xl={{ span: 6}} order={1} xs={{ span: 24}} >
                    <ul className={styles.ulItems}>
                        <h2>Company</h2>
                        <li><Link to="/">Tech on Appname</Link></li>
                        <li><Link to="/">Notifications</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                    </ul>
                </Col>
                <Col xl={{ span: 6}} order={2} xs={{ span: 24}}>
                    <ul className={styles.ulItems}>
                        <h2>Let us help</h2>
                        <li><Link to="/">Privacy policy</Link></li>
                        <li><Link to="/">Help and support</Link></li>
                        <li><Link to="/">Term</Link></li>
                    </ul>
                </Col>
                <Col xl={{ span: 10}} order={3} xs={{ span: 24}}>
                    <h2>Get notifications about new course</h2>
                    <Form
                        name="basic"
                        layout="inline"
                    >
                        <Form.Item name="email" className={styles.w60} >
                            <Input placeholder="Your email" size="large" className={styles.borderRadius} />
                        </Form.Item>
                        <Form.Item className={styles.btnSubmit}>
                            <Button className={styles.customButton} htmlType="submit" shape="round" size="large">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Divider />
            <div className={styles.sub}>
                <div className={styles.left}>
                    <CopyrightOutlined /> 2021 Course. All rights reserved.
                </div>
                <div className={styles.right}>
                    <Link to="/">
                        <Tooltip title="Facebook">
                            <FacebookFilled />
                        </Tooltip>
                    </Link>
                    <Link to="/">
                        <Tooltip title="Twitter">
                            <TwitterCircleFilled />
                        </Tooltip>
                    </Link>
                    <Link to="/">
                        <Tooltip title="Google">
                            <GooglePlusCircleFilled />
                        </Tooltip>
                    </Link>
                    <Link to="/">
                        <Tooltip title="LinkedIn">
                            <LinkedinFilled />
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import styles from './Contact.module.scss';
import { Row, Col } from 'antd';
import { PhoneFilled, WechatFilled } from '@ant-design/icons';

export default function contact() {
    return (
        <>
            <Row style={{backgroundColor: '#f5f8fa'}} justify="center">
                <Col span={12} style={{margin : "auto 0"}}>
                    <p style={{fontSize :'50px', fontWeight : 'bold'}}>Get in touch</p>
                    <p style={{fontSize :'24px'}}>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
                </Col>
                <Col span= {6} offset= {0}><img src="/contact.png" alt="contact" /></Col>
            </Row>
            <Row justify='space-around' className={styles.contactP}>
                <Col xl={{span: 8}} lg={{span: 24}} className={styles.itemsContact}>
                    <Col><PhoneFilled className={styles.icon}/></Col>
                    <Col><strong>Direct Contact </strong></Col>
                    <Col><em>Interested in our service? Just pick up the phone to talk with a member of our our team.</em></Col>
                    <Col> phone: <a href="tel:123-456-7890">(+84) 123-456-7890</a></Col>

                </Col>
                <Col xl={{span: 8}} lg={{span: 24}} className={styles.itemsContact}>
                    <Col><WechatFilled className={styles.icon}/></Col>
                    <Col><strong>Contact Customer Support</strong> </Col>
                    <Col><em>Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry… we’re here for you.</em></Col>
                    <Col> mail: <a href="mailto:webmaster@example.com"> webmaster@example.com </a></Col>
                </Col>
            </Row>
        </>
    )
}

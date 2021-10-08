import React from 'react'
import Paper from '../../../../../components/Paper/Paper'
import styles from './Profile.module.scss';
import { Col, Row, Space, Typography, Tag } from 'antd';
import TagSkill from './Tag/TagSkill.js';
import { useSelector } from 'react-redux';
const { Paragraph, Text } = Typography;
export default function Profile() {
    const { infoTeacher } = useSelector(state => state.infoTeacherReducer)
    const renderSkill = (list) => {
        if (list) {
            return list.map((item, index) => {
                return <span key={index}><TagSkill key={index} content={item} isActiveDefault={true} disable={true}></TagSkill> </span>
            })
        }
    }
    return (
        <Paper className={styles.container}>
            <div className={styles.title}>
                <div>Profile</div>
            </div>
            <div className={styles.wrapProfile}>
                <Paragraph>
                    <Row>
                        <Col span={4}><Text strong >Career:</Text> </Col>
                        <Col><Tag className={styles.job}>{infoTeacher?.job}</Tag></Col>
                    </Row>
                </Paragraph>
                <Paragraph>
                    <Row align='middle'>
                        <Col span={4} style={{ marginBottom: 10 }}><Text strong >Skills:</Text> </Col>
                        <Space size={[8, 16]} wrap>
                            {renderSkill(infoTeacher?.skills)}
                        </Space>
                    </Row>
                </Paragraph>
                <Paragraph>
                    <Row>
                        <Col span={4}><Text strong >Experience:</Text> </Col>
                        <Col>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore provident nihil, sed iusto tempore consequuntur officiis non similique tempora enim, id veniam nemo. Aut voluptatem commodi consequuntur nobis quasi?
                        </Col>
                    </Row>
                </Paragraph>
            </div>
        </Paper>
    )
}

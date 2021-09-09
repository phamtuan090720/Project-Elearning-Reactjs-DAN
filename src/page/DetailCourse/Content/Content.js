import { Col, Collapse, Row } from 'antd';
import React from 'react'
import styles from './Content.module.scss';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

export default function Content() {
    const Callback = (key) => {
        console.log(key)
    }
    return (
        <div className='container'>
            <div className={styles.wrap}>
                <Row>
                    <Col xs={24} xl={16}>
                        <div className={styles.description}>
                            <h3>Description</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores magni tempora repellat odio adipisci consectetur quisquam minus. Minus soluta modi neque, corrupti temporibus sint dicta et labore aut quibusdam.
                        </div>
                        <div className={styles.curriculum}>
                            <h3>Course Curriculum</h3>
                            <Collapse
                                accordion
                                defaultActiveKey={['1']}
                                onChange={Callback}
                                expandIconPosition={'right'}
                                expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}
                            >
                                <Panel header="This is panel header 1" key="1">
                                    <div>test</div>
                                </Panel>
                                <Panel header="This is panel header 1" key="2">
                                    <div>test</div>
                                </Panel>
                                <Panel header="This is panel header 1" key="3">
                                    <div>test</div>
                                </Panel>
                                <Panel header="This is panel header 1" key="4">
                                    <div>test</div>
                                </Panel>
                                <Panel header="This is panel header 1" key="5">
                                    <div>test</div>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className={styles.reviews}>
                        </div>
                    </Col>
                </Row>
            </div>


        </div>
    )
}

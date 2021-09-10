import { Col, Collapse, Row } from 'antd';
import React from 'react'
import styles from './Content.module.scss';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Review from '../../../../components/Review/Review';
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
                            <h2>Description</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores magni tempora repellat odio adipisci consectetur quisquam minus. Minus soluta modi neque, corrupti temporibus sint dicta et labore aut quibusdam.
                        </div>
                        <div className={styles.curriculum}>
                            <h2>Course Curriculum</h2>
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
                            <h2>Reviews</h2>
                            <Review point={4}/>
                            <Review point={5}/>
                            <Review point={1}/>
                            <Review point={2}/>
                        </div>
                    </Col>
                </Row>
            </div>


        </div>
    )
}

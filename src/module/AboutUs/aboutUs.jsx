import React from 'react';
import styles from './About.module.scss';
import { TeamOutlined, FundProjectionScreenOutlined, GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Row, Col, Card } from 'antd';

export default function aboutUs() {
    return (
        <>
            <div className={styles.aboutContainer}>
                <div className={styles.sloganContainer} style={{backgroundImage:`url(/bgslogan.jpg)`}}><h1 className={styles.slogan}>Never stop learning because life never stop teaching.</h1></div>
                <div className={styles.block} style={{ paddingTop: '30px' }}>
                    <h1 >
                        Our Features
                    </h1>
                    <div className={styles.title}>On Cursus, you have access to:</div>
                    <div className={styles.line}></div>
                    <div className={styles.content}>
                        <div className={styles.items}>
                            <TeamOutlined className={styles.icon} /><h2>Academic Support</h2><p>Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.</p>
                        </div>
                        <div className={styles.items}>
                            <FundProjectionScreenOutlined className={styles.icon} /><h2>Online Learning</h2><p>An online discussion is very similar to a f2f talk in that they require moderation and active management by the instructor, preparation time, and summarization of the concepts covered.</p>
                        </div>
                        <div className={styles.items}>
                            <ClockCircleOutlined className={styles.icon} /><h2>Flexible Time</h2><p>Test your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>
                        </div>
                        <div className={styles.items}>
                            <GlobalOutlined className={styles.icon} /><h2>An Inclusive Experience</h2><p>Test your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.block} style={{ textAlign: 'left', backgroundColor: '#fff', marginTop: '0' }}>
                    <div className={styles.content} style={{ alignItems: 'center'}}>
                        <div className={styles.paragraph}>
                            <h1>
                                Our Story
                            </h1>
                            <div className={styles.line} style={{margin: 'auto auto 30px 0'}}></div>
                            (Text about story)
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vel dolor id ultrices.
                            Proin a magna at mi pretium pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis augue.
                            Nam vitae purus placerat, hendrerit nisl id, finibus magna. Etiam pharetra gravida ornare.
                            Donec sagittis, ipsum in egestas egestas, dui lorem sollicitudin justo, ut ullamcorper velit neque eu velit.
                            Ut et fringilla elit. Mauris augue augue, auctor a blandit ac, convallis eget neque. Curabitur in ante ante.
                            Nullam laoreet tempus erat at ornare. In nisl nisi, dapibus eget facilisis sit amet, commodo quis nibh.
                        </div>
                        <div className={styles.storyImg} style={{width: "40%"}}><img src="/story.png" alt="our story" /></div>

                    </div>
                </div>

                <div className={styles.block}>
                    <h1>
                        Our Global Reach
                    </h1>
                    <div className={styles.title}>Cursus is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.</div>
                    <div className={styles.line}></div>
                    <div className={styles.content}>
                        <Row justify="space-around" style={{ width: '100%' }}>
                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >10</Col>
                                <Col xl={12}>instructor</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >2k</Col>
                                <Col xl={12}>member</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >1k</Col>
                                <Col xl={12}>course</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >5</Col>
                                <Col xl={12}>language</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >10</Col>
                                <Col xl={12}>contries</Col>
                            </Col>

                        </Row>

                    </div>
                </div>

                <div className={styles.block} style={{ backgroundColor: '#fff' }}>
                    <h1 >
                        Our Team
                    </h1>
                    <div className={styles.line}></div>
                    <div className={styles.content}>
                        <Row justify={'space-around'} style={{width : '100%', marginTop:' 5px'}}>
                            <Col xl={{span: 6}}>
                                <Card
                                    style={{ maxWidth: 300 }}
                                    cover={<img alt="example" src="https://png.pngtree.com/templates/md/20180619/md_5b288f21254a6.jpg" />}
                                >
                                    Phạm Tuân
                                </Card>
                            </Col>
                            <Col xl={{span: 6}}>
                                <Card
                                    style={{ maxWidth: 300 }}
                                    cover={<img alt="example" src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-initial-letter-tt-logo-template-png-image_3582070.jpg" />}
                                >
                                    Thu Thủy
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

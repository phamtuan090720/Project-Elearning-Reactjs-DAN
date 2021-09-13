import { Col, Collapse, Row } from 'antd';
import React, { useCallback } from 'react'
import styles from './Content.module.scss';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Review from '../../../../components/Review/Review';
import { useSelector } from 'react-redux';
import {BsFillCameraVideoFill} from 'react-icons/bs';
const { Panel } = Collapse;

export default function Content() {
    const { detailCourse } = useSelector(state => state.DetailCourseReducer);
    const Callback = (key) => {
        console.log(key)
    }
    const renderReview = useCallback(() => {
        if (detailCourse?.student_join) {
            return detailCourse.student_join.map((item, index) => {
                return <Review key={index} student={item.student} review={item.review} point={item.rate} />
            })
        }
    }, [detailCourse?.student_join]);
    const renderListVideo = (list_video) => {
        if(list_video.length > 0){
            return list_video.map((item,index)=>{
                return <div style={{fontWeight:'400',fontSize:16}} key={index}><BsFillCameraVideoFill style={{marginRight:10}} />{item}</div>
            })
        }
        else return <div> No video for the lesson yet  </div>
    }
    const renderLesson = () => {
        if (detailCourse?.lessons) {
            return detailCourse.lessons.map((item, index) => {
                return <Panel style={{fontSize:16,fontWeight:'bold'}} header={item.subject} key={index}>
                    {renderListVideo(item.list_video)}
                </Panel>
            })
        }

    }
    return (
        <div className='container'>
            <div className={styles.wrap}>
                <Row>
                    <Col xs={24} xl={16}>
                        <div className={styles.description}>
                            <h2>Description</h2>
                            {detailCourse?.description}
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
                                {renderLesson()}
                                {/* <Panel header="This is panel header 1" key="1">
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
                                </Panel> */}
                            </Collapse>
                        </div>
                        <div className={styles.reviews}>
                            <h2>Reviews</h2>
                            {renderReview()}
                        </div>
                    </Col>
                </Row>
            </div>


        </div>
    )
}

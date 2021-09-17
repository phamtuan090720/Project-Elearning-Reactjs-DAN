import { Avatar, Button, Card } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './CardCourse.module.scss';
import { useParams } from 'react-router-dom';
import { actRegisterCourse } from '../../reducers/action';
export default function CardCouse({ subject, img, countStudent }) {
    const { detailCourse } = useSelector(state => state.DetailCourseReducer);
    const { userLogin } = useSelector(state => state.LoginReducer);
    let router = useParams();
    const dispatch = useDispatch();

    const renderReview = useCallback(() => {
        if (detailCourse?.student_join) {
            return detailCourse.student_join.map((item, index) => {
                return <Avatar key={index} src={item.student?.avatar}>{item.student?.username}</Avatar>
            })
        }
    }, [detailCourse?.student_join]);
    
    const renderButton = React.useCallback(() => {
        let userLoginInCourse = detailCourse?.student_join.find((item) => {
            return item.student.id === userLogin?.id;
        });
        if (userLoginInCourse) {
            if (userLoginInCourse.access) {
                return <>
                    <Button shape='round' type="primary" style={{ backgroundColor: "#9e9e9e", color: 'white' }} size="large" block disabled >
                        Registered
                    </Button>
                </>
            }
            else {
                return <>
                    <Button shape='round' type="primary" style={{ backgroundColor: "#9e9e9e", color: 'white' }} size="large" block disabled >
                        Waiting for owner access
                    </Button>
                </>
            }

        }
        else {
            return <>
                <Button style={{ marginBottom: 10 }} shape='round' type="primary" size="large" block>
                    Add your wish list
                </Button>
                <Button shape='round' type="primary" danger size="large" block onClick={() => {
                    dispatch(actRegisterCourse(router.id));
                }}>
                    Register the course
                </Button>
            </>
        }

    }, [detailCourse, userLogin, dispatch,router])
    return (
        <Card className={styles.card}
            bordered={true}
            style={{ boxShadow: "0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)" }}
            cover={<img alt={subject} src={img === null ? 'https://picsum.photos/200/200' : img} style={{ height: '200px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200/200" }} />}
        >
            <div className={styles.groupAvatar}>
                <Avatar.Group
                    maxCount={3}
                >
                    {renderReview()}
                </Avatar.Group>
                <p className={styles.count_enrolled}>{countStudent > 0 ? `+${countStudent} Enrolled` : 'The course has not been registered yet'} </p>
            </div>
            {renderButton()}
        </Card>
    )
}

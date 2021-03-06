import { Button, Card, Col, Input, PageHeader, Row } from 'antd'
import React from 'react'
import styles from './Header.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import * as Type from '../../redux/type.js';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actGetMyCourse } from '../../redux/action';
const { Search } = Input;
const ContentHeader = () => {
    const { countCourse } = useSelector(state => state.manageCourseReducer)
    console.log(countCourse)
    const dispatch = useDispatch();
    const history = useHistory();
    const onSearch = value => {
        history.push(`/teacher/manage-course/?kw=${value}`)
        dispatch(actGetMyCourse(1, value));
    }
    return <>
        <Row align='middle'>
            <Col span={10}>
                <Card bordered={false}>
                    <div className={styles.info}>
                        <span>Your course total : </span>
                        <span>{countCourse}</span>
                    </div>
                </Card>
            </Col>
            <Col span={14} >
                <div className={styles.search}>
                    <Search placeholder="search course" onSearch={onSearch} style={{ width: 200 }} />
                </div>

            </Col>
        </Row>
    </>
}
export default function Header() {
    const { userLogin } = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch()
    const openCreateForm = () => {
        dispatch({ type: Type.SET_STATUS_OPENCREATEFROM, status: true })
    }
    return (
        <PageHeader
            className={styles.header}
            style={{ boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)', transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}
            title={`Hi ${userLogin.username} well come to Course Manage`}
            extra={[
                <Button icon={<PlusOutlined />} onClick={openCreateForm} shape={'round'} key="1" type="primary">
                    Create Course
                </Button>,
            ]}
            avatar={{ src: userLogin.avatar, size: 'large' }}
        >
            {ContentHeader()}
        </PageHeader>
    )
}

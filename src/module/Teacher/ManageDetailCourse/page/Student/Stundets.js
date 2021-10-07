import { Tabs } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Paper from '../../../../../components/Paper/Paper';
import Header from './Header/Header'
import ListStudent from './ListStudent/ListStudent';
import ListStudentPenddingAccess from './ListStudentPenddingAccess/ListStudentPenddingAccess';
import { actGetListStudentInCourse } from '../../reducers/action.js';
import styles from './Students.module.scss';
const { TabPane } = Tabs;
export default function Stundets() {
    const dispatch = useDispatch()
    const param = useParams()
    useEffect(() => {
        dispatch(actGetListStudentInCourse(param.id));
    }, [dispatch, param])
    return (
        <div className={styles.wrap}>
            <Header />
            <Paper className={styles.wrapManage}>
                <Tabs defaultActiveKey="1" size='large' type='line' style={{ marginBottom: 32 }}>
                    <TabPane tab="Student" key="1">
                        <ListStudent />
                    </TabPane>
                    <TabPane tab="Pending Access" key="2">
                        <ListStudentPenddingAccess />
                    </TabPane>
                </Tabs>
            </Paper>
        </div>
    )
}

import { Tabs } from 'antd';
import React from 'react'
import Paper from '../../../../../components/Paper/Paper';
import Header from './Header/Header'
import ListStudent from './ListStudent/ListStudent';
import ListStudentPenddingAccess from './ListStudentPenddingAccess/ListStudentPenddingAccess';
import styles from './Students.module.scss';
const { TabPane } = Tabs;
export default function Stundets() {
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

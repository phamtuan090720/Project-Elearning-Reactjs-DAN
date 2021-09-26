import React from 'react';
import { Tabs } from 'antd';
import style from './Content.module.scss';
import { GoRepo } from 'react-icons/go'
import { BiBookContent } from 'react-icons/bi'
import { IoDocumentTextOutline } from 'react-icons/io5';
import TabContent from './TabContent/TabContent';
import HomeWork from './HomeWork/HomeWork';
import Document from './Document/Document';
const { TabPane } = Tabs;

export default function Content() {
    return (
        <div className={style.wrap}>
            <Tabs defaultActiveKey="1" type="card" size={'large'}>
                <TabPane tab={
                    <span className={style.itemTab}>
                        <BiBookContent style={{ marginRight: 10 }} />
                        <span>
                            Content
                        </span>
                    </span>
                } key="1">
                    <TabContent />
                </TabPane>
                <TabPane tab={
                    <span className={style.itemTab}>
                        <IoDocumentTextOutline style={{ marginRight: 10 }} />
                        <span>
                            Document
                        </span>
                    </span>
                } key="2">
                    <Document />
                </TabPane>
                <TabPane tab={
                    <span className={style.itemTab}>
                        <GoRepo style={{ marginRight: 10 }} />
                        <span>
                            Home work
                        </span>
                    </span>
                } key="3">
                    <HomeWork />
                </TabPane>
            </Tabs>
        </div>

    )
}

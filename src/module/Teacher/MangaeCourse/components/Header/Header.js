import { Button, Card, Col, Input, PageHeader, Row } from 'antd'
import React from 'react'
import styles from './Header.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import * as Type from '../../redux/type.js';
import { useDispatch } from 'react-redux';
const { Search } = Input;
const ContentHeader = () => {
    const onSearch = value => {
        console.log(value)
    };
    return <>
        <Row align='middle'>
            <Col span={10}>
                <Card bordered={false}>
                    <div className={styles.info}>
                        <span>Your course total : </span>
                        <span>8</span>
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
    const dispatch = useDispatch()
    const openCreateForm = () => {
        dispatch({ type: Type.SET_STATUS_OPENCREATEFROM, status: true })
    }
    return (
        <PageHeader
            className={styles.header}
            style={{ boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)', transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}
            title="Phạm Tuân"
            extra={[
                <Button icon={<PlusOutlined />} onClick={openCreateForm} shape={'round'} key="1" type="primary">
                    Create Course
                </Button>,
            ]}
            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4', size: 'large' }}
        >
            {ContentHeader()}
        </PageHeader>
    )
}

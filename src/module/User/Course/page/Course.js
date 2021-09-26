import React from 'react'
import { Alert, Table } from 'antd';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styles from './Course.module.scss';
import ModalRating from '../components/ModalRating';
import { getInfoCourse } from '../reducer/action';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom'
import { useQuery } from '../../../../HOC/useQuery';
import { useParams } from 'react-router';
import PageError from '../../../../page/PageError/PageError';
export default function Course() {
    const { pagination, loading, listLesson, err } = useSelector(state => state.userCouserReducerData)
    const dispatch = useDispatch();
    const param = useParams();
    // console.log('pa1',pagination)
    const query = useQuery();
    // const history = useHistory();
    // React.useEffect(() => {
    //     dispatch(getInfoCourse(query.get('page') === null ? 1 : query.get('page'), query.get('kw') === null ? '' : query.get('kw')))
    // }, [dispatch,query]);
    React.useEffect(() => {
        dispatch(getInfoCourse(param.id));
    }, [dispatch, param.id]);
    const handleTableChange = (pagination) => {
        console.log(query.has('kw'))
        if (query.has('kw') === true) {
            return dispatch(getInfoCourse(param.id, pagination.current, query.get('kw')))
        }
        else {
            return dispatch(getInfoCourse(param.id, pagination.current))
        }
        // query.set('page', pagination.current)
        // history.push(`/user/course/1/?${query.toString()}`)
        // console.log(param.id)
        // console.log(pagination.current)
        // dispatch(getInfoCourse(param.id,pagination.current))
    };
    const columns = [
        {
            title: 'Name Lesson',
            dataIndex: 'subject',
            render: (text, record) => <Link to={`/learn/${record.id}`}>{text}</Link>,
        },
        {
            title: 'Complete',
            dataIndex: 'complete',
            width: "5%",
            align: 'center',
            render: complete => complete === true ? <CheckCircleOutlined style={{ color: '#7AC043' }} /> : <CloseCircleOutlined style={{ color: '#DA564B' }} />,
        },
    ];
    // khi có lỗi sẽ return về trang lỗi và show thông báo
    if (err) return <PageError>
        <Alert
            showIcon
            type='error'
            description={err} 
        />
    </PageError>
    return (
        <div className={styles.wrap}>
            <Table
                columns={columns}
                loading={loading}
                dataSource={listLesson}
                pagination={pagination}
                onChange={handleTableChange}
                bordered
                title={() => <Header />}
            />
            <ModalRating />
        </div>

    )
}

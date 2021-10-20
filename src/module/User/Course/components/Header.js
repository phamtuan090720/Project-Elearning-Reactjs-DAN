import React from 'react'
import { PageHeader, Button, Tag, Rate, Input, Progress, Row, Col } from 'antd';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as Type from '../reducer/type.js';
import { useQuery } from '../../../../Hooks/useQuery.js';
import { useParams } from 'react-router';
import { getInfoCourse } from '../reducer/action.js';
const { Search } = Input;

export default function Header() {
    const { course } = useSelector(state => state.userCouserReducerData)
    const query = useQuery();
    const param = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [sreach, changeSreach] = React.useState('');
    React.useEffect(() => {
        changeSreach(query.get('kw'))
    }, [query])
    const onSearch = value => {
        history.push(`/user/course/${param.id}/?kw=${value}`)
        dispatch(getInfoCourse(param.id, 1, value));
    };
    const Content = () => {
        return <div style={{ display: 'flex', justifyContent: 'space-between', justifyItems: "center" }}>
            <Rate allowHalf defaultValue={course?.rate} disabled />
            <Search placeholder="search lesson" defaultValue={sreach} onSearch={onSearch} style={{ width: 200 }} />
        </div>
    }
    return (
        <PageHeader
            title={course?.name_course}
            tags={<Tag color="blue">{course?.category}</Tag>}
            extra={[
                <Button shape='round' type='primary' key="1" onClick={() => {
                    dispatch({
                        type: Type.OPEN_MODAL_RATING
                    })
                }}>Rating</Button>,
            ]}
            onBack={() => history.push('/user/list-course')}
        >
            <Content />
            <Row style={{ margin: 10 }}>
                <Col xs={24} xl={3}>
                    <h4>
                        Complete Course :
                    </h4>
                </Col>
                <Col xs={24} xl={21}>
                    <Progress percent={course?.complete_course} strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }} status="active" showInfo />
                </Col>
            </Row>

        </PageHeader>
    )
}

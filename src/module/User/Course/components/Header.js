import React from 'react'
import { PageHeader, Button, Tag, Rate, Input } from 'antd';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as Type from '../reducer/type.js';
import { useQuery } from '../../../../HOC/useQuery.js';
import { useParams } from 'react-router';
import { getInfoCourse } from '../reducer/action.js';
const { Search } = Input;

export default function Header() {
    const { course } = useSelector(state => state.userCouserReducerData)
    const query = useQuery();
    const param = useParams();
    const [sreach, changeSreach] = React.useState('');
    React.useEffect(() => {
        changeSreach(query.get('kw'))
    }, [query])
    const onSearch = value => {
        history.push(`/user/course/${param.id}/?kw=${value}`)
        dispatch(getInfoCourse(param.id, 1, value));
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const Content = () => {
        return <div style={{ display: 'flex', justifyContent: 'space-between', justifyItems: "center" }}>
            <Rate allowHalf defaultValue={course?.rate} disabled />
            <Search placeholder="sreach lesson" defaultValue={sreach} onSearch={onSearch} style={{ width: 200 }} />
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
                }}>Comment</Button>,
            ]}
            onBack={() => history.push('/user/list-course')}
        >
            <Content />
        </PageHeader>
    )
}

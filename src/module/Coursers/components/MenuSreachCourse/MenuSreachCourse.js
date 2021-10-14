import React from 'react'
import styles from './MenuSreachCourse.module.scss';
import { Input, Radio, Rate, Select, Form, Row, Button, Col } from 'antd';
import RadioCustom from '../../../../components/Radio/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { RestFilled, SearchOutlined } from '@ant-design/icons';
import { searchCourse, getCourse } from '../../reducers/action';
import * as Type from '../../reducers/type';
const { Option } = Select;
export default function MenuSreachCourse() {
    const { arrCategory } = useSelector(state => state.CoursesReducer)
    const dispatch = useDispatch();
    const renderCategory = React.useCallback(() => {
        if (arrCategory.length > 0) {
            return arrCategory.map((item, index) => {
                return <Option key={index} value={item.id}>{item.name}</Option>
            })
        }
    }, [arrCategory]);
    const pointRate = [5, 4.5, 3.5, 2.5, 1.5]
    const renderRadio = () => {
        return pointRate.map((item, index) => <Radio key={index} value={item}><Rate allowHalf defaultValue={item} disabled /></Radio>)
    }
    const onChange = (value) => {
    }
    const onFinish = (value) => {
        let newValue = arrCategory.find((item) => item.id === value.category)
        dispatch(searchCourse(1, value))
        dispatch({
            type: 'Category_filter',
            data: newValue.name
        })
        dispatch({
            type: Type.dataSreach,
            data: value
        })
    }
    const onReset = () => {
        dispatch(getCourse())
        dispatch({
            type: 'Category_filter',
            data: "All"
        })
    }
    return (
        <div className={styles.wrap}>
            <Form name='tim kiem form' onFinish={onFinish}>
                <Form.Item name='kw'>
                    <div className={styles.menuItem}>
                        <h3 className={styles.title}>Search name course</h3>
                        <Input placeholder="Search"></Input>
                    </div>
                </Form.Item>
                <h3 className={styles.title}>Categories</h3>
                <Form.Item
                    name={'category'}
                >
                    <Select
                        placeholder="Please select Category"
                        showSearch
                        onChange={onChange}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        {renderCategory()}
                    </Select>


                </Form.Item>
                <Form.Item name='rate'>
                    <div className={styles.menuItem}>
                        <h3 className={styles.title}>Course rating</h3>
                        <div className={styles.ctn_radio}>
                            <RadioCustom id='rate'>
                                {renderRadio()}
                            </RadioCustom>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item name='fee'>
                    <div className={styles.menuItem}>
                        <h3 className={styles.title}>Course fee</h3>
                        <div className={styles.ctn_radio}>
                            <RadioCustom id='type'>
                                <Radio value={0}>Free</Radio>
                                <Radio value={1}>Paid</Radio>
                            </RadioCustom>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item name='public'>
                    <div className={styles.menuItem}>
                        <h3 className={styles.title}>Course status</h3>
                        <div className={styles.ctn_radio}>
                            <RadioCustom id='status'>
                                <Radio value={true}>Public</Radio>
                                <Radio value={false}>Private</Radio>
                            </RadioCustom>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Row justify='end'>
                        <Col span={12}>
                            <Button htmlType='submit' icon={<SearchOutlined />}>Search</Button>
                        </Col>
                        <Col span={12}>
                            <Button htmlType='reset' onClick={onReset} icon={<RestFilled />}>Reset</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    )
}

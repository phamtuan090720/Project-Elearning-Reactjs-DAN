import React from 'react'
import styles from './MenuSreachCourse.module.scss';
import { Radio, Rate, Select } from 'antd';
import RadioCustom from '../../../../components/Radio/Radio';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;
export default function MenuSreachCourse() {
    const { arrCategory } = useSelector(state => state.CoursesReducer)
    const dispatch = useDispatch();
    const renderCategory = React.useCallback(() => {
        if (arrCategory.length > 0) {
            return arrCategory.map((item, index) => {
                return <Option key={index} value={item.name}>{item.name}</Option>
            })
        }
    }, [arrCategory]);
    const pointRate = [5, 4.5, 3.5, 2.5, 1.5]
    const renderRadio = () => {
        return pointRate.map((item, index) => <Radio key={index} value={item}><Rate allowHalf defaultValue={item} disabled /></Radio>)
    }
    const onChange = (value) => {
        dispatch((dispatch) => {
            dispatch({
                type: "Category_filter",
                data: value
            })
        })
    }
    const onFocus = () => {
        console.log('focus');
    }
    const onBlur = () => {
        console.log('blur');
    }
    const onSearch = () => {
        console.log('blur');
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Categories</h3>
                <Select
                    className={styles.select}
                    size='large'
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    defaultValue={""}
                >
                    {renderCategory()}
                </Select>
            </div>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Course rating</h3>
                <div className={styles.ctn_radio}>
                    <RadioCustom id='rate'>
                        {renderRadio()}
                    </RadioCustom>
                </div>
            </div>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Course type</h3>
                <div className={styles.ctn_radio}>
                    <RadioCustom id='type'>
                        <Radio value={1}>Free</Radio>
                        <Radio value={2}>Paid</Radio>
                    </RadioCustom>
                </div>
            </div>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Course status</h3>
                <div className={styles.ctn_radio}>
                    <RadioCustom id='status'>
                        <Radio value={1}>Public</Radio>
                        <Radio value={2}>Private</Radio>
                    </RadioCustom>
                </div>
            </div>
        </div>
    )
}

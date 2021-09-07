import React from 'react'
import styles from './MenuSreachCourse.module.scss';
import { Radio, Rate, Select } from 'antd';
import RadioCustom from '../../../components/Radio/Radio';
const { Option } = Select;
function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}
export default function MenuSreachCourse() {
    const pointRate = [5, 4.5, 3.5, 2.5, 1.5]
    const renderRadio = () => {
        return pointRate.map((item, index) => <Radio key={index} value={item}><Rate allowHalf defaultValue={item} disabled /></Radio>)
    }
    const onChange = (value) => {
        console.log(`selected ${value}`);
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
                    defaultValue={'IT'}
                >
                    <Option value="IT">IT</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Course rating</h3>
                <div className={styles.ctn_radio}>
                    <RadioCustom defaultValue={5} id='rate'>
                        {renderRadio()}
                    </RadioCustom>
                </div>
            </div>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Course type</h3>
                <div className={styles.ctn_radio}>
                    <RadioCustom defaultValue={1} id='type'>
                        <Radio value={1}>Free</Radio>
                        <Radio value={2}>Paid</Radio>
                    </RadioCustom>
                </div>
            </div>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Course status</h3>
                <div className={styles.ctn_radio}>
                    <RadioCustom defaultValue={1} id='status'>
                        <Radio value={1}>Public</Radio>
                        <Radio value={2}>Private</Radio>
                    </RadioCustom>
                </div>
            </div>
        </div>
    )
}

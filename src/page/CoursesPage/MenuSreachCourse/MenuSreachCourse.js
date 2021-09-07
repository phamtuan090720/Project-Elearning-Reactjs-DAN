import React from 'react'
import styles from './MenuSreachCourse.module.scss';
import { Select } from 'antd';
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
    const onChange = (value) =>{
        console.log(`selected ${value}`);
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.menuItem}>
                <h3 className={styles.title}>Categories</h3>
                <Select
                    className = {styles.select}
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
            </div>
        </div>
    )
}

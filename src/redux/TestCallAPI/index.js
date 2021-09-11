import { Select } from 'antd';
import React, { useState } from 'react';
import { http } from '../../api/setting';
const { Option } = Select;

export default function TestCallAPI() {
    const [category,setCategory] = useState([]);
    const getCategory = () => {
        let promise = http.get('category/');
        promise.then((result) => {
            setCategory(result.data.results)
        })
        promise.catch((error) => {
            console.log(error)
        })
    }
    const renderCategory = ()=>{
        if(category.length > 0){
            return category.map((item,index)=>{
                return   <Option key={index} value={item.id}>{item.name}</Option>
            })
        }
        else return
    }
    React.useEffect(() => {
        getCategory();
    }, [])
    return (
        <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                {renderCategory()}
            </Select>
        </div>
    )
}

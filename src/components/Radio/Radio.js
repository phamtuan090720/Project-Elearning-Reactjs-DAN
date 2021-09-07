import React from 'react'
import { Radio, Space } from 'antd';

export default function RadioCustom({ children,defaultValue,id }) {
    const [value, setValue] =React.useState(defaultValue);

    const onChange = (e) => {
        console.log('radio checked ' + id, e.target.value);
        setValue(e.target.value)
    };
    return (
        <Radio.Group id={id} onChange={onChange} value={value}>
            <Space direction="vertical">
                {children}
            </Space>
        </Radio.Group>
    )
}

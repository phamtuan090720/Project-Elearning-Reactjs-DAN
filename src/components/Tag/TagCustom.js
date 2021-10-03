import { Tag } from 'antd';
import React from 'react'

export default function TagCustom({content,closable,onClose}) {
    const renderColor=()=>{
        switch (content) {
            case "ReactJs":
                
                return '#2ccce4';
            case "AngularJs":
                return '#f47373'
            case "Nodejs":
                return '#43853D';
            default:
                return '#ff9800';
        }
    }
    return (
        <Tag style={{marginTop:5}} onClose={onClose} closable={closable} color={renderColor()}>#{content}</Tag>
    )
}

import React from 'react'
import Style from './index.module.scss';
import { Typography } from 'antd';
const { Text } = Typography;
export default function Tag({ content, isActiveDefault, disable }) {
    // const [status, setStatus] = React.useState(isActiveDefault);
    // const changeToggleSkill = () => {
    //     if (status === true) {
    //         setStatus(false);
    //     }
    //     else {
    //         setStatus(true);
    //     }
    // }
    return (
        <Text strong className={`${Style.tag} ${isActiveDefault === true ? Style.active : Style.inactive}`}>
            {content}
        </Text>
    )
}

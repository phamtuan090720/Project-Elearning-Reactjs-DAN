import { Input, Button, Tooltip, Typography } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import TagCustom from '../../../../../../components/Tag/TagCustom';
import React from 'react';
import { useSelector } from 'react-redux';
const { Text } = Typography;
export default function AddTag({ form }) {
    const { infoTeacher } = useSelector(state => state.infoTeacherReducer)
    const [tags, setTag] = React.useState(infoTeacher.skills?infoTeacher.skills:[]);
    const [inputValue, setInputValue] = React.useState('');
    // const [inputVisible, setInputVisible] = React.useState(false);
    // console.log(tags)
    console.log(infoTeacher.skills)
    const handleClose = removedTag => {
        const newtags = tags.filter(tag => tag !== removedTag);
        // console.log(tags);
        // console.log(removedTag);
        setTag(newtags);
        form.setFieldsValue({
            skills: newtags,
        });
    };


    const handleInputChange = e => {
        setInputValue(e.target.value)
    };

    const handleInputConfirm = () => {
        // const { inputValue } = this.state;
        // let { tags } = this.state;
        let newtags = [...tags];
        if (inputValue && tags.indexOf(inputValue) === -1) {
            newtags = [...tags, inputValue];
        }
        // console.log(tags);
        setTag(newtags)
        form.setFieldsValue({
            skills: newtags,
        });
        setInputValue('')
    };
    const renderTag = () => {
        return tags.map((item, index) => {
            return <span key={index} style={{ display: 'inline-block' }}>
                <TagCustom closable={true} onClose={e => {
                    e.preventDefault();
                    handleClose(item);
                }} content={item} />
            </span>
        })
    }
    return (
        <>
            <div><Text strong>Your Skills</Text></div>
            <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                    enter={{
                        scale: 0.8,
                        opacity: 0,
                        type: 'from',
                        duration: 100,
                        onComplete: e => {
                            e.target.style = '';
                        },
                    }}
                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                    appear={false}
                >
                    {renderTag()}
                </TweenOneGroup>
            </div>
            <div>
                <Input
                    type="text"
                    size="small"
                    style={{ width: 120, marginRight: 10 }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                />
                <Tooltip placement="right" title='add Tag'>
                    <Button size='small' shape='circle' type='dashed' icon={<PlusOutlined />} onClick={handleInputConfirm}>
                    </Button>
                </Tooltip>


            </div>


        </>
    )
}

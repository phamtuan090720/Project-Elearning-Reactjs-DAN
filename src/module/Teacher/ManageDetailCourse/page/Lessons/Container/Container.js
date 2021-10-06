import { Button, Drawer } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Type from '../../../reducers/type';
import { Tabs } from 'antd';
import { BookOutlined, FileOutlined, PlusOutlined, VideoCameraOutlined } from '@ant-design/icons';
import styles from './Container.module.scss';
import FilesManage from './FilesManage';
import VideoManage from './VideoManage';
import HomeWork from './HomeWork';
import FormAddFile from './FormCreate/FormAddFile';
import FormAddVideo from './FormCreate/FormAddVideo';
import FormAddHomeWork from './FormCreate/FormAddHomeWork';
const DrawerChild = ({ visible, onClose, title, children }) => {

    // const [visible, setVisible] = React.useState(true);
    return <Drawer
        title={'Add ' + title}
        width={600}
        onClose={onClose}
        visible={visible}
    >
        {children}
    </Drawer>
}
export default function Container() {
    const { openContainer, key } = useSelector(state => state.detailLessonManageReducer);
    const dispatch = useDispatch();
    const [keySelet, setKeyselect] = useState(key);
    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = React.useState(key)
    useEffect(() => {
        setKeyselect(key);
        setTitle(key)
    }, [key]);



    const onCloseChild = () => {
        setVisible(false)
    }
    const openChild = () => {
        setVisible(true)
    }
    const onClose = () => {
        dispatch({ type: Type.SET_STATUS_CONTAINER, status: false });
    }

    function callback(key) {
        switch (key) {
            case "HomeWork": {
                setKeyselect(key);
                setTitle(key);
                break;
            }
            case "Videos": {
                setKeyselect(key);
                setTitle(key);
                break;
            }
            case "Files": {
                setKeyselect(key);
                setTitle(key);
                break;
            }
            default:
                break;
        }

    }
    const renderFormCreate = useCallback((onClose) => {
        switch (keySelet) {
            case "HomeWork": {
                return <FormAddHomeWork onClose={onClose} />
            }
            case "Videos": {
                return <FormAddVideo onClose={onClose} />
            }
            case "Files": {
                return <FormAddFile onClose={onClose} />
            }
            default:
                return;
        }
    }, [keySelet]);
    const { TabPane } = Tabs;
    const render = React.useCallback((onClose) => {
        return <Drawer
            title="Learning Resources"
            width={'80%'}
            onClose={onClose}
            visible={openContainer}
        >
            <Tabs onChange={callback} activeKey={keySelet} type="card">
                <TabPane
                    tab={
                        <span>
                            <VideoCameraOutlined />
                            Videos
                        </span>
                    } key="Videos">
                    <div className={styles.groupButton}>
                        <Button type='primary' onClick={openChild} shape='round' icon={<PlusOutlined />}>Add Video</Button>
                    </div>
                    <VideoManage />
                </TabPane>
                <TabPane tab={
                    <span>
                        <FileOutlined />
                        Files
                    </span>
                } key="Files">
                    <div className={styles.groupButton}>
                        <Button type='primary' shape='round' onClick={openChild} icon={<PlusOutlined />}>Add File</Button>
                    </div>
                    <FilesManage />
                </TabPane>
                <TabPane tab={
                    <span>
                        <BookOutlined />
                        Home Wrok
                    </span>
                } key="HomeWork">
                    <div className={styles.groupButton}>
                        <Button type='primary' shape='round' onClick={openChild} icon={<PlusOutlined />}>Add HomeWrok</Button>
                    </div>
                    <HomeWork />
                </TabPane>
            </Tabs>
        </Drawer>
    }, [openContainer, keySelet]);
    return (
        <>
            {render(onClose)}
            <DrawerChild visible={visible} onClose={onCloseChild} title={title} >
                {renderFormCreate(onCloseChild)}
            </DrawerChild>
        </>
    )
}

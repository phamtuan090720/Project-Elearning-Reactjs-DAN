import { Button, Drawer, Layout, PageHeader, Menu } from 'antd';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { RiVideoFill } from 'react-icons/ri';
import MyLoading from '../components/Loading/Loading.js';
import PageError from '../page/PageError/PageError.js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actGetLesson } from '../module/Learning/reducer/action.js';
export default function LayoutLearning({ children }) {
    const dispatch = useDispatch();
    const param = useParams();
    React.useEffect(() => {
        dispatch(actGetLesson(param.id))
    }, [param, dispatch]);
    const { loading, err, lesson } = useSelector(state => state.LearningReducer);
    const history = useHistory();
    const [visible, setVisible] = React.useState(false)
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false)
    };
    if (loading) return <div style={{ height: '100vh' }}>
        <MyLoading />
    </div>
    if (err) return <PageError>
        <div style={{color:"#ff4d4f"}} className='ant-alert-with-description ant-alert-error ant-alert'>
            {err}
        </div>
    </PageError>
    return (
        <Layout>
            <PageHeader
                onBack={() => history.goBack()}
                title={lesson?.subject}
                extra={[
                    <Button key="1" type="primary" onClick={showDrawer} shape='round'>
                        List Video
                    </Button>,
                    <Button key="2" disabled={lesson?.complete} type="primary" shape='round'>
                        Complete
                    </Button>,
                ]}
                style={{ marginTop: 10 }}
            />
            <Drawer
                title="List Video"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                getContainer={false}
                width={378}
            >
                <Menu
                    style={{ width: '100%' }}
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1" icon={<RiVideoFill />}>Option 1</Menu.Item>
                    <Menu.Item key="2" icon={<RiVideoFill />}>Option 1</Menu.Item>
                    <Menu.Item key="3" icon={<RiVideoFill />}>Option 1</Menu.Item>
                    <Menu.Item key="4" icon={<RiVideoFill />}>Option 1</Menu.Item>
                    <Menu.Item key="5" icon={<RiVideoFill />}>Option 1</Menu.Item>
                </Menu>
            </Drawer>
            <Layout>
                <Layout.Content>
                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

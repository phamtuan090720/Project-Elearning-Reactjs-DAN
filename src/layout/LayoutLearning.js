import { Button, Drawer, Layout, PageHeader, Menu, Empty } from 'antd';
import React from 'react'
import { useHistory } from 'react-router-dom';
import MyLoading from '../components/Loading/Loading.js';
import PageError from '../page/PageError/PageError.js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actGetLesson, actChangeVideo } from '../module/Learning/reducer/action.js';
import { PlayCircleOutlined } from '@ant-design/icons';
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
    const changeVideo = (video) => {
        return dispatch(actChangeVideo(video));
    }

    const renderListVieo = () => {
        if (lesson?.list_video.length > 0) {
            return lesson?.list_video.map((item, index) => {
                return <Menu.Item key={index} onClick={() => {
                    changeVideo(item)
                    setVisible(false)
                }} icon={<PlayCircleOutlined />}>{item.subject}</Menu.Item>
            })
        }
        else return <Empty />
    }
    if (loading) return <div style={{ height: '100vh' }}>
        <MyLoading />
    </div>
    if (err) return <PageError>
        <div style={{ color: "#ff4d4f" }} className='ant-alert-with-description ant-alert-error ant-alert'>
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
                    <Button key="2" type="primary" shape='round'>
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
                    defaultSelectedKeys={['0']}
                >
                    {renderListVieo()}
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

import { Empty, Layout } from 'antd';
import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import MenuEditCourse from '../../../../components/CustomMenu/MenuEdit';
import Home from './Home/Home';
import LessonManage from './Lessons/LessonManage';
const { Content, Footer } = Layout;

export default function ManageDetailCourse() {
    const router = useParams();
    const renderComponent = React.useCallback(() => {
        console.log(router.page)
        switch (router.page) {
            case "home":
                return <Home />
            case "lessons":
                return <LessonManage />
            default:
                return <>
                    <Empty
                        description={
                            <span>
                                Page Not Found  <Link to={`/teacher/manage-course/${router.id}/home`}>Go to home</Link>
                            </span>
                        }
                    />
                </>;
        }
    }, [router]);

    return (
        <Layout style={{ minHeight: '100vh', }}>
            <MenuEditCourse />
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    {renderComponent()}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Tuan ©2020 Created by Antd</Footer>
            </Layout>
        </Layout>
    )
}

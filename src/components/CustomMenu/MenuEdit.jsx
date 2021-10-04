import React from 'react';
import { Layout, Menu, } from 'antd';
import {
    VideoCameraOutlined,
    BookOutlined,
    FilePdfOutlined,
    DesktopOutlined,
    UsergroupAddOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { NavLink, useParams } from 'react-router-dom';

const { Sider } = Layout;
export default function MenuEditCourse() {
    const router = useParams();
    const [collapsed, setCollapsed] = React.useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };

    return (
        <>
            <Sider style={{ background: 'white' }} collapsed={collapsed}>
                <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }} onClick={() => {
                    onCollapse(collapsed === true ? false : true);
                }}> <img src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg' alt="me" width="40" height="40" /></div>
                <Menu theme="light" defaultSelectedKeys={[`${router.page}`]} defaultOpenKeys={['sub1']} mode="inline">
                    <Menu.ItemGroup key="g2" title="Edit Content" >
                        <Menu.Item key="lessons" icon={<DesktopOutlined />}> <NavLink to={`/teacher/manage-course/${router.id}/lessons`}>Lessons</NavLink></Menu.Item>
                        <Menu.Item key="videos" icon={<VideoCameraOutlined />}><NavLink to={`/teacher/manage-course/${router.id}/videos`}>Videos</NavLink> </Menu.Item>
                        <Menu.Item key="home-work" icon={<BookOutlined />} ><NavLink to={`/teacher/manage-course/${router.id}/home-work`}>HomeWork</NavLink> </Menu.Item>
                        <Menu.Item key="file" icon={<FilePdfOutlined />}><NavLink to={`/teacher/manage-course/${router.id}/file`}>File</NavLink></Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.Divider />
                    <Menu.ItemGroup key="g3" title="Manage Course">
                        <Menu.Item icon={<UsergroupAddOutlined />} key="9">Manage Participants</Menu.Item>
                        <Menu.Item icon={<BarChartOutlined />} key="11">Performance</Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
        </>
    )
}

import React from 'react';
import { Layout, Menu, } from 'antd';
import {
    DesktopOutlined,
    UsergroupAddOutlined,
    BarChartOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { NavLink, useParams } from 'react-router-dom';
import LogoCourse from '../../assets/img/logo.svg';

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
                }}> <img src={LogoCourse} alt="me" width="40" height="40" /></div>
                <Menu theme="light" defaultSelectedKeys={[`${router.page}`]} defaultOpenKeys={['sub1']} mode="inline">
                    <Menu.ItemGroup key="g2" title="Edit Content" >
                        <Menu.Item key="lessons" icon={<DesktopOutlined />}> <NavLink to={`/teacher/manage-course/${router.id}/lessons`}>Lessons</NavLink></Menu.Item>
                        {/* <Menu.Item key="videos" icon={<VideoCameraOutlined />}><NavLink to={`/teacher/manage-course/${router.id}/videos`}>Videos</NavLink> </Menu.Item>
                        <Menu.Item key="home-work" icon={<BookOutlined />} ><NavLink to={`/teacher/manage-course/${router.id}/home-work`}>HomeWork</NavLink> </Menu.Item>
                        <Menu.Item key="file" icon={<FilePdfOutlined />}><NavLink to={`/teacher/manage-course/${router.id}/file`}>File</NavLink></Menu.Item> */}
                    </Menu.ItemGroup>
                    <Menu.Divider />
                    <Menu.ItemGroup key="g3" title="Manage Course">
                        <Menu.Item icon={<UsergroupAddOutlined />} key="students"> <NavLink to={`/teacher/manage-course/${router.id}/students`}>Manage Participants</NavLink></Menu.Item>
                        <Menu.Item icon={<BarChartOutlined />} key="11">Performance</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g4" title="Action">
                        <Menu.Item icon={<UnorderedListOutlined />} key="0"> <NavLink to='/teacher/manage-course'>Courses Manager</NavLink></Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
        </>
    )
}

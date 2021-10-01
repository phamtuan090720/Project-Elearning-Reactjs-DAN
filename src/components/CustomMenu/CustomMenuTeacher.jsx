import React from 'react'
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import LogoCourse from '../../assets/img/logo.svg';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import {RiHomeGearLine} from 'react-icons/ri'
const { Sider } = Layout;
export default function CustomMenuTeacher() {
    const router = useParams();
    const [collapsed, setCollapsed] = React.useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    console.log(router.page)
    return (
        <Sider theme='dark' collapsed={collapsed}>
            <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }} onClick={() => {
                onCollapse(collapsed === true ? false : true);
            }}> <img src={LogoCourse} alt="me" width="40" height="40" /></div>
            <Menu theme="dark" defaultSelectedKeys={[`${router.page}`]} mode="inline">
                <Menu.Item key="home" icon={<DashboardOutlined />}>
                    <NavLink to='/teacher/home'>
                        Dashboard
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="manage-course" icon={<RiHomeGearLine />}>
                    <NavLink to='/teacher/manage-course'>
                        Manage Course
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/" icon={<HomeOutlined />}>
                    <Link to='/'>
                        Go To Home Page
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

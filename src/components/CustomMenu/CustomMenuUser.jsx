import React from 'react'
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import LogoCourse from '../../assets/img/logo.svg';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CgPassword } from 'react-icons/cg'
const { Sider } = Layout;
export default function CustomMenuUser() {
  const router = useParams();
  const [collapsed, setCollapsed] = React.useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider theme='dark' collapsed={collapsed}>
      <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }} onClick={() => {
        onCollapse(collapsed === true ? false : true);
      }}> <img src={LogoCourse} alt="me" width="40" height="40" /></div>
      <Menu theme="dark" defaultSelectedKeys={[`${router.page}`]} mode="inline">
        <Menu.Item key="home" icon={<DashboardOutlined />}>
          <Link to='/user/home'>
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="list-course" icon={<DesktopOutlined />}>
          <Link to='/user/list-course'>
            Registered course
          </Link>
        </Menu.Item>
        <Menu.Item key="info" icon={<UserOutlined />}>
          <Link to='/user/info'>
            General infomation
          </Link>
        </Menu.Item>
        <Menu.Item key="change-password" icon={<CgPassword />}>
          <Link to='/user/change-password'>
            Change Password
          </Link>
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


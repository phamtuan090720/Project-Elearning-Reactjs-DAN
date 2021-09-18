import React from 'react'
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import LogoCourse from '../../assets/img/logo.svg';
const { Sider } = Layout;
const { SubMenu } = Menu;
export default function CustomMenuUser() {
  const [collapsed, setCollapsed] = React.useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (

    <Sider style={{ background: 'white' }} collapsed={collapsed}>
      <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }} onClick={() => {
        onCollapse(collapsed === true ? false : true);
      }}> <img src={LogoCourse} alt="me" width="40" height="40" /></div>
      <Menu theme="light" defaultSelectedKeys={['3']}  defaultOpenKeys={['sub1']} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Registered course
        </Menu.Item>
        <SubMenu key="sub1" icon={<SettingOutlined />} title="Setting">
          <Menu.Item key="3">Info User</Menu.Item>
          <Menu.Item key="4">Change Password</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}


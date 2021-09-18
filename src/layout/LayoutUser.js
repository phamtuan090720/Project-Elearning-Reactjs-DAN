import React from 'react';
import { Layout} from 'antd';
import CustomMenuUser from '../components/CustomMenu/CustomMenuUser';
const {Content, Footer } = Layout;
export default function LayoutUser({ children }) {
    return (
        <>
            <Layout style={{ minHeight: '100vh', }}>
                <CustomMenuUser/>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Tuan ©2020 Created by Antd</Footer>
                </Layout>
            </Layout>


        </>
    )
}

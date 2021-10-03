import React from 'react';
import { Alert, Layout } from 'antd';
import CustomMenuTeacher from '../components/CustomMenu/CustomMenuTeacher';
import { useDispatch, useSelector } from 'react-redux';
import PageError from '../page/PageError/PageError';
import { useHistory } from 'react-router';
import { getUserLogin } from '../module/Login/reducers/action';
const { Content, Footer } = Layout;
export default function LayoutTeacher({ children }) {
    const { userLogin } = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch();
    const history = useHistory();
    //check xem user đã đăng nhập hay chưa
    React.useEffect(() => {
        if (userLogin === null) {
            dispatch(getUserLogin(history));
        }
    }, [dispatch, history, userLogin]);
    const renderTemlate = React.useCallback(() => {
        if (userLogin === null) return
        return <>
            <Layout style={{ minHeight: '100vh', }}>
                <CustomMenuTeacher />
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Tuan ©2020 Created by Antd</Footer>
                </Layout>
            </Layout>
        </>
    }, [children, userLogin])
    if (userLogin?.user_type !== "Teacher" && userLogin) return <PageError>
        <Alert
            showIcon
            type='error'
            description={"You are not a teacher please go back"}
        />
    </PageError>
    return (
        <>
            {renderTemlate()}
        </>
    )
}

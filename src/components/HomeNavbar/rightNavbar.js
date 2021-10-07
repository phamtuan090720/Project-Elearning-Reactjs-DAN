import React from 'react';
import styles from './homeNavbar.module.scss';
import { Avatar, Button, Space } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { CaretDownOutlined, DashboardOutlined, LoginOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actLogout, getUserLogin } from '../../module/Login/reducers/action';
import { useHistory } from 'react-router-dom';
export default function RightNavbar() {
    const { userLogin, loading } = useSelector(state => state.LoginReducer);
    const [openMenu, setOpenMenu] = React.useState(false);
    const router = useHistory();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getUserLogin());
    }, [dispatch])
    const RenderLogin = React.useCallback(() => {
        if (loading) return <></>
        if (userLogin) {
            return <>
                {userLogin.user_type === "Teacher" ? '' : <NavLink to="/register-teacher" className={styles.instructor}>Become a instructor</NavLink >}
                <div className={styles.menuUser}>
                    <div className={styles.user}>
                        <Avatar src={userLogin?.avatar} style={{ marginRight: 10 }}>{userLogin.username}</Avatar>
                        <Link to='/' style={{ marginRight: 10, color: "black" }}>{userLogin.username}</Link>
                        <CaretDownOutlined style={{ cursor: 'pointer' }} onClick={() => {
                            if (openMenu === false) {
                                setOpenMenu(true);
                            }
                            else {
                                setOpenMenu(false);
                            }
                        }} />
                    </div>
                    <div className={`${styles.menu} ${openMenu === true ? styles.menuActive : ''}`}>
                        <div className={styles.menuItem} onClick={() => {
                            router.push('/user/home');
                        }}>
                            <p> <DashboardOutlined style={{ marginRight: 10, fontSize: 16 }} /> Student Dashboard</p>
                        </div>
                        {userLogin?.user_type === "Teacher" ? <div className={styles.menuItem} onClick={() => {
                            router.push('/teacher/home');
                        }}>
                            <p> <DashboardOutlined style={{ marginRight: 10, fontSize: 16 }} /> Teacher Dashboard</p>
                        </div> : ''}
                        <div className={styles.menuItem} onClick={() => {
                            dispatch(actLogout());
                        }}>
                            <p> <LoginOutlined style={{ marginRight: 10, fontSize: 16 }} /> Logout</p>
                        </div>
                    </div>
                </div>
            </>
        }
        else {
            return <>
                <Space>
                    <Button shape="round" size="large" className={styles.buttonLogin}>
                        <NavLink to="/login">login</NavLink >
                    </Button>
                    <Button shape="round" size="large" className={styles.btnSignIn}>
                        <NavLink to="/register">Sign Up</NavLink >
                    </Button>
                </Space>
            </>
        }
    }, [userLogin, openMenu, dispatch, loading, router]);
    return (
        <div className={styles.rightNavbar}>
            {RenderLogin()}
        </div>
    );
}

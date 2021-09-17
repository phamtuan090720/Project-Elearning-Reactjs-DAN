import React from 'react';
import styles from './homeNavbar.module.scss';
import { Avatar, Button} from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actLogout, getUserLogin } from '../../module/Login/redux/action';

export default function RightNavbar() {
    const { userLogin ,loading} = useSelector(state => state.LoginReducer);
    const [openMenu, setOpenMenu] = React.useState(false);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getUserLogin());
    }, [dispatch])
    const RenderLogin = React.useCallback(() => {
        if(loading) return <></>
        if (userLogin) {
            return <>
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
                        <div className={styles.menuItem}>
                            <p>My info</p>
                        </div>
                        <div className={styles.menuItem}>
                            <p>My Learning</p>
                        </div>
                        <div className={styles.menuItem}>
                            <p>Change Password</p>
                        </div>
                        <div className={styles.menuItem}>
                            <p>My Wish List</p>
                        </div>
                        <div className={styles.menuItem} onClick={()=>{
                            dispatch(actLogout());
                        }}>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </>
        }
        else {
            return <>
                <NavLink to="/" className={styles.instructor}>Become a instructor</NavLink >
                <Button shape="round" size="large" className={styles.buttonLogin}>
                    <NavLink to="/login">login</NavLink >
                </Button>
                <Button shape="round" size="large" className={styles.btnSignIn}>
                    <NavLink to="/">Sign Up</NavLink >
                </Button>
            </>
        }
    }, [userLogin,openMenu,dispatch,loading]);
    return (
        <div className={styles.rightNavbar}>
            {RenderLogin()}
        </div>
    );
}

import React from 'react';
import styles from './homeNavbar.module.scss';
import { NavLink, useLocation, useParams } from 'react-router-dom';
export default function HomeMenu() {
    const router = useLocation();
    const param = useParams();
    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    //   }
    return (
        <div className={`${styles.homeMenu}`}>
            <NavLink to="/home" exact isActive={() => {
                if (router.pathname === '/' || router.pathname === '/home') {
                    return true
                }
                else return false
            }} activeClassName={styles.activeClass} className={styles.homeMenuItem}>Home</NavLink>
            <NavLink to="/courses" isActive={() => {
                if (router.pathname === '/courses' || router.pathname === '/course/' + param.id || (router.pathname + router.search) === '/courses/' + router.search) {
                    return true;
                }
                else return false

            }} activeClassName={styles.activeClass} className={styles.homeMenuItem}>Course</NavLink>
            <NavLink to="/about" exact activeClassName={styles.activeClass} className={styles.homeMenuItem}>About Us</NavLink>
            <NavLink to="/contact" exact activeClassName={styles.activeClass} className={styles.homeMenuItem}>Contact</NavLink>
        </div>
    );
}
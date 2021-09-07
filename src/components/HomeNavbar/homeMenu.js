import React from 'react';
import styles from './homeNavbar.module.scss';
import { NavLink } from 'react-router-dom';
export default function homeMenu() {
    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    //   }
    return (
        <div className={styles.homeMenu}>
            <NavLink to="/home" exact activeClassName={styles.activeClass} className={styles.homeMenuItem}>Home</NavLink>
            <NavLink to="/courses" exact activeClassName={styles.activeClass}  className={styles.homeMenuItem}>Course</NavLink>
            <NavLink to="/about" exact activeClassName={styles.activeClass}  className={styles.homeMenuItem}>About Us</NavLink>
            <NavLink to="/contact" exact activeClassName={styles.activeClass}  className={styles.homeMenuItem}>Contact</NavLink>
        </div>
    );
}
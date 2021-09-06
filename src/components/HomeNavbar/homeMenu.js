import React from 'react';
import styles from './homeNavbar.module.scss';
import { NavLink } from 'react-router-dom';
export default function homeMenu() {
    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    //   }
    return (
        <div className={styles.homeMenu}>
            <NavLink to="/home" className={styles.homeMenuItem}>Home</NavLink>
            <NavLink to="/course" className={styles.homeMenuItem}>Course</NavLink>
            <NavLink to="/about" className={styles.homeMenuItem}>About Us</NavLink>
            <NavLink to="/contact" className={styles.homeMenuItem}>Contact</NavLink>
        </div>
    );
}
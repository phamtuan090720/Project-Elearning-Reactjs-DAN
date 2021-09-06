import React from 'react';
import styles from './homeNavbar.module.scss';
import { Button } from 'antd';
import {NavLink} from 'react-router-dom';

export default function rightNavbar() {
    return (
        <div className={styles.rightNavbar}>
            <NavLink to="/" className={styles.instructor}>Become a instructor</NavLink >
            <Button shape="round" size="large" className={styles.buttonLogin}>
                <NavLink to="/">login</NavLink >
            </Button>
            <Button shape="round" size="large" className={styles.btnSignIn}>
                <NavLink to="/">Sign Up</NavLink >
            </Button>
        </div>
    );
}

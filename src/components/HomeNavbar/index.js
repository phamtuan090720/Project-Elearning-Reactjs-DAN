import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import HomeMenu from './homeMenu';
import RightNavbar from './rightNavbar';
import styles from './homeNavbar.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

export default function HomeNavbar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div style={{zIndex:10000}}>
            <Row className={styles.myRow}>
                <Col span={4}>
                    <Button onClick={toggleCollapsed} className={styles.btnForPhone}>
                        <MenuOutlined className={styles.btnMenu} />
                    </Button>
                </Col>
                <Col style={{ zIndex: '1' }} span={12} offset={2}><Logo direction='row' /></Col>
            </Row>
            <div className={collapsed ? styles.sdCol : styles.none} onClick={toggleCollapsed} />
            <Col className={collapsed ? styles.myCol : styles.none}>
                <Row><Link to="/" onClick={toggleCollapsed}>Home</Link></Row>
                <Row><Link to="/course" onClick={toggleCollapsed}>Course</Link></Row>
                <Row><Link to="/" onClick={toggleCollapsed}>About Us</Link></Row>
                <Row><Link to="/" onClick={toggleCollapsed}>Contact</Link></Row>
                <Row><Link to="/" onClick={toggleCollapsed}>Become a instructor</Link></Row>
                <Row><Link to="/" onClick={toggleCollapsed}>login</Link></Row>
                <Row><Link to="/" onClick={toggleCollapsed}>Sign Up</Link></Row>
            </Col>
            <div className={styles.navbarContainer}>
                <Logo direction='column' />
                <HomeMenu />
                <RightNavbar />
            </div>
        </div>
    )
}

import React from 'react'
import styles from './logo-style.module.scss'
import LogoCourse from '../../assets/img/logo.svg'
export default function Logo(props) {
    const direction = {
        'flexDirection': props.direction,
    };
    return (
        <div style={{ display: 'flex',...direction}}  className={styles.logoContainer}>
            <img src={LogoCourse} alt="me" width="40" height="40" />
            TTdemy
        </div>
    )
}
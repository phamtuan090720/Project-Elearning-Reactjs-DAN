import React from 'react'
import styles from './Loading.module.scss';
export default function Loading() {
    return (
        <div className={styles.wrap}>
            <img src='/Loading.gif' alt='loading'/>
        </div>
    )
}

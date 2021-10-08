import React from 'react'
import styles from './Loading.module.scss';
export default function LoadingTeacher() {
    return (
        <div className={styles.wrapLoadingTeacher}>
            <img  src='/Loading.gif' alt='loading' />
        </div>
    )
}

import React from 'react'
import ReactPlayer from 'react-player';
import styles from './Media.module.scss';
export default function Media() {
    return (
        <div className={styles.wrap}>
            {/* <h1 className={styles.title}>Title</h1> */}
            <ReactPlayer
                url='https://youtu.be/j__Q13iAxNk'
                width='100%'
                height='50vh'
                controls={true}
            />
        </div>

    )
}

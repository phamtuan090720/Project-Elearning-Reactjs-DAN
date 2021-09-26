import React from 'react'
import ReactPlayer from 'react-player';
import styles from './Media.module.scss';
export default function Media({ video }) {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>{video.subject}</h1>
            <ReactPlayer
                url={video.url_video}
                width='100%'
                height='50vh'
                controls={true}
            />
        </div>

    )
}

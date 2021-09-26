import { FileOutlined } from '@ant-design/icons'
import React from 'react'
import styles from './Document.module.scss';
export default function ItemDocument({ subject, file }) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <li>
            <div className={styles.item} onClick={() => {
                openInNewTab(file)
            }}>
                <FileOutlined style={{ marginRight: 5 }} /> <span>{subject}</span>
            </div>
        </li>


    )
}

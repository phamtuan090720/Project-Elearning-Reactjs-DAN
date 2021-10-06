import { PageHeader } from 'antd';
import React from 'react'
// import { useParams } from 'react-router';
import Paper from '../../../../../../components/Paper/Paper';
import sytles from './Header.module.scss';

export default function Header() {
    return (
        <Paper className={sytles.wrap}>
            <PageHeader
                title="Well Come Student Manage"
            />
        </Paper>
    )
}

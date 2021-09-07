import React from 'react'
import {useParams} from 'react-router-dom';
export default function DetailCourse() {
    let router = useParams();
    console.log(router)

    return (
        <div>
            <h1>Chào Mừng Đến Khóa Học ID {router.id}</h1>
        </div>
    )
}

import React from 'react'
import { useParams } from 'react-router';

export default function ManageDetailCourse() {
    let param = useParams();
    return (
        <div>
            ManageDetailCourse {param.id}
        </div>
    )
}

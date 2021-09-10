import { Rate } from 'antd';
import React from 'react'
import style from './BackgroundCourse.module.scss';
export default function BackgroundCourse({ point, author }) {
    return (
        <div className={style.wrap}>
            <div className={style.container}>
                <div className={style.content}>
                    <h5 className={style.category}>Category</h5>
                    <p className={style.name_course}>
                        The Complete JavaScript From beginning to advance
                    </p>
                    <p className={style.sub_course}>
                        Master JavaScript with the most complete course! Projects Excellent course. we explain the core concepts in javascript that are usually glossed over in other courses
                    </p>

                    <div className={style.rating}>
                        <div className={style.point}>{point}</div>
                        <div>
                            <Rate allowHalf defaultValue={point} disabled></Rate>
                        </div>
                    </div>

                    <div className={style.author}>
                        <span>Create by :<span></span>{author}</span>
                    </div>
                    <div className={style.created_updated}>
                        <div className={style.created}>10/2019
                        </div>
                        <div className={style.updated}>10/2019
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

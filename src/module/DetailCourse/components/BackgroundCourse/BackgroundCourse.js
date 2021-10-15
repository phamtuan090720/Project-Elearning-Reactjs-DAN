import { Button, Rate } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import style from './BackgroundCourse.module.scss';
export default function BackgroundCourse() {
    const { detailCourse } = useSelector(state => state.DetailCourseReducer);
    const renderDate = (date) => {
        let d = new Date(date);
        return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
    }
    return (
        <div className={style.wrap} style={{ backgroundImage: `url(${detailCourse?.image})`, backgroundColor: 'rgb(23 23 23 / 25%)' }}>
            <div className={style.container}>
                <div className={style.content}>
                    <h5 className={style.category}>{detailCourse?.category}</h5>
                    <p className={style.name_course}>

                        {detailCourse?.name_course}
                    </p>
                    <p className={style.sub_course}>
                        {detailCourse?.subject === null ? "There is no subject for the course" : detailCourse?.subject
                        }
                    </p>

                    <div className={style.rating}>
                        {
                            detailCourse?.rate === null ? <div className={style.mess}>There are no reviews yet for this course
                            </div> : <>
                                <div className={style.point}>{parseFloat(detailCourse?.rate).toFixed(1)}</div>
                                <div>
                                    <Rate allowHalf defaultValue={detailCourse?.rate} disabled></Rate>
                                </div>
                            </>
                        }

                    </div>

                    <div className={style.author}>
                        <span>Create by :<span></span>{detailCourse?.teacher?.user.username}</span>
                    </div>
                    <div className={style.created_updated}>
                        <div className={style.created}> Created date : {renderDate(detailCourse?.created_date)}
                        </div>
                        <span>| |</span>
                        <div className={style.updated}>Last updated : {renderDate(detailCourse?.updated_date)}
                        </div>
                    </div>
                    <div className={style.action}>
                        <Button shape='round' size='large' type="primary" style={{ marginRight: 10 }}>Add your wish list</Button>
                        <Button shape='round' size='large' type="primary" danger  >Register now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import {useParams} from 'react-router-dom';
import CardCouse from './../components/CardCourse/CardCouse';
import BackgroundCourse from './../components/BackgroundCourse/BackgroundCourse';
import Content from './../components/Content/Content';
import styles from './DetailCourse.moudle.scss';
export default function DetailCourse() {
    let router = useParams();
    console.log(router)

    return (
        <>
           <BackgroundCourse point={4.9} author={"teacher 1"}/>
           <CardCouse subject={"test"} img={'https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856'} />
           <div className={styles.bg}>
                <Content/>
           </div>
           
        </>
    )
}

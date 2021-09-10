import { Col, Row } from 'antd';
import React from 'react'
// import styles from './ListCourses.moudle.scss';
import Course from '../../../../components/Course/Course';
import PaginationCustom from '../../../../components/Pagination/Pagination';
export default function ListCourses() {
    return (
        <>
            <Row>
                <Col span={8}>
                    <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                        description="this is a description of the course test" teacher="teacher1" price="free" id='1' />
                </Col>
                <Col span={8}>
                    <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                        description="this is a description of the course test" teacher="teacher1" price="free" id='1' />
                </Col>
                <Col span={8}>
                    <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                        description="this is a description of the course test" teacher="teacher1" price="free" id='1' />
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                        description="this is a description of the course test" teacher="teacher1" price="free" id='1' />
                </Col>
                <Col span={8}>
                    <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                        description="this is a description of the course test" teacher="teacher1" price="free" id='1' />
                </Col>
                <Col span={8}>
                    <Course subject="Learn Angular Fundamentals From beginning to advancen" img="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5669965877215232/image/5493020851961856"
                        description="this is a description of the course test" teacher="teacher1" price="free" id='1' />
                </Col>
            </Row>
            <PaginationCustom defaultCurrent={1} defaultPageSize={100} total={500} />
        </>
    )
}

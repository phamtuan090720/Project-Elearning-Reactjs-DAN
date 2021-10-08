import { Empty } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import GeneralInfomation from './GeneralInfomation/page/GeneralInfomation.js';
import DashboardTeacher from './Dashboard/page/Dashboard';
import ManageCourse from './MangaeCourse/page/ManageCourse';
export default function TeacherIndex() {
    const router = useParams();
    const renderComponent = React.useCallback(() => {
        switch (router.page) {
            case "home":
                return <DashboardTeacher />
            case "manage-course":
                return <ManageCourse />
            case "info":
                return <GeneralInfomation />
            default:
                return <>
                    <Empty
                        description={
                            <span>
                                Page Not Found  <Link to='/teacher'>return Teacher Dashboard</Link>
                            </span>
                        }
                    />
                </>;
        }
    }, [router]);
    return (
        <div>
            {renderComponent()}
        </div>
    )
}

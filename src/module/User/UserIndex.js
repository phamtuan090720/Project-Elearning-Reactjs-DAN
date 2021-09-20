import { Empty } from 'antd';
import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ChangePassword from './ChangePassword/page/ChangePassword';
import GeneralInfomation from './GeneralInfomation/page/GeneralInfomation';
import RegisteredCourse from './RegisteredCourse/page/RegisteredCourse';
import UserDashboard from './UserDashboard/page/UserDashboard';

export default function UserIndex() {
    const router = useParams();
    const renderComponent = () => {
        // check xem obj có rỗng hay không nếu obj rỗng chứng tỏ người dùng đang ở trang /user
        if (Object.keys(router).length === 0) {
            return <UserDashboard />
        }
        else {
            switch (router.page) {
                case "info":
                    return <GeneralInfomation />
                case "list-course":
                    return <RegisteredCourse />
                case "change-password":
                    return <ChangePassword />
                default:
                    return <>
                        <Empty
                            description={
                                <span>
                                    Page Not Found  <Link to='/user'>return User Dashboard</Link>
                                </span>
                            }
                        />
                    </>;
            }
        }
    }
    return (
        <>
            {renderComponent()}
        </>
    )
}

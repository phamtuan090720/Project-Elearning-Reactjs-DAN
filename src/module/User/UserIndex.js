import { Empty } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Auth from '../../Hooks/Auth';
import { getUserLogin } from '../Login/reducers/action';
import ChangePassword from './ChangePassword/page/ChangePassword';
import GeneralInfomation from './GeneralInfomation/page/GeneralInfomation';
import RegisteredCourse from './RegisteredCourse/page/RegisteredCourse';
import UserDashboard from './UserDashboard/page/UserDashboard';

export default function UserIndex() {
    const dispatch = useDispatch();
    const history = useHistory();
    React.useEffect(() => {
        dispatch(getUserLogin(history));
    }, [dispatch, history]);
    const router = useParams();
    const renderComponent = () => {
        switch (router.page) {
            case "home":
                return <UserDashboard />
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
    return (
        <>
            <Auth>
                {renderComponent()}
            </Auth>
        </>
    )
}

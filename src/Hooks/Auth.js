import { Button, Result } from 'antd';
import React from 'react'
import cookies from 'react-cookies';
import { useHistory } from 'react-router';
export default function Auth({ children }) {
    const history = useHistory();
    const goToHome = () => {
        history.push('/login')
    }
    if (cookies.load('access_token')) {
        return (
            <>
                {children}
            </>
        )
    }
    else {
        return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary" shape='round' onClick={goToHome}>Back Home</Button>}
            />
        )
    }
}

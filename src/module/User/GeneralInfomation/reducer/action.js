import { http_auth } from '../../../../api/http_auth';
import { getUserLogin } from '../../../Login/reducers/action.js';
import { Modal, Typography } from 'antd';
import cookies from 'react-cookies';
const { Text } = Typography;
const grant_type = 'password';
const client_id = '01UlK0cdqiqdq46sXOdXcfWPGcSXgNzZtMAYnUVf';
const client_secret = '4xW4BIeBa5899j9L58UUCYsNIFrJ3QLC0euywLHJRlufHSqLy1yWBwRbZlKcBUJ1rBRwnnBRoLzAQLWFbHCdBNwhceHtVy3slnVfwDrbIZK9vagnnQCt4YS9gIGNcfsn';
const notification = (mess, confirm, dispatch) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
        onOk() {
            return dispatch(confirm)
        }
    });
}
const notificationErr = (mess) => {
    return Modal.error({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
    });
}
export const actChangeInfo = (user) => {
    return async (dispatch) => {
        await http_auth.patch(`user/${user.get('id')}/`, user).then((rs) => {
            notification('Change info success', getUserLogin(), dispatch)
            console.log(rs)
        }).catch((err) => {
            notificationErr('Change info Failed')
            console.log(err)
        })
    }
}
const notificationChangePasswrod = (mess) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
        onOk() {
        }
    });
}
const notificationErrChangePasswrod = (mess) => {
    const renderMessPassword = () => {
        if (mess.password) {
            return mess.password.map((item, index) => {
                return <div key={index}>
                    <Text type='danger'>{item}</Text>
                </div>
            })
        }
    }
    const renderMessUsername = () => {
        if (mess.username) {
            return mess.username.map((item, index) => {
                return <div key={index}>
                    <Text type='danger'>{item}</Text>
                </div>
            })
        }
    }
    return Modal.error({
        title: 'This is a notification message',
        content: (
            <div>
                <div >
                    {mess.username ? <Text strong type='danger'>*Username error :</Text> : ''}

                </div>
                {renderMessUsername()}
                <div>
                    {mess.password ? <Text strong type='danger'>*Password error :</Text> : ''}

                </div>
                {renderMessPassword()}
            </div>
        ),
        width: 600,
        okText: "confirm",
    });
}
export const actChangePassword = (user) => {
    return async (dispatch) => {
        let data = {
            username: user.username,
            password: user.oldPassword,
            grant_type: grant_type,
            client_id: client_id,
            client_secret: client_secret
        }
        await http_auth.post('o/token/', data).then((rs) => {
            cookies.save('access_token', rs.data.access_token, { path: '/' });
            console.log("Login success")
            let password = {
                password: user.password
            }
            let id = user.id
            http_auth.patch(`user/${id}/`, password).then((rs) => {
                notificationChangePasswrod('Change password success')
                console.log(rs)
            }).catch((err) => {
                if (err.response.data) {
                    notificationErrChangePasswrod(err.response.data);
                }
                else {
                    notificationErr('Change Password failed')
                    console.log(err)
                }
            })
        }).catch((err) => {
            console.log(err)
            return notificationErr("old password is not correct")
        })
       
    }
}
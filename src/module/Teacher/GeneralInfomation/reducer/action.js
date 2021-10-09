import * as Type from './type';
import { http } from '../../../../api/setting';
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
        await http.post('o/token/', data).then((rs) => {
            cookies.save('access_token', rs.data.access_token, { path: '/' });
            console.log("Login success")
            let password = {
                password: user.password
            }
            let id = user.id
            http.patch(`user/${id}/`, password).then((rs) => {
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
            notificationErr("old password is not correct")
        })

    }
}
export const actChangeInfo = (user) => {
    return async (dispatch) => {
        await http.patch(`user/${user.get('id')}/`, user).then((rs) => {
            notification('Change info success', getInfoTeacher(), dispatch)
            console.log(rs)
        }).catch((err) => {
            notificationErr('Change info failed')
            console.log(err)
        })
    }
}
export const getInfoTeacher = () => {
    return (dispatch) => {
        dispatch(getInfoTeacherRequest())
        http.get(`teacher/current-teacher/`).then((rs) => {
            dispatch(getInfoTeacherSuccess(rs.data))
            console.log(rs)
        }).catch((err) => {
            dispatch(getInfoTeacherFailed(err))
            alert(err)
        })
    }
}
const getInfoTeacherRequest = () => {
    return {
        type: Type.GET_INFO_REQUEST
    }
}
const getInfoTeacherSuccess = (data) => {
    return {
        type: Type.GET_INFO_SUCCESS,
        data: data
    }
}
const getInfoTeacherFailed = (err) => {
    return {
        type: Type.GET_INFO_FAILED,
        err: err
    }
}
export const actChangeProfile = (profile) => {
    return async (dispatch) => {
        http.post(`teacher/change-profile/`, profile).then((rs) => {
            notification(rs.data.mess, getInfoTeacher(), dispatch)
            console.log(rs)
        }).catch((err) => {
            notificationErr('Change profile failed')
            console.log(err)
        })
    }
}
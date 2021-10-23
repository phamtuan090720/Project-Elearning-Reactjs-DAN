import { http,  } from "../../../api/setting";
import { http_auth } from "../../../api/http_auth";
import * as Type from './type';
import cookies from 'react-cookies';
import axios from "axios";
import { Modal, notification } from "antd";
const grant_type = 'password';
const client_id = '01UlK0cdqiqdq46sXOdXcfWPGcSXgNzZtMAYnUVf';
const client_secret = '4xW4BIeBa5899j9L58UUCYsNIFrJ3QLC0euywLHJRlufHSqLy1yWBwRbZlKcBUJ1rBRwnnBRoLzAQLWFbHCdBNwhceHtVy3slnVfwDrbIZK9vagnnQCt4YS9gIGNcfsn';
const openNotification = (mess, description) => {
    notification.open({
        message: mess,
        description:
            description,
        placement: 'bottomRight',
        type: 'error',
        style: {
            width: 400,
        },
    });
};
export const getUserLogin = (history) => {
    return (dispatch) => {
        dispatch(actionLoginRequest());
        http_auth.get('user/current-user/').then((rs) => {
            dispatch(actionLoginSuccess(rs.data));
        }).catch((err) => {
            if (history) {
                dispatch(actionLoginFailed("The login session has expired, please login again"));
                history.push('/login')
            }
            else {
                dispatch(actionLoginFailed(null));
            }
        });
    }
}
export const actLogin = (user, history, mess) => {
    return async (dispatch) => {
        dispatch(actionLoginRequest());
        let data = {
            ...user,
            grant_type: grant_type,
            client_id: client_id,
            client_secret: client_secret
        }
        await http.post('o/token/', data).then((rs) => {
            let d = new Date();
            // do hàm này nó trả về mili giây lên phải đổi ra giây để tính toán
            d.setTime(d.getTime() + (rs.data.expires_in * 1000))
            cookies.save('access_token', rs.data.access_token, { path: '/', expires: d });
        }).catch((err) => {
            console.log(err)
        })
        await http_auth.get('user/current-user/').then((rs) => {
            dispatch(actionLoginSuccess(rs.data));
            if (mess === "register success") {
                return history.push('/home')
            }
            history.goBack();
        }).catch((err) => {
            dispatch(actionLoginFailed("Incorrect account and password"));
            openNotification('Login failed', 'Incorrect account and password');
        });
    }
}

export const actLoginGG = (accessToken, history, mess) => {
    return async (dispatch) => {
        dispatch(actionLoginRequest());
        // const headers = {'Authorization': ''}
        await axios.post('http://127.0.0.1:8000/auth/convert-token/', {
            token: accessToken,
            backend: 'google-oauth2',
            grant_type: 'convert_token',
            client_id: client_id,
            client_secret: client_secret

        }).then((rs) => {
            let d = new Date();
            // do hàm này nó trả về mili giây lên phải đổi ra giây để tính toán
            d.setTime(d.getTime() + (rs.data.expires_in * 1000))
            // set thời gian hết hạn của token và xóa token trong cookie
            cookies.save('access_token', rs.data.access_token, { path: '/', expires: d });
        }).catch((err) => {
            console.log(err)
        })
        await http_auth.get('user/current-user/').then((rs) => {
            dispatch(actionLoginSuccess(rs.data));
            if (mess === "register success") {
                return history.push('/')
            }
            history.goBack();
        }).catch((err) => {
            console.log(err)
            dispatch(actionLoginFailed("Failed!"));
        });
    }
}
const actionLoginRequest = () => {
    return {
        type: Type.LOGIN_REQUEST
    }
}
const actionLoginSuccess = (data) => {
    return {
        type: Type.LOGIN_SUCCESS,
        data: data
    }
}
const actionLoginFailed = (err) => {
    return {
        type: Type.LOGIN_FAILED,
        data: err
    }
}
export const actLogout = () => {
    cookies.remove('access_token');
    return {
        type: Type.LOGOUT,
    }
}
export const resetPw = (data, colseModal) => {
    return (dispatch) => {
        dispatch(resetPwRequest())
        http.post(`user/reset-password/`, data).then((rs) => {
            console.log(rs.data)
            dispatch(resetPwSuccess())
            return Modal.success(
                {
                    title: 'This is a notification message',
                    content: rs.data.mess,
                    width: 500,
                    okText: "confirm",
                    onOk() {
                        return colseModal();
                    }
                }
            )
        }).catch((err) => {
            if (err.response?.data?.mess) {
                dispatch(resetPwFailed(err.response?.data?.mess))
                return Modal.error(
                    {
                        title: 'This is a notification message',
                        content: err.response?.data?.mess,
                        width: 500,
                        okText: "confirm",
                        onOk() { }
                    }
                )
            }
            else {
                console.log(err)
                dispatch(resetPwFailed(err))
            }
           
        })
    }
}
const resetPwRequest = () => {
    return{ 
        type: Type.RESET_PASSWORD_REQUEST
    }
}
const resetPwSuccess = () => {
    return{ 
        type: Type.RESET_PASSWORD_SUCCESS
    }
}
const resetPwFailed = (err) => {
    return{ 
        type: Type.RESET_PASSWORD_FAILED,
        err: err
    }
}
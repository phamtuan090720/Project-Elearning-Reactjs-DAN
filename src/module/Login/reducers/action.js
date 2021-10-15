import { http } from "../../../api/setting";
import * as Type from './type';
import cookies from 'react-cookies';
import axios from "axios";
import { Modal } from "antd";
const grant_type = 'password';
const client_id = '01UlK0cdqiqdq46sXOdXcfWPGcSXgNzZtMAYnUVf';
const client_secret = '4xW4BIeBa5899j9L58UUCYsNIFrJ3QLC0euywLHJRlufHSqLy1yWBwRbZlKcBUJ1rBRwnnBRoLzAQLWFbHCdBNwhceHtVy3slnVfwDrbIZK9vagnnQCt4YS9gIGNcfsn';
export const getUserLogin = (history) => {
    return (dispatch) => {
        dispatch(actionLoginRequest());
        http.get('user/current-user/').then((rs) => {
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
        // console.log(data);
        await http.post('o/token/', data).then((rs) => {
            // console.log(rs.data.access_token);
            cookies.save('access_token', rs.data.access_token, { path: '/' });
        }).catch((err) => {
            console.log(err)
        })
        await http.get('user/current-user/').then((rs) => {
            dispatch(actionLoginSuccess(rs.data));
            if (mess === "register success") {
                return history.push('/home')
            }
            history.goBack();
        }).catch((err) => {
            dispatch(actionLoginFailed("Incorrect account and password"));
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
            console.log(rs)
            cookies.save('access_token', rs.data.access_token, { path: '/' });
        }).catch((err) => {
            console.log(err)
        })
        await http.get('user/current-user/').then((rs) => {
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
        http.post(`user/reset-password/`,data).then((rs) => {
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
            console.log(err)
        })
    }
}
import { http } from "../../../api/setting";
import * as Type from './type';
import cookies from 'react-cookies';
const grant_type = 'password';
const client_id = '01UlK0cdqiqdq46sXOdXcfWPGcSXgNzZtMAYnUVf';
const client_secret = '4xW4BIeBa5899j9L58UUCYsNIFrJ3QLC0euywLHJRlufHSqLy1yWBwRbZlKcBUJ1rBRwnnBRoLzAQLWFbHCdBNwhceHtVy3slnVfwDrbIZK9vagnnQCt4YS9gIGNcfsn';
export const getUserLogin = (history) => {
    return (dispatch) => {
        dispatch(actionLoginRequest());
        http.get('user/current-user/').then((rs) => {
            dispatch(actionLoginSuccess(rs.data));
            // if (history) {
            //     history.push('/home');
            // }
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
export const actLogin = (user, history) => {
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
            cookies.save('access_token', rs.data.access_token,{path:'/'});
        }).catch((err) => {
            // console.log(err)
        })
        await http.get('user/current-user/').then((rs) => {
            dispatch(actionLoginSuccess(rs.data));
            history.goBack();
        }).catch((err) => {
            dispatch(actionLoginFailed("Incorrect account and password"));
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
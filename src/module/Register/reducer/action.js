import { Modal, Typography } from "antd";
import { http } from "../../../api/setting";
import * as Type from './type';
import { actLogin } from "../../Login/reducers/action";
const { Text } = Typography;
const notification = (mess, goToLogin) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "Go to Home",
        onOk() {
            return goToLogin()
        }
    });
}

const notificationErr = (mess) => {
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
                    {mess.username?<Text strong type='danger'>*Username error :</Text>:''}
                    
                </div>
                {renderMessUsername()}
                <div>
                {mess.password?<Text strong type='danger'>*Password error :</Text>:''}
                    
                </div>
                {renderMessPassword()}
            </div>
        ),
        width: 600,
        okText: "confirm",
    });
}
export const actionRegister = (user, history) => {
    return async (dispatch) => {
        dispatch(actionRegisterRequest());
        let data = {
            username: user.username,
            password: user.password,
            email: user.email,
        }
        await http.post('user/', data).then((rs) => {
            notification('Create Success', () => {
                let datalogin = {
                    username: user.username,
                    password: user.password,
                }
                dispatch(actLogin(datalogin, history, "register success"))
            })
            dispatch(actionRegisterSuccess(rs.data));
        }).catch((err) => {
            console.log(err.response.data?.username)
            if (err.response.data) {
                notificationErr(err.response.data)
                dispatch(actionRegisterFailed(err.response.data));
            }
            else {
                notificationErr("Failed");
                dispatch(actionRegisterFailed("Username has already been taken"));
            }
        })
    }
}


const actionRegisterRequest = () => {
    return {
        type: Type.REGISTER_REQUEST
    }
}
const actionRegisterSuccess = (data) => {
    return {
        type: Type.REGISTER_SUCCESS,
        data: data
    }
}
const actionRegisterFailed = (err) => {
    return {
        type: Type.REGISTER_FAILED,
        data: err
    }
}

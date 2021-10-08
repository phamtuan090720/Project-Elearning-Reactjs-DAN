import { http } from '../../../../api/setting';
import { getUserLogin } from '../../../Login/reducers/action.js';
import { Modal } from 'antd';
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
        await http.patch(`user/${user.get('id')}/`, user).then((rs) => {
            notification('Change info success', getUserLogin(), dispatch)
            console.log(rs)
        }).catch((err) => {
            notificationErr('Change info success')
            console.log(err)
        })
    }
}

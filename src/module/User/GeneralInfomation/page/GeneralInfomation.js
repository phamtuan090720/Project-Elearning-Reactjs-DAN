import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChangeInfo from '../components/ChangeInfo/ChangeInfo.js';
import Header from '../components/Header/Header.js';
import InfoUser from '../components/InfoUser/InfoUser.js';
import styles from './GeneralInfomation.module.scss';
import Loading from '../../../../components/Loading/LoadingTeacher.js';
import { getUserLogin } from '../../../Login/reducers/action.js';
export default function GeneralInfomation() {
    const [isShowChangeInfo, setIsShowChangeInfo] = React.useState(false);
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.LoginReducer);
    React.useEffect(() => {
        dispatch(getUserLogin());
    }, [dispatch]);
    if (loading) return <Loading />
    return (
        <>
            <Header openChangeInfo={() => setIsShowChangeInfo(true)} />
            <div className={`${styles.containerInfo} ${isShowChangeInfo === true ? styles.hidden : ''}`} >
                <InfoUser />
            </div>
            <div className={`${styles.containerInfo} ${isShowChangeInfo !== true ? styles.hidden : ''}`}>
                <ChangeInfo closeChangeInfo={() => setIsShowChangeInfo(false)} />
            </div>
        </>

    )
}

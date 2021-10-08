import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChangeInfo from '../components/ChangeInfo/ChangeInfo.js';
import Header from '../components/Header/Header.js';
import InfoTeacher from '../components/InfoTeacher/InfoTeacher.js';
import Profile from '../components/Profile/Profile.js';
import { getInfoTeacher } from '../reducer/action.js';
import styles from './GeneralInfomation.module.scss';
import Loading from '../../../../components/Loading/LoadingTeacher.js';
export default function GeneralInfomation() {
    const [isShowChangeInfo, setIsShowChangeInfo] = React.useState(false);
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.infoTeacherReducer)
    React.useEffect(() => {
        dispatch(getInfoTeacher());
    }, [dispatch]);
    if (loading) return <Loading/>
    return (
        <>
            <Header openChangeInfo={() => setIsShowChangeInfo(true)} />
            <div className={`${styles.containerInfo} ${isShowChangeInfo === true ? styles.hidden : ''}`} >
                <InfoTeacher />
                <Profile />
            </div>
            <div className={`${styles.containerInfo} ${isShowChangeInfo !== true ? styles.hidden : ''}`}>
                <ChangeInfo closeChangeInfo={() => setIsShowChangeInfo(false)} />
            </div>
        </>

    )
}

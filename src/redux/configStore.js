import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CoursesReducer from '../module/Coursers/reducers/CoursesReducer';
import DetailCourseReducer from "../module/DetailCourse/reducers/DetailCourseReducer";
import RegisterCourseReducer from "../module/DetailCourse/reducers/RegisterCourseReducer";
import LoginReducer from "../module/Login/reducers/LoginReducer";
import RegisteredCourseReducer from "../module/User/RegisteredCourse/reducers/RegisteredCourseReducer";
import { userCourseReducer, userCouserReducerData } from '../module/User/Course/reducer/UserCourseReducer.js';
import LearningReducer from "../module/Learning/reducer/LearningReducer";
import manageCourseReducer from "../module/Teacher/MangaeCourse/redux/ManageCourseReducer";
import editCourseReducer from '../module/Teacher/MangaeCourse/redux/EditCourseReducer';
import lessonManageReducer from "../module/Teacher/ManageDetailCourse/reducers/LessonManageReducer";
import detailLessonManageReducer from "../module/Teacher/ManageDetailCourse/reducers/DetailLessonManageReducer";
import studentManageReducer from "../module/Teacher/ManageDetailCourse/reducers/StudentManageReducer";
import RegisterReducer from "../module/Register/reducer/registerReducer";
import teacherRegisterReducer from "../module/RegiterTeacher/reducer/TeacherRegisterReducer";
import infoTeacherReducer from "../module/Teacher/GeneralInfomation/reducer/InfoTeacherReducer";
import statisticsCourseReducer from "../module/Teacher/ManageDetailCourse/reducers/StatisticsCourseReducer";
import statisticsListCourseReducer from "../module/Teacher/Dashboard/reducer/StatisticsListCourseReducer";
import resetPasswordReducer from "../module/Login/reducers/ResetPasswordReducer";
const rootReducer = combineReducers({
    CoursesReducer,
    DetailCourseReducer,
    LoginReducer,
    RegisterReducer,
    teacherRegisterReducer,
    RegisterCourseReducer,
    RegisteredCourseReducer,
    userCourseReducer,
    userCouserReducerData,
    LearningReducer,
    manageCourseReducer,
    editCourseReducer,
    lessonManageReducer,
    detailLessonManageReducer,
    studentManageReducer,
    infoTeacherReducer,
    statisticsCourseReducer,
    statisticsListCourseReducer,
    resetPasswordReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
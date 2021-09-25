import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CoursesReducer from '../module/Coursers/reducers/CoursesReducer';
import DetailCourseReducer from "../module/DetailCourse/reducers/DetailCourseReducer";
import RegisterCourseReducer from "../module/DetailCourse/reducers/RegisterCourseReducer";
import LoginReducer from "../module/Login/reducers/LoginReducer";
import RegisteredCourseReducer from "../module/User/RegisteredCourse/reducers/RegisteredCourseReducer";
import {userCourseReducer,userCouserReducerData} from '../module/User/Course/reducer/UserCourseReducer.js';
import LearningReducer from "../module/Learning/reducer/LearningReducer";

const rootReducer = combineReducers({
    CoursesReducer,
    DetailCourseReducer,
    LoginReducer,
    RegisterCourseReducer,
    RegisteredCourseReducer,
    userCourseReducer,
    userCouserReducerData,
    LearningReducer
    
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
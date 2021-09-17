import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CoursesReducer from '../module/Coursers/reducers/CoursesReducer';
import DetailCourseReducer from "../module/DetailCourse/reducers/DetailCourseReducer";
import RegisterCourseReducer from "../module/DetailCourse/reducers/RegisterCourseReducer";
import LoginReducer from "../module/Login/redux/LoginReducer";
const rootReducer = combineReducers({
    CoursesReducer,
    DetailCourseReducer,
    LoginReducer,
    RegisterCourseReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
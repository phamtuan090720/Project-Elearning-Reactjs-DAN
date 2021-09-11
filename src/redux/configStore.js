import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import test from './reducers/testReducer';
import CoursesReducer from '../module/Coursers/reducers/CoursesReducer';
const rootReducer = combineReducers({
    test,
    CoursesReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
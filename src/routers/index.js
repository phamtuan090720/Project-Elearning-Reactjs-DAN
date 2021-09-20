import HomePage from '../module/HomePage/page/Home';
import CoursesPage from "../module/Coursers/page/CoursesPage";
import DetailCourse from '../module/DetailCourse/page/DetailCourse';
import TestCallAPI from '../redux/TestCallAPI';
// import Login from '../module/Login/page/Login';
// import Register from '../module/Register/page/Register';
import UserIndex from '../module/User/UserIndex';

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/home",
        component: HomePage,
    },
    {
        exact: false,
        path: "/courses",
        component: CoursesPage,
    },
    {
        exact: false,
        path: "/course/:id",
        component: DetailCourse,
    },
    {
        exact: false,
        path: "/test",
        component: TestCallAPI,
    },
    // {
    //     exact: false,
    //     path: "/login",
    //     component: Login,
    // },
    // {
    //     exact: false,
    //     path: "/register",
    //     component: Login,
    // },
];
const routesUser = [
    {
        exact: true,
        path: "/user",
        component: UserIndex,
    },
    {
        exact: true,
        path: "/user/:page",
        component: UserIndex,
    }
]
export { routesHome,routesUser }
import HomePage from '../module/HomePage/page/Home';
import CoursesPage from "../module/Coursers/page/CoursesPage";
import DetailCourse from '../module/DetailCourse/page/DetailCourse';
import PlayerExample from '../redux/TestCallAPI';
// import Login from '../module/Login/page/Login';
// import Register from '../module/Register/page/Register';
import UserIndex from '../module/User/UserIndex';
import Learning from '../module/Learning/page/Learning';
import TeacherIndex from '../module/Teacher/TeacherIndex';

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
        component: PlayerExample,
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
const routerTeacher = [
    // {
    //     exact: true,
    //     path: "/teacher",
    //     component: TeacherIndex
    // },
    {   
        exact: true,
        path: "/teacher/:page",
        component: TeacherIndex
    },

]
const routesUser = [
    // {
    //     exact: true,
    //     path: "/user",
    //     component: UserIndex,
    // },
    {
        exact: true,
        path: "/user/:page",
        component: UserIndex,
    },
    // {
    //     exact: true,
    //     path: "/user/course/:id",
    //     component: Course,
    // }
]
const routesLearning = [
    {
        exact: true,
        path: "/learn/:id",
        component: Learning,
    }
]
export { routesHome, routesUser, routesLearning, routerTeacher }
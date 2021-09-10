// import CoursesPage from "../page/CoursesPage/CoursesPage";
// import DetailCourse from "../page/DetailCourse/DetailCourse";
// import HomePage from "../page/Home/Home";
import HomePage from '../module/HomePage/page/Home';
import CoursesPage from "../module/Coursers/page/CoursesPage";
import DetailCourse from '../module/DetailCourse/page/DetailCourse';
import TestCallAPI from '../redux/TestCallAPI';
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
];
export { routesHome }
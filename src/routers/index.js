import CoursesPage from "../page/CoursesPage/CoursesPage";
import DetailCourse from "../page/DetailCourse/DetailCourse";
import HomePage from "../page/Home/Home";
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
];
export { routesHome }
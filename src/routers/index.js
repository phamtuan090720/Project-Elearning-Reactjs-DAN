import CoursesPage from "../page/CoursesPage/CoursesPage";
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
];
export { routesHome }
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import HomeTemplate from './template/HomeTemplate';
import UserTemplate from './template/UserTemplate';
import LearningTemplate from './template/LearningTemplate';
import { routesHome,routesLearning,routesUser,routerTeacher } from './routers';
import PageNotFound from './page/PageNotFound/PageNotFound';
import Login from './module/Login/page/Login';
import Course from './module/User/Course/page/Course.js';
import TeacherTemplate from './template/TeacherTemplete';
import ManageDetailCourse from './module/Teacher/ManageDetailCourse/page/ManageDetailCourse';
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  const showLayoutUser = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <UserTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  const showLayoutLearning = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <LearningTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  const showLayoutTeacher = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <TeacherTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routesHome)}
        {showLayoutUser(routesUser)}
        {showLayoutLearning(routesLearning)}
        {showLayoutTeacher(routerTeacher)}
        <Route path='/user/course/:id' component={Course}/>
        <Route path='/teacher/manage-course/:id' component={ManageDetailCourse}/>
        <Route path='/login' component = {Login}/>
        <Route path='' component = {PageNotFound}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;

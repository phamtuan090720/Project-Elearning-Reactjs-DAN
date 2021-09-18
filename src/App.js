import { BrowserRouter, Switch,Route } from 'react-router-dom';
import HomeTemplate from './template/HomeTemplate';
import UserTemplate from './template/UserTemplate';
import { routesHome,routesUser } from './routers';
import PageNotFound from './page/PageNotFound/PageNotFound';
import Login from './module/Login/page/Login';
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
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routesHome)}
        {showLayoutUser(routesUser)}
        <Route path='/login' component = {Login}/>
        <Route path='' component = {PageNotFound}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;

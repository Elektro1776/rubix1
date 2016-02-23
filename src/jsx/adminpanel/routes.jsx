import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import Login from 'routes/login';
import Dashboard from 'routes/dashboard';
import HomePage from 'routes/homepage';
import Signup from 'routes/signup';
import DataBase from 'routes/database';
import Class from 'routes/class';
import Attendance from 'routes/attendance';
import UserDash from 'routes/global/userdashboard';

export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
       <Route path='/' component={HomePage} /> 
       <Route path='/dashboard' component={Dashboard} />
        <Route path='/app/signup' component={Signup} />
        <Route path='/app/login' component={Login} />
        <Route path='/database' component={DataBase} />
        <Route path='/class' component={Class} />
        <Route path='/attendance' component={Attendance} />
         <Route path='/global/userdashboard' component={UserDash} />
    </Router>
  );
};

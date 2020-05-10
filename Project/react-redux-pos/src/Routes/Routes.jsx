import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Home from '../Components/common/Home'
import Register from '../Components/auth/Register'
import Login from '../Components/auth/Login'

function Routes() {
  return (
    <div className="App container-fluid">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/login' component={Login}></Route>
          <Route render={() =><div>Error: 404, Page not found</div>}/> 
        </Switch>
    </div>
  );
}

export default Routes;

import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from "./config/routes";

function App() {
  return (
   <Router>
     <Switch>
       {routes.map((route, idx) => (
          <RouteWithSubRoutes key={idx} {...route} />
       ))}
     </Switch>
   </Router>
 );
}

function RouteWithSubRoutes(route) {
  console.log(route)
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={ route.routes} {...props} /> }
    />
  )
}

export default App;

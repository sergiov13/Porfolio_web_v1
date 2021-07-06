import React from 'react';
import App from '../components/App';
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const index = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact />
      </Switch>
    </Router>
  );
}

export default index

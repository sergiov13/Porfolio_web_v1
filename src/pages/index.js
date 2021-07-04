import React from 'react';
import App from '../components/App';
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 /* test */ 
 /* test */

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/index2" component={App} exact />
      </Switch>
    </Router>
  );
}

export default index

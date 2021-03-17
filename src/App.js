import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Employees from './pages/Employee';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/employees" component={Employees}/>
            <Route exact path="*" component={Page404}/>
        </Switch>
    </div>
  );
}

export default App;

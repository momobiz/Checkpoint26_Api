import React from 'react';

import './App.css';
import Home from './Components/Home/Home';
import NavBarb from './Components/NavBarb/NavBarb';
import {Route} from 'react-router-dom';
import Users from './Components/Users/Users.js';
import Admin from './Components/Admin/Admin.js';
import Login from './Components/Login/Login.js';
import UserDescription from './Components/UserDerscription/UserDescription.js';

function App() {
  return (
    <div className="App">
      
      <NavBarb/>
    
      <Route exact path="/" component={Home}/>
      <Route exact path="/users" component={Users}/>
      <Route  path="/admin" component={Admin}/>
      
      <Route path="/users/:id" component={UserDescription}/>






    </div>
  );
}

export default App;

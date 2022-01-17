import React from 'react';
import './App.css';
import { Homepage } from './Pages/Homepage';
import { Rooms } from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { client } from './client';

function  App() {
  return (
    <div className="App">
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Homepage}/>
       <Route exact path="/rooms" component={Rooms}/>
       <Route exact path="/rooms/:slug" component={SingleRoom}/>
       <Route component={Error}/>
       </Switch>
      </div>

  );
}
    
   
 
 export default App;

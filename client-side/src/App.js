import React from 'react';
import './App.css';
import Header from './components/header/header';
import { Switch, Route } from "react-router-dom";
import Create from './components/create/create';
import View from './components/view/view';
const App=()=>{

    return (
      <div>
        {/* header outside routes */}
        <Header/>
      
      <Switch>
        {/* Handling routes */}
          
        <Route exact path="/create" component={Create} />
        <Route path="/view" component={View} />
            
            
       </Switch>
       </div>
    );
  
}

export default App;
import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import { Switch, Route } from "react-router-dom";
class App extends Component {

  constructor(){
    super();
    this.state = {
    search:"",
    error: "",
    posts: [],
    };

  }


 render() {
    
    return (
      <div>santosh</div>
      // <Switch>
          
      //       <Route exact path="/signin" component={SignInAndSignUpPage} />
      //       <Route path="/order" component={OrderUpPage} />
            
            
      //     </Switch>
    );
  }
}

export default App;
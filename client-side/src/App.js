import React,{useEffect,useState} from 'react';
import axios from './components/axios/axios';
import './App.css';
import Header from './components/header/header';
import { Switch, Route } from "react-router-dom";
import Create from './components/create/create';
import View from './components/view/view';
const App=()=>{
const [data,setdata]=useState([])
 useEffect(()=>{
    axios.get('/').then(res=>setdata(res.data.data.user));
  },[])


 
   console.log(data); 
    return (
      <div>
        <Header/>
      
      <Switch>
          
        <Route exact path="/create" component={Create} />
        <Route path="/order" component={View} />
            
            
       </Switch>
       </div>
    );
  
}

export default App;
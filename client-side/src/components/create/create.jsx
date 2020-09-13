import React from 'react'
import axios from '../axios/axios';
export default class create extends React.Component {
    constructor(){
        super();
        this.state={
          fname:"",
          lname:"",
          email:"",
          bob: "",
          bio:"",
          errorMesssage:""
        }
        
    }
   Handlechange=(e)=>{
     if(e.target.name==="fname"){
      this.setState({fname:e.target.value})
     }
     else if(e.target.name==='lname'){
      this.setState({lname:e.target.value})
     }
     else if(e.target.name==='email'){
      this.setState({email:e.target.value})
     }
     else if(e.target.name==='bob'){
      this.setState({bob:e.target.value})
     }
     else if(e.target.name==='bio'){
      this.setState({bio:e.target.value})
     }};
     onclickHandler=(e)=>{
       e.preventDefault();

 if(this.state.fname==="" ||this.state.lname==="" ||this.state.email==="" ||this.state.bob==="" ||this.state.bio===""){
   this.setState({errorMesssage:"Please fill all fileds"});
   return;
 }

       axios.post('/',{
        "firstName":this.state.fname,
     "LastName":this.state.lname,
     "Email": this.state.email,
     "BOB":this.state.bob,
     "Short_BIO":this.state.bio
   }).then(res=>console.log(res))
       this.setState({
        fname:"",
        lname:"",
        email:"",
        bob: "",
        bio:""
       })
      alert("your data has been recoded")
     }
     

    render(){
    return (
        <form className="container">
  <div className="form-group ">
    <div style={{color:"red"}}>{this.state.errorMesssage}</div>
    <label for="formGroupExampleInput">FirstName</label>
    <input type="text" className="form-control" name="fname" value={this.state.fname} onChange={this.Handlechange} id="formGroupExampleInput" placeholder="FirstName" required/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">LastNamel</label>
    <input type="text" className="form-control" name="lname" value={this.state.lname} onChange={this.Handlechange} id="formGroupExampleInput2" placeholder="LastNamel" />
  </div>
    <div className="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.Handlechange}  id="formGroupExampleInput2" placeholder="email@example.com" />
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">DOB</label>
    <input type="text" className="form-control" name="bob" value={this.state.bob} onChange={this.Handlechange} id="formGroupExampleInput2" placeholder="BOB" />
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Short BIO</label>
    <input type="text" className="form-control" name="bio" value={this.state.bio} onChange={this.Handlechange} id="formGroupExampleInput2" placeholder="Short BIO" />
  </div>
  <button type="submit" onClick={this.onclickHandler} class="btn btn-primary">Primary</button>
</form>
    );
}
}

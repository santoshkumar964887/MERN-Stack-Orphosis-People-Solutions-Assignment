import React,{useEffect,useState}  from 'react'
import axios from '../axios/axios';
import './view.style.scss';
const View=()=>{
    const [data,setdata]=useState([])
 useEffect(()=>{
    axios.get('/').then(res=>setdata(res.data.data.user));
  },[])

 const handleDelete=(e)=>{
 console.log(e.target.name)
 }
 
   console.log(data); 
    return (
      <div className="container1">
        <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
           
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">BOB</th>
            <th scope="col">Short BIO</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(el=>(   <tr>
              <td>{el.firstName}</td>
            <td>{el.LastName}</td>
            <td>{el.Email}</td>
            <td>{el.BOB}</td>
            <td>{el.Short_BIO}</td>
              <td><button type="button" class="btn btn-outline-primary">Primary</button></td>
              <td><button type="button" name={el._id} onClick={(e)=>handleDelete(e)} className="btn btn-outline-danger">Delete</button></td>
            </tr>

            ))
          }
        </tbody>
      </table>
      </div>
    )
}
export default View;

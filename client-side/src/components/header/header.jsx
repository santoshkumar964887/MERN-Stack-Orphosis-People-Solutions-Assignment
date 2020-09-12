import React from 'react';
import {Link} from 'react-router-dom';
const  header=()=>{
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
        <Link to="/" className="navbar-brand" style={{color:"white"}}>Orphosis People Solutions Practical Test</Link>
        <form className="form-inline">
        <Link to="/create" className="btn btn-outline-success my-2 my-sm-0" type="submit">Create</Link>
        <Link to="/create" className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{margin:"0px 20px"}} >View</Link>
        </form>
      </nav>
    )
};
export default header;


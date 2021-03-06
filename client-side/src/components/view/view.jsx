import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import Edit from "../editform/editform";
import "./view.style.scss";
const View = () => {
  //initial Hooks 
  const [data, setdata] = useState([]);
  const [datachange, setdatachange] = useState("");
  const [serchName, setserchNmae] = useState("");
  const [serchName1, setserchNmae1] = useState("");
  useEffect(() => {
    // Geting All data from backend
    axios.get("/").then((res) => setdata(res.data.data.user));
  }, [datachange]);
//handling delete buttons
  const handleDelete = (e) => {
    const url = `/${e.target.name}`;
    axios.delete(url).then((res) => console.log(res));
    setdatachange("true");
  };
  // handle search data rows
  const handleSerch = (e) => {
    e.preventDefault();
    const data1 = data.filter((el) =>
      el.firstName.toLowerCase().includes(serchName.toLowerCase())
    );
    setdata(data1);
  };
  const handleSerchInput = (e) => {
    setserchNmae(e.target.value);
  };
  // sort By Last Name
  const handleCheck = (e) => {
    if (e.target.checked) {
      data.sort((a, b) => {
        let fa = a.LastName.toLowerCase(),
          fb = b.LastName.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    setdata(data);
    setserchNmae1("once render");
  };
  useEffect(() => console.log(data), [serchName1]);
  // design table and search
  return (
    <div className="container1">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            value={serchName}
            onChange={(e) => handleSerchInput(e)}
            placeholder="Search By First Name"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            onClick={(e) => handleSerch(e)}
            type="submit"
          >
            Search
          </button>

          <div className="form-check ml-3">
            <input
              type="checkbox"
              onClick={handleCheck}
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              sort Last name
            </label>
          </div>
        </form>
      </nav>
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
          {data.map((el) => (
            <tr>
              <td>{el.firstName}</td>
              <td>{el.LastName}</td>
              <td>{el.Email}</td>
              <td>{el.BOB}</td>
              <td>{el.Short_BIO}</td>
              <td>
                <Edit key={el._id} data={el} />
              </td>
              <td>
                <button
                  type="button"
                  name={el._id}
                  onClick={(e) => handleDelete(e)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default View;

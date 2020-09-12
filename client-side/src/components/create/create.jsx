import React from 'react'

export default function create() {
    return (
        <form>
  <div className="form-group">
    <label for="formGroupExampleInput">FirstName</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="FirstName"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">LastNamel</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="LastNamel"/>
  </div>
    <div className="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="email@example.com"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">DOB</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="BOB"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Short BIO</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Short BIO"/>
  </div>
</form>
    )
}

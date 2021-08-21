import React, { useState } from 'react'

export const AddUser = (props) => {
    const [name, setname] = useState('')
    const [job, setjob] = useState('')
    const submit = (e) => {
            e.preventDefault();
            var emp={
                name:name,
                job:job 
              }
              props.addUser(emp)
    }
    return (
        <form onSubmit={submit}>
  <div class="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control"  placeholder="Enter Name" onChange  = {(e)=>{setname(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label htmlFor="job">Job</label>
    <input type="text" className="form-control"  placeholder="Enter Job" onChange={(e)=>{setjob(e.target.value)}}/>
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
</form>
    )
}

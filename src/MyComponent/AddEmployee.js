import React from 'react'
import { useState } from 'react'

export const AddEmployee = (props) => {


    const [employeename, setemployeename] = useState("")
    const [age, setage] = useState("")
    const submit = (e)=>{

        e.preventDefault();
        
        props.addEmployee(employeename,age)
    }

    return (
        <form onSubmit={submit}>
            <div className="container my-3">
                <h3>AddEmployee</h3>
                <label htmlFor="EmployeeName" className="form-label">EmployeeName</label>
                <input type="text" value ={employeename} onChange={(e)=>{setemployeename(e.target.value)}} className="form-control" id="employeename" />
            </div>
            <div className="container my-3">
                <h3>Age</h3>

                <label htmlFor="age" className="form-label">Age</label>
                <input type="text" value ={age} onChange={(e)=>{setage(e.target.value)}} className="form-control" id="age" />
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )
}

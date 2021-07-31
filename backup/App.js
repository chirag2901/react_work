import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { Footer } from './MyComponent/Footer';
import { Employee } from './MyComponent/Employee';
import { EmployeeList } from './MyComponent/EmployeeList';
import { useState } from 'react';
import { AddEmployee } from './MyComponent/AddEmployee';
// const name = "ajayraj"
// var no = 101
// const users=[
//   {
//     name : "ajay",
//     email:"ajay@gamail.com",
//     age : 20
//   },
  
// {
// name : "chirag",
// email:"chirag@gamail.com",
// age : 20
// },

// {
// name : "himang",
// email:"himang@gamail.com",
// age : 20
// },
// ]
// function userDetail(){
//   return(
// <div>
     
//      <h4>
//        {
//          users.map(function(user){  //(user)=>
//            return <p>{user.name},{user.email},{user.age}</p>
//          })
//       }
//      </h4>
//      </div>
//   )
// // }
// function App() {
  
//   return (
//     <div>
//          <h1>{userDetail()}</h1>
//          <h1>{users[2].name}</h1>
//          <h1>{name}</h1>
//          <h1>{no}</h1>
//          </div>

//   );
// }
function App(){
  var title = "Emp"
  const onDelete=(employee)=>{
    console.log("delet called",employee)
  //   let index = employeeList.indexOf(employee)
  //   employeeList.splice(index,1)
    setEmployees(employeeList.filter((e)=>{
      
        return e!==employee;
    })
    )
}
  const addEmployee=(employeename,age)=>{
    console.log("adding : ",employeename,age)
    const employee={
      eId:1,
      eName:employeename,
      eAge:age

    }
    setEmployees([...employeeList,employee])
  }

  // const [state, setstate] = useState(initialState)
  const [employeeList,setEmployees] = useState  ([
   {
    eId: 101,
    eName : "ajay",
     eAge : 20
  },
  
{
    eId: 102,
    eName : "jay",
    eAge : 21
},

{
  eId: 103,
  eName : "ajayraj",
   eAge : 22  
},
  ])
  return(
    <>
    <Header  title = "Employee Management" searchBar={false}/>
    <AddEmployee addEmployee={addEmployee}/>  
    <EmployeeList employeeList = {employeeList} onDelete = {onDelete} />

    <Footer/>
    </>
  )
}

export default App;

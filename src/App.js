// import logo from './logo.svg';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { AddUser } from './api/Add-User';
import { UserDetail } from './api/User-Detail';
import { UserList } from './api/User-List';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


// import Header from './MyComponent/Header';
// import { Footer } from './MyComponent/Footer';
// import { Employee } from './MyComponent/Employee';
// import { EmployeeList } from './MyComponent/EmployeeList';
// import { useState } from 'react';
// import { AddEmployee } from './MyComponent/AddEmployee';
// import { MainHeader } from './MyComponent/MainHeader';
// import { Route } from 'react-router-dom';
// import  {Welcome} from './Pages/Welcome'
// import  {Product} from './Pages/Product'
// import  {ProductDetail} from './Pages/ProductDetail'
import { SimpleForm } from './Pages/SimpleForm';
import { toast, ToastContainer } from 'react-toastify';

function App(){
  const [users, setusers] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [isError, setisError] = useState(null)


//   function  fetchUsers() {
//     fetch("https://reqres.in/api/users?page=2").then(res =>{
//       return res.json();
//     }).then(data=>{
//       console.log(data.data[0]);
//       setusers(data.data);
//     })
// } 
  async function addUser(emp){
    // var emp={
    //   name:"chirag",
    //   job:"manager"
    // }
    console.log("Stringify..",JSON.stringify(emp));
    const res = await fetch('https://reqres.in/api/users',{
    method: 'POST' ,
      body:JSON.stringify(emp),
      headers:{
        'Content-Type':"application/json",
      }
      })
      const data = await res.json();
      toast.success('User Added..',{
        position : toast.POSITION.TOP_CENTER
      })

      console.log("response  =>",data);
    }
async function fetchUsers(){
  setisLoading(true)
  // if(isLoading){
  //   return 
  // }
  try{
  const res = await fetch('https://reqres.in/api/users?delay=3')
  const data = await res.json();
  setusers(data.data);
  setisLoading(false)
  console.log(res.status)
  if(!res.ok){
    throw new Error('something went wrong....')
  }
  }catch(error){
    setisError(error.message)
  }
}
  return(
    
    <div>
      {
        // <SimpleForm/>
      /* <MainHeader/>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/product">
        <Product/>
      </Route>
      <Route path="/productdetail/:productId/:productName">
        <ProductDetail/>
      </Route> */}
      <button class="btn btn-primary" onClick={fetchUsers}>FETCH USERS</button>
      {/* <button class="btn btn-primary" onClick={addUser}>Add User</button> */}
     <ToastContainer/>
      <Route path="/" exact>
        {isLoading && <div> <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="sr-only">Loading...</span>
  </button>
  </div>}
  { users.length > 0 && <div><button class="btn btn-primary" type="button" disabled>
  {/* <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> */}
  <span class="sr-only">Data Loaded...</span>
</button>
        {!isLoading && users.length > 0 &&  <UserList users = {users } /> }
        
</div>}
        {!isLoading && isError && <p>{isError}</p> }
       
      </Route>
     <Route path="/users/:id">
      <UserDetail/>
     </Route>
     <Route path="/addUser">
       <AddUser addUser = {addUser}/>
     </Route>
    </div>
    
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { Footer } from './MyComponent/Footer';
import { Employee } from './MyComponent/Employee';
import { EmployeeList } from './MyComponent/EmployeeList';
import { useState } from 'react';
import { AddEmployee } from './MyComponent/AddEmployee';
import { MainHeader } from './MyComponent/MainHeader';
import { Route } from 'react-router-dom';
import  {Welcome} from './Pages/Welcome'
import  {Product} from './Pages/Product'
import  {ProductDetail} from './Pages/ProductDetail'

function App(){
  return(
    
    <div className="container">
      <MainHeader/>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/product">
        <Product/>
      </Route>
      <Route path="/productdetail/:productId/:productName">
        <ProductDetail/>
      </Route>
    </div>
    
  )
}

export default App;

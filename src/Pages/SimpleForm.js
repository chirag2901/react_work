import React, { useRef } from 'react'
import { useState } from 'react'
import useInput from '../hooks/use-input'

export const SimpleForm = () => {
    // const [name, setname] = useState('')
    const emailRef = useRef('')
    // const [nameValidation, setnameValidation]  = useState(true)
    //e = event
    const {value:enteredName,valueChangeHandler:nameChangeHandler,valueBlurHandler:nameBlurhandler,hasError:nameValidation} = useInput()
    const {value:enteredPassword,valueChangeHandler:passwordChangeHandler,valueBlurHandler:passwordBlurhandler,hasError:passwordValidation} = useInput()
    const {value:enteredEmail,valueChangeHandler:emailChangeHandler,valueBlurHandler:emailBlurhandler,hasError:emailValidation} = useInput()
    const {value:enteredAge,valueChangeHandler:ageChangeHandler,valueBlurHandler:ageBlurhandler,hasError:ageValidation} = useInput()
    const {value:enteredCity,valueChangeHandler:cityChangeHandler,valueBlurHandler:cityBlurhandler,hasError:cityValidation} = useInput()
    //formvalid
    let formisValid = true;
    if(nameValidation && passwordValidation && emailValidation && ageValidation && cityValidation){
        formisValid = false;
    }
    else{
        formisValid = true;
    }
    const submit = (e)=>{
        e.preventDefault();
        if(enteredName.trim()===''){
            nameValidation = false;

            return;
        }
        if(enteredPassword.trim()===''){
            passwordValidation = false;

            return;
        }
        if(enteredEmail.trim()===''){
            emailValidation = false;

            return;
        }
        if(enteredAge.trim()===''){
            ageValidation = false;

            return;
        }
        if(enteredCity.trim()===''){
            cityValidation = false;

            return;
        }
        
            console.log("Submit Called")
            // console.log("EmailRef : ",emailRef.current.value)
    }
    // const nameBlurhandler = (e) =>{
    //     if(enteredName.trim()===''){
    //         setnameValidation(false)

    //         return;
    //     }
    // }
    // const nameInputHandler = (e)=>{
    //     // if(e.target.value.trim() === '' ){
    //         if(e.target.value.length < 1 ){

    //         setnameValidation(false)
    //         return;
    //     }
    //     setnameValidation(true)

    //     console.log(e)
    //     console.log("name: ",e.target.value)
    //     setname(e.target.value)
    // }

    return (
       <form onSubmit = {submit}>
        <div className="form-control">
            <label htmlFor="name">Enter Name: </label>
            <input type= "text" value = {enteredName} id="name" onChange={nameChangeHandler} onBlur = {nameBlurhandler}></input>

            {/* {name} */
            enteredName}
            {
                !nameValidation && <p>Name must not be empty....</p>
            }
        </div>
        <div className="form-control">
            <label htmlFor="password">Enter Password: </label>
            <input type= "password" value = {enteredPassword} id="password" onChange={passwordChangeHandler} onBlur = {passwordBlurhandler}></input>

            {/* {name} */
            enteredPassword}
            {
                !passwordValidation && <p>Password must not be empty....</p>
            }
        </div>
        
        <div className="form-control">
            <label htmlFor="email">Enter Email: </label>
            <input type= "text" value = {enteredEmail} id="email" onChange={emailChangeHandler} onBlur = {emailBlurhandler}></input>

            {/* {name} */
            enteredEmail}
            {
                !emailValidation && <p>Email must not be empty....</p>
            }
        </div>
        <div className="form-control">
            <label htmlFor="age">Enter Age: </label>
            <input type= "text" value = {enteredAge} id="age" onChange={ageChangeHandler} onBlur = {ageBlurhandler}></input>

            {/* {name} */
            enteredAge}
            {
                !ageValidation && <p>Age must not be empty....</p>
            }
        </div>
        <div className="form-control">
            <label htmlFor="city">Enter City: </label>
            <input type= "text" value = {enteredCity} id="city" onChange={cityChangeHandler} onBlur = {cityBlurhandler}></input>

            {/* {name} */
            enteredCity}
            {
                !cityValidation && <p>City must not be empty....</p>
            }
        </div>
        
        {/* <div className="form-control">
            <label htmlFor="email">Enter Email: </label>
            <input ref = {emailRef} type= "text" id="email" ></input>
        </div> */}
        <div className="form-action">
           
            <input disabled = {formisValid} type= "submit" value = "SUBMIT"></input>
        </div>
       </form>
    )
}

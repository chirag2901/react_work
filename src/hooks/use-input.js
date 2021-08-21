import { useState } from "react";
const useInput = () => {
    const [enteredValue, setenteredValue] = useState('')
    const [inputValidation, setinputValidation] = useState(true)
    const valueChangeHandler = (e) =>{
        
        console.log(e.target.value);
        setenteredValue(e.target.value)
        
    }
    const valueBlurHandler = (e) =>{
        
        if(enteredValue.trim()===''){
            setinputValidation(false)

            return;
        }
    }
    return{
        value:enteredValue,valueChangeHandler,valueBlurHandler,hasError:inputValidation
    }; 
} 







export default useInput;
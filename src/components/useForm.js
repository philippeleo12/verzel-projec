import {useState, useEffect} from "react";
import validationRegister from '../components/validationRegister';

const useForm = (submitForm) => {

const [values, setValues] = useState({
    fullname:"", 
    email:"",
    password:"",
    address:"",
    cpf:"",
    cep:"",
    dts:"",
    nresi:""

});

const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);

const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    })
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validationRegister(values));
    setDataIsCorrect(true);
};

useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }

}, [errors]);

    return {handleChange, handleFormSubmit, errors, values};
}



export default useForm;
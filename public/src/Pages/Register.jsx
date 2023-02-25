import {React ,useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.svg"
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerRoute } from '../Utils/Api_routes';

function Register() {

    const [Values,SetValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword:"",
    });

    const toast_Option = {

            position:"bottom-right",
            autoClose: 8000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",

        }
    
    
    const notify = () => toast("Wow so easy !");

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (handleValidation()) {
            console.log("In validation", registerRoute)
            const { password,confirmPassword,username,email} = Values;
                const {data} = await  axios.post(registerRoute, {
                    username, 
                    email,
                    password,
                });
        }   
    };

    const handleValidation = () => {
        const { password,confirmPassword,username,email} = Values;
        
        if(password !== confirmPassword){
            toast.error("As senhas devem ser iguais", toast_Option );
            return false;
         }

         else if ( username.length < 3) {
            toast.error("Username precisa ter mais que 3 caracteres", toast_Option);
            return false;
         }
         
         else if ( password.length < 8) {
            toast.error("Sua senha deve ter mais que 8 caracteres", toast_Option);
            return false;
         }
         
         else if ( email === "") {
            toast.error("Email é obrigatorio",toast_Option)
            return false;
         }
         return true;

    };

    const handleChange = (event) => {
        SetValues({
            ...Values,[event.target.name]: event.target.value
        });
    }

    
  return (


    <>
        


        <FormContainer>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className='Header'>
                    <img src={Logo} alt="ChatApp" />
                    <h1>ChatApp</h1>
                    
                </div>
            
            <input 
                type="text" 
                placeholder='Username' 
                name='username' 
                onChange={ (e) => handleChange(e)}
            />

            <input 
                type="email" 
                placeholder='Email' 
                name='email' 
                onChange={ (e) => handleChange(e)}
            />            
            
            <input 
                type="password" 
                placeholder='Password' 
                name='password' 
                onChange={ (e) => handleChange(e)}
            />            
        
            <input 
                type="password" 
                placeholder='Confirm Password' 
                name='confirmPassword' 
                onChange={ (e) => handleChange(e)}
            />

                <button  type='submit'> Create User</button>
                <span> 

                Já tem conta? <Link to="/login"> Login</Link>
                </span>
                
            </form>


        </FormContainer >

        <ToastContainer />

    </>
  )
}


const FormContainer = styled.div`

height: 100vh;
width: 100vw;

display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;

.Header {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    img {
        height: 5rem;
    }

    h1{
        color: white;
        text-transform: uppercase;
    }
}

form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius:2rem;
    padding: 3rem 5rem;
    input{
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus{
            border: 0.1rem solid #997af0;
            outline: none;
        }
    }

    button{
        background-color: #997af0;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight:bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        transition: 0.5 ease-in-out;
        &:hover{
        background-color: #4e0eff;
        } 
    }

    span{
        display: flex;
        color: white;
        align-items: center;
        a{
            color: #4e0eff;
            text-decoration: none;
            font-weight: bold;
        }
    }
}

`;



export default Register
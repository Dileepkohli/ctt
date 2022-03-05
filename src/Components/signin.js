import './SignUp.css';
import { useFormik } from 'formik';
import React, { useState, useContext } from 'react';
import { AccountContext } from './Account';

const SignIn = (props) => {
    const { authenticate } = useContext(AccountContext);
    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },

        onSubmit: values => {
            console.log("Fprmik submit called", values);
            authenticate(formik.values.email, formik.values.password)
            .then(data => {
                console.log("Signed In : ", data);
                props.signInDone();
            })
            .catch(err => {
                console.log("Failed to Sign in : ", err);
            });
        }
    });

    const signUpHandler = () => {
        props.signUpHandler();
    };
    return (
        <div className='signUpBox'>
            <h2>Sign In</h2>
            <div className='absoluteForm'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='relativeLabel'><label htmlFor="email">Email</label></div>
                    <div className='relativeInput'><input id='email' 
                                                        name='email' 
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}></input></div>
                    <div className='relativeLabel'><label htmlFor="password">Password</label></div>
                    <div className='relativeInput'><input id='password' 
                                                            name='password'
                                                            type='password'  
                                                            onChange={formik.handleChange}
                                                            value={formik.values.password}></input></div>
                    <div className='relativeInput'><button type='submit'>Sign In</button> <button onClick={signUpHandler}>Sign Up</button></div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
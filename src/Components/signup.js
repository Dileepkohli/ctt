import './SignUp.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import UserPool from './UserPool';
// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const SignUp = (props) => {
    //console.log("Just for testing");
    const poolData ={
        UserPoolId:"",
        ClientId: ""
    };
    const [isSignUpTriggered, setIsSignUpTriggered] = useState(true);
    const [isSignUpDone, setIsSignUpDone] = useState(false);
    const [userName, setUserName] = useState('');
    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
            repassword: '',
            vcode: ''
        },

        onSubmit: values => {
            //console.log("Fprmik submit called", values);
            if (formik.values.email && formik.values.password && !formik.values.vcode) {
                UserPool.signUp(formik.values.email, formik.values.password, null, [], (err, data) => {
                    if (err) {
                        console.log("Error on sign up : ", err);
                    }
                    console.log(data);
                    console.log(data.user.username);
                    if (!data.userConfirmed) {
                        setIsSignUpTriggered(false);
                        setIsSignUpDone(true);
                        setUserName(data.user.username);
                    }
                });
            } else if (formik.values.vcode) {
                var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
                var userData = {
                    Username: formik.values.email,
                    Pool: userPool,
                };
                var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
                cognitoUser.confirmRegistration(formik.values.vcode, true, function(err, result) {
                    if (err) {
                        alert(err.message || JSON.stringify(err));
                        return;
                    }else{
                        console.log('call result: ' + result);
                        props.signUpDone();
                    }
                });
            }
        }
    });
    const signInHandler = () => {
        props.signInHandler();
    }
    return (
        <div className='signUpBox'>
            <h2>Sign Up</h2>
            <div className='absoluteForm'>
                <form onSubmit={formik.handleSubmit}>
                    {
                        isSignUpTriggered ?
                        <div>
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
                            <div className='relativeLabel'><label htmlFor="repassword">Repassword</label></div>
                            <div className='relativeInput'><input id='repassword'
                                name='repassword'
                                type='password'
                                onChange={formik.handleChange}
                                value={formik.values.repassword}></input></div>
                                <div className='relativeInput'><button type='submit'>Sign Up</button> <button onClick={ signInHandler }>Sign In</button></div>
                        </div> :
                        isSignUpDone ?
                        <div>
                            <div className='relativeLabel'><label htmlFor="email">Verification Code</label></div>
                            <div className='relativeInput'><input id='vcode'
                                name='vcode'
                                onChange={formik.handleChange}
                                value={formik.values.vcode}></input></div>
                            <div className='relativeInput'><button type='submit'>Confirm</button></div>
                        </div> : ""
                    }
                </form>
            </div>
        </div>
    );
};

export default SignUp;
import '../App.css';
import './Home.css'
import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Account } from './Account';
import Select from 'react-select';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth} from "aws-amplify";

const actions = [
  { label: "Add", value: 1 },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 }
];

const Home = (props) => {
    const signOut = (e) => {
      e.preventDefault();
      Auth.signOut();
      window.location.reload() //<!-- it also works without, but just to really kick the user out.-->
    }
    return (
        <div className="App">
            <div className="signout-div">
                <button className="signout-button" onClick={signOut}>Sign Out</button>
            </div>
            <div className="home">
                <div className="home-left-div">
                    Place holder for selection menu
                    {/* <div className="container">
                        <div className="row">
                            <div className="home-left-div-version">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <Select options={ actions } />
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="home-left-div-module">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <Select options={ actions } />
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="home-left-div-scenario">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <Select options={ actions } />
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="home-right-div">
                    Place holder for scenario description
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Login = () => {
    const [, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result)=> 
        {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            console.log(signedInUser);
            console.log(from);
            history.replace(from);

        })
        .catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <div className='container'>
            <img className="m-auto d-block" style={{width: '13%'}} src={logo} alt=""/>
                <div className="login px-5 pt-5 pb-3">
                    <h2 className='py-3'>Login With</h2>
                    <button className='btn btn-dark mt-3' onClick={handleGoogleSignIn}>Continue With Google</button>
                    <p className="py-3">Don't have an account?
                        <Link to='#'>
                            Create an account
                        </Link>
                    </p> 
                </div>   
        </div>
    );
};

export default Login;
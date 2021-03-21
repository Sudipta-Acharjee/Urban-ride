import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const LogIn = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState(true);
    const history = useHistory();
    const location = useLocation
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: ''
    })
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const HandleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signedInUser);
                setloggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            console.log(newUserInfo)
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // updateUserName(user.name)
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('sign in user info', res.user);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
        e.preventDefault();
    }
    // const updateUserName = Name => {
    //     const user = firebase.auth().currentUser;

    //     user.updateProfile({
    //         displayName: Name,
    //     }).then(function () {
    //         console.log('user name updated sucessfully');
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    // }
    return (
        <div >
            <div className="Header">
                <nav>
                    <h3>King Riders</h3>
                    <a href="/">Home</a>
                    <a href="/logIn">Destination</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                    <Link to="/logIn"><button>Log In </button></Link>
                    <h4>{user.name}</h4>
                </nav>
            </div>
            <div className="createAccount">
                <div className="formControl">

                    <form onSubmit={handleSubmit}>
                        <h3>Create an account</h3>
                        {newUser && <input type="text" name={loggedInUser.name} onBlur={handleBlur} placeholder="Name" />}
                        <br />
                        <input type="text" name="email" onBlur={handleBlur} placeholder="Email" required />
                        <br />
                        <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-success" />
                    </form>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                    <label htmlFor="newUser"> Already Sign Up , Now Log In</label>
                </div>
                <br />
                <div>
                    <button type="button" onClick={HandleGoogleSignIn} className="btn btn-warning">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default LogIn;
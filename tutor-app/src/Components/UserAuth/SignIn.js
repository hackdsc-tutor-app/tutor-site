import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase/index'
import M from "materialize-css";

const provider = new firebase.auth.GoogleAuthProvider();

class SignInSignOutBtn extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            items: [],
            user: null // <-- add this line
        }
        this.login = this.login.bind(this); // <-- add this line
        this.logout = this.logout.bind(this); // <-- add this line
    }
    handleChange(e) {
        /* ... */
    }
    logout() {
        firebase.auth().signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }
    login() {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }
    componentDidMount() {
        M.AutoInit();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }
    render() {
        return (
            
                
                <div className="wrapper">
                    {this.state.user ?
                        <button onClick={this.logout}>Logout</button>
                        :
                        <button onClick={this.login}>Log In</button>
                    }
                </div>
           
        );
    }
}
export default SignInSignOutBtn
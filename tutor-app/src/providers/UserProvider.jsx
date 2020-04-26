import React, { Component, createContext } from 'react'
import { Redirect, Router, Route } from "react-router-dom";
import firebase from '../firebase/index'
import SignIn from "../Components/UserAuth/SignIn";
import TopBar from "../Components/TopBar/TopBar"

import Card from "../Components/timeslots/card";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
    state = {
        user: null,
        loading: true
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(userAuth => {
            this.setState({ user: userAuth });
            this.setState({ loading: false });
            if (this.state.user == null) {
                //not signed in
                console.log('not signed in');
                this.redirectToSignIn();
            } else {
                //signed in
                console.log('signed in');
            }

        });
    };

    redirectToSignIn() {
        console.log('here');
        // return (
        //     <Route path="/" component={Card}></Route>
        // )
        // this.props.history.push('/SignIn');
        // this.props.history.push('/SignIn')
        // return (
        //     <Redirect from="/" to="/SignIn" />
        // )
    }

    checkLoggedIn() {
        return firebase.auth().onAuthStateChanged(userAuth => {
            if (userAuth == null) {
                //not signed in
                console.log('not signed in');
                return (
                    <Redirect from="/" to="/SignIn" />
                )
                // this.redirectToSignIn();
            } else {
                //signed in
                return (
                    <UserContext.Provider value={this.state.user}>
                        {this.props.children}
                    </UserContext.Provider>
                );
                console.log('signed in');
            }

        });
    }
    render() {

        return (
            <UserContext.Provider value={this.state.user}>
                {/* <span>hi</span> */}
                {this.state.user &&
                    this.props.children
                }

                {this.state.loading == true &&
                    <span>Loading...</span>
                }

                {this.state.user == null && this.state.loading == false &&
                    <div>
                        <TopBar />
                        <Redirect from="/" to="/SignIn" />
                        <Redirect from="/Card" to="/SignIn" />
                        <Route path="/SignIn" exact component={SignIn} />
                    </div>

                }
            </UserContext.Provider>
        );
    }
}
export default UserProvider
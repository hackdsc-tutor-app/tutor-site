import React, { Component, createContext } from 'react'
import { Redirect, Router, Route } from "react-router-dom";
import firebase from '../firebase/index'
import SignIn from "../Components/UserAuth/SignIn";
import TopBar from "../Components/TopBar/TopBar"
import Container from "../Components/Container";

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
            // UserContext = createContext({ user: userAuth });
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
                <TopBar />
                <div className="left-align container">
                    <br />
                    {/* <span>hi</span> */}
                    {this.state.user &&
                        this.props.children
                    }

                    {this.state.loading == true &&
                        <div>

                            <span><br />Loading...</span>
                        </div>
                    }

                    {this.state.user == null && this.state.loading == false &&
                        <div>
                            {/* <Redirect from="/" to="/SignIn" />
                        <Redirect from="/Card" to="/SignIn" /> */}
                            {/* <Redirect from="/AddTimeslot" to="/SignIn" /> */}
                            <Route path="/session/:wbId" exact component={SignIn} />
                            <Route path="/session" exact component={SignIn} />
                            <Route path="/card" exact component={SignIn} />
                            <Route path="/addtimeslot" exact component={SignIn} />
                            <Route path="/signin" exact component={SignIn} />
                        </div>

                    }
                </div>
            </UserContext.Provider>
        );
    }
}
export default UserProvider
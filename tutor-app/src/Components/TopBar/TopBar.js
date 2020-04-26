
import React, { useContext } from "react";
import Card from '../../Components/TopBar/TopBar'
import { UserContext } from "../../providers/UserProvider";
import firebase from "../../firebase/index";


import { withRouter, Link } from "react-router-dom";

function TopBar({ location }) {
    const { pathname } = location;
    const signOutUser = () => {
        firebase.auth().signOut();
    }
    var signInBtn = useContext(UserContext) ? <li><Link onClick={signOutUser} to="#">Logout</Link></li> : <li><Link to="/SignIn">Sign In</Link></li>;
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Logo
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/AddTimeslot" >
                            Add Timeslot
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/formCall">
                            Form Call
                        </Link>
                    </li>
                    {signInBtn}
                </ul>
            </div>
        </nav>
    );
}
export default withRouter(TopBar);



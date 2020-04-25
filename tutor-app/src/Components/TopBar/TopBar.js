
import React from "react";
import { withRouter,Link } from "react-router-dom";
import SignInSignOutBtn from '../UserAuth/SignIn'

function TopBar({ location }) {
    const { pathname } = location;
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Logo
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/UserAuth" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <SignInSignOutBtn/>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default withRouter(TopBar);



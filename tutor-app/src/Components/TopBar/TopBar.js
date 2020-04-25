
import React from "react";
import Card from '../../Components/TopBar/TopBar'


import { withRouter,Link } from "react-router-dom";

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
                        <Link to="/SignIn">
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to="/Card">
                            Card
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default withRouter(TopBar);



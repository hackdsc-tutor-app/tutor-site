
import React from "react";
import { withRouter, Link } from "react-router-dom";
import SignInSignOutBtn from '../UserAuth/SignIn'
import './card-style.css';
const Card = props => {
    return (
        <div className="card-body tex-dark">
            <h4 className="card-title">TA's Name</h4>
            <p className="Card-text text-secondary">time</p>
            <a href="#" className="btn btn-outline-success">Go to session</a>
        </div>
    );

}
export default Card;

// function Card() {
//     return (
//         <React.Fragment>
//             <div>
//                 test

//             </div>
//         </React.Fragment>
//     );
// }
// export default Card;
//testing


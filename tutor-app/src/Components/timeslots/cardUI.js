import React from "react";
import { withRouter, Link } from "react-router-dom";
import SignInSignOutBtn from '../UserAuth/SignIn'
import './card-style.css';
const Card = props => {
    return (
        <div className="card-body tex-dark">
            <h4 className="Card-text text-secondary">{props.tutorName}</h4>
            <a href="#" className="btn btn-outline-success btn-tutor-session">{props.time}</a>
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
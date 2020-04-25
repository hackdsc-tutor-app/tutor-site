import React from "react";
import { withRouter, Link } from "react-router-dom";
import SignInSignOutBtn from '../UserAuth/SignIn'
import './card-style.css';
const Card = props => {
    return (
        <div className="card-body tex-dark">
            <h3 className="card-title">TA's name</h3>
            <h4 className="Card-text text-secondary">Classes</h4>
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
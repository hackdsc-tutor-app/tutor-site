import React from "react";
import Card from './cardUI/Card'
import './card-style.css';
const Card = props => {
    return (
       <div>
           <ul>
               <Card tutorName = 'Nick Serna' time='12:00'/>
           </ul>
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
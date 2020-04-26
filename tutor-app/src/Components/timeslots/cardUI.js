import React from "react";
// import './card-style.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const CardUI = props => {
    return (
        // <div className="card-body tex-dark">

        //     <h4 className="Card-text text-secondary">{props.tutorName}</h4>
        //     <a href="#" className="btn btn-outline-success btn-tutor-session">{props.time}</a>

        // </div>

        <Accordion defaultActiveKey="1"  style={{padding:'10px'}}>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">

                        <b> {props.tutorName}</b><br/>
                        <p href="#" >{props.time}</p>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        hello
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );

}
export default CardUI;

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
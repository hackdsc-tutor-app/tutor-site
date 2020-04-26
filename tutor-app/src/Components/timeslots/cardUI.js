<<<<<<< HEAD
=======
import React from "react";
import { withRouter, Link } from "react-router-dom";
import SignInSignOutBtn from '../UserAuth/SignIn'
import './card-style.css';
const Card = props => {
    return (
        <div className="card-body tex-dark">
<<<<<<< HEAD
            <h4 className="Card-text text-secondary">{props.tutorName}</h4>
            <a href="#" className="btn btn-outline-success btn-tutor-session">{props.time}</a>
=======
            <h3 className="card-title">TA's name</h3>
            <h4 className="Card-text text-secondary">Classes</h4>
>>>>>>> 7566dfca46371edf43734cc55e762c9e9a703ad8
        </div>
    );
>>>>>>> 97546c9a80d00ab772fb52dcae0cb0d5427b7635

import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class Card extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    render() {
        return (
            <>
                <MDBBtn
                    color="primary"
                    onClick={this.toggleCollapse("basicCollapse")}
                    style={{ marginBottom: "3rem" }}
                >
                    <h4 className="card-title">TA's Name</h4>
                </MDBBtn>
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                    <p>
                        Class Name
                    </p>
                    <a href="#" className="btn btn-outline-success">Go to session</a>
                </MDBCollapse>
            </>
        );
    }
}

export default Card;

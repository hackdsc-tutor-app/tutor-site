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
                    style={{ margin: 0, width: "100%" }}
                >
                    {this.props.tutorName}
                </MDBBtn>
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                    <p>{this.props.time}</p>
                    <MDBBtn
                        href="#"
                        color="success"
                    >
                        Go to session
                    </MDBBtn>
                </MDBCollapse>
            </>
        );
    }
}

export default Card;

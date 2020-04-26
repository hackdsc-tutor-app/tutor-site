
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

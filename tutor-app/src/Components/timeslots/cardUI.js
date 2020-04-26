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
                    color="danger"
                    outline
                    onClick={this.toggleCollapse("basicCollapse")}
                    style={{ margin: 0, width: "100%" }}
                >
                    {this.props.tutorName}
                </MDBBtn>
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                <MDBBtn
                        href="#"
                        color="success"
                        style={{margin: "5px 0", width: "90%" }}
                    >
                        {this.props.time1}
                    </MDBBtn>
                    <MDBBtn
                        href="#"
                        color="success"
                        style={{margin: "5px 0", width: "90%" }}
                    >
                        {this.props.time2}
                    </MDBBtn>
                </MDBCollapse>
            </>
        );
    }
}

export default Card;

import React, { Component } from 'react'
import Card from './cardUI';
import "./card-style.css";
import { MDBBtn } from 'mdbreact';

class Cards extends Component {
    render() {
        const elements = [['Nick Serna','8:00','12:00'], ['Jose','8:00','12:00'], ['Felipe','8:00','12:00']];
        const elements1 = [['Nick Serna','8:00','2:00'], ['Ben','8:00','2:00'], ['Isabella','8:00','2:00']];
        const elements2 = [['Nick Serna','8:00','12:00'], ['Jose','8:00','12:00'], ['Felipe','8:00','12:00']];
        const elements3 = [['Nick Serna','8:00','12:00'], ['Jose','8:00','12:00'], ['Felipe','8:00','12:00']];
        const elements4 = [['Nick Serna','8:00','12:00'], ['Jose','8:00','12:00'], ['Felipe','8:00','12:00']];

        return (
            <div className="container-fluid d-flex justify-content-center" style={{height:'100%'}}>
                
        
                <div className="row">                
                    <ul className="dayBlock">
                    <MDBBtn
                        className="weekDay"
                        color="danger"
                        style={{width: "100%", margin: 0}}
                    >
                        Monday
                    </MDBBtn>
                    {   elements.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time1={value[1]} time2={value[2]} /></li>
                    })}
                    </ul>
                    <ul className="dayBlock">
                    <MDBBtn
                        className="weekDay"
                        color="danger"
                        style={{width: "100%", margin: 0}}
                    >
                        Tuesday
                    </MDBBtn>

                    {   elements1.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time1={value[1]} time2={value[2]} /></li>
                    })}
                    </ul>
                    <ul className="dayBlock">
                    <MDBBtn
                        className="weekDay"
                        color="danger"
                        style={{width: "100%", margin: 0}}
                    >
                        Wednesday
                    </MDBBtn>

                    {   elements2.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time1={value[1]} time2={value[2]} /></li>
                    })}
                    </ul>
                    <ul className="dayBlock">
                    <MDBBtn
                        className="weekDay"
                        color="danger"
                        style={{width: "100%", margin: 0}}
                    >
                        Thursday
                    </MDBBtn>

                    {   elements3.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time1={value[1]} time2={value[2]} /></li>
                    })}
                    </ul>
                    <ul className="dayBlock">
                    <MDBBtn
                        className="weekDay"
                        color="danger"
                        style={{width: "100%", margin: 0}}
                    >
                        Friday
                    </MDBBtn>

                    {   elements4.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time1={value[1]} time2={value[2]} /></li>
                    })}
                    </ul>
                    
                </div>
            </div>
        )
    }
}
export default Cards;
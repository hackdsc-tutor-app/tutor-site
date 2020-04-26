import React, { Component } from 'react'
import Card from './cardUI';

class Cards extends Component {
    render() {
        const elements = [['Nick Serna','12:00'], ['Jose','12:00'], ['Felipe','12:00']];
        const elements1 = [['Nick Serna','2:00'], ['Ben','2:00'], ['Isabella','2:00']];
        const elements2 = [['Nick Serna','12:00'], ['Jose','12:00'], ['Felipe','12:00']];
        const elements3 = [['Nick Serna','12:00'], ['Jose','12:00'], ['Felipe','12:00']];
        const elements4 = [['Nick Serna','12:00'], ['Jose','12:00'], ['Felipe','12:00']];


        return (
            <div className="container-fluid d-flex justify-content-center" style={{height:'100%'}}>
                
                <div className="row">

                    <ul>
                    <div className="weekDay">Monday</div>
                    {   elements.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time={value[1]} /></li>
                    })}
                    </ul>
                    <ul>
                    <div className="weekDay">Tuesday</div>

                    {   elements1.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time={value[1]} /></li>
                    })}
                    </ul>
                    <ul>
                    <div className="weekDay">Wednesday</div>

                    {   elements2.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time={value[1]} /></li>
                    })}
                    </ul>
                    <ul>
                    <div className="weekDay">Thursday</div>

                    {   elements3.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time={value[1]} /></li>
                    })}
                    </ul>
                    <ul>
                    <div className="weekDay">Friday</div>

                    {   elements4.map((value, index) => {
                        return <li key={index}><Card tutorName={value[0]} time={value[1]} /></li>
                    })}
                    </ul>
                    
                </div>
            </div>
        )
    }
}
export default Cards;
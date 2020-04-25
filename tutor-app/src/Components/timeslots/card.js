import React, { Component } from 'react'
import Card from './cardUI';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className='col-xs-12 col-md-4 col-lg-2'><h4>Monday</h4><Card /></div>
                    <div className='col-xs-12 col-md-4 col-lg-2'><h4>Tuesday</h4><Card /></div>
                    <div className='col-xs-12 col-md-4 col-lg-2'><h4>Wednesday</h4><Card /></div>
                    <div className='col-xs-12 col-md-4 md-offset-2 col-lg-2'><h4>Thursday</h4><Card /></div>
                    <div className='col-xs-12 col-md-4 col-lg-2'><h4>Friday</h4><Card /></div>
                </div>
            </div>
        )
    }
}
export default Cards;
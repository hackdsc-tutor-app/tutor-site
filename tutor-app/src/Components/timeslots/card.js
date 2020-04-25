import React, { Component } from 'react'
import Card from './cardUI';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className='col-xs-12 col-md-4 col-lg-2'><Card /></div>
                    <div className='col-xs-12 col-md-4 col-lg-2'><Card /></div>
                    <div className='col-xs-12 col-md-4 col-lg-2'><Card /></div>
                    <div className='col-xs-12 col-md-4 col-lg-2'><Card /></div>
                    <div className='col-xs-12 col-md-4 col-lg-2'><Card /></div>
                </div>
            </div>
        )
    }



}
export default Cards;
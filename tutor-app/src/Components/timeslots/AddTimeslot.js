import React from 'react';
import { withRouter, Link } from "react-router-dom";
import firebase from '../../firebase/index';
import M from 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';

class CreateTimeslot extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div className="container">
                <div className="createTimeslot">
                    <div className="row"></div>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input type="text" className="datepicker" id="start_date" name="start_date" required></input>
                                <label for="start_date">Start Date</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input type="text" className="timepicker" id="start_time" name="start_time" required></input>
                                <label for="start_time">Start Time</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input type="text" className="datepicker" id="end_date" name="end_date" required></input>
                                <label for="end_date">End Date</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input type="text" className="timepicker" id="end_time" name="end_time" required></input>
                                <label for="end_time">End Time</label>
                            </div>
                        </div>



                    </form>
                </div>
            </div>
        )
    }
}

export default CreateTimeslot;
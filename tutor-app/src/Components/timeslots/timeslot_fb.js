import React from 'react';
import { withRouter, Link } from "react-router-dom";
import firebase from '../../firebase/index';

const timeslot_firebase = () => {

    function getAllAvailableTimeslots() {
        var timeslots = {};
        /* var ts = {
            0: [], //sunday
            1: { //monday
                "docID": {

                }
            }
        } */

        const firestore = firebase.firestore();
        const currentSchool = "fau"
        const timeslotsCol = firestore.collection("schools").doc(currentSchool).collection("timeslots");

        timeslotsCol.where("filled", "==", false).get().then(querySnapshot => {
            querySnapshot.docs.forEach(snapshot => {
                //snap.data()
                const snapData = snapshot.data();

                const date = snapData.get("start_time");
                const day = date.getDay();

                timeslots[day][snapshot.id] = snapData;
                timeslots[day][snapshot.id].id = snapshot.id;
            })
            return timeslots;

        });
    }
    return getAllAvailableTimeslots();

}
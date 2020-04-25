import React from 'react';
import { withRouter, Link } from "react-router-dom";
import firebase from '../../../firebase/index';
import Konva from "konva";

export const LiveUpdates = (lines = null) => {

    const refPath = "https://hackdsc-tutor-app-b6bbc.firebaseio.com/schools/fau/groups/383efa839";
    const database = firebase.database();
    const ref = database.refFromURL(refPath);


    function LiveUpdates() {


        ref.on("child_changed", snapshot => {
            // console.log(snapshot.toJSON())
            // updateLive(snapshot.toJSON());
            onUpdateLive(snapshot.toJSON());
        });
        // ref.update({ "plot": [0, 1] })



    }
    if (lines == null) {
        LiveUpdates();
    } else {
        //update data

    }

    function onUpdateLive(data) {

    }
}
import React from 'react';
import { withRouter, Link } from "react-router-dom";
import firebase from '../../../firebase/index';
import Konva from "konva";
import Immutable from 'immutable';

export const LiveUpdates = (coords = null, addPointFunction) => {
    const SCHOOL_ID = "fau"
    const WHITEBOARD_ID = "JAUyNoXA4MK1OjdiCVJN"

    var query = firebase.firestore().collection("schools").doc(SCHOOL_ID).collection("whiteboards").doc(WHITEBOARD_ID).collection("points");



    function LiveUpdates() {

        query.onSnapshot((QuerySnapshot => {
            let changes = QuerySnapshot.docChanges();
            changes.forEach(change => {
                if (change.type == 'added' || change.type == "modified") {
                    const data = change.doc.data();
                    const newCoords = [data.x, data.y, change.doc.id];
                    addPointFunction(newCoords);
                } else {
                    //change.type == 'removed'
                    //Future plans for this...
                }
            })
        }), err => {

        })



    }
    if (coords == null) {
        LiveUpdates();
    } else {
        query.add({ x: coords[0], y: coords[1] });

        //update data

        // ref.set(JSON.parse(JSON.stringify(lines)))
        // console.log("__")
        // console.log(lines);
        // var lArray = lines.toJSON();
        // var lArrayStringify = JSON.stringify(lArray)
        // var lArrayParse = JSON.parse(lArrayStringify)
        // var lBackList = Immutable.List(lArrayParse)
        // console.log(lArray)
        // console.log(lArrayStringify)
        // console.log(lArrayParse)
        // console.log(lBackList)

        // var listArray = lines.toJSON();
        // var listArrayStringify = JSON.stringify(listArray)
        // console.log("--")
        // console.log(listArrayStringify)

        // ref.set({ "plots": listArrayStringify });
        // console.log(JSON.parse(JSON.stringify(lines)));
    }

}
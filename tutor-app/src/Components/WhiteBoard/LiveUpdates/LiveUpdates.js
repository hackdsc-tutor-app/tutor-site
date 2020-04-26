import React, { useContext } from 'react';
import { withRouter, Link } from "react-router-dom";
import firebase from '../../../firebase/index';
import Konva from "konva";
import Immutable from 'immutable';
import UserContext from '../../../providers/UserProvider';

// var whiteboard, coords;
export const LiveUpdates = (whiteboard, coords = null, addPointFunction, clearFunction) => {
    const SCHOOL_ID = "demo"
    // const WHITEBOARD_ID = "JAUyNoXA4MK1OjdiCVJN"
    const WHITEBOARD_ID = whiteboard;

    var query = firebase.firestore().collection("schools").doc(SCHOOL_ID).collection("whiteboards").doc(WHITEBOARD_ID).collection("points");



    function LiveUpdates() {

        query.onSnapshot((QuerySnapshot => {
            let changes = QuerySnapshot.docChanges();
            changes.forEach(change => {
                if (change.type == 'added' || change.type == "modified") {
                    // if ()
                    const data = change.doc.data();
                    const newCoords = [data.x, data.y, change.doc.id, data.previous];
                    addPointFunction(newCoords);
                } else {
                    //change.type == 'removed'
                    //Future plans for this...
                    if (typeof clearFunction == "function") {
                        clearFunction();
                    }

                }
            })
        }), err => {

        })



    }
    function getWhiteboard() {
        // var 
    }
    if (coords == null || coords == []) {
        LiveUpdates();
    } else {
        var rn = Math.floor(1000 + Math.random() * 9000);
        query.doc((Date.now()).toString() + "_" + rn.toString()).set({ x: coords[0][0], y: coords[0][1], previous: coords[1] });

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
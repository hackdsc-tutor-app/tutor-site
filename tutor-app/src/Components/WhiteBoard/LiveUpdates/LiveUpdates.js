import React from 'react';
import { withRouter, Link } from "react-router-dom";
import firebase from '../../../firebase/index';
import Konva from "konva";

export const LiveUpdates = () => {

    function LiveUpdates() {
        const database = firebase.database();
        const ref = database.refFromURL("https://hackdsc-tutor-app-b6bbc.firebaseio.com/schools/fau/groups/383efa839");

        ref.on("child_changed", snapshot => {
            console.log(snapshot.toJSON())
            // updateLive(snapshot.toJSON());
        });
        // ref.update({ "plot": [0, 1] })



    }
    const updateLive = (points) => {
        // var layer = layerEl.current;
        // var stage = stageEl.current.getStage();
        // var mode = "brush";
        // var isPaint = true;
        // let pos = stage.getPointerPosition();
        // let lastLine;
        // lastLine = new Konva.Line({
        //     stroke: mode == "brush" ? "red" : "white",
        //     strokeWidth: mode == "brush" ? 5 : 20,
        //     globalCompositeOperation:
        //         mode === "brush" ? "source-over" : "destination-out",
        //     points: [points[0], points[1]],
        //     draggable: mode == "brush",
        // });
        // layer.add(lastLine);
        // lastLine.points(points);
        // layer.batchDraw();

    }
}
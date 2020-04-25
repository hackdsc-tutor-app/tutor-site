import Konva from "konva";
import LiveUpdates from "../LiveUpdates/LiveUpdates"
export const addLine = (stage, layer, mode = "brush") => {
    let isPaint = false;
    let lastLine;
    // var database = firebase.database();
    let entireArray = []
    let lineArray = []
    // function writeUserData(entireArray, lineArray) {
    //     entireArray.push(lineArray)
    //     firebase.database().ref('fau/' + 'groups/' + 'nickTest2/').set({
    //         line2: entireArray
    //     });
    //     console.log('done');

    // }

    stage.on("mousedown touchstart", function (e) {
        isPaint = true;
        let pos = stage.getPointerPosition();
        lastLine = new Konva.Line({
            stroke: mode == "brush" ? "red" : "white",
            strokeWidth: mode == "brush" ? 5 : 20,
            globalCompositeOperation:
                mode === "brush" ? "source-over" : "destination-out",
            points: [pos.x, pos.y],
            draggable: mode == "brush",
        });
        layer.add(lastLine);
        // console.log(layer);

        // console.log(layer['children'][0]['attrs']);
        let lineArray = layer['children'][0]['attrs']['points'];
        // writeUserData(entireArray, lineArray)
        // console.log(Array);



        // console.log(layer['children'][1]['attrs']['points']);

    });
    stage.on("mouseup touchend", function () {


        // layer.batchDraw();
        isPaint = false;
    });
    stage.on("mousemove touchmove", function () {
        if (!isPaint) {
            return;
        }
        const pos = stage.getPointerPosition();
        let newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
        layer.batchDraw();
        // layer.getStage().getLayers.each(sLayer => {
        //     console.log(sLayer.toJSON());
        // });
        // console.log(layer.toJSON());
        // console.log(layer.getStage())
        // console.log(lastLine.points());
        // console.log(pos)


    });
};
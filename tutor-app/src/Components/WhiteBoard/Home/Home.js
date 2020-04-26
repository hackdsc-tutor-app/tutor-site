import React, { useState, useRef, useContext } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import "./HomePage.css";
import { Stage, Layer } from "react-konva";
// import Rectangle from "../Rectangle/Rectangle";
// import Circle from "../Circle/Circle";
import { addLine } from "../line/line";
// import { addTextNode } from "../TextNode/TextNode";
// import Image from "../Image/Image";
import firebase from '../../../firebase/index'
import ChannelForm from '../Agora/ChannelForm'
import Call from '../Agora/Call'

import Konva from 'konva';

import Immutable from 'immutable';
import "./whiteboard.css";
import { LiveUpdates } from "../LiveUpdates/LiveUpdates";
import { UserContext } from "../../../providers/UserProvider";


class DrawArea extends React.Component {
    constructor() {
        super();

        this.state = {
            isDrawing: false,
            lines: Immutable.List(),
            points: []
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleUpdates = this.handleUpdates.bind(this);


    }

    handleMouseDown(mouseEvent) {
        if (mouseEvent.button != 0) {
            return;
        }

        const point = this.relativeCoordinatesForEvent(mouseEvent);

        this.setState(prevState => {
            // LiveUpdates(point);
            return {
                // lines: prevState.lines.push(Immutable.List([point])),
                isDrawing: true,
            };
        });
    }



    handleMouseMove(mouseEvent) {
        if (!this.state.isDrawing) {
            return;
        }

        const point = this.relativeCoordinatesForEvent(mouseEvent);

        // console.log(this.state.lines);

        // LiveUpdates(this.state.lines.updateIn([this.state.lines.size - 1], line => line.push(point)));
        LiveUpdates(point);


        // this.setState(prevState => {
        //     // console.log("--")
        //     console.log('..')
        //     var test1 = (prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))).toJS()
        //     var test2 = Immutable.List(test1);
        //     console.log(test2)
        //     // console.log(JSON.stringify(prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))))
        //     return {
        //         // lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
        //         lines: test2
        //     }

        // })

    }

    handleUpdates(coordsArray) {
        // LiveUpdates(null, Drawing);
        // lines: prevState.lines.push(Immutable.List([point])),
        // console.log("::" + Immutable.List(lines))
        this.setState(prevState => {
            return {
                lines: prevState.points.push(coordsArray)
            }
        })
    }

    componentDidMount() {
        document.addEventListener("mouseup", this.handleMouseUp);
        LiveUpdates(null, this.handleUpdates);
    }
    componentWillUnmount() {
        document.removeEventListener("mouseup", this.handleMouseUp);
    }
    handleMouseUp() {
        this.setState({ isDrawing: false });
        // console.log(JSON.stringify(this.state.lines));
        // console.log(JSON.stringify(this.state.lines));
    }
    relativeCoordinatesForEvent(mouseEvent) {
        const boundingRect = this.refs.drawArea.getBoundingClientRect();
        var coords = [
            /*x: */mouseEvent.clientX - boundingRect.left,
            /*y: */mouseEvent.clientY - boundingRect.top,
        ]
        // this.points.push(coords)
        return coords;
    }
    render() {
        return (
            <div className="drawArea" ref="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}>
                <Drawing coords={this.state.points} />
            </div>
        )
    }
}
const Drawing = function ({ coords }) {
    // console.log(JSON.stringify(lines));
    return (
        <svg className="drawing">
            {coords.map((line, index) => (
                <DrawingLine key={index} line={coords} />
            ))}
        </svg>
    )
}
const DrawingLine = function ({ line }) {
    // console.log(JSON.stringify(line));
    // console.log(line);

    const pathData = "M " + line.map(p => {
        return `${p[0]} ${p[1]}`;
    }).join(" L ");

    return <path className="path" d={pathData} />;
}




const uuidv1 = require("uuid/v1");
function HomePage() {
    const [rectangles, setRectangles] = useState([]);
    const [circles, setCircles] = useState([]);
    const [images, setImages] = useState([]);
    const [selectedId, selectShape] = useState(null);
    const [channel, setChannel] = useState(null);
    const [shapes, setShapes] = useState([]);
    const [, updateState] = React.useState();
    const stageEl = React.createRef();
    const canvasEl = React.createRef();
    const layerEl = React.createRef();
    const fileUploadEl = React.createRef();
    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const testing = (stage, mode = "brush") => {
        const pos = { x: 718, y: 171.8125 };
        var tempPoints = [368.75, 188.8125, 368.75, 188.8125, 368.75, 188.8125, 370.75, 188.8125, 371.75, 188.8125, 372.75, 188.8125, 375.75, 190.8125, 386.75, 198.8125, 389.75, 201.8125, 394.75, 204.8125, 399.75, 208.8125, 402.75, 211.8125, 408.75, 215.8125, 410.75, 217.8125, 418.75, 222.8125, 420.75, 224.8125, 425.75, 226.8125, 428.75, 228.8125, 432.75, 230.8125, 438.75, 232.8125, 440.75, 233.8125, 443.75, 234.8125, 446.75, 235.8125, 448.75, 235.8125, 450.75, 236.8125, 452.75, 236.8125, 452.75, 236.8125, 454.75, 237.8125, 454.75, 237.8125, 454.75, 237.8125, 455.75, 237.8125, 455.75, 237.8125, 455.75, 237.8125, 455.75, 237.8125]

        var liveLine = new Konva.Line({
            stroke: mode == "brush" ? "red" : "white",
            strokeWidth: mode == "brush" ? 5 : 20,
            globalCompositeOperation:
                mode === "brush" ? "source-over" : "destination-out",
            points: [pos.x, pos.y],
            draggable: mode == "brush",
        });
        liveLine.points(tempPoints);
        layerEl.current.batchDraw();
        // console.log(stageEl.children)
        forceUpdate();
    }


    const drawLine = () => {
        addLine(stageEl.current.getStage(), layerEl.current);
    };
    const eraseLine = () => {
        addLine(stageEl.current.getStage(), layerEl.current, "erase");
    };
    const drawImage = () => {
        fileUploadEl.current.click();
    };
    const forceUpdate = React.useCallback(() => updateState({}), []);


    function selectChannel(channel) {
        setChannel({ channel });
    };
    return (
        <div className="home-page">
            <ChannelForm selectChannel={selectChannel} />
            <h1>Whiteboard</h1>
            <Row className="drawAreaThingy">
                <Col style={{ width: '70%' }}>
                    {/* <ButtonGroup>
                        
                        <Button variant="primary" onClick={testing}>
                            Testing
                        </Button>
                        <Button variant="secondary" onClick={drawLine}>
                            Line
                        </Button>
                        <Button variant="secondary" onClick={eraseLine}>
                            Erase
                        </Button>
                    </ButtonGroup> */}

                    <DrawArea />

                </Col>
                {/* <Col>
                    <Call />
                </Col> */}
            </Row>

        </div >
    );
}
export default HomePage;
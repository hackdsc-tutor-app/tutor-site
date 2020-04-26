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
import ChannelForm from '../Agora/ChannelForm'

import Konva from 'konva';

import Immutable from 'immutable';
import "./whiteboard.css";
import { LiveUpdates } from "../LiveUpdates/LiveUpdates";
import { UserContext } from "../../../providers/UserProvider";

import { useParams } from 'react-router-dom';

import firebase from '../../../firebase/index'

var whiteboard_id;

class DrawArea extends React.Component {
    constructor() {
        super();

        this.wbId = whiteboard_id;
        this.state = {
            isDrawing: false,
            lines: Immutable.List(),
            points: []
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleUpdates = this.handleUpdates.bind(this);
        this.handleDelete = this.handleDelete.bind(this);


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

    handleDelete() {
        this.setState(() => {
            return {
                point: []
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
    let { wbId } = useParams();
    whiteboard_id = wbId;
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
    const DrawingAreaThing = React.createRef();

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    // const clearWhiteboard = () => {
    //     DrawingAreaThing.clear();
    // }
    const clearWhiteboard = () => {
        const functions = firebase.functions();
        var clearWB = functions.httpsCallable('clearWhiteboard');
        clearWB({ whiteboard_id: whiteboard_id }).then((res) => {
            console.log(res)
        }).catch(err => console.error(err.message));
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
                    <ButtonGroup>

                        {/* <Button variant="primary" onClick={testing}>
                            Testing
                        </Button>
                        <Button variant="secondary" onClick={drawLine}>
                            Line
                        </Button>
                        <Button variant="secondary" onClick={eraseLine}>
                            Erase
                        </Button> */}
                        <Button variant="secondary" onClick={clearWhiteboard}>
                            Clear
                        </Button>
                    </ButtonGroup>

                    <DrawArea ref={DrawingAreaThing} />

                </Col>
                {/* <Col>
                    <Call />
                </Col> */}
            </Row>

        </div >
    );
}
export default HomePage;
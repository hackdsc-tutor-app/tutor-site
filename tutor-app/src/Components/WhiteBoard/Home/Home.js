import React, { useState, useRef } from "react";
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


class DrawArea extends React.Component {
    constructor() {
        super();

        this.state = {
            isDrawing: false,
            lines: Immutable.List()
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown(mouseEvent) {
        if (mouseEvent.button != 0) {
            return;
        }

        const point = this.relativeCoordinatesForEvent(mouseEvent);

        this.setState(prevState => {
            return {
                lines: prevState.lines.push(Immutable.List([point])),
                isDrawing: true,
            };
        });
    }



    handleMouseMove(mouseEvent) {
        if (!this.state.isDrawing) {
            return;
        }

        const point = this.relativeCoordinatesForEvent(mouseEvent);

        this.setState(prevState => {
            return {
                lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
            }
        })
    }

    componentDidMount() {
        document.addEventListener("mouseup", this.handleMouseUp);
    }
    componentWillUnmount() {
        document.removeEventListener("mouseup", this.handleMouseUp);
    }
    handleMouseUp() {
        this.setState({ isDrawing: false });
        // console.log(JSON.stringify(this.state.lines));
        console.log(JSON.stringify(this.state.lines));
    }
    relativeCoordinatesForEvent(mouseEvent) {
        const boundingRect = this.refs.drawArea.getBoundingClientRect();
        return new Immutable.Map({
            x: mouseEvent.clientX - boundingRect.left,
            y: mouseEvent.clientY - boundingRect.top,
        })
    }
    render() {
        return (
            <div className="drawArea" ref="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}>
                <Drawing lines={this.state.lines} />
            </div>
        )
    }
}
const Drawing = function ({ lines }) {
    return (
        <svg className="drawing">
            {lines.map((line, index) => (
                <DrawingLine key={index} line={line} />
            ))}
        </svg>
    )
}
const DrawingLine = function ({ line }) {
    console.log(JSON.stringify(line));

    const pathData = "M " + line.map(p => {
        return `${p.get('x')} ${p.get('y')}`;
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


    // const addRectangle = () => {
    //     const rect = {
    //         x: getRandomInt(100),
    //         y: getRandomInt(100),
    //         width: 100,
    //         height: 100,
    //         fill: "red",
    //         id: `rect${rectangles.length + 1}`,
    //     };
    //     const rects = rectangles.concat([rect]);
    //     setRectangles(rects);
    //     const shs = shapes.concat([`rect${rectangles.length + 1}`]);
    //     setShapes(shs);
    // };
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




    // const addCircle = () => {
    //     const circ = {
    //         x: getRandomInt(100),
    //         y: getRandomInt(100),
    //         width: 100,
    //         height: 100,
    //         fill: "red",
    //         id: `circ${circles.length + 1}`,
    //     };
    //     const circs = circles.concat([circ]);
    //     setCircles(circs);
    //     const shs = shapes.concat([`circ${circles.length + 1}`]);
    //     setShapes(shs);
    // };
    const drawLine = () => {
        addLine(stageEl.current.getStage(), layerEl.current);
    };
    const eraseLine = () => {
        addLine(stageEl.current.getStage(), layerEl.current, "erase");
    };
    // const drawText = () => {
    //     const id = addTextNode(stageEl.current.getStage(), layerEl.current);
    //     const shs = shapes.concat([id]);
    //     setShapes(shs);
    // };
    const drawImage = () => {
        fileUploadEl.current.click();
    };
    const forceUpdate = React.useCallback(() => updateState({}), []);
    // const fileChange = ev => {
    //     let file = ev.target.files[0];
    //     let reader = new FileReader();
    //     reader.addEventListener(
    //         "load",
    //         () => {
    //             const id = uuidv1();
    //             images.push({
    //                 content: reader.result,
    //                 id,
    //             });
    //             setImages(images);
    //             fileUploadEl.current.value = null;
    //             shapes.push(id);
    //             setShapes(shapes);
    //             forceUpdate();
    //         },
    //         false
    //     );
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };
    // const undo = () => {
    //     const lastId = shapes[shapes.length - 1];
    //     let index = circles.findIndex(c => c.id == lastId);
    //     if (index != -1) {
    //         circles.splice(index, 1);
    //         setCircles(circles);
    //     }
    //     index = rectangles.findIndex(r => r.id == lastId);
    //     if (index != -1) {
    //         rectangles.splice(index, 1);
    //         setRectangles(rectangles);
    //     }
    //     index = images.findIndex(r => r.id == lastId);
    //     if (index != -1) {
    //         images.splice(index, 1);
    //         setImages(images);
    //     }
    //     shapes.pop();
    //     setShapes(shapes);
    //     forceUpdate();
    // };
    // document.addEventListener("keydown", ev => {
    //     if (ev.code == "Delete") {
    //         let index = circles.findIndex(c => c.id == selectedId);
    //         if (index != -1) {
    //             circles.splice(index, 1);
    //             setCircles(circles);
    //         }
    //         index = rectangles.findIndex(r => r.id == selectedId);
    //         if (index != -1) {
    //             rectangles.splice(index, 1);
    //             setRectangles(rectangles);
    //         }
    //         index = images.findIndex(r => r.id == selectedId);
    //         if (index != -1) {
    //             images.splice(index, 1);
    //             setImages(images);
    //         }
    //         forceUpdate();
    //     }
    // });
    function selectChannel(channel) {
        setChannel({ channel });
    };
    return (
        <div className="home-page">
            <ChannelForm selectChannel={selectChannel} />
            <h1>Whiteboard</h1>
            <Row>
                <Col style={{ width: '1000px' }}>
                    <ButtonGroup>
                        {/* <Button variant="secondary" onClick={addRectangle}>
                            Rectangle
                        </Button>
                        <Button variant="secondary" onClick={addCircle}>
                            Circle
                        </Button> */}
                        <Button variant="primary" onClick={testing}>
                            Testing
                        </Button>
                        <Button variant="secondary" onClick={drawLine}>
                            Line
                        </Button>
                        <Button variant="secondary" onClick={eraseLine}>
                            Erase
                        </Button>
                        {/* <Button variant="secondary" onClick={drawText}>
                            Text
                        </Button>
                        <Button variant="secondary" onClick={drawImage}>
                            Image
                        </Button>
                        <Button variant="secondary" onClick={undo}>
                            Undo
                        </Button> */}
                    </ButtonGroup>
                    {/* <input
                        style={{ display: "none" }}
                        type="file"
                        ref={fileUploadEl}
                        onChange={fileChange}
                    /> */}
                    {/* <Canvas
                        id="drawCanvas"
                        width={window.innerWidth * .8}
                        height={window.innerHeight - 180}
                        ref={canvasEl}
                    ></Canvas> */}
                    <DrawArea />
                    {/* <Stage
                        width={window.innerWidth * 0.8}
                        height={window.innerHeight - 180}
                        ref={stageEl}
                        onMouseDown={e => {
                            // deselect when clicked on empty area
                            const clickedOnEmpty = e.target === e.target.getStage();
                            if (clickedOnEmpty) {
                                selectShape(null);
                            }
                        }}
                    >
                        <Layer ref={layerEl}>
                            {/* {rectangles.map((rect, i) => {
                                return (
                                    <Rectangle
                                        key={i}
                                        shapeProps={rect}
                                        isSelected={rect.id === selectedId}
                                        onSelect={() => {
                                            selectShape(rect.id);
                                        }}
                                        onChange={newAttrs => {
                                            const rects = rectangles.slice();
                                            rects[i] = newAttrs;
                                            setRectangles(rects);
                                        }}
                                    />
                                );
                            })} */}
                    {/* {circles.map((circle, i) => {
                                return (
                                    <Circle
                                        key={i}
                                        shapeProps={circle}
                                        isSelected={circle.id === selectedId}
                                        onSelect={() => {
                                            selectShape(circle.id);
                                        }}
                                        onChange={newAttrs => {
                                            const circs = circles.slice();
                                            circs[i] = newAttrs;
                                            setCircles(circs);
                                        }}
                                    />
                                );
                            })} */}
                    {/* {images.map((image, i) => {
                                return (
                                    <Image
                                        key={i}
                                        imageUrl={image.content}
                                        isSelected={image.id === selectedId}
                                        onSelect={() => {
                                            selectShape(image.id);
                                        }}
                                        onChange={newAttrs => {
                                            const imgs = images.slice();
                                            imgs[i] = newAttrs;
                                        }}
                                    />
                                );
                            })} */}
                    {/* </Layer>
                    </Stage> */}
                </Col>
                {/* <Col>
                    <Call />
                </Col> */}
            </Row>

        </div >
    );
}
export default HomePage;
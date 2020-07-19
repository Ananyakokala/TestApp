import React, { Component } from "react"
import SplitPane from 'react-split-pane';
import { Container, Row, Col } from "react-grid-system";
import ButtonReuse from "../poc/ButtonReuse"
import Course from "../poc/Course"
import ReactPlayer from 'react-player/youtube'

import "../../index.css"

const customData = require('../poc/data.json');

class PocList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
            isClicked: false
        }
    }

    navigateToGridView = (listitem) => {
        this.setState({ items: listitem });
        this.setState({ isClicked: true })
    }

    render() {
        return (
            <div>
                <div>
                   <br /> <p1 style={{ paddingLeft: 10 ,paddingTop:10,fontSize: 15, fontWeight: 'bold'}}>TutoNex Courses</p1>

                     <div style={{ float: 'right', paddingRight: 50}}>
                        <ButtonReuse
                            buttonText="Add Chapter"
                            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsZZLIdmK60sT3UDc-8J8aHM7dDZLi8bH5nw&usqp=CAU">
                        </ButtonReuse>
                    </div> 
                    <div style={{ float: 'right'}}>
                        <ButtonReuse
                            buttonText="Add Topic"
                            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsZZLIdmK60sT3UDc-8J8aHM7dDZLi8bH5nw&usqp=CAU">
                        </ButtonReuse>
                    </div> 
                    <div style={{ float: 'right'}}>
                        <ButtonReuse
                            buttonText="Add Quiz"
                            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsZZLIdmK60sT3UDc-8J8aHM7dDZLi8bH5nw&usqp=CAU">
                        </ButtonReuse>
                    </div> 
                </div>

                <br /><br /><Course /> <br />

                <SplitPane style={{ paddingLeft: 10 }} split="vertical" minSize="100%" defaultSize="22%">
                    <div style={{ background: '#E8E8E8', height: window.innerHeight, overflow: "scroll" }}>
                        <div style={{ paddingLeft: 20, paddingTop: 20 }}>
                            {customData.courses.map(listitem => (
                                listitem.chapters.map(chap => (
                                    <div>
                                        <img style={{ height: 150, width: 230, borderRadius: 20, overflow: "scroll" }}
                                            src={chap.img}
                                            onClick={() => this.navigateToGridView(chap)} />
                                        <p1 style={{ fontSize: 13, fontWeight: 'bold' }}>
                                            {chap.name}
                                        </p1> <br />
                                        <p1 style={{ fontSize: 10 }}
                                            max>
                                            {chap.dec}
                                        </p1> <br /> <br />
                                    </div>
                                ))))}

                        </div>
                    </div>


                    <div style={{ height: window.innerHeight, width: "100%" }}>

                        {this.state.isClicked ?
                            <div>
                                <Container>
                                    <p style={{ fontSize: 14, fontWeight: 'bold' }}>
                                        {this.state.items.name}
                                    </p>
                                    <p style={{ fontSize: 12 }}>
                                        {this.state.items.dec}
                                    </p>
                                    <Row>
                                        {this.state.items.topics.map(listitem => (
                                            <Col>
                                            <div style={{ height: 150, width: 230}}>
                                                <ReactPlayer
                                                    width="100%"
                                                    height="100%"
                                                 url={listitem.video} />
                                                </div>
                                                <div>
                                                    <p2 style={{ fontSize: 12, fontWeight: 'bold' }}>
                                                        {listitem.description}
                                                    </p2>
                                                    <p style={{ fontSize: 10 }}>
                                                        Description is the pattern of narrative development that
                                                        aims to make vivid a place,Description is the pattern of narrative development that aims to make vivid a place,
                                            </p>
                                                    <ButtonReuse
                                                        buttonText="View File"
                                                        imgSrc="https://cdn0.iconfinder.com/data/icons/office-files-icons/110/Pdf-File-512.png" />

                                                </div>
                                            </Col>
                                        ))}
                                    </Row>

                                </Container>
                            </div> :
                            <div></div>}
                    </div>

                </SplitPane>
            </div>
        )
    }

}

export default PocList;
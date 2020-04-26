
import React, { Component } from "react";
import ChannelForm from "./ChannelForm";
import Call from "./Call";
import TopBar from '../../TopBar/TopBar'

class formCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
          channel: ''
        }
      }
  selectChannel = channel => {
    this.setState({ channel });
  };

  render() {
    return (
        
      <div className="App">
          {/* <TopBar/> */}
        <ChannelForm selectChannel={this.selectChannel} />
        <Call channel={this.state.channel} />
      </div>
    );
  }
}

export default formCall;
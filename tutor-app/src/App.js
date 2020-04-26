import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./Components/WhiteBoard/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
// import ChannelForm from './Components/WhiteBoard/Agora/ChannelForm' 
// import Call from './Components/WhiteBoard/Agora/Call'
import SignIn from './Components/UserAuth/SignIn'
import Card from './Components/timeslots/card'
import formCall from './Components/WhiteBoard/Agora/formCall'
import UserProvider from "./providers/UserProvider";
import CreateTimeslot from "./Components/timeslots/AddTimeslot";
const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ""
    };
  }

  selectChannel = channel => {
    this.setState({ channel });
  };

  render() {
    return (

      <div className="App">
        <Router history={history}>
          <UserProvider>
            <TopBar />
            <Route path="/" exact component={HomePage} />
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/AddTimeslot" exact component={CreateTimeslot} />
            {/* <Route path="/ChannelForm" exact component={ChannelForm} /> */}
            {/* <Route path="/Call" exact component={Call} /> */}
            <Route path="/Card" exact component={Card} />
            <Route path="/formCall" exact component={formCall} />
          </UserProvider>
        </Router>
      </div>

    );
  }
}
export default App;

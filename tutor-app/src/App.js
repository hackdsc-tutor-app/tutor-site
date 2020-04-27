import React, { Component } from "react";
import { Router, Route, Link, useParams } from "react-router-dom";
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
import MainPage from "./Components/MainPage";
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

            <Route path="/session/:wbId" exact component={HomePage} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/addtimeslot" exact component={CreateTimeslot} />
            <Route path="/" exact component={MainPage} />
            {/* <Route path="/ChannelForm" exact component={ChannelForm} /> */}
            {/* <Route path="/Call" exact component={Call} /> */}
            <Route path="/card" exact component={Card} />
            <Route path="/formcall" exact component={formCall} />
          </UserProvider>
        </Router>
      </div>

    );
  }
}
export default App;

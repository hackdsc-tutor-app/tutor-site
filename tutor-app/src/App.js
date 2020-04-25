import React, {Component} from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./Components/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import ChannelForm from './Components/Agora/ChannelForm' 
import Call from './Components/Agora/Call'
import SignIn from './Components/UserAuth/SignIn'
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
         <TopBar />
         <Route path="/" exact component={HomePage} />
         <Route path="/SignIn" exact component={SignIn} />
         <Route path="/ChannelForm" exact component={ChannelForm} />
         <Route path="/Call" exact component={Call} />
       </Router> 
       </div>
    );
  }
}
export default App;

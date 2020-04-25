import React from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./Components/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import UserAuth from './Components/UserAuth/SignIn'
const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/UserAuth" exact component={UserAuth} />
      </Router>
    </div>
  );
}
export default App;
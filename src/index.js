import React from "react";
import ReactDOM from "react-dom";
import SignUp from "./SignUp.js";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/SignUp" exact component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddUser from "./component/AddUser.js";
import ShowUsers from "./component/ShowUsers";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.appendToParent = this.appendToParent.bind(this);
  }
  appendToParent(user) {
    let usersArr = this.state.users;
    this.setState({ users: usersArr.concat(user) });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/AddUser"}>
                  Add User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/ShowUsers"}>
                  Show Users
                </Link>
              </li>
            </ul>
          </nav>
          <h1>User Home</h1>
          <hr />
          <Switch>
            <Route exact path="/" />
            <Route
              exact
              path="/AddUser"
              render={({ history }) => (
                <AddUser
                  appendToParent={this.appendToParent}
                  history={history}
                />
              )}
            />
            <Route
              exact
              path="/ShowUsers"
              render={() => <ShowUsers users={this.state.users} />}
            />
          </Switch>
          {/*
            <AddUser appendToParent={this.appendToParent} />
            <ShowUsers users={this.state.users} />
            */}
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
console.log(rootElement);
ReactDOM.render(<App />, rootElement);

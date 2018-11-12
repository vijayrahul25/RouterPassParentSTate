import React from "react";
import ReactDOM from "react-dom";

class ShowUsers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h2>UserList</h2>

        {this.props.users.map((person, index) => (
          <p key={index}>
            Hello, {person.username} from {person.city}!
          </p>
        ))}
      </div>
    );
  }
}

export default ShowUsers;

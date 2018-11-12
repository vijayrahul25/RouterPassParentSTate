import React from "react";
import ReactDOM from "react-dom";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", city: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    //console.log(e.target.name)
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }
  handleSubmit() {
    this.props.appendToParent(this.state);
    this.setState({
      username: "",
      city: ""
    });
    console.log(this.props);
    this.props.history.push("/ShowUsers");
  }
  render() {
    return (
      <div className="App">
        <h2>Add User</h2>
        <form>
          <input
            value={this.state.username}
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <input
            value={this.state.city}
            placeholder="city"
            name="city"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="button" onClick={this.handleSubmit} value="submit" />
        </form>
      </div>
    );
  }
}

export default AddUser;

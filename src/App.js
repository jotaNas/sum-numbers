import React from "react";
import Header from "./containers/Header";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: "",
      number2: "",
      total: "",
    };

    this.handleTextChange = this.handleTextChange.bind(this);

    this.handleTextLastChange = this.handleTextLastChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ number1: Number(event.target.value) });
  }

  handleTextLastChange(event) {
    this.setState({ number2: Number(event.target.value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ total: this.state.number1 + this.state.number2 });
  }

  render() {
    const { title } = this.props;

    return (
      <div className="example-sum">
        <Header title={title}></Header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.number1}
            onChange={this.handleTextChange}
          />

          <input
            type="number"
            value={this.state.number2}
            onChange={this.handleTextLastChange}
          />
          <br />
          <input
            className="btn"
            type="submit"
            value="+"
            onClick={this.handleSubmit}
          />
        </form>

        <div className="preview">
          <div className="result">
            <h1>{this.state.total}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

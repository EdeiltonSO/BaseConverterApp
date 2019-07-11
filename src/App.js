import React, { Component } from "react";
import "./App.css";
import api from "../src/services/api";

export default class App extends Component {
  state = {
    baseIn: "",
    baseOut: "",
    valueIn: "",
    repo: "",
    valueOut: "vazio"
  };

  returnApi = async e => {
    e.preventDefault();

    try {
      const { data } = await api.get(
        `Converter?basein=${this.state.baseIn}&input=${
          this.state.valueIn
        }&baseout=${this.state.baseOut}`
      );
      console.log(data);
      this.setState({ valueOut: data });
    } catch (error) {
      console.log("ERROR: " + error);
      this.setState({ valueOut: "deu erro!" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.returnApi}>
          <input
            type="text"
            placeholder="Base de entrada"
            value={this.state.baseIn}
            onChange={e => this.setState({ baseIn: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Base de saída"
            value={this.state.baseOut}
            onChange={e => this.setState({ baseOut: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Valor de entrada"
            value={this.state.valueIn}
            onChange={e => this.setState({ valueIn: e.target.value })}
          />
          <br />
          <button type="submit">Converter</button>
        </form>
        <h1>{this.state.valueOut}</h1>
      </div>
    );
  }
}

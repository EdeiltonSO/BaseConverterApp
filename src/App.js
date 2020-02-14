import React, { Component } from "react";
import "./App.css";
import api from "../src/services/api";

export default class App extends Component {
  state = {
    baseIn: "",
    baseOut: "",
    valueIn: "",
    valueOut: "vazio"
  };

  returnApi = async e => {
    e.preventDefault();

    try {
      this.setState({ valueOut: "carregando..." });
      const { data } = await api.get(
        `Converter?basein=${this.state.baseIn}&input=${this.state.valueIn}&baseout=${this.state.baseOut}`
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
      <div className="content">
        <p id="title">
          base<strong>converter</strong>app
        </p>

        <form onSubmit={this.returnApi}>
          <p className="subtitle">BASES</p>
          <input
            className="base"
            type="text"
            placeholder="entrada"
            value={this.state.baseIn}
            onChange={e => this.setState({ baseIn: e.target.value })}
          />
          <span id="to">»</span>
          <input
            className="base"
            type="text"
            placeholder="saída"
            value={this.state.baseOut}
            onChange={e => this.setState({ baseOut: e.target.value })}
          />
          <br />
          <p className="subtitle">VALORES</p>
          <input
            className="valueIn"
            type="text"
            placeholder="entrada"
            value={this.state.valueIn}
            onChange={e => this.setState({ valueIn: e.target.value })}
          />
          <br />
          <h1 className="valueOut">{this.state.valueOut}</h1>
          <button className="convert" type="submit">
            CONVERTER
          </button>
        </form>
      </div>
    );
  }
}

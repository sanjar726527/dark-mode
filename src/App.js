import "./App.css";
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import ThemeContext from "./components/context/ThemeContext";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light"
    };
  }
  toggleTheme = () => {
    this.setState(state => {
      return { theme: state.theme === "light" ? "dark" : "light" };
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        <div className="App">
          <HomePage />
        </div>
      </ThemeContext.Provider>
    );
  }
}

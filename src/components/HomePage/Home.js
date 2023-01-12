import React, { Component } from "react";
import Header from "../Header";
import HomeSection from "../HomeSection";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSection />
      </div>
    );
  }
}

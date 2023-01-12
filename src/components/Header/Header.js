import React, { Component } from "react";
import { FiFigma, FiInstagram, FiTwitter } from "react-icons/fi";
import ThemeContext from "../context/ThemeContext";
import "./Header.css";

const icons = [<FiTwitter />, <FiFigma />, <FiInstagram />];

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          return (
            <header className={`shadow ${theme}`}>
              <div className="container px-5 py-2 d-flex justify-content-between">
                <div className="left-aligned d-flex align-items-center gap-5">
                  <h4 className="fw-bold">Kevin Bennett</h4>
                  <nav className="d-flex gap-3">
                    <a href="#">Section two</a>
                    <a href="#">Section three</a>
                    <a href="#">Section four</a>
                  </nav>
                </div>
                <div className="right-aligned d-flex align-items-center gap-4">
                  <div className="icons d-flex gap-2">
                    <a
                      href="#"
                      className={`${theme === "light" ? "color" : ""}`}
                    >
                      <FiTwitter fontSize="1.5rem" />
                    </a>
                    <a
                      href="#"
                      className={`mx-4 ${theme === "light" ? "color" : ""}`}
                    >
                      <FiFigma fontSize="1.5rem" />
                    </a>
                    <a
                      href="#"
                      className={`${theme === "light" ? "color" : ""}`}
                    >
                      <FiInstagram fontSize="1.5rem" />
                    </a>
                  </div>
                  <div className="dark-mode">
                    <div className="form-check form-switch d-flex flex-row gap-5 align-items-center">
                      <span>
                        {theme === "dark" ? "Light mode:" : "Dark mode:"}
                      </span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onClick={toggleTheme}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

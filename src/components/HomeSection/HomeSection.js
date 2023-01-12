import React, { Component } from "react";
import img1 from "../../components/assets/Avatar.png";
import ThemeContext from "../context/ThemeContext";
import "./HomeSection.css";

export default class HomeSection extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <section className={`homeSection ${theme}`}>
              <div className="container w-75">
                <img src={img1} alt="" />
                <h1>
                  Hello. <br /> My name is Kevin.
                </h1>
                <p>
                  I'm a Digital Product and UI Designer – creating digital
                  experiences that are intuitive for real people and making
                  complex processes easy to use. Right now, I'm Design Lead at
                  Holiday Extras, covering all our digital platforms across a
                  whole load of brands – leading a great team across design, UI
                  engineering, accessibility and customer experience. I'm lucky
                  to be part of a great team of designers, writers, engineers,
                  PMs and data specialists – amongst others – testing, iterating
                  and optimising our platforms and products. I've got some work
                  on Dribbble, some previous work at Saga and you can find me
                  over on twitter and sometimes on Medium too. I also take too
                  many photos.
                </p>
              </div>
            </section>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

import React, { Component } from "react";
import play from "../assets/imgs/play.png";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__nav">
          <a href="#!" className="brand__logo">
            Creative Movie App
          </a>
          <ul>
            <li>
              <a href="#!">Movies</a>
            </li>
            <li>
              <a href="#!">Serials</a>
            </li>
            <li>
              <a href="#!">Logout</a>
            </li>
          </ul>
        </div>
        <div className="main__head">
          <a href="#!">
            <img src={play} alt="" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;

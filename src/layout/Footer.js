import React, { Component } from "react";
import play from '../assets/imgs/play.png'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="main__foot">
          <a href="#!">
            <img src={play} alt="" />
          </a>
        </div>
     <footer className="page__footer">
        <div className="footer__copyright">
            <div className="container">
                <h3>&copy; Copyright Reserved {new Date().getFullYear()} </h3>
            </div>
        </div>
     </footer>
      </div>
    );
  }
}

export default Footer;

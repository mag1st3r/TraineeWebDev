import React, { Component } from "react";

// import styles
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="text-white mt-3 p-3 text-center">
        Copyright &copy; {new Date().getFullYear()} TraineeWebDev Project
      </footer>
    );
  }
}

export default Footer;

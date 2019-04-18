import React, { Component } from "react";
// import logo from "./logo.svg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faLaptopCode,
  faBookOpen,
  faPen
} from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faLaptopCode, faBookOpen, faPen);

class App extends Component {
  render() {
    return (
      <div className="Site">
        <Header />
        <Main />
        <aside>sidemenu</aside>
        <Footer />
      </div>
    );
  }
}

export default App;

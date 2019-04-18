import React, { Component } from "react";
// import logo from "./logo.svg";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

class App extends Component {
  render() {
    return (
      <div className="Site">
        <Header />
        <main>
          <div className="contant">
            <h2>使用画像</h2>
            <p>
              画像を利用するにあたっては{" "}
              <a href="https://unsplash.com/">unsplash</a> の{" "}
              <a href="https://unsplash.com/photos/f77Bh3inUpE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Arnold Francisca の 画像
              </a>
              を利用しました。
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

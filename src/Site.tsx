import React, { Component } from "react";
import logo from "./logo.svg";
import "./Site.scss";

class Site extends Component {
  render() {
    return (
      <div className="Site">
        <header className="Site-header">
          <div className="menu">
            <h3>Site タイトル</h3>
            <ul>
              <li>プロダクト</li>
              <li>料金</li>
            </ul>
          </div>
          <div className="top">
            <h1>サイトデザイン練習</h1>
            <h2>かっこいい画像を用意すれば、そこそこ様になるやろ</h2>
            <button>button</button>
          </div>
        </header>
        <main>
          <div className="contant">contents</div>
          <div className="split" />
          <div className="contant">contents</div>
        </main>
      </div>
    );
  }
}

export default Site;

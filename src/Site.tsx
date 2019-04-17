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
          <div className="split" />
          <div className="contant">contents</div>
        </main>
      </div>
    );
  }
}

export default Site;

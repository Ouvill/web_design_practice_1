import React, { Component } from "react";
// import logo from "./logo.svg";

import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

class App extends Component {
  render() {
    return (
      <div className="Site">
        <header className="Site-header">
          <div className="top-wrapper">
            <div className="top-container">
              <div className="top-image" />
              <h1>サイトデザイン練習</h1>
              <h2>第一弾 : トップ画像を用意する</h2>
              <p>
                プログラムを作れるだけで、見た目が全然かっこよくなければ利用する気がおきないと思うので、デザインをちょっと頑張る
              </p>
              <p>
                解説記事は
                <a href="https://blog.ouvill.net/posts/2019/04/17/web-design-practice-1.html">
                  こちら
                </a>
              </p>

              <button
                className="btn"
                onClick={() => {
                  alert("ありがとうございます");
                }}
              >
                ガンバレ
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
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
        </main>
      </div>
    );
  }
}

export default App;

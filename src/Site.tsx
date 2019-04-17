import React, { Component } from "react";
import logo from "./logo.svg";
import "./Site.scss";

class Site extends Component {
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

              <button
                className="btn"
                onClick={() => {
                  alert("ありがとうございます");
                }}
              >
                ガンバレ！！
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

export default Site;

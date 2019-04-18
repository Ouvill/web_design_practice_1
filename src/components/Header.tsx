import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Header.module.scss";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className={style.header}>
      <div className={style.topWrapper}>
        <div className={style.topContainer}>
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
            <p>{style.header}</p>
          </p>

          <button
            className={style.btn}
            onClick={() => {
              alert("ありがとうございます");
            }}
          >
            ガンバレ
            <FontAwesomeIcon icon="heart" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

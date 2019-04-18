import React, { Component } from "react";
import style from "./Main.module.scss";

interface MainProps {}

const Main = (props: MainProps) => {
  return (
    <div className={style.mainWrap}>
      <main className={style.main}>
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
        <article>
          <h2>2019-04-18 やったこと</h2>
          <ul>
            <li>画像の差し替え</li>
            <li>SCSS のモジュール化</li>
            <li>コンポーネントの作成</li>
            <li>Footer のデザイン</li>
          </ul>
        </article>
      </main>
    </div>
  );
};

export default Main;

import React, { Component } from "react";
import style from "./Main.module.scss";
import Card from "./Card";

interface MainProps {}

const Main = (props: MainProps) => {
  return (
    <div className={style.mainWrap}>
      <main className={style.main}>
        <div className="contant">
          <section />
          <h2>My Skill</h2>
          <div className={style.CardBox}>
            <Card
              icon="laptop-code"
              title="プログラム"
              contents="プログラミングが得意。最近ハマっているのは React。使用可能言語は C, Java, JavaScript"
            />
            <Card
              icon="book-open"
              title="読書が好き"
              contents="空想の世界にいるのが好き。ファンタジーが凄く好き。"
            />
            <Card
              icon="pen"
              title="勉強熱心"
              contents="新しいことに興味があり色々勉強しています"
            />
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
          <article>
            <h2>2019/04/17 やったこと</h2>
            <ul>
              <li>練習用サイト立ち上げ</li>
            </ul>
            <p>
              <a href="">その時の状態</a>
            </p>
          </article>
          <h2>使用画像</h2>
          <p>
            画像を利用するにあたっては{" "}
            <a href="https://unsplash.com/">unsplash</a> の{" "}
            <a href="https://unsplash.com/photos/2VyyvZns3qQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Keila Hötzel さんの 画像
            </a>
            を利用しました。
          </p>
        </div>
      </main>
    </div>
  );
};

export default Main;

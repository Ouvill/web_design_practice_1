import React, { Component } from "react";
import style from "./Footer.module.scss";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className={style.footer}>
      <ul>
        <li>お問い合わせ</li>
        <li>プライバシーポリシー</li>
        <li>免責事項</li>
        <li>サイトマップ</li>
      </ul>
      <div>
        <p>(C) Ouvill All Right Reserve</p>
      </div>
    </footer>
  );
};

export default Footer;

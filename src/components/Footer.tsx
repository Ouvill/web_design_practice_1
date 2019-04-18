import React, { Component } from "react";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer>
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

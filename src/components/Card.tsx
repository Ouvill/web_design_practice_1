import React, { Component } from "react";
import style from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  icon?: IconProp;
  title: string;
  contents: string;
}

const Card = (props: CardProps) => {
  const Icon =
    props.icon !== undefined ? <FontAwesomeIcon icon={props.icon} /> : <div />;

  return (
    <div className={style.card}>
      <h2>{Icon}</h2>
      <h2>{props.title}</h2>
      <p>{props.contents}</p>
    </div>
  );
};

export default Card;

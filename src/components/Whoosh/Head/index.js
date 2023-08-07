import React, { useRef } from "react";

import style from "./index.module.scss";

import Icons from "./sprite.svg";

export const Head = () => {
  const hoverSech = useRef(null);

  return (
    <header className={style.header}>
      <nav className={style.header__navigate}>
        <svg className={style.header__logo}>
          <use xlinkHref={Icons + "#Logo"}></use>
        </svg>
        <div className={style.header__city}>
          <svg className={style.header__citySvg}>
            <use xlinkHref={Icons + "#Pin"}></use>
          </svg>
          <div className={style.header__cityText}>NY, Manhattan</div>
        </div>
        <div
          onMouseOver={() => {
            hoverSech.current.style.backgroundColor = "#f1f5ff";
          }}
          onMouseOut={() => {
            hoverSech.current.style.backgroundColor = "#fff";
          }}
          className={style.header__search}
        >
          <input
            ref={hoverSech}
            placeholder="Track a Package"
            type="text"
            className={style.header__inputText}
          ></input>
          <svg className={style.header__citySvg}>
            <use xlinkHref={Icons + "#Search"}></use>
          </svg>
        </div>
        <div className={style.header__text}>
          <div className={style.header__textHeader}>Send a Parcel</div>
          <div className={style.header__textHeader}>Become a Courier</div>
        </div>
        <div className={style.header__login}>
          <svg className={style.header__loginSvg}>
            <use xlinkHref={Icons + "#Lock"}></use>
          </svg>
        </div>
      </nav>
      <div className={style.header__sepLine}></div>
    </header>
  );
};

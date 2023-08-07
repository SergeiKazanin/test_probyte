import React from "react";

import style from "./index.module.scss";

import Icons from "./sprite.svg";

export const Pad = () => {
  return (
    <div className={style.pad}>
      <div className={style.pad__backgroundImg}>
        <svg className={style.pad__citySvg}>
          <use xlinkHref={Icons + "#city"}></use>
        </svg>
        <svg className={style.pad__statueSvg}>
          <use xlinkHref={Icons + "#statue"}></use>
        </svg>
        <svg className={style.pad__flameSvg}>
          <use xlinkHref={Icons + "#flame"}></use>
        </svg>
        <svg className={style.pad__cloud1Svg}>
          <use xlinkHref={Icons + "#cloud_1"}></use>
        </svg>
        <svg className={style.pad__cloud2Svg}>
          <use xlinkHref={Icons + "#cloud_2"}></use>
        </svg>
      </div>
      <div className={style.pad__blokLeft}>
        <p className={style.pad__text1}>Our service started work in New York</p>
        <p className={style.pad__text2}>
          We make delivery exactly at the time you need - we can start to
          fulfill the order a few minutes after it arrives, or we can deliver on
          a specific day and hour.
        </p>
        <p className={style.pad__readMore}>
          Read more
          <svg className={style.pad__rightarrowSvg}>
            <use xlinkHref={Icons + "#rightarrow"}></use>
          </svg>
        </p>
        <p className={style.pad__text3}>How it works</p>
        <div className={style.pad__img}></div>
      </div>
    </div>
  );
};

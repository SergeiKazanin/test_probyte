import style from "./index.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Icons from "./sprite.svg";
import "@splidejs/react-splide/css";
import cl from "classnames";

import { ReactComponent as Alpfa } from "./images/alfa.svg";
import { ReactComponent as Fagor } from "./images/fagor.svg";
import { ReactComponent as GuitaCenter } from "./images/guitaCenter.svg";
import { ReactComponent as RadioShack } from "./images/RadioShack.svg";
import { ReactComponent as Tendo } from "./images/tendo.svg";

export const Partners = () => {
  return (
    <div className={style.partners}>
      <div className={style.partners__headerBlock}>
        <span className={style.partners__headerText}>Our Partners</span>
        <div className={style.partners__lelColab}>
          <svg className={style.partners__briefcaseSvg}>
            <use xlinkHref={Icons + "#briefcase"}></use>
          </svg>
          <span className={style.partners__colabText}>Let's collaborate</span>
        </div>
      </div>
      <div className={style.partners__splide}>
        <Splide
          options={{
            width: 1104,
            type: "loop",
            perPage: 5,
            focus: "center",
            pagination: false,
            arrows: false,
            wheel: true,
            drag: true,
            fixedWidth: "220px",
            wheelSleep: 50,
          }}
          aria-label="Partners"
        >
          <SplideSlide>
            <Alpfa className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <Fagor className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <GuitaCenter className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <RadioShack className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <Tendo className={style.partners__svg} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

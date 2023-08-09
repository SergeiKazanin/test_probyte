import style from "./index.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import cl from "classnames";

import { ReactComponent as Amex } from "./images/pmx-logo-amex.svg";
import { ReactComponent as Mastercard } from "./images/pmx-logo-mastercard.svg";
import { ReactComponent as Paywithgoogle } from "./images/pmx-logo-paywithgoogle 1.svg";
import { ReactComponent as Sofort } from "./images/pmx-logo-sofort.svg";
import { ReactComponent as Union } from "./images/pmx-logo-union-pay 1.svg";
import { ReactComponent as Visa } from "./images/pmx-logo-visa.svg";

export const Partners2 = () => {
  return (
    <div className={style.partners}>
      <span className={style.partners__headerText}>Payment methods</span>
      <div className={style.partners__splide}>
        <Splide
          options={{
            width: 1024,
            type: "loop",
            perPage: 6,
            gap: "130px",
            focus: "first",
            pagination: false,
            arrows: true,
            wheel: true,
            drag: true,
            fixedWidth: "56px",
            wheelSleep: 50,
          }}
          aria-label="Partners"
        >
          <SplideSlide>
            <Amex className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <Mastercard className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <Paywithgoogle className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <Sofort className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <Union className={style.partners__svg} />
          </SplideSlide>
          <SplideSlide>
            <Visa className={style.partners__svg} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

import style from "./index.module.scss";

import { ReactComponent as Etc } from "./images/Etc.svg";
import { useRef, useState } from "react";

export const OpenText = () => {
  const textPar = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickEtc = () => {
    if (!isOpen) {
      textPar.current.style.maxHeight = "200px";
      setIsOpen(true);
    } else {
      textPar.current.style.maxHeight = "100px";
      setIsOpen(false);
    }
  };

  return (
    <div className={style.opentext}>
      <div ref={textPar} className={style.opentext__text}>
        <p className={style.opentext__textParagraph}>
          Since 2019, LibertyWalk has successfully provided express courier
          delivery services in the city for both individuals and legal entities,
          and is also a reliable logistics partner for delivery services for
          online stores and restaurants! Express delivery of documents and
          parcels for organizations, express delivery of correspondence,
          purchases, flowers, food, gifts and goods up to 1.5 tons - the most
          frequent orders in our company.
        </p>
        <p className={style.opentext__textParagraph}>
          But at the same time, we do not limit the range of courier services
          and without problems we can buy and bring goods and products from the
          online store, arrange delivery for the online store, cafe,
          supermarket, restaurant or any other business. Around the clock on our
          website you can call a courier in just a minute and arrange an express
          courier delivery without unnecessary bureaucracy, negotiations and
          calls to the call center.
        </p>
        <div onClick={() => handleClickEtc()} className={style.opentext__etc}>
          <Etc />
        </div>
      </div>
    </div>
  );
};

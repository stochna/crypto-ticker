import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ICurrencyData, UseCurrencyTicker } from '../interfaces';
import Currency from "./Currency";

const Panel = () => {
  const currenciesList = [
    "BTC-USD",
    "ETH-USD"
  ];

  const useCurrencyTicker : UseCurrencyTicker = (ws, currency_id, saveNewData) => {
    React.useEffect(() => {
      const subscribe = {
        "type": "subscribe",
        "product_ids": [currency_id],
        "channels": ["ticker"]
      };
  
      ws.addEventListener("open", () => {
        ws.send(JSON.stringify(subscribe));
      });
  
      ws.addEventListener("message", (e) => {
        const json : ICurrencyData = JSON.parse(e.data);
        if (json.type !== "ticker") return;
        saveNewData(json);
      });
    }, []);
  };

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showList = () => gsap.to(".panel", {
      yPercent: -300,
      scrollTrigger: {
        trigger: ".panel",
        start: "top bottom",
        scrub: true
      }
    });

    showList();
  }, []);

  return (
    <div className="row justify-content-end panel">
      <div className="col-9">
        <div className="ps-0 currencies">
          <>
            <div></div>
            <div>Price</div>
            <div>Low 24h</div>
            <div>High 24h</div>
            <div>Vol 24h</div>
            <div>Vol 30d</div>
          </>
          {
            currenciesList.map(id => <Currency currency_id={id} useCurrencyTicker={useCurrencyTicker} />)
          }
        </div>
      </div>
    </div>
  )
};

export default Panel;
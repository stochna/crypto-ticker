import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ICurrencyData, UseCurrencyTicker } from '../interfaces';
import Currency from "./Currency";

const Panel = () => {
  const currenciesList = [
    "BTC-USD",
    "ETH-USD",
    "LTC-USD",
    "AAVE-USD",
    "SOL-USD",
    "AVAX-USD",
    "APT-USD"
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

    gsap.to(".panel", {
      yPercent: -100,
      scrollTrigger: {
        trigger: ".panel",
        start: "top bottom",
  //      pin: true,
   //     end: "top -10%",
        scrub: true
      }
    });

    gsap.to(".panel", {
      scrollTrigger: {
        trigger: ".panel",
        start: "top 0",
        pin: ".currencies",
        end: "bottom top",
        scrub: true,
        pinSpacing: false
      }
    });

    
  }, []);

  return (
    <div className="row panel">
      <div className="col">
        <div className="px-4 py-3 currencies">
          <>
            <div></div>
            <div>Price</div>
            <div>Low</div>
            <div>High</div>
            <div>Volume 24h</div>
            <div>Volume 30d</div>
          </>
          {
            currenciesList.map(id => <Currency key={id} currency_id={id} useCurrencyTicker={useCurrencyTicker} />)
          }
        </div>
      </div>
    </div>
  )
};

export default Panel;
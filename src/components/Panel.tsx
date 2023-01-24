import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ICurrencyData } from '../interfaces';
import Currency from "./Currency";

const Panel = () => {
  const ep = "wss://ws-feed.exchange.coinbase.com";
  const ws = React.useRef(new WebSocket(ep)).current;

  const [currencyData, setCurrencyData] = React.useState<ICurrencyData[]>([]);

  const subscribeBTC = {
    "type": "subscribe",
    "product_ids": [
      "BTC-USD"
    ],
    "channels": ["ticker"]
  };

  ws.onopen = () => {
    ws.send(JSON.stringify(subscribeBTC));
  };

  ws.onmessage = e => {
    const json = JSON.parse(e.data);
    console.log(json);
    if (json.type !== "ticker") return;
    setCurrencyData([json]);
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
    <div className="row panel">
      <div className="col">
        <div className="ps-0 currencies">
          {
            currencyData.map(d => <Currency {...d} />)
          }
        </div>
      </div>
    </div>
  )
};

export default Panel;
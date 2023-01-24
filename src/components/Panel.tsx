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
            currencyData.map(d => <Currency {...d} />)
          }
        </div>
      </div>
    </div>
  )
};

export default Panel;
import React from "react";
import Loader from "./Loader";
import { ICurrencyData, ICurrencyProps } from '../interfaces';

const Currency = (props: ICurrencyProps) => {
  const ws = React.useRef(new WebSocket("wss://ws-feed.exchange.coinbase.com")).current;

  const [data, setData] = React.useState<ICurrencyData | null>(null);

  props.useCurrencyTicker(ws, props.currency_id, setData);

  const displayedDataItems = [
    "product_id",
    "price",
    "low_24h",
    "high_24h",
    "volume_24h",
    "volume_30d"
  ];

  return (
    <>
      {
        displayedDataItems.map(item => (
          <div>
            {
              !data ? <Loader /> : data[item]
            }
          </div>
        ))
      }
    </>
  )
};

export default Currency;
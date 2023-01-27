import React from "react";
import { ICurrencyData, ICurrencyProps } from '../interfaces';

const Currency = (props: ICurrencyProps) => {
  const ws = React.useRef(new WebSocket("wss://ws-feed.exchange.coinbase.com")).current;

  const [data, setData] = React.useState<ICurrencyData | null>(null);

  props.useCurrencyTicker(ws, props.currency_id, setData);

  return (
    data ?
    <>
      <div>{data.product_id}</div>
      <div>{data.price}</div>
      <div>{data.low_24h}</div>
      <div>{data.high_24h}</div>
      <div>{data.volume_24h}</div>
      <div>{data.volume_30d}</div>
    </>
    :
    <div></div>
  )
};

export default Currency;
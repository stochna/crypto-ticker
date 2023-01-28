type UseCurrencyTicker = (
  ws: WebSocket,
  currency_id: string,
  saveNewData: React.Dispatch<React.SetStateAction<ICurrencyData | null>>
) => void;

interface ICurrencyData {
  [key: string]: string | number;
  type: string,
  sequence: number,
  product_id: string,
  price: string,
  open_24h: string,
  volume_24h: string,
  low_24h: string,
  high_24h: string,
  volume_30d: string,
  best_bid: string,
  best_bid_size: string,
  best_ask: string,
  best_ask_size: string,
  side: string,
  time: string,
  trade_id: number,
  last_size: string
};

interface ICurrencyProps {
  currency_id: string,
  useCurrencyTicker: UseCurrencyTicker
}

export {
  UseCurrencyTicker,
  ICurrencyData,
  ICurrencyProps
};
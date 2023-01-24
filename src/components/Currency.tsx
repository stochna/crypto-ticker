import { ICurrencyData } from '../interfaces';

const Currency = (props: ICurrencyData) => {
  const {
    product_id,
    price,
    low_24h,
    high_24h,
    volume_24h,
    volume_30d
  } = props;

  return (
    <div key={product_id} className="currency">
      <div>{product_id}</div>
      <div>{price}</div>
      <div>{low_24h}</div>
      <div>{high_24h}</div>
      <div>{volume_24h}</div>
      <div>{volume_30d}</div>
    </div>
  )
};

export default Currency;
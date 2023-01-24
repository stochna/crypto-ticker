import GsapBg from "./components/GsapBg";
import H1 from "./components/H1";
import Clock from "./components/Clock";
import CurrencyList from "./components/CurrencyList";

const App = () => {
  return (
    <div className="app bg-dark">
      <GsapBg />

      <div className="container ps-md-5 ps-0 header">
        <H1 />
        <Clock />
      </div>

      <div className="container content">
        <CurrencyList />
      </div>

    </div>
  );
}

export default App;

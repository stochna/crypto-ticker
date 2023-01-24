import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const CurrencyList = () => {
  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showList = () => gsap.to(".currency-list", {
      yPercent: -50,
      scrollTrigger: {
        trigger: ".currency-list",
        scrub: true
      }
    });

    showList();
  }, []);

  return (
    <div className="row currency-list">
      <div className="col">
        <ul className="ps-0 list">
          <li className="list-item">A first item</li>
          <li className="list-item">A second item</li>
          <li className="list-item">A third item</li>
          <li className="list-item">A fourth item</li>
          <li className="list-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  )
};

export default CurrencyList;
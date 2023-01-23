import React from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

const H1 = () => {
  React.useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.to("#h1", {
      duration: 1,
      delay: 4,
      text: {
        value: "Use Crypto Ticker"
      }
    });
  });

  return (
    <div className="header">
      <h1 id="h1">Get cryptocurrency real-time prices</h1>
    </div>
  )
};

export default H1;
import React from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

const H1 = () => {
  React.useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.to("#h1", {
      duration: 1,
      delay: 5,
      text: {
        value: "Use Crypto Ticker"
    },
    })
  });

  return (
    <h1 id="h1">Get cryptocurrency real-time prices</h1>
  )
};

export default H1;
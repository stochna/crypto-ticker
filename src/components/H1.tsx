import React from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

const H1 = () => {
  React.useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#h1", {
      duration: 1,
      delay: 4,
      text: {
        value: "Start using <br/> Crypto Ticker"
      }
    });

    gsap.to("#h1", {
      yPercent: -100,
      scrollTrigger: {
        trigger: ".app",
        start: "top +=10px",
        scrub: true
      }
    });
  });

  return (
    <div className="col-md-8 col">
      <h1 id="h1">Get crypto <br/> real-time prices</h1>
    </div>
  )
};

export default H1;
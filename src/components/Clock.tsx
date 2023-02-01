import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Clock = () => {
  const [date, setDate] = React.useState(new Date());

  const useTimer = () => {
    React.useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
  };

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#clock", {
      yPercent: -500,
      scrollTrigger: {
        scrub: true
      }
    })
  }, []);

  useTimer();

  return (
    <div id="clock" className="col-md-2 col mt-3">
      <h3> { date.toUTCString() } </h3>
    </div>
  )
};

export default Clock;
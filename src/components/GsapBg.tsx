import React from "react";
import gsap from "gsap";

const GsapBg = () => {
  React.useLayoutEffect(() => {
    const defaultVars = {
      duration: 20,
      repeat: -1,
      yoyo: true
    };

    const moveRD = (bgClass: string) => gsap.to(bgClass, {
      ...defaultVars,
      backgroundPosition: "100% 0%",
    });

    const moveLD = (bgClass: string) => gsap.to(bgClass, {
      ...defaultVars,
      backgroundPosition: "0% 100%",
    });

    moveRD(".bg-1");
    moveLD(".bg-2");
    moveLD(".bg-3");
  }, []);

  return (
    <>
      <div className="bg bg-1"></div>
      <div className="bg bg-2"></div>
      <div className="bg bg-3"></div>
      <div className="bg bg-noise"></div>
    </>
  )
};

export default GsapBg;
import React from "react";

const Clock = () => {
  const [date, setDate] = React.useState(new Date());

  const useTimer = () => {
    React.useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
  };

  useTimer();

  return (
    <div className="col-md-2 col d-flex gap-4">
      <h3> { date.toUTCString() } </h3>
    </div>
  )
};

export default Clock;
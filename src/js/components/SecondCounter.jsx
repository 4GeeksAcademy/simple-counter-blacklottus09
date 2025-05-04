import { useEffect, useState } from "react";

const SecondCounter = () => {
  const [x, setCounter] = useState(0);
  const [y, sety] = useState(false);

  useEffect(() => {
    if (!y) {
      const intervalId = setInterval(() => {
        setCounter(x + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [x, y]);

  const restartCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center black-bg">
        <div className="row">
          <div className="col-12">
            <div className="d-flex counter">
              <div className="counter-number text-light m-2 p-2 ">
                <i className="far fa-clock"></i>
              </div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((x / 100000) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((x / 10000) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((x / 1000) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((x / 100) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((x / 10) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((x / 1) % 10)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => sety(true)}
        >
          Stop
        </button>
        <button
          className="btn btn-success"
          onClick={() => sety(false)}
        >
          Resume
        </button>
        <button className="btn btn-secondary" onClick={restartCounter}>
          Restart
        </button>
      </div>
    </>
  );
};
export default SecondCounter;

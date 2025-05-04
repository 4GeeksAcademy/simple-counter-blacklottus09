import { useEffect, useState } from "react";

const SecondCounter = () => {
  const [counter, setCounter] = useState(0);
  const [stopCounter, setStopCounter] = useState(false);

  useEffect(() => {
    if (!stopCounter) {
      const intervalId = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [counter, stopCounter]);

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
              <div className="counter-number text-light m-2 p-2">{Math.floor((counter / 100000) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((counter / 10000) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((counter / 1000) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((counter / 100) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((counter / 10) % 10)}</div>
              <div className="counter-number text-light m-2 p-2">{Math.floor((counter / 1) % 10)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => setStopCounter(true)}
        >
          Stop
        </button>
        <button
          className="btn btn-success"
          onClick={() => setStopCounter(false)}
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

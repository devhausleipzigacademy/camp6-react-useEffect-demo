import { useEffect, useState } from "react";
import "./App.css";

type Props = {
  initialCount: number;
};

function App({ initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let intervalId: number;
  let animationClassName = "";

  useEffect(() => {
    intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    document.title = `T-${count}`;
  }, [count]);

  return (
    <div className="App">
      <SVGSwapper
        label={(count <= -1) ? "satellite" : "rocket"}
        count={count}
      ></SVGSwapper>
      
      
      {`Countdown: T-${count}`}
      {listOfNumbers.map((value) => {
        return <li key={value}>{value}</li>;
      })}
    </div>
  );
}

export default App;

type SVGSwapperProps = {
  label: string;
  count: number;
};

function SVGSwapper({ label, count }: SVGSwapperProps) {
  if (label === "rocket") {
    return (
      <svg
        className={`fill-white ${count <= 0 ? "animate-launch" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z" />
      </svg>
    );
  } else if (label === "satellite") {
    return (
      <svg
        className={`fill-white ${count <= 0 ? "animate-launch" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M502.8 264.1l-80.37-80.37l47.87-47.88c13-13.12 13-34.37 0-47.5l-47.5-47.5c-13.12-13.12-34.38-13.12-47.5 0l-47.88 47.88L247.1 9.25C241 3.375 232.9 0 224.5 0c-8.5 0-16.62 3.375-22.5 9.25l-96.75 96.75c-12.38 12.5-12.38 32.62 0 45.12L185.5 231.5L175.8 241.4c-54-24.5-116.3-22.5-168.5 5.375c-8.498 4.625-9.623 16.38-2.873 23.25l107.6 107.5l-17.88 17.75c-2.625-.75-5-1.625-7.75-1.625c-17.75 0-32 14.38-32 32c0 17.75 14.25 32 32 32c17.62 0 32-14.25 32-32c0-2.75-.875-5.125-1.625-7.75l17.75-17.88l107.6 107.6c6.75 6.75 18.62 5.625 23.12-2.875c27.88-52.25 29.88-114.5 5.375-168.5l10-9.873l80.25 80.36c12.5 12.38 32.62 12.38 44.1 0l96.75-96.75C508.6 304.1 512 295.1 512 287.5C512 279.1 508.6 270.1 502.8 264.1zM219.5 197.4L150.6 128.5l73.87-73.75l68.86 68.88L219.5 197.4zM383.5 361.4L314.6 292.5l73.75-73.88l68.88 68.87L383.5 361.4z" />
      </svg>
    );
  } else return <></>;
}

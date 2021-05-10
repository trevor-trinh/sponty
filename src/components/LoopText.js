import React, { useState, useEffect, useRef } from "react";
import TextLoop from "react-text-loop";


function LoopText(props) {
  const [options, setOptions] = useState(["Go", "Eat", "Read"]);
  const [rollTime, setRollTime] = useState(0);

  // can use this to update list every few days from the google sheet
  // useEffect(() => {
  //   const optionsTimeout = setTimeout(() => {
  //     setOptions([
  //       "Trade faster",
  //       "Increase sales",
  //       "Stock winners",
  //       "Price perfectly"
  //     ]);
  //     console.log("change options");
  //   }, 10000);

  //   return () => {
  //     clearTimeout(optionsTimeout);
  //   };
  // }, []);

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      console.log("start");
      setRollTime(100);
    }, 1000);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, [props.reroll]);

  useEffect(() => {
    const intervalStopTimeout = setTimeout(() => {
      setRollTime(0);
      console.log("stop");
    }, 3000);

    return () => {
      clearTimeout(intervalStopTimeout);
    };
  }, [props.reroll]);

  return (
    <>
      <TextLoop interval={rollTime} children={options} onChange={(e) => console.log(e)} /> random stuff
    </>
  );
}

export default LoopText;

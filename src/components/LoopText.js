import React, { useState, useEffect, useRef } from "react";
import TextLoop from "react-text-loop";


function LoopText() {
  const [options, setOptions] = useState(["Go", "Eat", "Read"]);
  const [rollTime, setRollTime] = useState(0);
  const reroll = useRef(false)

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

  const getReroll = () => {
    if(reroll.current){
      reroll.current = false
      return 1
    }
    reroll.current = true
    return 0
  }

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      console.log("start");
      setRollTime(100);
    }, 1000);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, [getReroll()]);

  useEffect(() => {
    const intervalStopTimeout = setTimeout(() => {
      setRollTime(0);
      console.log("stop");
    }, 3000);

    return () => {
      clearTimeout(intervalStopTimeout);
    };
  }, [getReroll()]);

  return (
    <>
      <TextLoop interval={rollTime} children={options} onChange={(e) => console.log(e)} /> random stuff
    </>
  );
}

export default LoopText;

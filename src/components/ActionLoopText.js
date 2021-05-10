import { useEffect, useState, useRef } from "react";
import TextLoop from "react-text-loop";

function ActionLoopText(props) {
  const [rollTime, setRollTime] = useState(0);
  const finalAction = useRef(null);

  const handleChange = ({ currentEl }) => {
    finalAction.current = currentEl;
    console.log("🌏 " + finalAction.current);
  };

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      console.log("🏁 start action roll");
      setRollTime(100);
    }, 1000);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, [props.reroll]);

  useEffect(() => {
    const intervalStopTimeout = setTimeout(() => {
      setRollTime(0);
      console.log("🛑 stop action roll");
  
      props.setFinalAction(finalAction.current);
    }, 3000);
    return () => {
      clearTimeout(intervalStopTimeout);
    };
  }, [props.reroll]);

  return (
    <div style={{ display: "inline" }}>
      <TextLoop
        interval={rollTime}
        children={props.actionOptions}
        onChange={handleChange}
      />
    </div>
  );
}

export default ActionLoopText;

// import React, { useState, useEffect, useRef } from "react";
// import TextLoop from "react-text-loop";

// function SelectText(props) {
//   let actions = ["Go", "Eat", "Read"]
//   let actionSpecPair = {
//     "Go": ["Park", "Mall", "Beach with friends oh wait you don'thave friends"],
//     "Eat": ["Lamb", "Noodles", "Rice"],
//     "Read": ["三国", "Boys in the Boat", "One"],
//   };

//   const [actionOptions, setActionOptions] = useState(actions);
//   const [specOptions, setSpecOptions] = useState(null);

//   const [actionRollTime, setActionRollTime] = useState(0);
//   const [specRollTime, setSpecRollTime] = useState(0);

//   const [finalAction, setFinalAction] = useState(null);
//   const [finalSpec, setFinalSpec] = useState(null);

//   const actionChange = ({ currentEl, currentWordIndex }) => {
//     setFinalAction(currentEl);
//     console.log(finalAction);
//   };

//   const specChange = ({ currentEl, currentWordIndex }) => {
//     setFinalSpec(currentEl);
//     console.log(finalSpec);
//   };

//   // can use this to update list every few days from the google sheet
//   // useEffect(() => {
//   //   const optionsTimeout = setTimeout(() => {
//   //     setOptions([
//   //       "Trade faster",
//   //       "Increase sales",
//   //       "Stock winners",
//   //       "Price perfectly"
//   //     ]);
//   //     console.log("change options");
//   //   }, 10000);

//   //   return () => {
//   //     clearTimeout(optionsTimeout);
//   //   };
//   // }, []);

//   useEffect(() => {
//     const intervalStartTimeout = setTimeout(() => {
//       console.log("🏁 start action roll");
//       setActionRollTime(100);
//     }, 1000);
//     return () => {
//       clearTimeout(intervalStartTimeout);
//     };
//   }, [props.reroll]);

//   useEffect(() => {
//     const intervalStopTimeout = setTimeout(() => {
//       setActionRollTime(0);
//       console.log("🛑 stop action roll");

//       setSpecOptions(actionSpecPair[finalAction])
//     }, 3000);
//     return () => {
//       clearTimeout(intervalStopTimeout);
//     };
//   }, [props.reroll]);

//   // I repeat the same code not sure how i can fix this
//   // maybe custom hooks?

//   useEffect(() => {
//     const intervalStartTimeout = setTimeout(() => {
//       console.log("start spec roll 🏁");
//       setSpecRollTime(100);
//     }, 4000);
//     return () => {
//       clearTimeout(intervalStartTimeout);
//     };
//   }, [props.reroll]);

//   useEffect(() => {
//     const intervalStopTimeout = setTimeout(() => {
//       setSpecRollTime(0);
//       console.log("stop spec roll 🛑");
//     }, 6000);
//     return () => {
//       clearTimeout(intervalStopTimeout);
//     };
//   }, [props.reroll]);

//   return (
//     <>
//       <TextLoop
//         interval={actionRollTime}
//         children={actionOptions}
//         onChange={actionChange}
//       />{' '}
//       <TextLoop
//         interval={specRollTime}
//         children={specOptions}
//         onChange={specChange}
//       />
//     </>
//   );
// }

// export default SelectText;

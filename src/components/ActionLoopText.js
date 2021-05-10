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

import { useEffect, useState, useRef } from "react";
import TextLoop from "react-text-loop";

function SpecLoopText(props) {
  const [rollTime, setRollTime] = useState(0);
  const finalSpec = useRef(null);

  const handleChange = ({ currentEl }) => {
    finalSpec.current = currentEl;
    console.log("🧭 " + finalSpec.current);
  };

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      console.log("start spec roll 🏁");
      setRollTime(100);
    }, 3500);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, [props.reroll]);

  useEffect(() => {
    const intervalStopTimeout = setTimeout(() => {
      setRollTime(0);
      console.log("stop spec roll 🛑");

      props.setFinalSpec(finalSpec.current);
    }, 6000);
    return () => {
      clearTimeout(intervalStopTimeout);
    };
  }, [props.reroll]);

  return (
    <div style={{ display: "inline" }}>
      <TextLoop
        interval={rollTime}
        children={props.specOptions}
        onChange={handleChange}
      />
    </div>
  );
}

export default SpecLoopText;

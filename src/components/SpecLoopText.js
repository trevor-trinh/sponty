import { useEffect, useState, useRef } from "react";
import TextLoop from "react-text-loop";

function SpecLoopText(props) {
  const [rollTime, setRollTime] = useState(0);
  const finalSpec = useRef(null);
  const handleChange = ({ currentWordIndex }) => {
    // finalSpec.current = currentEl;
    // changed so gives item row instead for future proofing data
    finalSpec.current = currentWordIndex;
    // console.log("🧭 " + finalSpec.current);
  };

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      // console.log("start spec roll 🏁");
      setRollTime(100);
    }, 3500);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, [props.reroll]);

  useEffect(() => {
    const intervalStopTimeout = setTimeout(() => {
      setRollTime(0);
      // console.log("stop spec roll 🛑");

      props.setSheetRow(finalSpec.current);
      props.setRenderBody(true);
    }, 6000);
    return () => {
      clearTimeout(intervalStopTimeout);
    };
  }, [props.reroll]);

  return (
    <div id="spectext">
      <TextLoop
        interval={rollTime}
        children={props.specOptions}
        onChange={handleChange}
        noWrap={false}
        className="makemefull"
      />
    </div>
  );
}

export default SpecLoopText;

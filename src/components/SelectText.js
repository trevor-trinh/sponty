import React, { useState, useEffect } from "react";
import ActionLoopText from "./ActionLoopText";
import SpecLoopText from "./SpecLoopText";
import actionSpecData from "../actionSpecData"

function SelectText(props) {
  const [specOptions, setSpecOptions] = useState("");

  useEffect(() => {
    setSpecOptions(actionSpecData[props.getAction]);
  }, [props.getAction]);

  return (
    // add styling here for center and big
    <div id="looptext">
      {/* Action */}
      <ActionLoopText
        reroll={props.reroll}
        actionOptions={Object.keys(actionSpecData)}
        setFinalAction={props.setAction}
      />
      {' '}
      {/* Specific */}
      <SpecLoopText
        reroll={props.reroll}
        specOptions={specOptions}
        setFinalSpec={props.setSpec}
      />
    </div>
  );
}

export default SelectText;

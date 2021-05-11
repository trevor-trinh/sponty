import React, { useState, useEffect } from "react";
import ActionLoopText from "./ActionLoopText";
import SpecLoopText from "./SpecLoopText";
import actionSpecData from "../actionSpecData"

function SelectText(props) {
  const [specOptions, setSpecOptions] = useState("");

  // TODO: DATA SHAPE IS DIFFERENT
  useEffect(() => {
    setSpecOptions(actionSpecData[props.getAction]);
  }, [props.getAction]);

  return (
    // add styling here for center and big
    <div id="looptext">
      {/* Action */}
      <ActionLoopText
        reroll={props.reroll}
        // TODO: DATA SHAPE IS DIFFERENT
        actionOptions={Object.keys(actionSpecData)}
        setFinalAction={props.setAction}
      />
      {' '}
      {/* Specific */}
      <SpecLoopText
        reroll={props.reroll}
        specOptions={specOptions}
        setFinalSpec={props.setSpec}
        setRenderBody={props.setRenderBody}
      />
    </div>
  );
}

export default SelectText;

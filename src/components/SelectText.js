import React, { useState, useEffect } from "react";
import ActionLoopText from "./ActionLoopText";
import SpecLoopText from "./SpecLoopText";
import {actionSpecData} from "../actionSpecData"

function SelectText(props) {
  const [specOptions, setSpecOptions] = useState("");

  useEffect(() => {
    // will bug out if there is only 1 action on the spreadsheet so don't do that
    if(props.getAction != null){
      setSpecOptions(Object.keys(actionSpecData[props.getAction]));
    }
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
        setRenderBody={props.setRenderBody}
      />
    </div>
  );
}

export default SelectText;

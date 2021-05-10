import React, { useState, useEffect, useRef } from "react";
import ActionLoopText from "./ActionLoopText";
import SpecLoopText from "./SpecLoopText";

function SelectText(props) {
  let actions = ["Go", "Eat", "Read"];
  let actionSpecPair = {
    Go: ["Park", "Mall", "Beach with friends oh wait you don'thave friends"],
    Eat: ["Lamb", "Noodles", "Rice"],
    Read: ["三国", "Boys in the Boat", "One"],
  };

  const [actionOptions, setActionOptions] = useState(actions);
  const [specOptions, setSpecOptions] = useState("");

  useEffect(() => {
    setSpecOptions(actionSpecPair[props.getAction])
  }, [props.getAction])

  return (
    <div style={{ display: "inline-block" }}>
      {/* Action */}
      <ActionLoopText
        reroll={props.reroll}
        actionOptions={actionOptions}
        setFinalAction={props.setAction}
      />
      {"  "}
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

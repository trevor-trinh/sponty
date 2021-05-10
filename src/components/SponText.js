import SelectText from "./SelectText";
import BodyText from "./BodyText";
import { useEffect, useState, useRef } from "react";

function SponText(props) {
  const [action, setAction] = useState(null);
  const [spec, setSpec] = useState(null);
  
  return (
    <div className="fullpage" id="bigspon">
      <SelectText
        reroll={props.reroll}
        setAction={setAction}
        getAction={action}
        setSpec={setSpec}
        getSpec={spec}
      />
      <BodyText action={action} spec={spec} />
    </div>
  );
}

export default SponText;

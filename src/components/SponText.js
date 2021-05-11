import SelectText from "./SelectText";
import BodyText from "./BodyText";
import { useEffect, useState, useRef } from "react";

function SponText(props) {
  const [action, setAction] = useState(null);
  const [sheetRow, setSheetRow] = useState(null);

  return (
    <div className="fullpage" id="bigspon">
      <SelectText
        reroll={props.reroll}
        setAction={setAction}
        getAction={action}
        setSheetRow={setSheetRow}
        setRenderBody={props.setRenderBody}
      />
      {props.renderBody ? <BodyText action={action} sheetRow={sheetRow} /> : null}
    </div>
  );
}

export default SponText;

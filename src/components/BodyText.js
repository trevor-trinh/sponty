import { useEffect } from "react";
import { actionSpecData } from "../utils/actionSpecData";

function BodyText(props) {
  // this will crash if switch window or tab while rolling ¯\_(ツ)_/¯
  const action = props.action;  
  const spec = actionSpecData[props.action][props.sheetRow][0];
  const description = actionSpecData[props.action][props.sheetRow][1];

  return (
    // add css or transition element here to delay it from popping up
    <div id="desctext">
      <p>
        this is body text, will have info and scrape stuff from google sheet
      </p>
      <p>
        The action is {action} and the spec is {spec}.
      </p>
      <p>Details are {description}</p>
    </div>
  );
}

export default BodyText;

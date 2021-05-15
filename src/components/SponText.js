import SelectText from "./SelectText";
import BodyText from "./BodyText";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function SponText(props) {
  const [action, setAction] = useState(null);
  const [sheetRow, setSheetRow] = useState(null);

  const anime = useSpring({
    // loop: { reverse: true },
    from: { paddingTop: "50%"},
    to: { paddingTop: "0%" },
    delay: 6000
  })

  return (
    <div className="fullpage" id="bigspon">
      <animated.div id="looptext" style={anime}>
      
        <SelectText
          reroll={props.reroll}
          setAction={setAction}
          getAction={action}
          setSheetRow={setSheetRow}
          setRenderBody={props.setRenderBody}
        />
      </animated.div>
      {/* delay body showing */}
      {props.renderBody ? (
        <BodyText action={action} sheetRow={sheetRow} />
      ) : null}
    </div>
  );
}

export default SponText;

import {useEffect} from 'react'
function BodyText(props) {

  return (
    // add css or transition element here to delay it from popping up
    <>
      <p>
        this is body text, will have info and scrape stuff from google sheet
      </p>
      <p>
        The action is {props.action} and the spec is {props.spec}.
      </p>
    </>
  );
}

export default BodyText;

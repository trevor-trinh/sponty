import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import SponText from "./components/SponText";
import './App.css'

function App() {
  const [firstShow, setFirstShow] = useState(false);
  const [reroll, setReroll] = useState(false);
  const [renderBody, setRenderBody] = useState(false);

  // do the async stuff later
  const [dataLoaded, setDataLoaded] = useState(false)


  return (
    <>
      <Header
        firstShow={firstShow}
        setFirstShow={setFirstShow}
        reroll={reroll}
        setReroll={setReroll}
        setRenderBody={setRenderBody}
        dataLoaded={dataLoaded}
        setDataLoaded={setDataLoaded}
      />

      {firstShow && (
        <SponText
          reroll={reroll}
          renderBody={renderBody}
          setRenderBody={setRenderBody}
        />
      )}
    </>
  );
}

export default App;

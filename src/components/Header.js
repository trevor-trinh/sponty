import { Link } from "react-scroll";
import { useEffect } from "react";
import { dataPromise } from "../actionSpecData";

function Header(props) {
  const handleClick = () => {
    if (!props.firstShow && props.dataLoaded) {
      props.setFirstShow(true);
    }
    props.setRenderBody(false);
    props.setReroll(!props.reroll);
  };

  useEffect(() => {
    async function getData() {
      // console.log("waiting");
      await dataPromise.then((result) => console.log(result));
      props.setDataLoaded(true);
      // console.log("waiting done");
    }
    getData();
  }, []);

  return (
    <div className="fullpage">
      <div id="header">
        <h1 id="headertext">Feeling Spontaneous</h1>
        {props.dataLoaded ? (
          <Link
            id="headergo"
            to="bigspon"
            smooth={true}
            onClickCapture={handleClick}
          >
            Go
          </Link>
        ) : (
          <h3>loading...</h3>
        )}
        {/* not sure hwat onClickCapture does but it works */}
      </div>
    </div>
  );
}

export default Header;

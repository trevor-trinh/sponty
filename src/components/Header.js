import { Link } from "react-scroll";
import "../App.css";

function Header(props) {
  const handleClick = () => {
    if (!props.firstShow) {
      props.setFirstShow(true);
    }
    props.setReroll(!props.reroll);
  };

  return (
    <div className="fullpage">
      <div id="header">
        <h1 id="headertext">Feeling Spontaneous</h1>
        <Link id="headergo" to="bigspon" smooth={true} onClickCapture={handleClick}>
          Go
        </Link>
        {/* not sure hwat onClickCapture does but it works */}
      </div>
    </div>
  );
}

export default Header;

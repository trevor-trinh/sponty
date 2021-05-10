import {Link} from 'react-scroll'
import '../App.css';

function Header(props){
    const handleClick = () => {
        if(!props.firstShow){ 
            props.setFirstShow(true)
        } 
        props.setReroll(!props.reroll)
    }
    
    return(
        <div className="fullpage">
            <h1>Feeling Spontaneous</h1>
            <Link to="bigspon" smooth={true} onClickCapture={handleClick}>Go</Link>
            {/* not sure hwat onClickCapture does but it works */}
        </div>
    )
}

export default Header
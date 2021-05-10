import LoopText from './LoopText'
import BodyText from './BodyText'
import '../App.css';

function SponText(props){
    return (
        <div className="fullpage" id="bigspon">
            <LoopText reroll={props.reroll}/>
            <BodyText />
        </div>
    )
}


export default SponText
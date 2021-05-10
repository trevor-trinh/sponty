import logo from './logo.svg';
import Header from './components/Header'
import SponText from './components/SponText'
import {useState} from 'react'

function App() {
  const [firstShow, setFirstShow] = useState(false)
  const [reroll, setReroll] = useState(false)
  return (
    <>
      <Header firstShow={firstShow} setFirstShow={setFirstShow} reroll={reroll} setReroll={setReroll}/>

      {firstShow && <SponText reroll={reroll} />}
      
    </>
  );
}

export default App;

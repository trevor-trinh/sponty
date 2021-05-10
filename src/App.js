import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SponText from './components/SponText'
import {useState} from 'react'

function App() {
  const [firstShow, setFirstShow] = useState(false)
  const [render, setRender] = useState(false)
  return (
    <>
      <Header setFirstShow={setFirstShow} firstShow={firstShow} setRender={setRender} render={render}/>


      {firstShow && <SponText />}
    </>
  );
}

export default App;

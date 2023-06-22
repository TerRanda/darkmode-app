import { useState, useContext } from 'react';
import './App.css';
//함수명 호출 default
import Page from './components/Page';
//변수로 호출
import { Context } from './Context';

function App() {
  const [ darkmode, setDarkmode ] = useState(false);
  const [ img , setImg] = useState(false);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    setImg(!img);
  }
  return (
    <>
      <Page 
        handleDarkmode={handleDarkmode}
        darkmode = {darkmode}
        setDarkmode = {setDarkmode}
        img = {img}
      />
    </>
  )
}
export default App

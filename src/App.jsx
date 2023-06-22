import { useState } from 'react';
import './App.css';
import Page from './components/page';
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

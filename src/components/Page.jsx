import React from 'react'
import Header from './Header';
import Main from './Main';

function Page(props) {
  
  const {handleDarkmode, darkmode, setDarkmode, img} = props;

  return (
    <div className="App">
      <Header 
        darkmode = {darkmode}
        handleDarkmode = {handleDarkmode}
      />
      <Main 
        darkmode = {darkmode}
        img = {img}
      />
    </div>
  )
}

export default Page
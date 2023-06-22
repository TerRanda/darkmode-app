import React from 'react'
import '../images/terry.png'
function Main(props) {
  const {darkmode, img} = props;
  return (
    <main className={darkmode ? 'App darkmode' : 'App'}>
      <h1>Main</h1>
      <img src={img ? 'src/images/terry.png' : null}/>
    </main>
  )
}

export default Main
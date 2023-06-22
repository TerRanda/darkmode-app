import React from 'react'
import '../images/terry.png'
function Main(props) {
  const {darkmode, img} = props;
  return (
    <main className={darkmode ? 'App darkmode' : 'App'}>
      <h1>Main</h1>
      <img src={img ? 'src/images/terry.png' : 'src/images/Ter_20230616_154704346_01-removebg-preview.png'}/>
    </main>
  )
}

export default Main
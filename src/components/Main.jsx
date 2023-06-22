import React from 'react'

function Main(props) {
  const {darkmode, img} = props;
  return (
    <main className={darkmode ? 'App darkmode' : 'App'}>
      <h1>Main</h1>
      <img src={img ? process.env.PUBLIC_URL + '/images/terry.png' : process.env.PUBLIC_URL + '/images/Ter_20230616_154704346_01-removebg-preview.png'}/>
    </main>
  )
}

export default Main
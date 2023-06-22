import React from 'react'

function Header(props) {
  const {darkmode, handleDarkmode} = props;

  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleDarkmode}>Darkmode</button>
    </header>
  )
}

export default Header
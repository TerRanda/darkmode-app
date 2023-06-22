import { useContext } from 'react'
import { Context } from '../Context'

function Header() {
  //Context 사용하기
  const { handleDarkmode } = useContext(Context);


  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleDarkmode}>Darkmode</button>
    </header>
  )
}

export default Header
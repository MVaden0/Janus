import { Link } from 'react-router-dom'

import style from './header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">Home</Link>
      <Link to="/login/">Login</Link>
    </header>
  )
}

export default Header
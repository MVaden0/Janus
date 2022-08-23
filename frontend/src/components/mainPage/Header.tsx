import { Link } from 'react-router-dom'

import style from './MainPage.module.css'

const Header = () => {
  return (
    <nav className={style.header}>
      <Link to="/">Home</Link>
      <Link to="/login/">Login</Link>
    </nav>
  );
}

export default Header;
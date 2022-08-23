import { Link } from 'react-router-dom'

import style from './MainPage.module.css'

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to="/">Home</Link>
      <Link to="/login/">Login</Link>
    </div>
  );
}

export default Nav;
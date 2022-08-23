import React from 'react';
import style from './MainPage.module.css'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <nav className={style.nav}>
      <Link to="/">Home</Link>
      <Link to="/login/">Login</Link>
    </nav>
    </div>
  );
}

export default MainPage;
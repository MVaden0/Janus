import style from './home.module.css'

import Header from '../header/Header'

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.titleContainer}>
          <span className={style.title}>Dashboard</span>
          <span className={style.subtitle}>Inventory Overview</span>
        </div>
      </div>
    </div>
  )
}
  
export default Home

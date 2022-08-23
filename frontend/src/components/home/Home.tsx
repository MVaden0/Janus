import style from './home.module.css'

import Header from '../header/Header'
import OptionsContainer from '../options/OptionContainer'

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.titleContainer}>
          <span className={style.title}>Dashboard</span>
          <span className={style.subtitle}>Inventory and File Manager</span>
        </div>
        <OptionsContainer />
      </div>
    </div>
  )
}
  
export default Home

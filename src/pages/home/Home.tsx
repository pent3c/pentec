import styles from '../../styles'
import { NavBar, Hero,Founders, Business } from '../../components'

function Home() {
  return (
    <div className='bg-primary w-full overflow-hidden home'>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      {/* Hero section */}
      <div className={` ${styles.flexStart} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

       {/* Founders section */}
       <div className={` ${styles.flexStart} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Founders />
        </div>
       </div>

      {/* Feature section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
        </div>
      </div>







    </div>
  )
}

export default Home

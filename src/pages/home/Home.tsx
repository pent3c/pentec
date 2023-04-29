import styles from '../../styles'
import { NavBar, Hero, Business } from '../../components'

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
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
        </div>
      </div>







    </div>
  )
}

export default Home

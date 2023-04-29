import styles from "../styles";
import { robot, team } from "../assets";
import Button from "../shared/Button";
import { motion } from "framer-motion";

function Hero() {

  return (
    <section id="home" className={`flex h-screen md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <motion.div
          initial={{ x: "-50vw", opacity: 0, scale: 0.2 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01]
          }}
      >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Crafting Intelligent <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Web Experiences</span>{" "}
        </h1>
      </div>
      </motion.div>
      <motion.div
          initial={{ x: "-50vw", opacity: 0, scale: 0.2 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
      >
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Pentec creates intelligent web solutions that combine AI 
        with expert design and development, delivering exceptional
        user experiences tailored to your needs.
      </p>
      </motion.div>
      <motion.div
          initial={{ x: "-50vw", opacity: 0, scale: 0.2 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
      >
      <div className="mt-10">
        <Button text="Contact us" colour="purple"/>
      </div>
      </motion.div>
    </div>
    
    <div className={`flex-1 md:flex ${styles.flexCenter} md:my-0 my-10 relative hidden`}>
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >  
      <img src={team} alt="billing" className="" />
      </motion.div>

      <motion.div
      initial={{ x: "50vw", opacity: 0, scale: 0.2 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1,
        delay: 0.6,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <img src={robot} alt="billing" className="" />
      </motion.div>
    </div>  


   
    </div>

  </section>
  )
}

export default Hero
import { features } from "../constant";
import styles, { layout } from "../styles";
import Button from "../shared/Button";
import FeatureCard from './FeatureCard';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Business() {

  const { ref, inView } = useInView();


  return (
    <section id="features" className={layout.section}>
        <div ref={ref}>
          <motion.div
            initial= {{ x: "-50vw", opacity: 0, scale: 0.2 }}
            animate= {inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-50vw", opacity: 0, scale: 0.2 }}
            transition= {{
              duration: 1,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>
                  Kon rajel & hire us, <br className="sm:block hidden" /> we’ll handle
                  everything.
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  7na m3ana, li wesmna PENTEC, tachi maykhsk m3ana ya chriki, sade9ni we will take
                  your business to another level by making for y a unique Web & Brand Identity.
              </p>
              <div className="mt-10">
              <Button text="Contact us" colour="blue"/>
              </div>
            </div>
          </motion.div>
        </div>


      
            
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                  <div ref={ref}>
                  <motion.div
                    initial= {{ x: "50vw", opacity: 0, scale: 0.2 }}
                    animate= {inView ? { x: 0, opacity: 1, scale: 1 } : { x: "50vw", opacity: 0, scale: 0.2 }}
                    transition= {{
                      duration: 1,
                      delay: index-0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
                      <FeatureCard key={feature.id} {...feature} index={index} />
                    </motion.div>
                  </div>
                ))}
            </div>


    </section>
  )
}

export default Business
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Abdelkrim, Yacine, Haithem, Amine, Abdallah } from "../assets";

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-600, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller " style={{ x }}>
        {children}
   
      </motion.div>
    </div>
  );
}


function Founders() {
  return (
    <section className="text-white">
        <ParallaxText baseVelocity={-5}>
        {Array.from({ length: 10 }).map((_, index) => (
            <div className="flex" key={index}>
                <span><img src={Yacine} alt="" /></span>
                <span><img src={Haithem} alt="" /></span>
                <span><img src={Abdelkrim} alt="" /></span>
                <span><img src={Amine} alt="" /></span>
                <span><img src={Abdallah} alt="" /></span>
            </div>
        ))}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
            <div className="flex ">
                {Array.from({ length: 50 }).map((_, index) => (
                    <span key={index}>Founders</span>
                ))}
            </div>
        </ParallaxText>
    </section>
  )
}

export default Founders


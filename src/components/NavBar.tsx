import { useState } from "react"
import { logo, close, menu } from "../assets"
import { navLinks } from "../constant"
import { motion } from "framer-motion"

function NavBar() {

  const [toggle, setToggle] = useState(false)

  return (
   
      <nav className="w-full flex py-6 justify-between items-center navbar">
        {/* Logo */}
        <motion.div
        initial={{ x: "-50vw", opacity: 0, scale: 0.2 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <img src={logo} alt="pentec_logo" className="w-[154px] h-[32px]" />
        </motion.div>

        {/* Nav links */}
        <motion.div
        initial={{ x: "50vw", opacity: 0, scale: 0.2 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-20">
          {navLinks.map((nav) => (
            <li key={nav.id} className="font-normal text-white cursor-pointer text-[16px]">
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        </motion.div>


        {/* Show menu button (for small screens) */}
        <div className="sm:hidden flex flex-1 justify-end items-center z-10">
            <img 
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px]"
              onClick={() => setToggle((prev) => (!prev))}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 my-2 ml-6 min-w-[140px] rounded-xl sidebar w-[93.8%]`}>
              {/* Nav links */}
              <ul className="list-none flex flex-col justify-end items-center flex-1 gap-8">
                {navLinks.map((nav) => (
                  <li key={nav.id} className="font-normal text-white cursor-pointer text-[16px]">
                    <a href={`${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </nav>
    
  )
}

export default NavBar

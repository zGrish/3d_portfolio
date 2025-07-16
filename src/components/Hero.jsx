import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative mx-auto w-full h-screen">
      <div className={
        `${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto items-start flex flex-row gap-5 absolute`
    }>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm
            <span className="text-[#915eff]"> Grishma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I enjoy creating things that work well, look good, and make a <br className="sm:block hidden"/>
            difference, whether it's in code or in the community.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute flex justify-center items-center w-full xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] p-2 border-4 border-secondary rounded-3xl flex justify-center items-start" >
            <motion.div 
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
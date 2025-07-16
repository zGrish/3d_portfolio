import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
        className="py-5 px-12 rounded-[20px] min-h-[280px] bg-tertiary flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px] text-center font-bold"
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl leading-[30px] text-[17px] text-secondary"
      >
        Computer science student here. I build web applications when I'm not buried in coursework or volunteering. I'm drawn to problems that that actually matter to people; like making campus life easier or helping local nonprofits with their operations.<br />
        Still figuring things out, but that's what keeps it interesting.
      </motion.p>

      <div className="mt-20 gap-10 flex flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>      
    </>
  )
}

export default SectionWrapper(About, "about")
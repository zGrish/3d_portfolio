import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="w-full h-[230px] relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="flex justify-end absolute card-img_hover inset-0 m-3">
            <div
              onclick= {() => window.open (source_code_link, "_blank")}
              className="w-10 h-10 black-gradient flex rounded-full justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>

        <div className="mt-3 gap-2 flex flex-wrap">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          These are a few things I've built (or am building) to explore ideas, learn new tech, or solve small real-world problems. Some are live, some are still in progress, and not everything has a public repo yet—but they've all taught me something.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project} 
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper( Works, "" );
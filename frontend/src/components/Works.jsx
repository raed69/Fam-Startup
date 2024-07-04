import React from 'react';
import { experiences } from '../constants';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

import { motion } from "framer-motion";
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const WorkCard = ({ index, title, image, link }) => (
  <Tilt className='xs:w-[300px] w-full'>
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'
        style={{ height: '100%', position: 'relative', overflow: 'hidden' }}
      >
        <div className='w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-t-[20px]'>
          <img
            src={image}
            alt={title}
            className='absolute inset-0 w-full h-full object-cover rounded-[20px]' 
          />
        </div>
      </div>
    </a>
  </Tilt>
);

const Works = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Some of Our projects</p>
      <h2 className={styles.sectionHeadText}>check this out !</h2>
    </motion.div>

    


    <div className='mt-20 flex flex-wrap justify-center gap-10'>
      {experiences.map((experience, index) => (
        <WorkCard key={experience.title} index={index} {...experience} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');

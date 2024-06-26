import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Ensure this path is correct
import { SectionWrapper } from "../hoc"; // Ensure this path is correct
import { fadeIn, textVariant } from "../utils/motion"; // Ensure this path is correct
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { logo } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title} // Use the title as the alt text
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who We Are?</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex items-center gap-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          Founded on June 15, 2024, FamStratup specializes in web development,
          blockchain solutions, and video editing. We deliver cutting-edge,
          scalable web applications, secure and transparent blockchain
          integrations, and high-quality video content. Our mission is to drive
          business success through innovative technology and exceptional client
          service. Let's bring your vision to life together.
        </p>
        <img src={logo} alt=" Logo"  className='w-37 h-32 object-contain ml-5' />
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");

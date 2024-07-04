import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';

import { styles } from '../styles';
import Model from '../../public/Ethereum/Eth';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const text = 'Welcome to';
    let charIndex = 0;

    const displayInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayText(text.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(displayInterval);
      }
    }, 100); // Adjust the interval (milliseconds) to control typing speed

    return () => clearInterval(displayInterval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#323232]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {displayText}
            <span className='text-[#915EFF]'> Fam Startup</span>
          </h1>
        </div>
      </div>

      <div className="ethereum h-full">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 80 }} // Adjust the camera position and field of view
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1.0} />
            <directionalLight position={[1, 20, 1]} intensity={4} />
            <Model />
            <OrbitControls enableZoom={false} minDistance={5} maxDistance={15} /> {/* Adjust min and max distance */}
          </Suspense>
          <Environment preset='sunset'/>
        </Canvas>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';

import { FaArrowRight } from 'react-icons/fa';

import AnimatedDots from './AnimatedDots';

const Hero = () => {
  return (
    <div className=' px-2 pt-5'>
      <section className='text-gray-300 max-w-[1000px] mx-auto min-h-dvh flex items-center justify-center font-inter '>
        <div className=' z-30 flex flex-col gap-4 '>
          <motion.h2
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='text-2xl font-regular'
          >
            Hi👋, I Am Salman Farshi
          </motion.h2>
          <motion.h1
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              backgroundImage: `linear-gradient(to top right, #bfdbfe 0%, #818cf8 100%)`,
              backgroundClip: 'text',
              color: 'transparent',
            }}
            className='text-7xl font-bold'
          >
            Front-end Web Developer
          </motion.h1>
          <motion.h2
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-base max-w-[35rem]'
          >
            I am passionate about crafting intuitive user interfaces. With
            expertise in HTML, CSS, and JavaScript, I transform concepts into
            interactive web experiences that engage and inspire.
          </motion.h2>
          <motion.a
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{
              scale: '1.05',
            }}
            whileTap={{
              scale: 0.97,
            }}
            style={{
              width: 'max-content',
            }}
            href='#contact'
            className=' group flex items-center gap-3 bg-gradient-to-tr from-blue-200 to-indigo-400 text-zinc-950 font-medium px-7 py-2 rounded-md  '
          >
            Contact{' '}
            <FaArrowRight className='text-zinc-950 group-hover:-rotate-45 transition-all' />
          </motion.a>
        </div>
        <div className='z-20 ml-[-20rem]'>
          <AnimatedDots />
        </div>
      </section>
    </div>
  );
};

export default Hero;

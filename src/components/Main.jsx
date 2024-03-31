import { motion } from 'framer-motion';

import Header from './Header';
import Hero from './Hero';

const Main = () => {
  return (
    <main className='w-full min-h-dvh bg-zinc-950'>
      <div
        className='grid-lines'
        style={{
          backgroundImage: `linear-gradient(
        to right,
        rgba(255, 255, 255, 0.15) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '27px 27px',
          position: 'absolute',
          inset: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(9,9,11,.3), rgba(9,9,11,0.95))`,
        }}
      />
      <motion.div
        initial={{ x: '-100%', y: '-600%', rotate: '40deg', opacity: 1 }} // Initial position outside the viewport with opacity 0
        animate={{ x: '0', y: 0, opacity: 1 }} // Animation to bring it inside the viewport with opacity 1
        transition={{ duration: 1.5, delay: 1, ease: 'easeIn' }} // Animation duration and easing
        style={{
          position: 'absolute',
          width: '650px',
          height: '120px',
          borderRadius: '1000px',
          background: 'rgba(255, 255, 255, .05)',
          filter: 'blur(40px)',
          top: '220px',
          left: '-100px',
        }}
      />
      <Header />
      <div>
        <Hero />
      </div>
    </main>
  );
};

export default Main;

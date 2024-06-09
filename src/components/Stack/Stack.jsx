import { forwardRef } from 'react';
import { stackList } from '../../utils/constants';
import './Stack.css';
import { motion } from 'framer-motion';

const Stack = ({ stackRef }, ref) => {
  const textAnimation = {
    hidden: {
      x: 0,
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: custom / 5 }
    })
  };

  return (
    <section className='stack'>
      <h3 className='stack__title' ref={stackRef}>
        Stack
      </h3>

      <motion.div
        className='stack__skills'
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
      >
        {stackList.map((skill, i) => {
          return (
            <motion.div
              className='skill'
              variants={textAnimation}
              custom={i / 3 + Math.random()}
              key={skill.title}
            >
              <div className='skill__wrapper' style={{ before: '' }}>
                <img
                  className='skill__image'
                  src={skill.image}
                  alt={skill.title}
                ></img>
              </div>
              <div className='skill__name-container'>
                <p className='skill__name'>{skill.title}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default forwardRef(Stack);

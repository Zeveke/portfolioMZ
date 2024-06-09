import { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = ({ image, text, title, link, custom }) => {
  const [isPressed, setIsPressed] = useState(false);

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
      transition: { delay: isPressed ? 0 : custom / 6 }
    })
  };

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  return (
    <motion.div
      variants={textAnimation}
      custom={custom}
      className={`contact ${isPressed ? 'pressed' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className='contact__links'>
        <a
          className='contact__link'
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          <img className='contact__image' alt={title} src={image}></img>
          <p className='contact__title'>{title}</p>
          <p className='contact__text'>{text}</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;

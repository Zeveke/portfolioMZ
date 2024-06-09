import { useState } from 'react';
import './Header.css';

const Header = ({ refs }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 100);
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <button
          onClick={() => {
            handlePress();
            refs.stackRef.current.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }}
          className={`header__link ${isPressed ? 'pressed' : ''}`}
        >
          Stack
        </button>
        <button
          onClick={() => {
            handlePress();
            refs.projectsRef.current.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }}
          className={`header__link ${isPressed ? 'pressed' : ''}`}
        >
          Projects
        </button>
        <button
          onClick={() => {
            handlePress();
            refs.contactRef.current.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }}
          className={`header__link ${isPressed ? 'pressed' : ''}`}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;

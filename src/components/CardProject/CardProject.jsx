import { useState, useEffect } from 'react';
import './CardProject.css';

const CardProject = ({ title, description, stack, github, browser, image }) => {
  const [linkDisabled, setLinkDisabled] = useState(false);

  const handleNoLinkClick = e => {
    e.preventDefault();
    if (!linkDisabled) {
      setLinkDisabled(true);
    }
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMouseX(x);
    setMouseY(y);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000)
    );
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${-mousePY * 30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -20}px) translateY(${mousePY * -20}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div
      className='card'
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='card__container' style={cardStyle}>
        <div
          className='card__bg'
          style={{ ...cardBgTransform, ...cardBgImage }}
        ></div>
        <div className='card__info'>
          <h1 className='card__title'>{title}</h1>
          <p className='card__description text'>{description}</p>
          <ul className='card__stack-items'>
            {stack.map((item, index) => (
              <li className='card__stack-item text' key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div className='card__links'>
            {github && (
              <a
                className='card__link'
                href={github}
                target='_blank'
                rel='noreferrer'
              >
                GitHub Link
              </a>
            )}
            {browser ? (
              browser !== 'no' ? (
                <a
                  className={`card__link ${linkDisabled ? 'disabled' : ''}`}
                  href={browser}
                  target='_blank'
                  rel='noreferrer'
                >
                  Browser Link
                </a>
              ) : (
                <p
                  className={`card__link ${linkDisabled ? 'disabled' : ''}`}
                  onClick={() => handleNoLinkClick}
                >
                  Will be added soon
                </p>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

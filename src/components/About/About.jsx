import { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [frontend, setFrontend] = useState(false);

  useEffect(() => {
    const i = document.querySelector('.about__name');
    setTimeout(() => {
      i.style.borderRight = 0;
      setFrontend(true);
    }, 2500);
  }, []);

  return (
    <section className='about'>
      <h1 className='about__name'>Mark Seweke</h1>
      {frontend && <h2 className='about__profession'>web developer</h2>}
    </section>
  );
};

export default About;

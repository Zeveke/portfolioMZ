import Projects from '../Projects/Projects';
import './Portfolio.css';

const Portfolio = ({ projectsRef }) => {
  return (
    <section className='portfolio'>
      <Projects projectsRef={projectsRef} />
    </section>
  );
};

export default Portfolio;

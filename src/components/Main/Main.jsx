import Header from '../Header/Header';
import About from '../About/About';
import Cube from '../Cube/Cube';
import Portfolio from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack';
import Contacts from '../Contacts/Contacts';
import { useRef } from 'react';
import './Main.css';

const Main = () => {
  const stackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    stackRef,
    projectsRef,
    contactRef
  };

  return (
    <>
      <Header refs={refs} />
      <main className='main'>
        <About />
        <Cube />
      </main>
      <Stack stackRef={stackRef} />
      <Portfolio projectsRef={projectsRef} />
      <Contacts contactRef={contactRef} />
    </>
  );
};

export default Main;

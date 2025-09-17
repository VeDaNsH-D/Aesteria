import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin);

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-bg);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Terminal = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  color: var(--accent-cyan);
  text-align: left;
`;

const Preloader = ({ onCompleted }) => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setTimeout(onCompleted, 500) });

    tl.to(terminalRef.current, { duration: 1.5, text: "INITIALIZING AETHERIA INTERFACE..." })
      .to(terminalRef.current, { duration: 1.5, text: "ESTABLISHING CONNECTION...", delay: 0.5 })
      .to(terminalRef.current, { duration: 1.5, text: "COMPILING PARADIGM... [OK]", delay: 0.5 })
      .to(terminalRef.current, { duration: 1, text: "AUTHENTICATION SUCCESSFUL.", delay: 0.5 })
      .to(terminalRef.current.parentElement, { duration: 0.5, opacity: 0, delay: 0.5 });
  }, [onCompleted]);

  return (
    <PreloaderContainer>
      <Terminal ref={terminalRef}></Terminal>
    </PreloaderContainer>
  );
};

export default Preloader;

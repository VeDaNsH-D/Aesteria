import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Cursor = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid var(--accent-cyan);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <Cursor ref={cursorRef} />;
};

export default CustomCursor;

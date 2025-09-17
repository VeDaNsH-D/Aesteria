import styled from 'styled-components';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at center, var(--secondary-bg) 0%, var(--primary-bg) 70%);
`;

const HeroTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 10px var(--accent-cyan), 0 0 20px var(--accent-cyan), 0 0 40px var(--accent-cyan);
  margin: 0;
`;

const HeroSubtitle = styled.h2`
  font-size: clamp(1rem, 4vw, 2rem);
  color: var(--accent-magenta);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 10px;
  text-shadow: 0 0 5px var(--accent-magenta);
  font-weight: 700;
`;

const HeroInfo = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin-top: 20px;
  letter-spacing: 2px;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 40px;
  padding: 15px 30px;
  border: 2px solid var(--accent-cyan);
  color: var(--accent-cyan);
  font-family: var(--font-heading);
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-cyan);
    color: var(--primary-bg);
    box-shadow: 0 0 25px var(--accent-cyan), 0 0 50px var(--accent-cyan);
  }
`;

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;
    gsap.from(elements, {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.5
    });
  }, []);

  return (
    <HeroContainer>
      <div ref={containerRef}>
        <HeroTitle>AETHERIA 2025</HeroTitle>
        <HeroSubtitle>DECODE THE PARADIGM</HeroSubtitle>
        <HeroInfo>OCTOBER 24-26, 2025 // SOLAPUR, MAHARASHTRA</HeroInfo>
        <CTAButton href="#about">[ ENTER THE NEXUS ]</CTAButton>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;

import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.section`
  padding: 120px 0;
  background-color: var(--primary-bg);
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--primary-text);
  margin-bottom: 60px;
  text-align: center;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 300;
  max-width: 650px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
`;

const StatItem = styled.div`
  h4 {
    color: var(--accent-magenta);
    font-size: 1rem;
    font-weight: 400;
  }
  p {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    margin-top: 5px;
  }
`;

const AboutSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        gsap.from(el.children, {
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2
        });
    }, []);

    return (
        <AboutContainer id="about" ref={sectionRef}>
            <SectionContainer>
                <SectionTitle>// THE CORE PROTOCOL</SectionTitle>
                <AboutContent>
                    <div>
                        <AboutText>
                            Aetheria is not just an event; it is a convergence. A temporal nexus where the architects of tomorrow gather to challenge reality, decode the future, and redefine what is possible.
                        </AboutText>
                        <StatsContainer>
                            <StatItem>
                                <h4>Previous Iterations</h4>
                                <p>15+</p>
                            </StatItem>
                            <StatItem>
                                <h4>Minds Connected</h4>
                                <p>100k+</p>
                            </StatItem>
                        </StatsContainer>
                    </div>
                    {/* Visual element can be added here */}
                </AboutContent>
            </SectionContainer>
        </AboutContainer>
    );
};

export default AboutSection;

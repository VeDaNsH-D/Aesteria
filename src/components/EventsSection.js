import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
    { title: 'RoboWars', category: 'competitions', desc: 'Mechanical Carnage' },
    { title: 'AI & ML Workshop', category: 'workshops', desc: 'Neural Networks' },
    { title: 'Quantum Realm', category: 'lectures', desc: 'Guest Lecture' },
    { title: 'Hackathon', category: 'competitions', desc: '48hr Code Sprint' },
    { title: 'Future of Web3', category: 'lectures', desc: 'Panel Discussion' },
    { title: 'Ethical Hacking', category: 'workshops', desc: 'Cyber Security' },
];

const EventsContainer = styled.section`
  padding: 120px 0;
  background: var(--secondary-bg);
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
  margin-bottom: 50px;
  text-align: center;
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
`;

const FilterButton = styled.button`
  background: transparent;
  border: 1px solid var(--accent-magenta);
  color: var(--accent-magenta);
  padding: 10px 25px;
  font-family: var(--font-body);
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;

  ${(props) => props.active && css`
    background-color: var(--accent-magenta);
    color: var(--primary-bg);
    box-shadow: 0 0 15px var(--accent-magenta);
  `}
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
`;

const EventCard = styled.div`
  height: 250px;
  background: var(--primary-bg);
  border: 1px solid #2a1f44;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  cursor: pointer;

  h3 {
    font-family: var(--font-heading);
    font-size: 1.7rem;
    margin: 0;
  }
  p {
    color: #aaa;
    margin-top: 10px;
  }

  &:hover {
    transform: scale(1.05) rotate(2deg);
    border-color: var(--accent-cyan);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
  }
`;

const EventsSection = () => {
    const [filter, setFilter] = useState('all');
    const filteredEvents = filter === 'all' ? eventsData : eventsData.filter(e => e.category === filter);
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

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

    useEffect(() => {
        gsap.fromTo(gridRef.current.children,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }
        );
    }, [filter]);

    return (
        <EventsContainer id="events" ref={sectionRef}>
            <SectionContainer>
                <SectionTitle>// EVENT STREAMS</SectionTitle>
                <FilterTabs>
                    <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterButton>
                    <FilterButton active={filter === 'competitions'} onClick={() => setFilter('competitions')}>Competitions</FilterButton>
                    <FilterButton active={filter === 'workshops'} onClick={() => setFilter('workshops')}>Workshops</FilterButton>
                    <FilterButton active={filter === 'lectures'} onClick={() => setFilter('lectures')}>Lectures</FilterButton>
                </FilterTabs>
                <EventsGrid ref={gridRef}>
                    {filteredEvents.map(event => (
                        <EventCard key={event.title}>
                            <h3>{event.title}</h3>
                            <p>{event.desc}</p>
                        </EventCard>
                    ))}
                </EventsGrid>
            </SectionContainer>
        </EventsContainer>
    );
};

export default EventsSection;

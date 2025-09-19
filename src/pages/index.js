import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

// Import Section Components
import Preloader from '../components/Preloader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';

const Main = styled.main`
  opacity: 0;
  transition: opacity 1s ease-in;

  &.loaded {
    opacity: 1;
  }
`;

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Add this useEffect to handle the audio
  useEffect(() => {
    if (!loading) {
      const audio = new Audio('/ambient.mp3');
      audio.loop = true;
      audio.volume = 0.2;
      // Wait for user interaction to play audio to comply with browser policies
      const playAudio = () => {
        audio.play().catch(error => console.log("User interaction needed to play audio."));
        document.body.removeEventListener('click', playAudio);
      };
      document.body.addEventListener('click', playAudio);

      return () => {
        audio.pause();
        document.body.removeEventListener('click', playAudio);
      };
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>AETHERIA 2025 // Decode the Paradigm</title>
        <meta name="description" content="The official website for the Aetheria 2025 technology festival." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomCursor />
      <ParticleBackground />

      {loading ? (
        <Preloader onCompleted={() => setLoading(false)} />
      ) : (
        <Main className={!loading ? 'loaded' : ''}>
          <HeroSection />
          <AboutSection />
          <EventsSection />
          {/* Add other sections like Speakers and Sponsors here */}
        </Main>
      )}
    </>
  );
}

import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

// Import Section Components
import Preloader from '../components/Preloader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import CustomCursor from '../components/CustomCursor';

const Main = styled.main`
  opacity: 0;
  transition: opacity 1s ease-in;

  &.loaded {
    opacity: 1;
  }
`;

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>AETHERIA 2025 // Decode the Paradigm</title>
        <meta name="description" content="The official website for the Aetheria 2025 technology festival." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomCursor />

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

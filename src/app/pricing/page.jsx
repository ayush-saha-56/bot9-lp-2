import React from 'react';
import Hero from '../../components/pricing/hero';
import ComparePricing from '../../components/pricing/comparepricing';
import Middle from '../../components/pricing/middle';

export default function VoicePage() {
    return (
      <main>
        <Hero />
        <Middle />
        <ComparePricing />
      </main>
    );
  }
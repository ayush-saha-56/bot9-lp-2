// src/app/voice/page.js
import React from 'react';
import Hero from '../../components/voice/hero';
import Working from '../../components/voice/working';
import VoiceAgentsComponent from '../../components/voice/voiceagents';
import VoiceEnterprise from '../../components/voice/voiceenterprise';
import Pricing from '@/components/home/pricing';
export default function VoicePage() {
    return (
        <main>
        <Hero />
        <Working />
        <VoiceAgentsComponent />
        <VoiceEnterprise />
        <Pricing />
        </main>
    );
  }
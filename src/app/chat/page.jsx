// src/app/voice/page.js
import React from 'react';
import Hero from '../../components/chat/hero';
import Onboarding from '../../components/chat/onboarding';
import ChatAgent from '../../components/chat/chatagent';
import Connect from '../../components/chat/connectdata';
import ChatEnterprise from '../../components/chat/chatenterprise';
import Pricing from '@/components/home/pricing';

export default function ChatPage() {
    return(
      <main>
        <Hero />
        <Onboarding />
        <ChatAgent />
        < Connect />
        <ChatEnterprise />
        <Pricing />
      </main>
    );
  }
import React from 'react';
import Hero from '@/components/ai-agent/hero';
import HowItWorks from '@/components/ai-agent/how-it-works';
import WhyChooseUs from '@/components/ai-agent/why-choose-us';
import ConnectDataSource from '@/components/ai-agent/connect-data-sources';
import AiAgentsList from '@/components/ai-agent/ai-agents-list';
import VersatileAiAgents from '@/components/ai-agent/versatile-ai-agents';
import LeadFinder from '@/components/ai-agent/lead-finder';
import ContentCurator from '@/components/ai-agent/content-curator';
import EmployeeAssistant from '@/components/ai-agent/employee-assistant';
import Pricing from '@/components/ai-agent/pricing';

export default function AgentPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      
      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <section className="section-padding">
        <ConnectDataSource />
      </section>
      <section className="section-padding">
        <AiAgentsList />
      </section>
      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <VersatileAiAgents />
      <section className="relative flex flex-col h-full justify-center w-full">
          <LeadFinder/>
        </section>
        <section className="relative flex flex-col h-full justify-center w-full">
          <ContentCurator />
        </section>
        <section className="relative flex flex-col h-full justify-center w-full">
          <EmployeeAssistant />
        </section>
      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <section className="section-padding">
        <Pricing />
      </section>
    </main>
  );
}

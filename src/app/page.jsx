import React from 'react';
import Hero from '../components/home/hero';
import OnboardingSteps from '../components/home/onboardingSteps';
import CollaborateWithAIBot from '../components/home/collaborateSteps';
import ConnectDataSource from '../components/home/connectDataSources';
import EnterpriseTools from '../components/home/enterpriseTools';
import CustomerBehaviour from '../components/home/monitorcustomerbehaviour';
import CollaborateWithTeam from '../components/home/collaboratewithteam';
import ECommerceSolution from '../components/home/eCommerce-solution';
import HealthcareSolution from '../components/home/healthcare-solution';
import HospitalitySolution from '../components/home/hospitality-solution';
import Pricing from '../components/home/pricing';
import TailorMadeSolutions from '../components/home/tailorMadeSolutions';

export default function Home() {
  return (
    <main>
      <Hero />
      <OnboardingSteps />
      <CollaborateWithAIBot />

      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <section className="section-padding">
        <ConnectDataSource />
      </section>

      <section className="section-padding">
        <EnterpriseTools />
      </section>

      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <section className="section-padding">
        <CustomerBehaviour />
      </section>

      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <section className="section-padding">
        <CollaborateWithTeam />
      </section>

      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <TailorMadeSolutions />
      {/* <section> */}
        <section className="relative flex flex-col h-full justify-center w-full">
          <ECommerceSolution />
        </section>
        <section className="relative flex flex-col h-full justify-center w-full">
          <HealthcareSolution />
        </section>
        <section className="relative flex flex-col h-full justify-center w-full">
          <HospitalitySolution />
        </section>
      {/* </section> */}
      <div className='w-full h-[0.069vw] border-t border-dashed border-gray-300' />
      <section className="section-padding">
        <Pricing />
      </section>
    </main>
  );
}
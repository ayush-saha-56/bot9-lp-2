import React from "react";
import Image from "next/image";
import { Contact, ChartBarBig } from "lucide-react";
import LeftImage from "../../../public/assets/monitor-customer-behaviour-left.svg";
import RightImage from "../../../public/assets/monitor-customer-behaviour-right.svg";

const IconWrapper = ({ children }) => (
  <div className="mr-2 md:mr-[0.55vw] p-1 md:p-[0.069vw] bg-[#F5F5FF] rounded-md md:rounded-[0.416vw] border border-[#D9D8FD] w-8 h-8 md:w-[1.66vw] md:h-[1.66vw] flex items-center justify-center">
    {children}
  </div>
);

const SectionContent = ({ title, icon, description, image }) => (
  <div className="flex flex-col p-4 md:p-[1.66vw] flex-1">
    <h2 className="text-gray-900 font-manrope text-xl md:text-[1.38vw] font-medium leading-tight md:leading-[1.5vw] mb-4 md:mb-[1.11vw] flex items-center">
      <IconWrapper>{icon}</IconWrapper>
      {title}
    </h2>
    <div className="w-full md:w-[35.76vw] h-px md:h-[0.069vw] border-t border-dashed border-gray-300 mb-4 md:mb-[1.66vw]" />
    <div className="w-full md:w-[32.22vw] md:h-[3.33vw]">
      <p className="text-gray-500 font-manrope text-base md:text-[1.11vw] font-normal leading-relaxed md:leading-[1.66vw] text-left">
        {description}
      </p>
    </div>
    <div className="mt-4 md:mt-[2.77vw] md:ml-[3.05vw] relative h-65 md:h-[23.05vw]">
      <Image
        src={image}
        alt={`${title} Illustration`}
        layout="responsive"
        objectFit="scale-down"
      />
    </div>
  </div>
);

const MonitorCustomerBehaviour = () => {
  return (
    <div className="relative flex flex-col items-center w-full md:w-[100vw] md:h-[57.91vw] bg-[#EDF5FC] py-8 md:py-0">
      <div className="absolute inset-0 w-full h-full z-10 hidden md:block">
        {/* Vertical lines */}
        <div className="absolute w-[0.069vw] h-[38.19vw] left-[10.83vw] bottom-[3.97vw] bg-gray-200" />
        <div className="absolute w-[0.069vw] h-[38.19vw] right-[10.83vw] bottom-[2.4vw] bg-gray-200" />

        {/* Horizontal lines */}
        <div className="absolute w-full h-[0.069vw] bottom-[3.97vw] bg-gray-200" />
        <div className="absolute w-full h-[0.069vw] bottom-[40.59vw] bg-gray-200" />
        <div className="absolute w-[1.66vw] h-[0.138vw] left-[10.02vw] top-[17.22vw] bg-gray-400" />
      </div>

      <div className="absolute w-[1.66vw] h-[1.66vw] right-[9.93vw] bottom-[3.125vw] z-30 hidden md:block">
        <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.63vw] bg-gray-400" />
        <div className="absolute w-[1.66vw] h-[0.138vw] right-[0.065vw] bottom-[0.81vw] bg-gray-400" />
      </div>

      <div className="mb-8 md:mt-[8.33vw] md:mb-[2.98vw] relative z-10 w-full md:w-[49.30vw] md:h-[5.97vw] px-4 md:px-0">
        <h1 className="text-gray-900 font-manrope text-3xl md:text-[2.77vw] font-medium leading-tight md:leading-[3.88vw] mb-2 md:mb-[0.27vw] text-center md:w-[49.03vw] md:h-[3.88vw]">
          Monitor Customer Behaviour
        </h1>
        <p className="text-gray-500 font-manrope text-lg md:text-[1.38vw] font-normal leading-relaxed md:leading-[2.08vw] text-center md:w-[49.03vw] md:h-[2.08vw]">
          Aid seamless user experiences for your customers.
        </p>
      </div>

      <div className="relative w-full md:w-[78.33vw] md:h-[36.597vw] border-gray-200 bg-white flex flex-col md:flex-row items-stretch justify-center">
        <SectionContent
          title="Customer Details"
          icon={
            <Contact
              className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
              color="#5755FF"
              strokeWidth={2}
            />
          }
          description="Understand your customer base better so that you can train your bot to handle their needs best."
          image={LeftImage}
        />
        <div className="hidden md:block w-[0.069vw] bg-gray-200 h-full" />
        <SectionContent
          title="Real-Time Analytics"
          icon={
            <ChartBarBig
              className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
              color="#5755FF"
              strokeWidth={2}
            />
          }
          description="Dive deeper into your customers to gather statistical insights on their behaviour."
          image={RightImage}
        />
      </div>
    </div>
  );
};

export default MonitorCustomerBehaviour;
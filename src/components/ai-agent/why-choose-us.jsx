import React from "react";
import Image from "next/image";
import { Clock, Languages, Infinity, GitCompare } from "lucide-react";

import clockSupport from "../../../public/assets/clock-support.svg";
import languageIcon from "../../../public/assets/latency.svg";
import handoffIcon from "../../../public/assets/intelligent-agent.svg";
import fourCardsIcon from "../../../public/assets/somanydata.svg";

const IconWrapper = ({ children }) => (
  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
    {children}
  </div>
);

const SectionTitle = ({ icon, title }) => (
  <>
    <h2 className="font-manrope text-xl md:text-[1.39vw] font-[600] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
      <IconWrapper>{icon}</IconWrapper>
      <span className="ml-2 md:ml-[0.42vw]">{title}</span>
    </h2>
    <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.11vw]"></div>
  </>
);

const VerticalDivider = ({ className = "" }) => (
  <div
    className={`hidden md:block absolute left-1/2 border-r border-gray-200 transform -translate-x-1/2 ${className}`}
  ></div>
);

const HorizontalDivider = ({ className = "" }) => (
  <div
    className={`hidden md:block w-full h-[0.07vw] border-t border-dashed border-gray-200 ${className}`}
  ></div>
);

const WhyChooseUs = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F5F5FF] border-t border-gray-300 border-dashed">
      <div className="relative w-full md:w-[100vw] mx-auto py-16 px-4 md:pt-[4.44vw] md:pb-[4.44vw] md:px-[0.28vw] collaborate-container">
        {/* Decorative Elements - Only visible on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[13.80vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 bottom-[4.38vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-[0.15vw] h-[0.9vw] left-[10.89vw] top-[-0.138vw] bg-[#98A2B3] z-40"></div>
        </div>

        <h1 className="font-manrope text-3xl md:text-[2.78vw] font-[500] leading-tight md:leading-[3.89vw] text-gray-900 mb-2 md:mb-[0.14vw] text-center">
          Why choose our AI Agents
        </h1>
        <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-[#667185] mb-8 md:mb-[3.33vw] text-center">
          to transform Customer Service and Operations
        </p>

        <div className="w-full max-w-full md:max-w-[78.19vw] bg-white p-6 md:p-[2.22vw] border-l border-r border-gray-200 relative z-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-[2.22vw] relative">
            {/* Upper Vertical Divider */}
            <VerticalDivider className="h-[calc(48%-1.7vw)]" />

            {/* Lower Vertical Divider */}
            <VerticalDivider className="h-[calc(50%-1.7vw)] bottom-0" />

            {/* 24x7 Availability */}
            <div className="md:pr-[1.11vw]">
              <SectionTitle
                icon={
                  <Clock
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="24X7 Availability"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                AI Agents are always providing continuous support across all
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                time zones. Whether handling a few interactions or thousands,
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                they scale effortlessly to meet your business needs.
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="relative w-full h-48 md:w-[39.1vw] md:h-[16.03vw] md:mr-[-2.18vw] md:ml-[-2.20vw]">
                  <Image
                    src={languageIcon}
                    alt="24x7 Availability"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Efficiency & Cost Savings */}
            <div className="md:pl-[1.11vw]">
              <SectionTitle
                icon={
                  <Languages
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Enhanced Efficiency & Cost Savings"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                Automate routine inquiries and processes, reducing response
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                times and operational costs, allowing human agents to focus
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                on more complex, high-value tasks
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[30.72vw] md:h-[20.83vw]">
                  <Image
                    src={clockSupport}
                    alt="Enhanced Efficiency"
                    layout="responsive"
                    objectFit="contain"
                    className="md:ml-[1.22vw]"
                  />
                </div>
              </div>
            </div>

            {/* Horizontal Divider in the gap */}
            <div className="col-span-1 md:col-span-2 h-px md:h-[3.4vw] relative">
              <HorizontalDivider className="absolute top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Data driven Decision-Making */}
            <div className="pb-8 md:pb-[2.22vw] md:pr-[1.11vw]">
              <SectionTitle
                icon={
                  <Infinity
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Data driven Decision-Making"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                AI Agents generate valuable insights by analyzing customer
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                interactions, preferences, and behaviors, helping you make
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                informed decisions efficiently.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[29.72vw] md:h-[20.83vw]">
                  <Image
                    src={fourCardsIcon}
                    alt="Data driven Decision-Making"
                    layout="responsive"
                    objectFit="contain"
                    className="md:mx-[0.56vw] md:ml-[0.06vw] md:mt-[-1.06vw]"
                  />
                </div>
              </div>
            </div>

            {/* Continuous Learning */}
            <div className="pb-8 md:pb-[2.22vw] md:pl-[1.11vw]">
              <SectionTitle
                icon={
                  <GitCompare
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Continuous Learning"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                AI Agents continuously aim at self-improvement through
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                machine learning from task outcomes and user feedback.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[32.72vw] md:h-[20.83vw]">
                  <Image
                    src={handoffIcon}
                    alt="Continuous Learning"
                    layout="responsive"
                    objectFit="contain"
                    className="md:mx-[0.56vw] md:ml-[0.06vw] md:mt-[-1.06vw]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

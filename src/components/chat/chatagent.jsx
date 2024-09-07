import React from "react";
import Image from "next/image";
import { Clock, Languages, Zap, Infinity } from "lucide-react";

import clockSupport from "../../../public/assets/clock-support.svg";
import languageIcon from "../../../public/assets/multi-support.svg";
import handoffIcon from "../../../public/assets/latency.svg";
import massiveScalabilityIcon from "../../../public/assets/intelligent-agent.svg";

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

const VoiceAgentsComponent = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F5F5FF] border-t border-gray-300 border-dashed">
      <div className="relative w-full md:w-[100vw] mx-auto py-16 px-4 md:pt-[4.44vw] md:pb-[4.44vw] md:px-[0.28vw] voice-agents-container">
        {/* Decorative Elements - visible only on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[13.82vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 bottom-[4.35vw] border-t border-[#D0D5DD]"></div>

          {/* Corner element */}
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[10.19vw] top-[56.62vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.763vw] top-0 bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] left-0 top-[0.763vw] bg-gray-400"></div>
          </div>

          {/* Rectangles on horizontal lines */}
          <div className="absolute w-[1.66vw] h-[0.138vw] right-[10.16vw] top-[13.77vw] bg-[#98A2B3] z-40"></div>
          <div className="absolute w-[1.66vw] h-[0.138vw] left-[10.16vw] bottom-[4.38vw] bg-[#98A2B3] z-40"></div>
          <div className="absolute w-[0.15vw] h-[0.9vw] left-[10.89vw] top-[-0.138vw] bg-[#98A2B3] z-40"></div>
        </div>

        <h1 className="font-manrope text-3xl md:text-[2.78vw] font-[500] leading-tight md:leading-[3.89vw] text-gray-900 mb-2 md:mb-[0.14vw] text-center">
          Why choose our <span className="text-[#5755FF]">Chatbot</span>
        </h1>
        <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-[#667185] mb-8 md:mb-[3.33vw] text-center">
          because you can train them to talk and behave like you
        </p>

        <div className="w-full max-w-full md:max-w-[78.19vw] bg-white p-6 md:p-[2.22vw] border-l border-r border-gray-200 relative z-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-[2.22vw] relative">
            {/* Upper Vertical Divider */}
            <VerticalDivider className="h-[calc(48%-1.7vw)]" />

            {/* Lower Vertical Divider */}
            <VerticalDivider className="h-[calc(50%-1.7vw)] bottom-0" />

            {/* Natural Conversation Flow */}
            <div className="md:pr-[1.11vw]">
              <SectionTitle
                icon={
                  <Clock
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Natural Conversation Flow"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                Leverages AI to interpret context, manage pauses, and handle
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                interruptions, enabling natural, human-like interactions.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[30.72vw] md:h-[20.83vw]">
                  <Image
                    src={clockSupport}
                    alt="Natural Conversation Flow"
                    layout="responsive"
                    objectFit="contain"
                    className="md:ml-[2.22vw]"
                  />
                </div>
              </div>
            </div>

            {/* Multilingual Support */}
            <div className="md:pl-[1.11vw]">
              <SectionTitle
                icon={
                  <Languages
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Multilingual Support"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                Our Voice Agents are capable of understanding over 150+
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                languages -surpassing lingual boundaries.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[29.72vw] md:h-[20.83vw]">
                  <Image
                    src={languageIcon}
                    alt="Multilingual Support"
                    layout="responsive"
                    objectFit="contain"
                    className="md:mx-[2.22vw]"
                  />
                </div>
              </div>
            </div>

            {/* Horizontal Divider in the gap */}
            <div className="col-span-1 md:col-span-2 h-px md:h-[3.4vw] relative">
              <HorizontalDivider className="absolute top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Unmatched latency */}
            <div className="md:pb-[2.22vw] md:pr-[1.11vw]">
              <SectionTitle
                icon={
                  <Zap
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Unmatched latency"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                Industry-leading response times with optimized GPU inference
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                and intelligent caching.
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="relative w-full h-48 md:w-[39.1vw] md:h-[16.03vw] md:mr-[-2.18vw] md:ml-[-2.20vw]">
                  <Image
                    src={handoffIcon}
                    alt="Unmatched latency"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>

            {/* Intelligent Agent Handoff */}
            <div className="pb-8 md:pb-[2.22vw] md:pl-[1.11vw]">
              <SectionTitle
                icon={
                  <Infinity
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Intelligent Agent Handoff"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                Understand that customers often require a human touch.
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                Assign relevant tickets to your support agents.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[32.72vw] md:h-[20.83vw]">
                  <Image
                    src={massiveScalabilityIcon}
                    alt="Intelligent Agent Handoff"
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

export default VoiceAgentsComponent;

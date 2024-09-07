import React from "react";
import { Link2, Infinity, FileText, Globe } from "lucide-react";

const IconWrapper = ({ children }) => (
  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
    {children}
  </div>
);

const VerticalDivider = () => (
  <div className="hidden md:block absolute left-[33.33vw] top-0 bottom-0 w-[0.07vw] bg-gray-200"></div>
);

const HorizontalDivider = () => (
  <div className="w-full h-px md:h-[0.07vw] bg-gray-200 my-8 md:my-[1.39vw]"></div>
);

const FeatureSection = ({ icon, title, description, addDivider = false }) => (
  <div
    className={`mb-8 md:mb-[5vw] ${addDivider ? "mt-8 md:mt-[1.39vw]" : ""}`}
  >
    {addDivider && <HorizontalDivider />}
    <h2 className="font-manrope text-xl md:text-[1.39vw] font-[500] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
      <IconWrapper>{icon}</IconWrapper>
      <span className="ml-2 md:ml-[0.42vw]">{title}</span>
    </h2>
    <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>
    <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-gray-600">
      {description}
    </p>
  </div>
);

const VoiceAgents = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F7F8FA] border-t border-gray-200 border-dashed">
      <div className="relative w-full md:w-[100vw] mx-auto py-16 md:py-[8.89vw] px-4 md:px-[0.28vw] voice-agents-container">
        {/* Decorative Elements - Only visible on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[8.82vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 bottom-[8.80vw] border-t border-[#D0D5DD]"></div>

          {/* Corner element */}
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[10.069vw] top-[7.98vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.76vw] top-0 bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] left-0 top-[0.76vw] bg-gray-400"></div>
          </div>

          {/* Rectangles on horizontal lines */}
          <div className="absolute w-[1.66vw] h-[0.138vw] right-[10.069vw] bottom-[8.85vw] bg-[#98A2B3] z-40"></div>
        </div>

        {/* Gradient Blobs - Only visible on desktop */}
        <div className="hidden md:block absolute left-[11.25vw] top-[16.67vw] w-[13.89vw] h-[33.83vw] bg-gradient-to-r from-violet-400 via-violet-300 to-transparent opacity-70 blur-[3.47vw]"></div>
        <div className="hidden md:block absolute right-[11.25vw] top-[16.67vw] w-[13.89vw] h-[33.83vw] bg-gradient-to-l from-cyan-400 via-cyan-200 to-transparent opacity-70 blur-[3.47vw]"></div>

        <div className="max-w-full md:max-w-[78.19vw] mx-auto">
          <div className="relative bg-white p-6 md:p-[3.33vw] md:h-[70vw] flex flex-col md:flex-row z-10 border-l border-r border-gray-200">
            <VerticalDivider />

            {/* Left Side */}
            <div className="w-full md:w-[32.5vw] md:pr-[3.33vw] mb-8 md:mb-0">
              <h2 className="font-manrope text-3xl md:text-[2.22vw] font-[500] leading-tight md:leading-[3.06vw] text-gray-900 mb-4 md:mb-[2.22vw] text-left">
                Voice Agents to power your daily workflow
              </h2>
              <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-gray-600 text-left">
                Streamline workflows with integrations, communication tools &
                authentication services.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex-1">
              <FeatureSection
                icon={
                  <Link2
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Superior Call Quality"
                description="Crystal-clear audio with advanced noise reduction and echo cancellation technologies."
              />

              <FeatureSection
                icon={
                  <Infinity
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="WebRTC Streaming"
                description="Utilize the same protocol as leading video conferencing platforms for optimal performance."
                addDivider={true}
              />

              <FeatureSection
                icon={
                  <FileText
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Intelligent Document Retrieval"
                description="AI-powered system to quickly access and utilize relevant information from vast document repositories."
                addDivider={true}
              />

              <FeatureSection
                icon={
                  <Globe
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Private Network backbone"
                description="Ensure consistent performance worldwide with our dedicated global network infrastructure."
                addDivider={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgents;

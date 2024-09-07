import React from "react";
import { Workflow, Infinity } from "lucide-react";

const IconWrapper = ({ children }) => (
  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
    {children}
  </div>
);

const VerticalDivider = () => (
  <div className="hidden md:block absolute left-[25.33vw] top-0 bottom-0 w-[0.07vw] bg-gray-200"></div>
);

const HorizontalDivider = () => (
  <div className="w-full h-px md:h-[0.07vw] bg-gray-200 my-8 md:my-[2.22vw]"></div>
);

const AiAgentsList = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F7F8FA] border-t border-gray-200 border-dashed">
      <div className="relative w-full md:w-[100vw] mx-auto py-16 md:py-[8.89vw] px-4 md:px-[0.28vw] enterprise-tools-container">
        {/* Decorative Elements - Only visible on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[8.82vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 bottom-[8.82vw] border-t border-[#D0D5DD]"></div>

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
            <div className="w-full md:w-[25.5vw] md:pr-[3.33vw] mb-8 md:mb-0">
              <h2 className="font-manrope text-3xl md:text-[2.22vw] font-[500] leading-tight md:leading-[3.06vw] text-gray-900 mb-4 md:mb-[2.22vw] text-left">
                AI Agents to power
                <br className="hidden md:inline" />
                your daily
                <br className="hidden md:inline" />
                workflow
              </h2>
              <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-gray-600 text-left">
                Streamline workflows with
                <br className="hidden md:inline" />
                integrations,
                <br className="hidden md:inline" />
                communication tools &
                <br className="hidden md:inline" />
                authentication services
              </p>
            </div>

            {/* Right Side */}

            <div className="flex-1">
              <div className="mb-8 md:mb-[5.55vw]">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[500] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
                  <IconWrapper>
                    <Workflow
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={2}
                    />
                  </IconWrapper>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Natural Language Processing
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-gray-600">
                  AI Agents understand and respond to customer queries in
                  natural, human-like language
                  <br className="hidden md:inline" />
                  providing a seamless and intuitive customer experience
                </p>
              </div>
              <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>

              <div className="mb-8 md:mb-[5.55vw]">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[500] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
                  <IconWrapper>
                    <Infinity
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={2}
                    />
                  </IconWrapper>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Real-Time Sentiment Analysis
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-gray-600">
                  Monitor and analyze customer emotions during interactions,
                  enabling AI Agents to adapt
                  <br className="hidden md:inline" />
                  responses in real-time to ensure positive outcomes
                </p>
              </div>
              <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>

              <div className="mb-8 md:mb-[5.55vw]">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[500] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
                  <IconWrapper>
                    <Infinity
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={2}
                    />
                  </IconWrapper>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Automated workflow management
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-gray-600">
                  Streamline operations with AI Agents that can manage
                  workflows, handle task
                  <br className="hidden md:inline" />
                  assignments, and ensure processes run smoothly without human
                  intervention
                </p>
              </div>
              <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>

              <div className="mb-8 md:mb-[5.55vw]">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[500] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
                  <IconWrapper>
                    <Infinity
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={2}
                    />
                  </IconWrapper>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Autonomous decision making
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-gray-600">
                  Our Agents are adept at AI-powered decision making for complex
                  problem-solving and
                  <br className="hidden md:inline" />
                  task execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAgentsList;
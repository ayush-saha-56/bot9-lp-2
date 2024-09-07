"use client";
import React from "react";
import Button from "../common/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative w-[100vw] overflow-hidden">
      <div className="relative w-full max-w-[100vw] mx-auto pt-16 sm:pt-[10vw] pb-8 sm:pb-[1.94vw] px-4 sm:px-[0.28vw]">
        {/* Decorative elements - Only visible on desktop */}
        <div className="hidden sm:block">
          {/* Gradient Blob */}
          <div className="absolute w-[40.97vw] h-[10.14vw] left-[calc(45%-11.81vw)] top-[42.71vw] bg-gradient-to-r from-[#5755FF] to-[#33BBC5] filter blur-[4.86vw] rounded-[8.33vw] z-0 opacity-100"></div>
          {/* Horizontal Lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[37.85vw] border-t border-dashed border-[#D0D5DD]">
            <div className="absolute w-6 h-0.5 left-1/2 -translate-x-1/2 -top-[2px] bg-[#98A2B3]"></div>
          </div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[42.01vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[76.25vw] border-t border-[#D0D5DD]"></div>
          {/* Vertical Lines */}
          <div className="absolute w-[0.07vw] h-full left-[calc(50%-35.14vw)] top-0 border-r border-dashed border-[#D0D5DD]"></div>
          <div className="absolute w-[0.07vw] h-full left-[calc(50%-31.32vw)] top-0 border-r border-[#E5E7EB]"></div>
          <div className="absolute w-[0.07vw] h-full right-[calc(50%-35.14vw)] top-0 border-r border-dashed border-[#D0D5DD]"></div>
          {/* Additional Vertical Lines */}
          <div className="absolute w-[0.07vw] h-[8.96vw] left-[calc(50%-21.81vw)] top-[28.89vw] bg-gradient-to-b from-[#F7F8FA] to-[#E4E7EC]"></div>
          <div className="absolute w-[0.07vw] h-[22.43vw] right-[calc(50%-39.17vw)] top-[15.35vw] bg-gradient-to-b from-[#F7F8FA] to-[#E4E7EC]"></div>
          {/* Corner Elements */}
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[14.1vw] top-[37.08vw] z-10">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.743vw] bg-gray-400" />
            <div className="absolute w-[1.66vw] h-[0.138vw] top-[0.743vw] bg-gray-400" />
          </div>
          <div className="absolute w-[1.66vw] h-[1.66vw] right-[17.85vw] top-[75.41vw] z-20">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.763vw] bg-[#98A2B3]"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] top-[0.763vw] bg-[#98A2B3]"></div>
          </div>
          {/* Gradient Lines */}
          <div className="absolute w-[1.11vw] h-[0.07vw] right-[calc(50%-47.85vw)] top-[15.38vw] bg-gradient-to-l from-[#5755FF] via-[#C3E1F1] to-[#EDF5FC]"></div>
          <div className="absolute w-[5.56vw] h-[0.14vw] left-[calc(50%-47.85vw)] top-[28.78vw] bg-gradient-to-r from-[#EDF5FC] via-[#C3E1F1] to-[#5755FF]"></div>
          {/* SVG Elements */}
          <svg
            className="absolute left-0 top-[28.89vw]"
            width="39.79vw"
            height="12.08vw"
            viewBox="0 0 573 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.5H490C535.84 0.5 573 37.6604 573 83.5V174"
              stroke="#D0D5DD"
            />
          </svg>
          <svg
            className="absolute -right-[40.97vw] top-[75.07vw] origin-top-left -rotate-90"
            width="59.72vw"
            height="18.82vw"
            viewBox="0 0 860 271"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.5H780C824.18 0.5 860 36.3203 860 80.5V271"
              stroke="#D0D5DD"
              fill="none"
              strokeWidth="1"
            />
          </svg>
          {/* Ellipses */}
          <div className="absolute w-[1.11vw] h-[1.11vw] left-[21.52vw] top-[39.769vw] bg-[#F9FAFB] border border-[#FFFFFF] rounded-full"></div>
          <div className="absolute w-[1.11vw] h-[1.11vw] left-[23.45vw] top-[39.769vw] bg-[#F9FAFB] border border-[#FFFFFF] rounded-full"></div>
          <div className="absolute w-[1.11vw] h-[1.11vw] left-[25.42vw] top-[39.769vw] bg-[#F9FAFB] border border-[#FFFFFF] rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-manrope text-4xl sm:text-[3.89vw] font-[500] leading-tight sm:leading-[5vw] text-[#101828] mb-4 sm:mb-[1.67vw] max-w-full sm:max-w-[52.08vw] text-center">
            <span className="text-[#5755FF]">AI driven Chatbot</span> for
            <span className="sm:hidden"> Customer Support & Sales</span>
            <span className="hidden sm:inline">
              <br />
              Customer Support & Sales
            </span>
          </h1>
          <p className="font-manrope text-lg sm:text-[1.39vw] font-[400] leading-relaxed sm:leading-[2.08vw] text-[#667185] mb-6 sm:mb-[2.22vw] max-w-full sm:max-w-[52.08vw] text-center">
            Empower your customers with an AI powered chatbot that handles
            <span className="sm:hidden">
              {" "}
              their queries seamlessly, so you can focus on growing your
              business.
            </span>
            <span className="hidden sm:inline">
              <br />
              their queries seamlessly, so you can focus on growing your
              business.
            </span>
          </p>
          <div className="flex justify-center items-center w-full sm:w-auto">
            <div className="w-full sm:w-[10.4vw] h-12 sm:h-[3.3vw] flex items-center justify-center mb-1 sm:mb-[0.3vw]">
              <Button
                variant="primary"
                size="custom"
                className="w-[128px] sm:w-[8.88vw] h-[40px] sm:h-[2.77vw] flex items-center justify-center !p-0"
              >
                <span className="whitespace-nowrap font-manrope text-base sm:text-[1.11vw] font-[600] leading-[1.66vw]" onClick={() => router.push("https://app.bot9.ai/signup")}>
                  Get Started
                </span>
              </Button>
            </div>
          </div>

          {/* Chat bot and "resolves 90%" text only visible on desktop */}
          <div className="hidden sm:block mt-[10.42vw]">
            <div className="bg-white rounded-none w-[62.5vw] h-[34.17vw] relative z-10 p-[1.67vw]">
              <h3 className="font-manrope text-[1.11vw] font-[500] text-[#101928] mb-[1.11vw] text-left">
                Bot9 AI Assistant
              </h3>
              <div className="flex items-start mb-[1.11vw] ml-[1.39vw] mt-[2.08vw]">
                <div className="w-[2.22vw] h-[2.22vw] bg-[#5755FF] rounded flex items-center justify-center mr-[1.11vw] mt-[0.83vw]">
                  <svg
                    width="1.33vw"
                    height="1.33vw"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6 14.3985V14.3993H32V7.19932H24.7969V-0.00146484H17.5969V14.3985H17.6ZM14.4 17.5978H0V24.7978H7.20312L7.20312 32.0001H14.4031L14.4031 17.6001H14.4V17.5978ZM32 17.5978H24.8V24.7978H32V17.5978ZM24.7969 32.0001V24.8001L17.5969 24.8001V32.0001H24.7969Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-manrope text-[1.11vw] font-400 text-[#101928] mr-[0.83vw]">
                    <div className="flex items-center">
                      <span className="text-[1.11vw] mr-[0.35vw]">
                        Hi there!{" "}
                      </span>
                      <span className="text-[1.67vw]">👋</span>
                    </div>
                    <br />
                    I&apos;m an AI assistant trained to help you with any
                    Support related issues.
                    <br />
                    <br />
                    Ask me anything about Bot9.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-[#F7F9FC] rounded-md p-[0.83vw] border border-[#E4E7EC] w-[56.94vw] h-[3.89vw] absolute bottom-[1.67vw] left-1/2 transform -translate-x-1/2">
                <input
                  type="text"
                  placeholder="Type your question here..."
                  className="flex-grow bg-transparent outline-none text-[#101928] text-[1.11vw]"
                />
                <button className="ml-[0.56vw]">
                  <svg
                    width="1.67vw"
                    height="1.67vw"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="#475367"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="#475367"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p className="font-manrope mt-[0.83vw] text-[1.39vw] font-400 text-[#475367] ml-[18.93vw]">
              resolves 90% of your customer support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

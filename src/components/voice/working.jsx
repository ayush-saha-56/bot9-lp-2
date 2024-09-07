import React from "react";
import Image from "next/image";
import { Database, PencilRuler, Share2 } from "lucide-react";
import integrateImage from "../../../public/assets/integratedata.svg";
import BotsCustomize from "../../../public/assets/botsusage.svg";
import Deploy from "../../../public/assets/deploychannel.svg";

const OnboardingSteps = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F7F8FA] border-t border-gray-200 border-dashed">
      <div className="relative w-full max-w-[100vw] mx-auto py-16 px-4 md:py-[4.44vw] md:px-[0.28vw]">
        {/* Gradient Blobs - Only visible on desktop */}
        <div className="hidden md:block absolute left-[12.25vw] top-[30.56vw] w-[13.89vw] h-[34.72vw] bg-gradient-to-r from-violet-400 via-violet-300 to-transparent opacity-40 blur-[3.47vw]"></div>
        <div className="hidden md:block absolute right-[12.25vw] top-[30.56vw] w-[13.89vw] h-[34.72vw] bg-gradient-to-l from-cyan-400 via-cyan-200 to-transparent opacity-40 blur-[3.47vw]"></div>

        {/* Decorative Elements - Only visible on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Vertical lines */}
          <div className="absolute w-[0.07vw] h-[calc(100%-12.73vw)] left-[10.93%] top-[12.73vw] border-r  border-gray-200"></div>
          <div className="absolute w-[0.07vw] h-[calc(100%-12.73vw)] right-[10.90%] top-[12.73vw] border-r border-gray-200"></div>
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[12.73vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 bottom-[4.38vw] border-t border-[#D0D5DD]"></div>
          {/* Corner elements */}
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[10.16vw] bottom-[3.67vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.763vw] bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] top-[0.763vw] bg-gray-400"></div>
          </div>
          <div className="absolute w-[1.66vw] h-[1.66vw] right-[10.16vw] top-[17.45vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.763vw] bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] top-[0.763vw] bg-gray-400"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="font-manrope text-3xl md:text-[2.78vw] font-[500] leading-tight md:leading-[3.89vw] text-gray-900 mb-2 md:mb-[0.14vw] text-center">
            How it <span className="text-[#5755FF]">works</span>
          </h1>
          <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-[#667185] mb-8 md:mb-[2.22vw] text-center">
            Effortless Setup in 3 Simple Steps
          </p>

          <div className="w-full md:max-w-[78.19vw] bg-white p-6 md:p-[2.22vw] border border-gray-200 relative z-20 mx-auto">
            <div className="flex flex-col md:flex-row mb-8 md:mb-[2.22vw] relative">
              {/* Left Column */}
              <div className="w-full md:w-1/2 md:pr-[2.22vw] mb-8 md:mb-0 relative">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[600] leading-tight md:leading-[2.08vw] mb-4 md:mb-[1.11vw] flex items-center">
                  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
                    <Database className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]" color="#5755FF" strokeWidth={1.5} />
                  </div>
                  <span className="ml-2 md:ml-[0.42vw]">Integrate your data</span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.11vw] relative">
                  <div className="hidden md:block absolute top-0 left-0 right-0 h-[20.83vw] bg-gradient-to-b from-[#34D399] to-transparent opacity-10"></div>
                </div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[1.67vw] relative z-10 md:ml-[3.47vw]">
                  Connect your existing databases and CRM systems to
                  <span className="hidden md:inline"><br /></span>
                  <span className="inline md:hidden"> </span>
                  train our AI Voice Agents with your knowledge base.
                </p>

                <div className="flex justify-center relative z-10">
                  <div className="relative w-full h-54 md:w-[31.72vw] md:h-[20.83vw]">
                    <Image
                      src={integrateImage}
                      alt="Integrate your data"
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[0.07vw] bg-gray-200 transform -translate-x-1/2"></div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 md:pl-[2.22vw] mt-8 md:mt-0 relative">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[600] leading-tight md:leading-[2.08vw] mb-4 md:mb-[1.11vw] flex items-center">
                  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
                    <PencilRuler className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]" color="#5755FF" strokeWidth={1.5} />
                  </div>
                  <span className="ml-2 md:ml-[0.42vw]">Customise as per your need</span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.11vw] relative">
                  <div className="hidden md:block absolute top-0 left-0 right-0 h-[20.83vw] bg-gradient-to-b from-[#8B5CF6] to-transparent opacity-10"></div>
                </div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[1.67vw] relative z-10 md:ml-[3.47vw]">
                  Tailor the AI responses to align with your business needs,
                  <span className="hidden md:inline"><br /></span>
                  <span className="inline md:hidden"> </span>
                  ensuring a seamless customer experience.
                </p>

                <div className="flex justify-center md:px-[1.11vw] relative z-10">
                  <div className="relative w-full h-58 md:48 md:max-w-[55.56vw] md:h-[27.78vw] md:-ml-[1.11vw]">
                    <Image
                      src={BotsCustomize}
                      alt="Customise as per your need"
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-200 pt-8 md:pt-[2.22vw] relative">
              <h2 className="font-manrope text-xl md:text-[1.39vw] font-[600] leading-tight md:leading-[2.08vw] mb-4 md:mb-[1.11vw] flex items-center">
                <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
                  <Share2 className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]" color="#5755FF" strokeWidth={1.5} />
                </div>
                <span className="ml-2 md:ml-[0.42vw]">Deploy across channels</span>
              </h2>
              <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.11vw] relative">
                <div className="hidden md:block absolute top-0 left-0 right-0 h-[20.83vw] bg-gradient-to-b from-[#FDBA74] to-transparent opacity-10"></div>
              </div>
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.22vw] relative z-10 md:ml-[3.47vw]">
                Seamlessly activate your AI Voice Agents across various communication
                <span className="hidden md:inline"><br /></span>
                <span className="inline md:hidden"> </span>
                channels, ensuring consistent, 24/7 customer engagement.
              </p>

              <div className="flex justify-center mt-4 md:mt-[1.94vw] mb-4 md:mb-[1.39vw] relative z-10">
                <div className="relative w-full h-32 md:w-[41.59vw] md:h-[11.94vw]">
                  <Image
                    src={Deploy}
                    alt="Deploy across channels"
                    layout="responsive"
                    objectFit="contain"
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

export default OnboardingSteps;
import React from "react";
import Image from "next/image";
import { FolderSync, MessageSquareHeart, CircleFadingPlus } from "lucide-react";
import syncImage from "../../../public/assets/sync-image.svg";
import customizeImage from "../../../public/assets/customize-image.svg";
import installImage from "../../../public/assets/install-image.svg";

const OnboardingSteps = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F7F8FA] border-t border-gray-200 border-dashed">
      <div className="relative w-full md:w-[100vw] mx-auto py-16 px-4 md:py-[4.44vw] md:px-[0.28vw]">
        {/* Gradient Blobs */}
        <div className="hidden md:block absolute left-[12.25vw] top-[30.56vw] w-[13.89vw] h-[34.72vw] bg-gradient-to-r from-violet-400 via-violet-300 to-transparent opacity-40 blur-[3.47vw]"></div>
        <div className="hidden md:block absolute right-[12.25vw] top-[30.56vw] w-[13.89vw] h-[34.72vw] bg-gradient-to-l from-cyan-400 via-cyan-200 to-transparent opacity-40 blur-[3.47vw]"></div>

        {/* Decorative Elements */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Vertical lines */}
          <div className="absolute w-[0.07vw] h-[calc(100%-4.38vw)] left-[14.87%] top-0 border-r border-dashed border-[#D0D5DD]"></div>
          <div className="absolute w-[0.07vw] h-[calc(100%-4.38vw)] left-[18.67%] top-0 border-r border-[#E5E7EB]"></div>
          <div className="absolute w-[0.07vw] h-[calc(100%-4.38vw)] right-[14.85%] top-0 border-r border-dashed border-[#D0D5DD]"></div>
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[13.80vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 bottom-[4.35vw] border-t border-[#D0D5DD]"></div>
          {/* Corner elements */}
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[10.069vw] top-[12.98vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.763vw] top-0 bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] left-0 top-[0.763vw] bg-gray-400"></div>
          </div>
          <div className="absolute w-[1.66vw] h-[1.66vw] right-[10.20vw] top-[18.54vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.763vw] top-0 bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] left-0 top-[0.763vw] bg-gray-400"></div>
          </div>
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[10.138vw] bottom-[-0.763vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.763vw] top-0 bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-[0.138vw] left-0 top-[0.763vw] bg-gray-400"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-full md:max-w-[78.19vw] mx-auto">
          <h1 className="font-manrope text-3xl md:text-[2.78vw] font-[500] leading-tight md:leading-[3.89vw] text-gray-900 mb-2 md:mb-[0.14vw] text-center">
            Just 3 simple steps
          </h1>
          <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-[#667185] mb-8 md:mb-[3.33vw] text-center">
            to create your personalised AI powered chatbot
          </p>

          <div className="w-full bg-white p-6 md:p-[2.22vw] border-l border-r border-gray-200 relative z-20">
            <div className="flex flex-col md:flex-row mb-8 md:mb-[2.22vw] relative">
              {/* Left Column */}
              <div className="w-full md:w-1/2 md:pr-[2.22vw] mb-8 md:mb-0">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[600] leading-tight md:leading-[2.08vw] mb-4 md:mb-[1.11vw] flex items-center">
                  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
                    <FolderSync
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Sync your website&apos;s data
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.11vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[1.67vw]">
                  Enter your Company URL for the bot to scan & see it brew
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  <span className="inline md:hidden"> </span>
                  magic as it syncs with your data.
                </p>

                <div className="flex justify-center">
                  <div className="relative w-full h-64 md:w-[34.72vw] md:h-[28.83vw] md:ml-[1.42vw]">
                    <Image
                      src={syncImage}
                      alt="Sync your website's data"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[0.07vw] bg-gray-200 transform -translate-x-1/2"></div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 md:pl-[2.22vw] mt-8 md:mt-0">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[600] leading-tight md:leading-[2.08vw] mb-4 md:mb-[1.11vw] flex items-center">
                  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
                    <MessageSquareHeart
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Customise your chat widget
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.11vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[1.67vw]">
                  Personalise your chat widget by adding your company logo and
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  <span className="inline md:hidden"> </span>
                  brand colour.
                </p>

                <div className="flex justify-center">
                  <div className="relative w-full h-64 md:w-[55.56vw] md:h-[27.78vw] md:-ml-[1.11vw]">
                    <Image
                      src={customizeImage}
                      alt="Customize your chat widget"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-200 pt-8 md:pt-[2.22vw]">
              <h2 className="font-manrope text-xl md:text-[1.39vw] font-[600] leading-tight md:leading-[2.08vw] mb-4 md:mb-[1.11vw] flex items-center">
                <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
                  <CircleFadingPlus
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="ml-2 md:ml-[0.42vw]">
                  Install on your website
                </span>
              </h2>
              <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.11vw]"></div>
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[1.67vw]">
                Embed the chatbot on as many sites as you want — your
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                marketing site, in-app, help center.
              </p>

              <div className="flex justify-center md:justify-end">
                <div className="relative w-full h-32 md:w-[52.99vw] md:h-[9.17vw] md:mr-[-2.21vw]">
                  <Image
                    src={installImage}
                    alt="Install on your website"
                    layout="fill"
                    objectFit="contain"
                    className="object-center md:object-right"
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

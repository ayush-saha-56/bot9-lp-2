import React from "react";
import Image from "next/image";
import { Clock, Languages, Infinity, GitCompare } from "lucide-react";

import clockSupport from "../../../public/assets/clock-support.svg";
import languageIcon from "../../../public/assets/multi-support.svg";
import handoffIcon from "../../../public/assets/intelligent-agent.svg";
import webCrawlerIcon from "../../../public/assets/web-crawler.svg";
import bulkImportIcon from "../../../public/assets/bulk-import.svg";
import writeManuallyIcon from "../../../public/assets/write-manually.svg";
import fileImportIcon from "../../../public/assets/file-import.svg";

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

const CollaborateWithAIBot = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F5F5FF]">
      <div className="relative w-full md:w-[100vw] mx-auto py-16 px-4 md:pt-[4.44vw] md:pb-[4.44vw] md:px-[0.28vw] collaborate-container">
        {/* Decorative Elements - visible only on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[13.80vw] border-t border-[#D0D5DD]"></div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 bottom-[4.35vw] border-t border-[#D0D5DD]"></div>
          {/* Corner element */}
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[10.138vw] top-[57.76vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.736vw]  bg-gray-400"></div>
            <div className="absolute w-[1.66vw] h-0.5 left-0 top-[0.736vw] bg-gray-400"></div>
          </div>
          {/* Rectangles on horizontal lines */}
          <div className="absolute w-[1.66vw] h-[0.138vw] right-[10.069vw] top-[13.75vw] bg-[#98A2B3] z-40"></div>
          <div className="absolute w-[1.66vw] h-[0.138vw]  left-[10.069vw] bottom-[4.375vw] bg-[#98A2B3] z-40"></div>
          <div className="absolute w-[0.15vw] h-[0.9vw] left-[10.89vw] top-[-0.138vw] bg-[#98A2B3] z-40"></div>
        </div>

        <h1 className="font-manrope text-3xl md:text-[2.78vw] font-[500] leading-tight md:leading-[3.89vw] text-gray-900 mb-2 md:mb-[0.14vw] text-center">
          Collaborate with an AI bot
        </h1>
        <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-[#667185] mb-8 md:mb-[3.33vw] text-center">
          trained to talk and behave like you, for your users.
        </p>

        <div className="w-full max-w-full md:max-w-[78.19vw] bg-white p-6 md:p-[2.22vw] relative z-10 mx-auto border-l border-r border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-[2.22vw] relative">
            {/* Upper Vertical Divider */}
            <VerticalDivider className="h-[calc(48%-1.7vw)]" />

            {/* Lower Vertical Divider */}
            <VerticalDivider className="h-[calc(50%-1.7vw)] bottom-0" />

            {/* 24x7 Non-Stop Support */}
            <div className="md:pr-[1.11vw]">
              <SectionTitle
                icon={
                  <Clock
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="24X7 Non-Stop Support"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                Provide 24/7 automated support drastically reducing response
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                times to enhance customer satisfaction.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[30.72vw] md:h-[20.83vw]">
                  <Image
                    src={clockSupport}
                    alt="24x7 Support"
                    layout="responsive"
                    objectFit="contain"
                    className="md:ml-[1.22vw]"
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
                The bot is capable of understanding over 150+ languages -
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                surpassing lingual boundaries.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full h-64 md:w-[28.72vw] md:h-[20.83vw]">
                  <Image
                    src={languageIcon}
                    alt="Multilingual Support"
                    layout="responsive"
                    objectFit="scale-down"
                    className="md:mr-[1.22vw]"
                  />
                </div>
              </div>
            </div>

            {/* Horizontal Divider in the gap */}
            <div className="col-span-1 md:col-span-2 h-px md:h-[3.4vw] relative">
              <HorizontalDivider className="absolute top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Unlimited Training Data */}
            <div className="pb-8 md:pb-[2.22vw] md:pr-[1.11vw]">
              <SectionTitle
                icon={
                  <Infinity
                    className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                }
                title="Unlimited Training Data"
              />
              <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-[#667185] mb-6 md:mb-[2.78vw]">
                There is no limit to how much your bot can learn. Provide links,
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                files or manually write content to teach the bot.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-[1.67vw] mt-6 md:mt-[2.78vw]">
                <div className="flex justify-center">
                  <div className="relative w-full h-32 md:w-[15.28vw] md:h-[9.17vw]">
                    <Image
                      src={webCrawlerIcon}
                      alt="Web Crawler"
                      layout="responsive"
                      objectFit="contain"
                      className="md:ml-[1.22vw]"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full h-32 md:w-[15.28vw] md:h-[9.17vw]">
                    <Image
                      src={bulkImportIcon}
                      alt="Bulk Import"
                      layout="responsive"
                      objectFit="contain"
                      className="md:mt-[1.67vw] md:ml-[-1.22vw]"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full h-32 md:w-[14.28vw] md:h-[9.17vw]">
                    <Image
                      src={writeManuallyIcon}
                      alt="Write Manually"
                      layout="responsive"
                      objectFit="contain"
                      className="md:ml-[1.22vw]"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full h-32 md:w-[15.28vw] md:h-[9.17vw]">
                    <Image
                      src={fileImportIcon}
                      alt="File Import"
                      layout="responsive"
                      objectFit="contain"
                      className="md:mt-[1.27vw] md:ml-[-1.5vw]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligent Agent Handoff */}
            <div className="pb-8 md:pb-[2.22vw] md:pl-[1.11vw]">
              <SectionTitle
                icon={
                  <GitCompare
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
                    src={handoffIcon}
                    alt="Intelligent Agent Handoff"
                    layout="responsive"
                    objectFit="scale-down"
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

export default CollaborateWithAIBot;

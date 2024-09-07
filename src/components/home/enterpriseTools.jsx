import React from "react";
import Image from "next/image";
import { Workflow, Infinity } from "lucide-react";

// Import SVG assets
import userIcon from "../../../public/assets/user-icon.svg";
import freshDeskIcon from "../../../public/assets/freshchat-2-icon.svg";
import checkIcon from "../../../public/assets/bot-9-icon.svg";
import mailIcon from "../../../public/assets/mail-icon.svg";

const IconWrapper = ({ children }) => (
  <div className="mr-2 md:mr-[0.42vw] p-1 md:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 md:w-[1.81vw] md:h-[1.81vw] flex items-center justify-center">
    {children}
  </div>
);

const VerticalDivider = () => (
  <div className="hidden md:block absolute left-[33.33vw] top-0 bottom-0 w-[0.07vw] bg-gray-200"></div>
);

const HorizontalDivider = () => (
  <div className="w-full h-px md:h-[0.07vw] bg-gray-200 my-8 md:my-[2.22vw]"></div>
);

const EnterpriseTools = () => {
  return (
    <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#F7F8FA] border-t border-gray-200 border-dashed">
      <div className="relative w-full md:w-[100vw] mx-auto py-16 md:py-[8.89vw] px-4 md:px-[0.28vw] enterprise-tools-container">
        {/* Decorative Elements - Only visible on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          {/* Horizontal lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[8.81vw] border-t border-[#D0D5DD]"></div>
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
            <div className="w-full md:w-[32.5vw] md:pr-[3.33vw] mb-8 md:mb-0">
              <h2 className="font-manrope text-3xl md:text-[2.22vw] font-[500] leading-tight md:leading-[3.06vw] text-gray-900 mb-4 md:mb-[2.22vw] text-left">
                The Enterprise tools to power your workflow
              </h2>
              <p className="font-manrope text-lg md:text-[1.39vw] font-[400] leading-relaxed md:leading-[2.08vw] text-gray-600 text-left">
                Streamline workflows with integrations, communication tools &
                authentication services
              </p>
            </div>

            {/* Right Side */}
            <div className="flex-1">
              {/* Providing Instructions Section */}
              <div className="mb-8 md:mb-[3.33vw]">
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[500] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
                  <IconWrapper>
                    <Workflow
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Providing Instructions
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-gray-600 mb-6 md:mb-[2.78vw]">
                  Create guidelines that dictate how your bot will respond to
                  customer queries - teach your bot to speak like you.
                </p>

                <div className="relative mb-6 md:mb-[2.22vw] pl-0 md:pl-[2.22vw]">
                  {/* When a User reports a bug rectangle */}
                  <div className="bg-white border border-gray-200 p-4 md:p-[1.11vw] mb-4 md:mb-[1.67vw] flex items-center w-full md:w-fit">
                    <div className="w-12 h-12 md:w-[3.33vw] md:h-[3.33vw] flex-shrink-0 mr-4 md:mr-[1.11vw] bg-gray-100 flex items-center justify-center">
                      <Image
                        src={userIcon}
                        alt="User"
                        width={188}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-manrope text-sm md:text-[1.11vw] font-[400] leading-tight md:leading-[1.53vw] text-left">
                      When a User reports a bug, follow these 2 steps:
                    </p>
                  </div>

                  {/* <div className="hidden md:block absolute left-[21.67vw] top-[5.69vw] w-[0.14vw] h-[3.61vw] bg-gradient-to-b from-[#EDF5FC] via-[#C3E1F1] to-[#5755FF]"></div> */}
                  <div className="absolute left-[21.67vw] top-[5.69vw] w-[0.14vw] h-[3.11vw] bg-gradient-to-b from-[#EDF5FC] via-[#C3E1F1] to-[#5755FF]"></div>

                  {/* Step 1 */}
                  <div className="ml-0 md:ml-[3.89vw] mb-4 md:mb-[1.11vw]">
                    <p className="text-sm md:text-[0.97vw] text-gray-500 mb-2 md:mb-[0.56vw]">
                      Step 1:
                    </p>
                    <div className="bg-white border border-gray-200 p-4 md:p-[1.11vw] flex items-center w-full md:w-fit">
                      <div className="w-12 h-12 md:w-[3.33vw] md:h-[3.33vw] flex-shrink-0 mr-4 md:mr-[1.11vw] bg-gray-100 flex items-center justify-center">
                        <Image
                          src={freshDeskIcon}
                          alt="Freshdesk"
                          width={188}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <p className="font-manrope text-sm md:text-[1.11vw] font-[400] leading-tight md:leading-[1.53vw] text-left">
                        Use{" "}
                        <span className="text-indigo-600 font-medium">
                          Freshdesk
                        </span>{" "}
                        integration to create a ticket
                      </p>
                    </div>
                  </div>

                  {/* <div className="hidden md:block absolute left-[21.67vw] top-[15vw] w-[0.14vw] h-[3.06vw] bg-gradient-to-b from-[#EDF5FC] via-[#C3E1F1] to-[#5755FF]"></div> */}
                  <div className="absolute left-[21.67vw] top-[14.87vw] w-[0.14vw] h-[2.46vw] bg-gradient-to-b from-[#EDF5FC] via-[#C3E1F1] to-[#5755FF]"></div>

                  {/* Step 2 */}
                  <div className="ml-0 md:ml-[1.11vw]">
                    <p className="text-sm md:text-[0.97vw] text-gray-500 mb-2 md:mb-[0.56vw]">
                      Step 2:
                    </p>
                    <div className="bg-white border border-gray-200 p-4 md:p-[1.11vw] flex items-center w-full md:w-fit">
                      <div className="w-12 h-12 md:w-[3.33vw] md:h-[3.33vw] flex-shrink-0 mr-4 md:mr-[1.11vw] bg-gray-100 flex items-center justify-center">
                        <Image
                          src={checkIcon}
                          alt="Check"
                          width={188}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <p className="font-manrope text-sm md:text-[1.11vw] font-[400] leading-tight md:leading-[1.53vw] text-left">
                        Thank the user for their feedback
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="mt-8 md:mt-[2.78vw] mb-4 md:mb-[1.39vw]">
                <HorizontalDivider />
              </div>

              {/* Creating Custom Actions Section */}
              <div>
                <h2 className="font-manrope text-xl md:text-[1.39vw] font-[500] leading-tight md:leading-[2.08vw] text-left mb-4 md:mb-[1.11vw] flex items-center">
                  <IconWrapper>
                    <Infinity
                      className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>
                  <span className="ml-2 md:ml-[0.42vw]">
                    Creating Custom Actions
                  </span>
                </h2>
                <div className="w-full h-px md:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 md:mb-[1.67vw]"></div>
                <p className="font-manrope text-base md:text-[1.11vw] font-[400] leading-relaxed md:leading-[1.67vw] text-left text-gray-600">
                  Bot9 allows you to integrate with any social media platform.
                  Stay connected with your customers - ALWAYS.
                </p>

                {/* Mail Image */}
                <div className="ml-0 md:ml-[0.56vw] mb-2 md:mb-[0.47vw] relative">
                  <div className="relative w-full md:w-[36.88vw] h-48 md:h-[26.6vw]">
                    <Image
                      src={mailIcon}
                      alt="Mail Icon"
                      layout="responsive"
                      objectFit="scale-d"
                      style={{
                        filter:
                          "drop-shadow(0px 4px 2px rgba(38, 35, 140, 0.05)) drop-shadow(0px 6px 14px rgba(38, 35, 140, 0.08))",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTools;

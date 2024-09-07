"use client";
import React from "react";
import Button from "../common/button";
import { FolderSync, FolderHeart, CircleCheck, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-[100vw] overflow-hidden">
      <div className="relative w-full max-w-[100vw] mx-auto pt-16 sm:pt-[10vw] px-4 sm:px-[0.28vw]">
        {/* Decorative elements - Only visible on desktop */}
        <div className="hidden sm:block">
          {/* Gradient Blob */}
          <div className="absolute w-[40.97vw] h-[10.14vw] left-[calc(45%-11.81vw)] top-[42.71vw] bg-gradient-to-r from-[#5755FF] to-[#33BBC5] filter blur-[4.86vw] rounded-[8.33vw] z-0 opacity-100"></div>
          {/* Horizontal Lines */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[37.85vw] border-t border-dashed border-[#D0D5DD]">
            <div className="absolute w-6 h-0.5 left-1/2 -translate-x-1/2 -top-[2px] bg-[#98A2B3]"></div>
          </div>
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[42.01vw] border-t border-[#D0D5DD]"></div>
          {/* Vertical Lines */}
          <div className="absolute w-[0.07vw] h-full left-[calc(50%-35.14vw)] top-0 border-r border-dashed border-[#D0D5DD]"></div>
          <div className="absolute w-[0.07vw] h-full left-[calc(50%-39.27vw)] top-0 border-r  border-[#E5E7EB]"></div>
          <div className="absolute w-[0.07vw] h-full right-[calc(50%-39.27vw)] top-0 border-r  border-gray-200"></div>
          <div className="absolute w-[0.07vw] h-full right-[calc(50%-35.14vw)] top-0 border-r border-dashed border-[#D0D5DD]"></div>
          {/* Additional Vertical Lines */}
          <div className="absolute w-[0.07vw] h-[8.96vw] left-[calc(50%-21.81vw)] top-[28.89vw] bg-gradient-to-b from-[#F7F8FA] to-[#E4E7EC]"></div>
          {/* Corner Elements */}
          <div className="absolute w-[1.66vw] h-[1.66vw] left-[14.1vw] top-[37.08vw] z-10">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.743vw] bg-gray-400" />
            <div className="absolute w-[1.66vw] h-[0.138vw] top-[0.743vw] bg-gray-400" />
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
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-manrope text-4xl sm:text-[3.89vw] font-[500] leading-tight sm:leading-[5vw] text-[#101828] mb-4 sm:mb-[1.67vw] max-w-full sm:max-w-[52.08vw] text-center">
            Simple Pricing that <span className="text-[#5755FF]">scales</span>
            <br />
            with <span className="text-[#5755FF]">your business</span>
          </h1>
          <p className="font-manrope text-lg sm:text-[1.39vw] font-[400] leading-relaxed sm:leading-[2.08vw] text-[#667185] mb-6 sm:mb-[2.22vw] max-w-full sm:max-w-[52.08vw] text-center">
            Train a secure AI on your technical resources that answers customer
            questions so your team doesn&apos;t have to.
          </p>
          <div className="flex justify-center items-center w-full sm:w-auto mb-[5.56vw]">
            <div className="w-full sm:w-[10.4vw] h-12 sm:h-[3.3vw] flex items-center justify-center mb-1 sm:mb-[0.3vw]">
              <Button
                variant="primary"
                size="custom"
                className="w-[128px] sm:w-[8.88vw] h-[40px] sm:h-[2.77vw] flex items-center justify-center !p-0"
                onClick={() => window.open("https://app.bot9.ai/signup")}
              >
                <span className="whitespace-nowrap font-manrope text-base sm:text-[1.11vw] font-[600] leading-[1.66vw]">
                  Build my Bot
                </span>
              </Button>
            </div>
          </div>

          {/* Pricing content */}
          <div className="bg-white rounded-none w-[78.4vw] h-auto relative z-10 p-[1.67vw] flex mt-[4.86vw]">
            {/* Starter Plan */}
            <div className="flex-1 pr-[1.67vw] border-r border-gray-200">
              <div className="flex items-center mb-[1.11vw]">
                <div className="mr-[1vw] p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-[1.81vw] h-[1.81vw] flex items-center justify-center">
                  <FolderSync
                    className="w-[1.11vw] h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-manrope text-[1.67vw] font-[500] text-[#101928]">
                  Starter
                </h3>
              </div>
              <div className="w-full h-[0.07vw] border-t border-dashed border-gray-200 mb-[1.11vw]"></div>
              <p className="font-manrope text-[2.22vw] font-[600] text-[#101928] mb-[0.83vw]">
                $199/month
              </p>
              <p className="font-manrope text-[1.11vw] text-[#667185] mb-[3.33vw]">
                Ideal for startups and small businesses craving essential chat
                automation.
              </p>
              <ul className="space-y-[2.55vw] mb-[11.11vw]">
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  Upto 500 Support Responses per month
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  5,000 contacts storage
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  5 custom instructions
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  1 AI Chatbot
                </li>
              </ul>
              <Button
                variant="primary"
                size="custom"
                className="w-full sm:w-[13.89vw] h-[3.47vw] flex items-center justify-between !p-0 px-[1.11vw]"
                onClick={() => window.open("https://app.bot9.ai/signup")}
              >
                <span className="whitespace-nowrap font-manrope text-[1.11vw] font-[600] ml-[1.11vw]">
                  Get Starter
                </span>
                <ArrowRight className="w-[3.39vw] h-[1.39vw]"/>
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="flex-1 pl-[1.67vw]">
              <div className="flex items-center mb-[1.11vw]">
                <div className="mr-[1vw] p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-[1.81vw] h-[1.81vw] flex items-center justify-center">
                  <FolderHeart
                    className="w-[1.11vw] h-[1.11vw]"
                    color="#5755FF"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-manrope text-[1.67vw] font-[500] text-[#101928]">
                  Professional
                </h3>
              </div>
              {/* Dotted underline */}
              <div className="w-full h-[0.07vw] border-t border-dashed border-gray-200 mb-[1.11vw]"></div>
              <p className="font-manrope text-[2.22vw] font-[600] text-[#101928] mb-[0.83vw]">
                $499/month
              </p>
              <p className="font-manrope text-[1.11vw] text-[#667185] mb-[3.33vw]">
                Great for medium-sized businesses seeking more
                <br />
                customization and features
              </p>
              <ul className="space-y-[2.4vw] mb-[3.33vw]">
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  Upto 1,000 Support Responses per month
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  50,000 contacts storage
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  10 custom instructions
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  5 AI Chatbots
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  5 team members
                </li>
                <li className="flex items-center font-manrope text-[1.11vw] text-[#101928]">
                  <CircleCheck
                    className="w-[1.39vw] h-[1.39vw] text-[#12B76A] mr-[0.56vw]"
                    strokeWidth={1.5}
                  />
                  API Access (Rate limit)
                </li>
              </ul>
              <Button
                variant="primary"
                size="custom"
                className="w-full sm:w-[13.89vw] h-[3.47vw] flex items-center justify-between !p-0 px-[1.11vw]"
                onClick={() => window.open("https://app.bot9.ai/signup")}
              >
                <span className="whitespace-nowrap font-manrope text-[1.11vw] font-[600] ml-[1.11vw]">
                  Get Professional
                </span>
                <ArrowRight className="w-[3.39vw] h-[1.39vw]"/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

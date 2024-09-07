"use client";
import React from "react";
import Image from "next/image";
import { CircleFadingPlus, CircleCheck, ArrowRight } from "lucide-react";
import Price from "../../../public/assets/pricing-image.svg";
import { useRouter } from "next/navigation";
import Button from "../common/button";

const Middle = () => {
  const router = useRouter();
  return (
    <section className="relative w-full sm:w-[100vw] overflow-hidden bg-[#F7F8FA]">
      <div className="relative w-full sm:w-[100vw] mx-auto px-4 sm:px-[0.28vw]">
        {/* Decorative elements - Only visible on desktop */}
        <div className="hidden sm:block">
          {/* Horizontal Line */}
          <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[31.54vw] border-t border-[#D0D5DD]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-full sm:max-w-[78.51vw] mx-auto sm:mx-[9.98vw] mb-[10.83vw]">
          <div className="w-full bg-white p-6 sm:p-[2.22vw] border-t border-b sm:border border-gray-200 relative z-20">
            {/* Enterprise Section */}
            <div className="flex flex-col sm:flex-row sm:h-[27vw]">
              <div className="w-full sm:w-1/2 sm:pr-[2.22vw]">
                <h2 className="font-manrope text-xl sm:text-[1.39vw] font-[600] leading-tight sm:leading-[2.08vw] mb-4 sm:mb-[1.11vw] flex items-center">
                  <div className="mr-2 sm:mr-[0.42vw] p-1 sm:p-[0.14vw] bg-[#F5F5FF] rounded-md border border-[#D9D8FD] w-8 h-8 sm:w-[1.81vw] sm:h-[1.81vw] flex items-center justify-center">
                    <CircleFadingPlus
                      className="w-5 h-5 sm:w-[1.11vw] sm:h-[1.11vw]"
                      color="#5755FF"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="ml-2 sm:ml-[0.42vw]">Enterprise</span>
                </h2>
                {/* Keeping the existing dotted line */}
                <div className="w-full h-px sm:h-[0.07vw] border-t border-dashed border-gray-200 mb-4 sm:mb-[1.11vw]"></div>
                <p className="font-manrope text-base sm:text-[1.11vw] font-[400] leading-relaxed sm:leading-[1.67vw] text-left text-[#667185] mb-6 sm:mb-[3.33vw]">
                  For businesses who want automation with robust security
                  features and oversight capabilities.
                </p>
                <ul className="space-y-4 sm:space-y-[2.5vw] mb-6 sm:mb-[3.47vw]">
                  <li className="flex items-center font-manrope text-base sm:text-[1.11vw] text-[#101928]">
                    <CircleCheck
                      className="w-5 h-5 sm:w-[1.39vw] sm:h-[1.39vw] text-[#12B76A] mr-2 sm:mr-[0.56vw]"
                      strokeWidth={1.5}
                    />
                    Advanced Admin permissions
                  </li>
                  <li className="flex items-center font-manrope text-base sm:text-[1.11vw] text-[#101928]">
                    <CircleCheck
                      className="w-5 h-5 sm:w-[1.39vw] sm:h-[1.39vw] text-[#12B76A] mr-2 sm:mr-[0.56vw]"
                      strokeWidth={1.5}
                    />
                    SAML Sign On (SSO)
                  </li>
                  <li className="flex items-center font-manrope text-base sm:text-[1.11vw] text-[#101928]">
                    <CircleCheck
                      className="w-5 h-5 sm:w-[1.39vw] sm:h-[1.39vw] text-[#12B76A] mr-2 sm:mr-[0.56vw] bg-rounded"
                      strokeWidth={1.5}
                    />
                    Custom Data Retention
                  </li>
                </ul>
              <Button
              variant="primary"
              size="custom"
              className="w-1/2 sm:w-[13.89vw] h-12 sm:h-[3.47vw] flex items-center justify-between !p-0 px-4 sm:px-[1.11vw]"
              onClick={() => window.open("https://calendly.com/bot9")}
            >
              <span className="whitespace-nowrap font-manrope text-sm sm:text-[1.11vw] font-[600] ml-2 sm:ml-[1.11vw]">
              Get in touch
              </span>
              <ArrowRight className="w-4 h-4 sm:w-[1.39vw] sm:h-[1.39vw] mr-[0.5rem] sm:mr-[0.8vw]"/>
            </Button>
              </div>
              <div className="w-full sm:w-1/2 mt-8 sm:mt-0 flex items-center justify-center">
                <div className="relative w-full h-64 sm:w-[31.72vw] sm:h-[28.83vw]">
                  <Image
                    src={Price}
                    alt="Enterprise features"
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

export default Middle;
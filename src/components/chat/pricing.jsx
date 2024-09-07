"use client";
import React from "react";
import Button from "../common/button";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const router = useRouter();
  return (
    <section className="py-12 md:py-[5.55vw] px-4 md:px-[1.11vw] bg-gradient-to-b from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements - Only visible on desktop */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <div className="h-[23.19vw] w-[0.069vw] bg-gray-200 top-[5.53vw] left-[9.52vw] absolute" />
        <div className="h-[23.19vw] w-[0.069vw] bg-gray-200 top-[2.57vw] right-[9.52vw] absolute" />
        <div className="absolute left-0 right-0 top-[5.51vw] h-[0.694vw] bg-black-300 border-dashed border-t border-gray-200" />
        <div className="absolute bottom-[5.51vw] left-0 right-0 bg-black-300 border-dashed border-b border-gray-200" />
      </div>

      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto relative border md:border-0">
        {/* Top gradient */}
        <div className="absolute w-[50%] h-[3.472vw] -top-[0.277vw] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5755FF] to-[#33BBC5] opacity-30 filter blur-[3.472vw] rounded-[6.944vw] z-1 hidden md:block"></div>
        {/* Bottom gradient */}
        <div className="absolute w-[50%] h-[2.77vw] -bottom-[0.833vw] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5755FF] to-[#33BBC5] opacity-50 filter blur-[3.472vw] rounded-[6.944vw] z-0 hidden md:block"></div>

        <div className="bg-white p-6 md:p-[3.33vw] flex flex-col md:flex-row justify-between items-start relative">
          {/* Vertical dashed line in the middle - Only visible on desktop */}
          <div className="absolute top-0 bottom-0 right-[40%] w-[0.0694vw] border-l border-dashed border-gray-200 hidden md:block"></div>

          {/* Top left plus sign - Only visible on desktop */}
          <div className="absolute -top-[0.833vw] -left-[0.873vw] w-[1.66vw] h-[1.66vw] z-30 hidden md:block">
            <div className="relative w-full h-full">
              <div className="absolute inset-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1.66vw] h-[0.138vw] bg-gray-400"></div>
                <div className="h-[1.66vw] w-[0.138vw] bg-gray-400 absolute"></div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-[2.77vw] leading-tight text-gray-900 mb-4 md:mb-[1.66vw]">
              Simple pricing that scales with your business
            </h2>
            <p className="text-lg md:text-[1.38vw] leading-relaxed md:leading-[1.944vw] text-gray-600 mt-4 md:mt-[2.77vw] mb-0">
              A code-free chatbot builder to seamlessly build and train a
              customer service chatbot for your business
            </p>
          </div>

          <div className="w-full md:w-2/5 flex flex-col items-center md:items-end">
            <div className="text-center md:text-right mb-6 md:mb-[2.22vw] relative">
              <span className="absolute -top-4 md:-top-[1.66vw] left-0 text-sm md:text-[0.9722vw] text-gray-500">
                Starts from
              </span>
              <span className="text-6xl md:text-[8.33vw] font-bold text-indigo-600 leading-none">
                $199
              </span>
              <span className="absolute -bottom-4 md:-bottom-[1.11vw] right-0 text-sm md:text-[0.972vw] text-gray-500">
                per month
              </span>
            </div>
            <Button variant="outline" onClick={() => router.push("/pricing")} className="z-30">View Pricing</Button>
          </div>

          {/* Bottom right plus sign - Only visible on desktop */}
          <div className="absolute -bottom-[0.833vw] -right-[0.833vw] w-[1.66vw] h-[1.66vw] z-30 hidden md:block">
            <div className="relative w-full h-full">
              <div className="absolute inset-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1.66vw] h-[0.1388vw] bg-gray-400"></div>
                <div className="h-[1.66vw] w-[0.138vw] bg-gray-400 absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

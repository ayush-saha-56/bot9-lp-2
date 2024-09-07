"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "../common/button";

const Hero = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const images = [
    {
      src: "/assets/healthSlider.svg",
      alt: "Healthcare",
      title: "Healthcare",
      description:
        "AI agents conduct initial patient triage based on symptoms, manage appointments, and provide essential health information, streamlining patient care processes.",
      shadowColor: "#FFE59A",
    },
    {
      src: "/assets/eduSlider.svg",
      alt: "Education",
      title: "Education",
      description:
        "AI agents assist with course registration, fee payments & answer academic questions. They guide students through application processes and deadline reminders.",
      shadowColor: "#FFD6A5",
    },
    {
      src: "/assets/commuSlider.svg",
      alt: "Communications",
      title: "Communications",
      description:
        "AI agents manage customer accounts, troubleshoot common issues, handle service upgrades, and provide personalized recommendations for plans and services.",
      shadowColor: "#FAAFA5",
    },
    {
      src: "/assets/logisSlider.svg",
      alt: "Logistics",
      title: "Logistics",
      description:
        "AI agents can track shipments in real-time, optimize delivery routes, manage warehouse operations, and forecast demand to reduce delays.",
      shadowColor: "#A6E3E9",
    },
    {
      src: "/assets/travelSlider.svg",
      alt: "Travel & Tourism",
      title: "Travel & Tourism",
      description:
        "AI agents help plan itineraries, manage bookings, provide real-time travel updates, and offer customer support during travel.",
      shadowColor: "#CBF1F5",
    },
    {
      src: "/assets/agriSlider.svg",
      alt: "Agriculture",
      title: "Agriculture",
      description:
        "AI agents monitor crop health, optimize irrigation schedules, predict weather impacts, and manage farm equipment maintenance.",
      shadowColor: "#E6FFE6",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPosition((prevPosition) => {
        const newPosition = prevPosition - 0.1;
        return newPosition <= -100 ? 0 : newPosition;
      });
    }, 16); // Approximately 60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-[100vw] overflow-hidden">
      {/* Top Left SVG element */}
      <div className="absolute left-[12.15vw] top-[13.68vw] z-10">
        <Image
          src="/assets/top-left-svg-ai-agent.svg"
          alt="Decorative SVG"
          width={55}
          height={72}
          priority
        />
      </div>

      {/* New Bottom Right SVG element */}
      <div className="absolute right-[9.58vw] top-[22.29vw] z-10">
        <Image
          src="/assets/bottom-right-svg.svg"
          alt="Decorative Bottom Right SVG"
          width={58}
          height={74.36}
          priority
        />
      </div>

      <div className="relative w-full max-w-[100vw] mx-auto pt-[10vw] pb-[1.94vw] px-[0.28vw]">
        {/* Horizontal Lines */}
        <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[37.85vw] border-t border-dashed border-[#D0D5DD]">
          <div className="absolute w-6 h-0.5 left-1/2 -translate-x-1/2 -top-[2px] bg-[#98A2B3]"></div>
        </div>
        <div className="absolute w-screen h-[0.07vw] left-1/2 -translate-x-1/2 top-[42.01vw] border-t border-[#D0D5DD]"></div>

        {/* Vertical Lines */}
        <div className="absolute w-[0.07vw] h-full left-[calc(50%-35.14vw)] top-0 border-r border-dashed border-[#D0D5DD]"></div>
        <div className="absolute w-[0.07vw] h-full left-[calc(50%-31.32vw)] top-0 border-r border border-[#E5E7EB]"></div>
        <div className="absolute w-[0.07vw] h-full right-[calc(50%-35.14vw)] top-0 border-r border-dashed border-[#D0D5DD]"></div>
        {/* Additional Vertical Lines */}
        <div
          className="absolute w-[0.07vw] h-[8.96vw] left-[calc(50%-21.81vw)] top-[28.89vw]"
          style={{
            background: "linear-gradient(180deg, #F7F8FA 0%, #E4E7EC 100%)",
          }}
        ></div>
        <div
          className="absolute w-[0.07vw] h-[22.43vw] right-[calc(50%-39.17vw)] top-[15.35vw]"
          style={{
            background: "linear-gradient(180deg, #F7F8FA 0%, #E4E7EC 100%)",
          }}
        ></div>
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
        {/* Ellipses */}
        <div className="absolute w-[1.11vw] h-[1.11vw] left-[21.52vw] top-[40.069vw] bg-[#F9FAFB] border border-[#E4E7EC] rounded-full"></div>
        <div className="absolute w-[1.11vw] h-[1.11vw] left-[23.45vw] top-[40.069vw] bg-[#F9FAFB] border border-[#E4E7EC] rounded-full"></div>
        <div className="absolute w-[1.11vw] h-[1.11vw] left-[25.48vw] top-[40.069vw] bg-[#F9FAFB] border border-[#E4E7EC] rounded-full"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-manrope text-[3.89vw] font-[500] leading-[5vw] text-[#101828] mb-[1.67vw] max-w-[52.08vw] text-center">
            Empower Your Business
            <br />
            with Next-<span className="text-[#5755FF]">Gen AI Agents</span>
          </h1>
          <p className="font-manrope text-[1.39vw] font-[400] leading-[2.08vw] text-[#667185] mb-[2.22vw] max-w-[52.08vw] text-center">
            Revolutionize customer interactions & operations with AI Agents that
            automate tasks, enhance personalization, and scale effortlessly.
          </p>
          <div className="flex justify-center items-center mb-[4vw]">
            <div className="w-[10.4vw] h-[3.3vw] flex items-center justify-center mb-[0.3vw]">
              <Button
                variant="primary"
                size="custom"
                className="w-[10.88vw] h-[2.77vw] flex items-center justify-center !p-0"
                onClick={() => window.open("https://app.bot9.ai/signup")}
              >
                <span
                  className="whitespace-nowrap font-manrope text-[1.11vw] font-[600] leading-[1.66vw]"
                >
                  Explore AI Agents
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-[10.90vw] w-full bg-sky-50 py-[1.11vw] overflow-hidden">
            <div className="relative w-full h-full overflow-hidden">
              <div className="img_wrapper flex">
                {[...images, ...images].map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-[33.33vw] px-4">
                    <div className="relative w-[12vw] h-[12vw] mb-[1.66vw]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-[1.5vw] font-semibold mb-2">
                      {image.title}
                    </h3>
                    <div className="w-[22.22vw] h-[9.72vw] overflow-hidden">
                      <p className="text-[0.97vw] leading-[1.66vw] text-gray-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cc-hero-height {
          height: calc(100vh - 46px - 40px);
        }

        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .img_wrapper {
          display: inline-flex;
          animation: 35s slide infinite linear;
        }

        .right::after {
          position: absolute;
          right: 0;
          width: 18rem;
          height: 100%;
          content: "";
          z-index: 2;
          background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
        }
      `}</style>
    </section>
  );
};

export default Hero;

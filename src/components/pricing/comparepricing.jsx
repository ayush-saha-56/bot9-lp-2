"use client";
import React, { useState, useEffect } from "react";
import { CircleCheck } from "lucide-react";
import Button from "../common/button";

const PricingComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState("starter");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      category: "Automation",
      items: [
        { name: "No. of instructions", starter: "5", professional: "10" },
        { name: "Hand off to Support Team", starter: true, professional: true },
        { name: "Article suggestions", starter: true, professional: true },
        { name: "Multi lingual support", starter: true, professional: true },
      ],
    },
    {
      category: "Support Channels",
      items: [
        { name: "Customizable chat widget", starter: true, professional: true },
        { name: "Discord", starter: true, professional: true },
        { name: "Intercom", starter: true, professional: true },
        { name: "Crisp", starter: true, professional: true },
        { name: "Whatsapp", starter: false, professional: true },
      ],
    },
    {
      category: "Ticketing",
      items: [
        { name: "Zendesk", starter: false, professional: true },
        { name: "Freshdesk", starter: false, professional: true },
      ],
    },
    {
      category: "Apps",
      items: [
        { name: "Zapier", starter: false, professional: true },
        { name: "Slack", starter: false, professional: true },
      ],
    },
    {
      category: "Training",
      items: [
        { name: "God's eye", starter: true, professional: true },
        { name: "PDF file import", starter: true, professional: true },
        { name: "Bulk links import", starter: true, professional: true },
        { name: "Write articles", starter: true, professional: true },
      ],
    },
    {
      category: "Contacts",
      items: [
        { name: "Storage", starter: "5,000", professional: "50,000" },
        {
          name: "Create custom attributes",
          starter: "Unlimited",
          professional: "Unlimited",
        },
        { name: "Export Contacts", starter: true, professional: true },
      ],
    },
  ];

  const VerticalDivider = ({ className = "", height, top }) => (
    <div
      className={`hidden sm:block absolute w-[0.07vw] bg-gray-200 ${className}`}
      style={{ height, top }}
    ></div>
  );

  const HorizontalDivider = ({ className = "" }) => (
    <div
      className={`border-t my-[0.07vw] border-gray-200 border-dashed mx-[1.67vw] ${className}`}
    ></div>
  );

  return (
    <section className="relative w-[100vw] overflow-hidden bg-[#F5F5FF] border-t border-gray-300 border-dashed">
      <div className="relative w-full max-w-[100vw] mx-auto py-16 sm:pt-[4.44vw] sm:pb-[4.44vw] px-4 sm:px-[0.28vw]">
        <h1 className="font-manrope text-3xl sm:text-[2.78vw] font-[500] leading-tight sm:leading-[3.89vw] text-gray-900 mb-2 sm:mb-[0.14vw] text-center">
          Compare our Pricing
        </h1>
        <p className="font-manrope text-lg sm:text-[1.39vw] font-[400] leading-relaxed sm:leading-[2.08vw] text-[#667185] mb-8 sm:mb-[3.33vw] text-center">
          to see what works best for you
        </p>

        <div className="w-full max-w-full sm:max-w-[78.19vw] bg-white p-6 sm:p-[2.22vw] border border-gray-200 relative z-10 mx-auto">
          {/* Mobile Plan Selection */}
          <div
            className={`sm:hidden ${
              isSticky
                ? "fixed top-0 left-0 right-0 bg-white z-50 shadow-md"
                : ""
            }`}
          >
            <div className="flex justify-between p-4">
              <Button
                variant={selectedPlan === "starter" ? "primary" : "secondary"}
                size="custom"
                className="w-[45%] h-[2.77vw] flex items-center justify-center !p-0"
                onClick={() => setSelectedPlan("starter")}
              >
                <span className="whitespace-nowrap font-manrope text-base sm:text-[1.11vw] font-[600] leading-[1.66vw]">
                  Starter
                </span>
              </Button>
              <Button
                variant={
                  selectedPlan === "professional" ? "primary" : "secondary"
                }
                size="custom"
                className="w-[45%] h-[2.77vw] flex items-center justify-center !p-0"
                onClick={() => setSelectedPlan("professional")}
              >
                <span className="whitespace-nowrap font-manrope text-base sm:text-[1.11vw] font-[600] leading-[1.66vw]">
                  Professional
                </span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-x-[3.19vw] relative">
            {/* Initial vertical dividers */}
            <VerticalDivider
              className="left-1/3 -ml-[0.035vw]"
              height="calc(100% - 3.4vw)"
              top="0"
            />
            <VerticalDivider
              className="right-1/3 -mr-[0.035vw]"
              height="calc(100% - 3.4vw)"
              top="0"
            />

            {/* Headers */}
            <div>
              <h3 className="font-manrope text-xl sm:text-[1.39vw] font-[600] leading-tight sm:leading-[2.08vw] text-left mb-6 sm:mb-[1.67vw]">
                Features, Support & Integrations
              </h3>
              <HorizontalDivider className="mb-6 sm:mb-[1.67vw]" />
            </div>
            <div className="hidden sm:block">
              <h3 className="font-manrope text-xl sm:text-[1.39vw] font-[600] leading-tight sm:leading-[2.08vw] text-left mb-6 sm:mb-[1.67vw]">
                Starter ($199/mo)
              </h3>
              <HorizontalDivider className="mb-6 sm:mb-[1.67vw]" />
            </div>
            <div className="hidden sm:block">
              <h3 className="font-manrope text-xl sm:text-[1.39vw] font-[600] leading-tight sm:leading-[2.08vw] text-left mb-6 sm:mb-[1.67vw]">
                Professional ($499/mo)
              </h3>
              <HorizontalDivider className="mb-6 sm:mb-[1.67vw]" />
            </div>

            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="col-span-1 sm:col-span-3 mt-8 sm:mt-[2.22vw]">
                  {index > 0 && (
                    <HorizontalDivider className="mb-6 sm:mb-[1.67vw]" />
                  )}
                  <h4 className="font-manrope text-lg sm:text-[1.25vw] font-[600] leading-tight sm:leading-[1.87vw] text-left mb-4 sm:mb-[1.11vw]">
                    {feature.category}
                  </h4>
                </div>
                {feature.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <div className="font-manrope text-base sm:text-[1.11vw] font-[400] leading-relaxed sm:leading-[1.67vw] text-left text-[#667185] py-2 sm:py-[0.56vw]">
                      {item.name}
                    </div>
                    <div
                      className={`font-manrope text-base sm:text-[1.11vw] font-[400] leading-relaxed sm:leading-[1.67vw] text-left text-[#667185] py-2 sm:py-[0.56vw] ${
                        selectedPlan === "professional" ? "hidden sm:block" : ""
                      }`}
                    >
                      {typeof item.starter === "boolean" ? (
                        item.starter ? (
                          <CircleCheck
                            className="w-5 h-5 sm:w-[1.39vw] sm:h-[1.39vw] text-[#12B76A]"
                            strokeWidth={1.5}
                          />
                        ) : null
                      ) : (
                        item.starter
                      )}
                    </div>
                    <div
                      className={`font-manrope text-base sm:text-[1.11vw] font-[400] leading-relaxed sm:leading-[1.67vw] text-left text-[#667185] py-2 sm:py-[0.56vw] ${
                        selectedPlan === "starter" ? "hidden sm:block" : ""
                      }`}
                    >
                      {typeof item.professional === "boolean" ? (
                        item.professional ? (
                          <CircleCheck
                            className="w-5 h-5 sm:w-[1.39vw] sm:h-[1.39vw] text-[#12B76A]"
                            strokeWidth={1.5}
                          />
                        ) : null
                      ) : (
                        item.professional
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}

            {/* Continuous vertical dividers */}
            <VerticalDivider
              className="left-1/3 -ml-[0.035vw]"
              height="calc(100% - 3.4vw - 19.44vw)"
              top="19.44vw"
            />
            <VerticalDivider
              className="right-1/3 -mr-[0.035vw]"
              height="calc(100% - 3.4vw - 19.44vw)"
              top="19.44vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;

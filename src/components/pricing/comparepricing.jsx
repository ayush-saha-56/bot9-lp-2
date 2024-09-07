"use client";
import React, { useState } from "react";
import { CircleCheck } from "lucide-react";

const PricingComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState("starter");

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
        { name: "Create custom attributes", starter: "Unlimited", professional: "Unlimited" },
        { name: "Export Contacts", starter: true, professional: true },
      ],
    },
    {
      category: "Shared Inbox",
      items: [
        { name: "History", starter: "Unlimited", professional: "Unlimited" },
      ],
    },
    {
      category: "Analytics and Reporting",
      items: [
        { name: "Conversation volume report", starter: true, professional: true },
        { name: "CSV export", starter: true, professional: true },
      ],
    },
    {
      category: "API Access",
      items: [
        { name: "API access", starter: false, professional: true },
        { name: "Rate limit", starter: true, professional: false },
      ],
    },
    {
      category: "Help and Support",
      items: [
        { name: "Email & live chat support", starter: true, professional: true },
        { name: "Account manager", starter: false, professional: false },
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
    <section className="relative w-full overflow-hidden bg-[#F5F5FF] border-t border-gray-300 border-dashed">
      <div className="relative w-full max-w-[100vw] mx-auto py-8 sm:py-[4.44vw] px-4 sm:px-[0.28vw]">
        <h1 className="font-manrope text-2xl sm:text-[2.78vw] font-[500] leading-tight sm:leading-[3.89vw] text-gray-900 mb-2 sm:mb-[0.14vw] text-center">
          Compare our Pricing
        </h1>
        <p className="font-manrope text-base sm:text-[1.39vw] font-[400] leading-relaxed sm:leading-[2.08vw] text-[#667185] mb-6 sm:mb-[3.33vw] text-center">
          to see what works best for you
        </p>

        {/* Mobile Plan Selection - Separate, joined div */}
        <div className="sm:hidden mb-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${selectedPlan === "starter"
                    ? "text-white bg-[#5755FF]"
                    : "text-black bg-white hover:bg-gray-100"
                  } border border-gray-200 rounded-l-lg border-r-0`}
                onClick={() => setSelectedPlan("starter")}
              >
                Starter
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${selectedPlan === "professional"
                    ? "text-white bg-[#5755FF]"
                    : "text-black bg-white hover:bg-gray-100"
                  } border border-gray-200 rounded-r-lg`}
                onClick={() => setSelectedPlan("professional")}
              >
                Professional
              </button>
            </div>
          </div>
        </div>


        <div className="w-full max-w-full sm:max-w-[78.19vw] bg-white p-4 sm:p-[2.22vw] border border-gray-200 relative z-10 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-[3.19vw] gap-y-2 sm:gap-y-4 relative">
            {/* Desktop Headers - Hidden on mobile */}
            <div className="hidden sm:block">
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

            {/* Vertical dividers - Only visible on desktop */}
            <VerticalDivider
              className="left-1/3 -ml-[0.035vw] my-auto"
              height="calc(100% - 0.5vw)"
              top="0"
            />
            <VerticalDivider
              className="right-1/3 -mr-[0.035vw] my-auto"
              height="calc(100% - 0.5vw)"
              top="0"
            />

            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="col-span-2 sm:col-span-3 mt-6 sm:mt-[2.22vw]">
                  {index > 0 && (
                    <HorizontalDivider className="hidden sm:block mb-4 sm:mb-[1.67vw]" />
                  )}
                  <h4 className="font-manrope text-lg sm:text-[1.25vw] font-[600] leading-tight sm:leading-[1.87vw] text-left mb-3 sm:mb-[1.11vw]">
                    {feature.category}
                  </h4>
                </div>
                {feature.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <div className="font-manrope text-sm sm:text-[1.11vw] font-[400] leading-relaxed sm:leading-[1.67vw] text-left text-[#667185] py-2 sm:py-[0.56vw]">
                      {item.name}
                    </div>
                    <div className="font-manrope px-3 sm:px-0 text-sm sm:text-[1.11vw] font-[400] leading-[20px] sm:leading-[1.67vw] text-right sm:text-left text-[#667185] py-2 sm:py-[0.56vw]">
                      {typeof item[selectedPlan] === "boolean" ? (
                        item[selectedPlan] ? (
                          <CircleCheck
                            className="w-5 h-5 sm:w-[1.39vw] sm:h-[1.39vw] text-[#12B76A] inline-block sm:block ml-auto sm:ml-0"
                            strokeWidth={1.5}
                          />
                        ) : (
                          <span className="sm:hidden">-</span>
                        )
                      ) : (
                        item[selectedPlan]
                      )}
                    </div>
                    {/* Hidden column for desktop view */}
                    <div className="hidden sm:block font-manrope text-sm sm:text-[1.11vw] font-[400] leading-relaxed sm:leading-[1.67vw] text-left text-[#667185] py-2 sm:py-[0.56vw]">
                      {typeof item[selectedPlan === "starter" ? "professional" : "starter"] === "boolean" ? (
                        item[selectedPlan === "starter" ? "professional" : "starter"] ? (
                          <CircleCheck
                            className="w-5 h-5 sm:w-[1.39vw] sm:h-[1.39vw] text-[#12B76A]"
                            strokeWidth={1.5}
                          />
                        ) : null
                      ) : (
                        item[selectedPlan === "starter" ? "professional" : "starter"]
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
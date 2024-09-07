import React from "react";
import Image from "next/image";
import { Blocks } from "lucide-react";

import zendeskSvg from "../../../public/assets/zendesk.svg";
import messengerSvg from "../../../public/assets/messenger.svg";
import telegramSvg from "../../../public/assets/telegram.svg";
import whatsappSvg from "../../../public/assets/whatsapp.svg";
import slackSvg from "../../../public/assets/slack.svg";
import discordSvg from "../../../public/assets/discord.svg";
import intercomSvg from "../../../public/assets/intercom.svg";
import freshchatSvg from "../../../public/assets/freshchat.svg";
import zapierSvg from "../../../public/assets/zapier.svg";
import shopifySvg from "../../../public/assets/shopify.svg";

const IntegrationIcon = ({ svg }) => (
  <div className="flex items-center justify-center w-full h-12 sm:w-[9.72vw] sm:h-[3.33vw]">
    <Image
      src={svg}
      alt="Integration"
      layout="responsive"
      objectFit="contain"
      width={100}
      height={100}
    />
  </div>
);

const IconWrapper = ({ children }) => (
  <div className="mr-2 sm:mr-[0.55vw] p-1 sm:p-[0.069vw] bg-[#F5F5FF] rounded-md sm:rounded-[0.416vw] border border-[#D9D8FD] w-8 h-8 sm:w-[1.66vw] sm:h-[1.66vw] flex items-center justify-center">
    {children}
  </div>
);

const ConnectDataSources = () => {
  const topIntegrations = [
    { svg: zendeskSvg },
    { svg: messengerSvg },
    { svg: telegramSvg },
  ];

  const bottomIntegrations = [
    { svg: whatsappSvg },
    { svg: slackSvg },
    { svg: discordSvg },
    { svg: intercomSvg },
    { svg: freshchatSvg },
    { svg: zapierSvg },
    { svg: shopifySvg },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full sm:w-[100vw] py-8 sm:py-[4.44vw] px-4 sm:px-[2.22vw] connect-data-container">
        {/* Decorative Elements - Only visible on desktop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
          {/* Horizontal dashed lines */}
          <div className="absolute w-full h-[0.034vw] left-[50vw] -translate-x-[50vw] top-[16.31vw] border-t border-dashed border-gray-200 z-20" />
          <div className="absolute w-full h-[0.034vw] left-[50vw] -translate-x-[50vw] bottom-[4.42vw] border-t border-dashed border-gray-200 z-20" />

          {/* Gradient rectangle */}
          <div className="absolute w-[6.25vw] h-[0.138vw] left-[12vw] top-[16.28vw] bg-gradient-to-r from-[#EDF5FC] via-[#C3E1F1] to-[#5755FF] z-20" />

          {/* Vertical lines */}
          <div className="absolute w-[0.069vw] h-[24.3vw] left-[10.83vw] bottom-[3.1vw] bg-gray-200 z-30" />
          <div className="absolute w-[0.069vw] h-[25.9vw] right-[10.83vw] top-[14.93vw] bg-gray-200 z-30" />

          {/* Corner element */}
          <div className="absolute w-[1.66vw] h-[1.66vw] right-[10.03vw] bottom-[3.62vw] z-30">
            <div className="absolute w-[0.138vw] h-[1.66vw] left-[0.76vw] bg-[#98A2B3]" />
            <div className="absolute w-[1.66vw] h-[0.138vw] top-[0.76vw] bg-[#98A2B3]" />
          </div>
        </div>

        <div className="absolute w-[59.72vw] h-[17.36vw] left-[19.44vw] top-[10.416vw] bg-gradient-to-b from-[#98FF98] to-[#F1D12D] blur-[6.25vw] opacity-[0.17] hidden sm:block" />

        <div className="relative">
          <h1 className="font-manrope text-3xl sm:text-[2.77vw] font-[500] leading-tight sm:leading-[3.88vw] text-center mb-2 sm:mb-[0.55vw]">
            Connect your data sources
          </h1>
          <p className="font-manrope text-lg sm:text-[1.38vw] font-[400] leading-relaxed sm:leading-[2.08vw] text-[#667185] text-center mb-6 sm:mb-[3.33vw]">
            Streamline workflows with integrations, communication tools &
            <br className="hidden sm:inline" />
            authentication services
          </p>

          <div className="bg-gray-50 p-6 sm:p-[2.22vw] w-full sm:w-[78.33vw] mx-auto">
            <div className="flex items-center mb-4 sm:mb-[1.66vw]">
              <IconWrapper>
                <Blocks
                  className="w-5 h-5 sm:w-[1.11vw] sm:h-[1.11vw]"
                  color="#5755FF"
                  strokeWidth={2}
                />
              </IconWrapper>
              <h2 className="font-manrope text-xl sm:text-[1.38vw] font-[500] leading-tight sm:leading-[2.08vw] text-left ml-2 sm:ml-[0.416vw]">
                Seamless Integrations
              </h2>
            </div>

            <hr className="my-4 sm:my-[1.11vw] border-t border-gray-200" />

            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="w-full sm:max-w-[46.66vw] mb-4 sm:mb-0">
                <p className="font-manrope text-base sm:text-[1.11vw] font-[400] leading-relaxed sm:leading-[1.66vw] text-left text-[#667185] mb-4 sm:mb-[1.66vw]">
                  Bot9 allows you to integrate with any social media platform.
                  <br className="hidden sm:inline" />
                  Stay connected with your customers - ALWAYS.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-[0.95vw] mt-4 sm:mt-[2.5vw] w-full sm:w-[53vw]">
                {topIntegrations.map((integration, index) => (
                  <IntegrationIcon key={index} svg={integration.svg} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-7 gap-4 sm:gap-[1.11vw] mt-6 sm:mt-[1.38vw]">
              {bottomIntegrations.map((integration, index) => (
                <IntegrationIcon key={index} svg={integration.svg} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectDataSources;

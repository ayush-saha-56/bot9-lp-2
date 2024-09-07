"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-100 to-white py-8 md:py-[4.44vw] px-4 md:px-[1.11vw] border-t border-gray-300 border-dashed">
      <div className="max-w-[1280px] md:max-w-[88.88vw] w-full md:w-[93.05vw] mx-auto">
        <div className="bg-white rounded-lg md:rounded-[0.833vw] border border-gray-200 md:border-[0.138vw] p-6 md:p-[2.22vw]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-[2.22vw]">
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-center mb-4 md:mb-[1.11vw]">
                <Image
                  src="/assets/bot9.svg"
                  alt="bot9 logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-[1.66vw] md:h-[1.66vw]"
                />
                <span className="ml-2 md:ml-[0.55vw] text-xl md:text-[1.388vw] font-bold">bot9</span>
              </div>
              <p className="text-gray-600 text-sm md:text-[0.833vw] mb-4 md:mb-[1.11vw]">Product by <Link href="https://mydukaan.io" className="text-[#5755FF] hover:underline" target="_blank" rel="noopener noreferrer">Dukaan</Link></p>
              <p className="text-gray-600 mb-4 md:mb-[1.11vw] text-sm md:text-[0.833vw]">
                A code-free chatbot builder that makes it easy to build and train a customer service chatbot for your business.
              </p>
              <p className="text-gray-600 text-sm md:text-[0.833vw] mb-4 md:mb-[1.11vw]">
                Have Questions? Mail us at: <a href="mailto:helpme@bot9.ai" className="text-[#5755FF] underline">helpme@bot9.ai</a>
              </p>
              <Image
                src="/assets/findMe.svg"
                alt="Download on App Store and Google Play"
                width={264}
                height={244}
                className="w-64 md:w-[20vw] h-auto"
              />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-[0.833vw] mb-4 md:mb-[1.11vw]">Integrations</h3>
              <ul className="space-y-2 md:space-y-[0.55vw]">
                {[
                  "Crisp",
                  "Discord",
                  "Freshdesk",
                  "Intercom",
                  "Messenger",
                  "Shopify",
                  "Slack",
                  "Zendesk",
                  "WhatsApp",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-600 text-sm md:text-[0.972vw]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-[0.833vw] mb-4 md:mb-[1.11vw]">Resources</h3>
              <ul className="space-y-2 md:space-y-[0.55vw]">
                <li><Link href="mailto:helpme@bot9.ai" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF]">Contact us</Link></li>
                <li><Link href="https://bot9ai.apimatic.dev/v/1_0#/rest/introduction" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF]">API docs</Link></li>
                <li><Link href="https://bot9.helpcenter.bot/" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF]">Help center</Link></li>
                <li><Link href="https://bot9.nolt.io/" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF]">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-[0.833vw] mb-4 md:mb-[1.11vw]">Other</h3>
              <ul className="space-y-2 md:space-y-[0.55vw]">
                <li><Link href="/privacy-policy" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF]">Privacy policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF]">Terms & Conditions</Link></li>
              </ul>
              <h3 className="font-semibold text-base md:text-[0.833vw] mt-8 md:mt-[2.22vw] mb-4 md:mb-[1.11vw]">Social</h3>
              <ul className="space-x-2 md:space-x-[0.55vw] flex">
                <li>
                  <Link href="https://in.linkedin.com/company/dukaan" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF] flex items-center">
                    <Image src="/assets/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5 md:w-[1.38vw] md:h-[1.38vw] mr-2 md:mr-[0.55vw]" />
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/bot9_" className="text-gray-600 text-sm md:text-[0.972vw] hover:text-[#5755FF] flex items-center">
                    <Image src="/assets/twitter.svg" alt="X (formerly Twitter)" width={20} height={20} className="w-5 h-5 md:w-[1.38vw] md:h-[1.38vw] mr-2 md:mr-[0.55vw]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
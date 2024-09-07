import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

const IconWrapper = ({ children }) => (
    <div className="mr-2 md:mr-[0.55vw] p-1 md:p-[0.069vw] bg-[#F5F5FF] rounded-md md:rounded-[0.416vw] border border-[#D9D8FD] w-8 h-8 md:w-[1.66vw] md:h-[1.66vw] flex items-center justify-center">
        {children}
    </div>
);

const EcommerceSolution = () => {
    return (
        <section className="relative w-full md:w-[100vw] overflow-hidden bg-[#FFF7EE] py-8 md:py-[3.55vw]">
            <div className="absolute left-0 right-0 top-0 md:top-[3.55vw] h-[1px] bg-gray-200"></div>
            <div className="w-full md:w-[78.33vw] mx-auto relative px-4 md:px-0">
                {/* Top left plus sign - Only visible on desktop */}
                <div className="absolute -top-[0.833vw] -left-[0.833vw] w-[1.66vw] h-[1.66vw] hidden md:block">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[1.66vw] h-[0.138vw] bg-gray-400"></div>
                            <div className="h-[1.66vw] w-[0.138vw] bg-gray-400 absolute"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 md:p-[3.33vw] border border-gray-200">
                    <div className="flex items-center mb-6 md:mb-[2.22vw]">
                        <IconWrapper>
                            <Users className="w-5 h-5 md:w-[1.11vw] md:h-[1.11vw]" color="#5755FF" strokeWidth={2} />
                        </IconWrapper>
                        <span className="text-gray-900 text-xl md:text-[1.38vw] font-medium">Content Curator</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-[45%] mb-6 md:mb-0">
                            <h2 className="text-3xl md:text-[2.22vw] font-medium text-[#101928] mb-4 md:mb-[3.33vw] leading-tight md:leading-[3.05vw] md:w-[21.66vw]">
                                Collects and <br />summarizes relevant<br />content for <br />distribution
                            </h2>
                            <ul className="space-y-2 md:space-y-[1.11vw] text-[#667185] mb-6 md:mb-[3.33vw] text-base md:text-[1.38vw]">
                                <li>Collecting relevant articles</li>
                                <li>Summarizing content</li>
                                <li>Distributing newsletters</li>
                                <li>Managing content libraries</li>
                            </ul>

                        </div>
                        <div className="w-full md:w-[50%]">
                            <Image
                                src="/assets/content.svg"
                                alt="E-Commerce Illustration"
                                width={564}
                                height={527}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom horizontal line */}
            <div className="absolute left-0 right-0 bottom-14.9 h-[1px] bg-gray-200 hidden md:block"></div>
        </section>
    );
};

export default EcommerceSolution;
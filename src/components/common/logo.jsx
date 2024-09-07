import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg
        className="w-[26px] h-[26px] md:w-[2.22vw] md:h-[2.22vw]"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6 14.3985V14.3993H32V7.19932H24.7969V-0.00146484H17.5969V14.3985H17.6ZM14.4 17.5978H0V24.7978H7.20312L7.20312 32.0001H14.4031L14.4031 17.6001H14.4V17.5978ZM32 17.5978H24.8V24.7978H32V17.5978ZM24.7969 32.0001V24.8001L17.5969 24.8001V32.0001H24.7969Z"
          fill="#101928"
        />
      </svg>
      <span className="ml-[0.55vw] text-[20px] leading-[20px] md:text-[1.94vw] md:leading-[2.22vw] font-geist font-bold">
        bot9
      </span>
    </div>
  );
};

export default Logo;
